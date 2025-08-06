import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Event Staffing Manager
        </h1>
        <p className="text-gray-600 mb-6">
          Streamline your event staffing needs. Easily manage staff profiles and events.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/staff"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Manage Staff
          </Link>
          <Link
            to="/events"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            View Events
          </Link>
        </div>
      </div>
    </div>
  );
}

