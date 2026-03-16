import { motion } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaTrophy } from "react-icons/fa";

function About() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="pt-24">

      {/* HERO ABOUT */}

      <section id="about" className="py-20 px-4 bg-gray-50">

        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.15, once: false }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About Ideal Coaching Classes
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.15, once: false }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            At <span className="font-semibold text-blue-600">Ideal Coaching Classes</span>,
            we believe that every student has the potential to achieve excellence.
            Our goal is to provide structured learning, expert mentorship,
            and continuous evaluation so students can perform their best in
            <strong> 11th, 12th Board Exams, MHT-CET, and JEE</strong>.
          </motion.p>

        </div>

      </section>


      {/* STATS SECTION */}

      <section className="py-16 bg-white">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.15, once: false }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >

          <motion.div variants={scaleUp} className="p-6">

            <FaUserGraduate className="text-4xl text-blue-600 mx-auto mb-3" />

            <h3 className="text-3xl font-bold">500+</h3>

            <p className="text-gray-600">Students Trained</p>

          </motion.div>


          <motion.div variants={scaleUp} className="p-6">

            <FaChalkboardTeacher className="text-4xl text-blue-600 mx-auto mb-3" />

            <h3 className="text-3xl font-bold">10+ Years</h3>

            <p className="text-gray-600">Teaching Experience</p>

          </motion.div>


          <motion.div variants={scaleUp} className="p-6">

            <FaTrophy className="text-4xl text-blue-600 mx-auto mb-3" />

            <h3 className="text-3xl font-bold">Top Rankers</h3>

            <p className="text-gray-600">CET & JEE Results</p>

          </motion.div>

        </motion.div>

      </section>


      {/* MISSION & VISION */}

      <section className="bg-gray-100 py-20 px-4">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.15, once: false }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide high-quality education that focuses on
              conceptual clarity, analytical thinking, and problem-solving
              abilities. Through structured courses and regular assessment,
              we help students confidently prepare for competitive exams.
            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.15, once: false }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our vision is to become a trusted educational institute known
              for academic excellence, personalized mentoring, and consistent
              results. We aim to shape students into confident learners ready
              for the challenges of competitive exams and higher education.
            </p>

          </motion.div>

        </div>

      </section>


      {/* FACULTY */}

      <section className="py-20 px-4 bg-white">

        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.15, once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Meet Our Expert Faculty
          </motion.h2>


          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.15, once: false }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
          >

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md text-center"
            >

              <img
                src="/team3.jpg"
                alt="Faculty"
                className="w-32 h-32 mx-auto rounded-full mb-5 object-cover"
              />

              <h3 className="text-xl font-semibold">
                Prof. Nikhil Kulkarni
              </h3>

              <p className="text-gray-500 mt-1">
                Physics Expert (10+ Years Experience)
              </p>

            </motion.div>


            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md text-center"
            >

              <img
                src="/team4.jpg"
                alt="Faculty"
                className="w-32 h-32 mx-auto rounded-full mb-5 object-cover"
              />

              <h3 className="text-xl font-semibold">
                Prof. Nilesh Sawant
              </h3>

              <p className="text-gray-500 mt-1">
                Chemistry Specialist
              </p>

            </motion.div>


            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md text-center"
            >

              <img
                src="/vp.jpg"
                alt="Faculty"
                className="w-32 h-32 mx-auto rounded-full mb-5 object-cover"
              />

              <h3 className="text-xl font-semibold">
                Prof. Vineet Pinagle
              </h3>

              <p className="text-gray-500 mt-1">
                Mathematics Expert
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default About;