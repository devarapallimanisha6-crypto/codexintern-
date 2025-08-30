import React, { useState, useCallback, useEffect } from "react";

function generateRandomString(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function RandomStringGenerator() {
  const [length, setLength] = useState(8);
  const [string, setString] = useState("");
  const [history, setHistory] = useState([]);

  const generate = useCallback(() => {
    const s = generateRandomString(length);
    setString(s);
    setHistory((prev) => [s, ...prev]);
  }, [length]);

  useEffect(() => {
    generate();
    // Only on mount
    // eslint-disable-next-line
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
      <h2 className="text-2xl mb-4 font-bold">Random String Generator</h2>
      <div className="mb-4">
        <label className="mr-2">Length:</label>
        <input
          type="number"
          value={length}
          min={1}
          max={32}
          onChange={(e) => setLength(Number(e.target.value))}
          className="border p-1 w-16"
        />
        <button
          className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={generate}
        >
          Generate
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Current String:</label>
        <div className="border p-2 min-h-[40px] bg-gray-50 font-mono break-all">{string}</div>
      </div>
      <div>
        <label className="block mb-1 font-semibold">History:</label>
        <ul className="list-disc ml-6">
          {history.slice(0, 5).map((item, idx) => (
            <li key={idx} className="font-mono">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}