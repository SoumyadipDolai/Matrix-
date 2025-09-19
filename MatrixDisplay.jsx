export default function MatrixDisplay({ result }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Results:</h2>
      <pre className="bg-gray-200 p-4 rounded text-black">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}
