// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            EventStaff
          </Link>
          <div className="space-x-4">
            <Link to="/staff" className="text-gray-700 hover:text-blue-600">
              Staff
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600">
              Events
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6">{children}</main>
    </div>
  );
}

