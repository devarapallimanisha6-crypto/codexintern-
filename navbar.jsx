import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Coding Ninjas</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/courses" className="text-white hover:underline">Courses</Link>
          <Link to="/about" className="text-white hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;