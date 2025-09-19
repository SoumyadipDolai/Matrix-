import { useState } from "react";
import MatrixInput from "../components/MatrixInput";
import MatrixDisplay from "../components/MatrixDisplay";

export default function Home() {
  const [matrix, setMatrix] = useState([[1, 2], [3, 4]]);
  const [result, setResult] = useState(null);

  const fetchProperties = async () => {
    const res = await fetch("http://localhost:8000/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ matrix }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Matrix Problem Solver</h1>
      <MatrixInput matrix={matrix} setMatrix={setMatrix} />
      <button onClick={fetchProperties} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Compute</button>
      {result && <MatrixDisplay result={result} />}
    </div>
  );
}
