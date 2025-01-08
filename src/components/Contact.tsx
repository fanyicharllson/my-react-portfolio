import { CONTACT_DATA } from "@/constants";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section className="section" id="contact">
      <div className="flex flex-col md:flex-row gap-24 max-lg:gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="section-title">Let's Work Together!</h2>
          <p className="section-subtitle">
            I'm always open to new opportunities and collaborations. Whether you
            have a project in mind or just want to say hello, feel free to reach
            out.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4 flex max-sm:flex-col max-sm:gap-y-4 gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="contact-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="contact-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="contact-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="contact-label">
                Subject
              </label>
              <select name="subject" id="subject" className="contact-input">
                <option value="" className="contact-input">
                  Select Subject
                </option>
                <option value="Web Development" className="contact-input">
                  Web Development
                </option>
                <option value="Web Development" className="contact-input">
                  App Development
                </option>
                <option value="Web Development" className="contact-input">
                  Responsive Design
                </option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="contact-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-input h-32"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center gap-4">
          {CONTACT_DATA.map((item, index) => (
            <div className="flex items-center gap-4 flex-wrap" key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 flex-center px-2 py-1 rounded-xl dark:bg-gradient-to-b from-black  dark:to-purple-700
               file: text-white bg-purple-500"
              />
              <p className="text-slate-500 text-lg">{item.disc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
