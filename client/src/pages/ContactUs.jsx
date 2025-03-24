import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Added state for submission status

  const handleSend = async () => {
    // Validate form inputs before making the request
    if (!name || !contactNumber || !description) {
      alert("Please fill in all the fields.");
      return;
    }

    const formData = {
      name,
      contactNumber,
      description,
    };
    try {
      const backendURI = "https://portfolio-server-seven-teal.vercel.app";

      setIsSubmitting(true);
      const response = await axios.post(`${backendURI}`, formData);

      if (response.status === 201) {
        alert("Form sent successfully!");
        handleCancel(); // Reset the form after success
      }
    } catch (err) {
      console.error("Error sending form:", err);

      // Display specific error if available
      if (err.response && err.response.data) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert("Error sending form. Please try again later.");
      }
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  const handleCancel = () => {
    setName("");
    setContactNumber("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-end justify-center">
      <div className="bg-[#181818] text-white p-10 rounded-t-xl w-full max-w-lg mx-auto mb-8">
        <h2 className="text-4xl font-semibold text-center mb-8">Contact Us</h2>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form behavior
            handleSend(); // Trigger form submission logic
          }}
        >
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
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-300"
            >
              Contact Number
            </label>
            <input
              type="tel" // Use "tel" for better validation of phone numbers
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter your contact number"
              className="w-full p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Share your thoughts/needs
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Share your thoughts or needs here"
              className="w-full p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="submit" // Changed to "submit" to use form submission
              className="w-full md:w-auto px-6 py-3 bg-white text-[#181818] font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full md:w-auto px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
              disabled={isSubmitting} // Disable button while submitting
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
