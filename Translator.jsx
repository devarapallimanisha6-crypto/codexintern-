import React, { useState } from "react";
import axios from "axios";

const languages = [
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "hi", name: "Hindi" },
  { code: "te", name: "Telugu" },
];

export default function Translator() {
  const [input, setInput] = useState("");
  const [target, setTarget] = useState("es");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const translate = async () => {
    setLoading(true);
    setOutput("");
    try {
      const response = await axios({
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "c5b200ac00msh959b319b3117c4cp1f50d7jsnef9cf6b2fa5e",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        data: new URLSearchParams({
          q: input,
          target: target,
          source: "en",
        }),
      });
      setOutput(response.data.data.translations[0].translatedText);
    } catch (e) {
      setOutput("Error translating.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
      <h2 className="text-2xl mb-4 font-bold">Text Translator</h2>
      <textarea
        className="border p-2 w-full mb-4"
        rows={4}
        placeholder="Enter text in English..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="mb-4">
        <label className="mr-2">Translate to: </label>
        <select
          className="border p-2"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={translate}
        disabled={loading || !input.trim()}
      >
        {loading ? "Translating..." : "Translate"}
      </button>
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Output:</label>
        <div className="border p-2 min-h-[40px] bg-gray-50">{output}</div>
      </div>
    </div>
  );
}