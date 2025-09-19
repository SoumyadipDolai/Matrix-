from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class MatrixRequest(BaseModel):
    matrix: list[list[float]]

@app.post("/properties")
def matrix_properties(data: MatrixRequest):
    mat = np.array(data.matrix)

    response = {
        "shape": mat.shape,
        "transpose": mat.T.tolist(),
        "determinant": None,
        "inverse": None,
        "rank": int(np.linalg.matrix_rank(mat)),
    }

    if mat.shape[0] == mat.shape[1]:
        try:
            response["determinant"] = float(np.linalg.det(mat))
            response["inverse"] = np.linalg.inv(mat).tolist()
            response["eigenvalues"] = np.linalg.eigvals(mat).tolist()
        except np.linalg.LinAlgError:
            response["inverse"] = "Not invertible"
            response["eigenvalues"] = "N/A"
    else:
        response["determinant"] = "Not square"
        response["inverse"] = "Not square"
        response["eigenvalues"] = "Not square"

    return response
