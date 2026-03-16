import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact() {

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_id",
      "template_id",
      form.current,
      "public_key"
    )
    .then(() => {
      setSuccess(true);
      setLoading(false);
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
      setLoading(false);
    });
  };

  return (

    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-10"
      >

        {/* Title */}

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Contact Us
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Send us a message and we will get back to you.
        </p>

        {/* Form */}

        <form ref={form} onSubmit={sendEmail} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center text-sm">
              ✅ Message sent successfully!
            </p>
          )}

        </form>

      </motion.div>

    </section>
  );
}

export default Contact;