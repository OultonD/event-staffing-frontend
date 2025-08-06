import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <header className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Event Staffing Portal</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Dashboard
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-semibold mb-4">Manage Events & Staff Seamlessly</h2>
        <p className="text-lg mb-8 max-w-xl">
          Our platform helps you track staff assignments, coordinate flight logistics, and manage staffing
          for multiple events in one place.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/events")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            View Events
          </button>
          <button
            onClick={() => navigate("/staff")}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Staff Directory
          </button>
        </div>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

