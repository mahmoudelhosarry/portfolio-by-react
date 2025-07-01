"use client";

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      setSubmitted(true);
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 w-4/5 mx-auto flex flex-col items-center md:justify-start md:items-start"
    >
      {/* ... نفس الجزء العلوي من التصميم */}

      <div className="flex flex-col my-4 w-full md:w-96">
        <div className="flex flex-col items-center my-4 md:flex-row">
          <label htmlFor="email" className="p-style mb-4">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f680] placeholder-gray-400"
            placeholder="Email Address"
          />
        </div>

        <div className="flex flex-col items-center md:flex-row my-4">
          <label htmlFor="message" className="p-style mb-4">
            Your message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full h-44 bg-gray-800 text-white border border-gray-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f680] placeholder-gray-400"
            placeholder="message"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="submit capitalize text-secondary text-xl py-4 bg-[#24252e] w-3/4 md:w-44 transition duration-300 font-medium rounded-2xl hover:font-black border-2 border-backgroundColor hover:border-yellow-700 hover:tracking-wide active:scale-95 mt-5"
      >
        Submit
      </button>

      <p className={`${submitted ? "block" : "hidden"} p-style mt-6`}>
        Thanks!
      </p>
    </form>
  );
};

export default Contact;
