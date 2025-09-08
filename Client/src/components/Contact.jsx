import React, { useState, useEffect } from "react";
import Showcase from "./Showcase";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("Message sent successfully!");
    setFormData({ fullName: "", contactNo: "", email: "", message: "" });
    setTimeout(() => {
      setSuccessMsg("");
      setAnimate(false);
      setTimeout(() => setShowModal(false), 300);
    }, 2000);
  };

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <section
      id="Contact"
      className="w-full py-20 px-4 sm:px-10 md:px-20 flex flex-col items-center gap-12"
    >
      <div className="flex gap-4 h-10">
        <Showcase text="Contact Me" color="bg-emerald-600" />
      </div>

      <div className="text-center max-w-xl flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Have a vision? Let's make it happen!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          I love collaborating on creative projects — whether you're starting fresh or improving an existing idea.
        </p>
        <button
          onClick={openModal}
          className="mt-4 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-shadow shadow-md"
        >
          Invite
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => { setAnimate(false); setTimeout(() => setShowModal(false), 300); }}
          ></div>

          <div
            className={`relative w-full max-w-md p-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-xl transform transition-all duration-300 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Send a Message
            </h3>

            {successMsg ? (
              <p className="text-green-600 font-semibold text-center text-lg">
                {successMsg}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="bg-white/30 border border-white/30 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Contact No"
                  required
                  className="bg-white/30 border border-white/30 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="bg-white/30 border border-white/30 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  required
                  className="bg-white/30 border border-white/30 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                ></textarea>

                <div className="flex justify-between gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition font-semibold"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => { setAnimate(false); setTimeout(() => setShowModal(false), 300); }}
                    className="flex-1 border border-white/30 text-gray-900 px-6 py-3 rounded-xl hover:bg-white/20 transition font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
