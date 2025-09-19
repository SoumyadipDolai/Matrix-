export default function MatrixInput({ matrix, setMatrix }) {
  const handleChange = (row, col, value) => {
    const updated = [...matrix];
    updated[row][col] = parseFloat(value) || 0;
    setMatrix(updated);
  };

  return (
    <div>
      {matrix.map((row, i) => (
        <div key={i} className="flex">
          {row.map((val, j) => (
            <input
              key={j}
              type="number"
              value={val}
              onChange={(e) => handleChange(i, j, e.target.value)}
              className="w-16 p-2 border m-1 text-center"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
