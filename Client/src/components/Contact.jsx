import React, { useState } from "react";
import Showcase from "./Showcase";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("Message sent successfully!");
    setFormData({ fullName: "", contactNo: "", email: "", message: "" });

    setTimeout(() => {
      setSuccessMsg("");
      setShowModal(false);
    }, 2000);
  };

  return (
    <div
      id="Let's Talk"
      className="w-full pt-20 flex flex-col items-center my-12 px-4 sm:px-10"
    >
      <div className="flex text-sm h-10 gap-5">
        <Showcase text={"Contact Me"} color={"bg-slate-900"} />
      </div>

      <div className="min-w-full max-w-md p-5 text-center flex flex-col items-center gap-5">
        <h1 className="lg:text-3xl font-bold">
          Have a vision? Let's make it happen!
        </h1>
        <p className="text-center font-medium text-sm max-w-full px-4">
          I love teaming up on fresh, creative projects - whether you're just
          getting started or looking to improve something you already have.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-slate-700 p-3 rounded-xl text-white px-10 cursor-pointer hover:bg-slate-600"
        >
          Invite
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white bg-opacity-90 rounded-xl p-6 max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>

            {successMsg ? (
              <p className="text-green-600 font-semibold text-center">
                {successMsg}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
                />
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Contact no"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  required
                  className="border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-slate-700"
                ></textarea>
                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-slate-700 text-white px-6 py-2 rounded hover:bg-slate-600 transition"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
