import React, { useState } from "react";

const StaffPage = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Staff created successfully!");
        setFormData({ name: "", email: "", role: "" });
        setFormVisible(false);
      } else {
        alert("Error creating staff.");
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Staff Directory</h2>
      <button
        onClick={() => setFormVisible(!formVisible)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {formVisible ? "Cancel" : "Add New Staff"}
      </button>

      {formVisible && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role (e.g., Coordinator)"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default StaffPage;

