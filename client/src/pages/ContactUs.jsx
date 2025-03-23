import React, { useState } from "react";
import axios from "axios";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setThoughts] = useState("");

  const handleSend = () => {
    const formData = {
      name,
      contactNumber,
      description,
    };
    axios
      .post("https://portfolio-backend-nine-zeta.vercel.app/users", formData)
      .then((res) => {
        if (res.status === 201) {
          alert("send successfully");
        }
      })
      .catch((err) => {
        alert("Error : ", err);
      });
    setName("");
    setContactNumber("");
    setThoughts("");
  };

  const handleCancel = () => {
    setName("");
    setContactNumber("");
    setThoughts("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-end justify-center">
      <div className="bg-[#181818] text-white p-10 rounded-t-xl w-full max-w-lg mx-auto mb-8">
        <h2 className="text-4xl font-semibold text-center mb-8">Contact Us</h2>
        <form className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
            />
          </div>

          {/* Contact Number Input */}
          <div className="space-y-2">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-300"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter your contact number"
              className="w-full p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
            />
          </div>

          {/* Thoughts/Needs Textarea */}
          <div className="space-y-2">
            <label
              htmlFor="thoughts"
              className="block text-sm font-medium text-gray-300"
            >
              Share your thoughts/needs
            </label>
            <textarea
              id="thoughts"
              value={description}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="Share your thoughts or needs here"
              className="w-full p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
              rows="4"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={handleSend}
              className="w-full md:w-auto px-6 py-3 bg-white text-[#181818] font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
            >
              Send
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full md:w-auto px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
