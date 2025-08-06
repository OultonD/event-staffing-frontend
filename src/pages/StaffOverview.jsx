import React, { useEffect, useState } from "react";

export default function StaffOverview() {
  const [staff, setStaff] = useState([]);
  const [events, setEvents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "", eventId: "" });
  const [loading, setLoading] = useState(false);

  // Fetch staff and events on mount
  useEffect(() => {
    fetchStaff();
    fetchEvents();
  }, []);

  const fetchStaff = async () => {
    const res = await fetch("https://event-staffing-backend.onrender.com/api/staff");
    const data = await res.json();
    setStaff(data);
  };

  const fetchEvents = async () => {
    const res = await fetch("https://event-staffing-backend.onrender.com/api/events");
    const data = await res.json();
    setEvents(data);
  };

  const handleEdit = (staff) => {
    setEditId(staff.id);
    setForm({
      name: staff.name,
      email: staff.email,
      role: staff.role,
      eventId: staff.eventId || "",
    });
  };

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/staff/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to update staff");
      await fetchStaff();
      setEditId(null);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Staff Overview</h2>
      <div className="space-y-6">
        {staff.map((s) =>
          editId === s.id ? (
            <div key={s.id} className="bg-white p-4 rounded shadow space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border p-2 w-full"
                placeholder="Name"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border p-2 w-full"
                placeholder="Email"
              />
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                className="border p-2 w-full"
                placeholder="Role"
              />
              <select
                name="eventId"
                value={form.eventId}
                onChange={handleChange}
                className="border p-2 w-full"
              >
                <option value="">Assign to event</option>
                {events.map(e => (
                  <option key={e.id} value={e.id}>{e.name}</option>
                ))}
              </select>
              <div className="flex space-x-2">
                <button
                  onClick={handleUpdate}
                  disabled={loading}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div key={s.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">{s.name}</p>
                <p>{s.email}</p>
                <p className="text-sm text-gray-500">{s.role}</p>
                {s.event?.name && <p className="text-sm text-blue-600">Event: {s.event.name}</p>}
              </div>
              <button
                onClick={() => handleEdit(s)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

