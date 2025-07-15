"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ lname: "", fname: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) setStatus("success");
    else setStatus("error");
  };

  return (
    <section id="contact" className="w-full bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-display uppercase text-gray-700 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="lname"
            placeholder="Your Last Name"
            required
            value={form.lname}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded"
          />
          <input
            type="text"
            name="fname"
            placeholder="Your First Name"
            required
            value={form.fname}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number (optional)"
            className="w-full px-4 py-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded"
          ></textarea>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary text-black font-semibold px-6 py-3 border rounded hover:brightness-110 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-600 mt-2">Message sent! ✅</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">Something went wrong. ❌</p>
          )}
        </form>
      </div>
    </section>
  );
}