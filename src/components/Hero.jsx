import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Build Your Future with
          <br />

          <span className="text-yellow-400">
            Ideal Coaching Classes
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          Expert guidance for <strong>11th, 12th, CET & JEE</strong> aspirants.
          Achieve top ranks with experienced faculty, structured learning,
          and result-oriented preparation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Enroll */}
          <a
            href="#contact"
            className=" animate-pulse hover:scale-105 transition bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 hover:shadow-xl duration-300"
          >
            Enroll Now
          </a>

          {/* Courses */}
          <a
            href="#courses"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            View Courses
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;