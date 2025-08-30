import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Translator from "./pages/Translator";
import RandomStringGenerator from "./pages/RandomStringGenerator";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4 flex gap-4">
          <Link to="/" className="hover:underline">Translator</Link>
          <Link to="/random" className="hover:underline">Random String Generator</Link>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Translator />} />
            <Route path="/random" element={<RandomStringGenerator />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;