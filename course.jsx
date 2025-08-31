import React from 'react';

function Courses() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4 text-orange-500">Courses</h2>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">Data Structures & Algorithms</h3>
          <p>Master DSA for coding interviews and problem solving.</p>
        </li>
        <li className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">Web Development</h3>
          <p>Learn to build modern web applications using HTML, CSS, JS, React, and more.</p>
        </li>
      </ul>
    </div>
  );
}

export default Courses;