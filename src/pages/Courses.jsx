import { motion } from "framer-motion";
import { FaAtom, FaFlask, FaRocket, FaCalculator } from "react-icons/fa";

function Courses() {

  const courseList = [
    {
      title: "11th Science",
      desc: "Strong foundation in Physics, Chemistry & Mathematics with concept clarity.",
      icon: <FaAtom size={32} />
    },
    {
      title: "12th Science",
      desc: "Board exam focused preparation with regular tests and revision programs.",
      icon: <FaFlask size={32} />
    },
    {
      title: "MHT-CET Preparation",
      desc: "Special crash course and practice sessions for top CET ranks.",
      icon: <FaCalculator size={32} />
    },
    {
      title: "JEE Main",
      desc: "Advanced problem solving and exam strategy for competitive success.",
      icon: <FaRocket size={32} />
    }
  ];

  /* Parent container animation */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  /* Card animation */
  const card = {
    hidden: {
      opacity: 0,
      y: 40
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="courses" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Courses
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to help students excel in
            board exams and competitive entrance tests.
          </p>

        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.35, once: false }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >

          {courseList.map((course, index) => (

            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 group"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
                {course.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {course.desc}
              </p>

              {/* Button */}
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                Learn More →
              </button>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Courses;