import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUserFriends,
  FaClipboardCheck,
  FaUserGraduate,
  FaTrophy,
  FaBook
} from "react-icons/fa";

function WhyUs() {

  const features = [
    {
      title: "Experienced Faculty",
      desc: "Learn from highly qualified teachers with years of teaching experience.",
      icon: <FaChalkboardTeacher size={28} />
    },
    {
      title: "Small Batch Size",
      desc: "Limited students per batch to ensure personal attention and better learning.",
      icon: <FaUserFriends size={28} />
    },
    {
      title: "Regular Tests",
      desc: "Frequent tests and performance analysis to track improvement.",
      icon: <FaClipboardCheck size={28} />
    },
    {
      title: "Personal Mentorship",
      desc: "Individual guidance and mentorship for every student.",
      icon: <FaUserGraduate size={28} />
    },
    {
      title: "Proven Results",
      desc: "Our students consistently achieve top ranks in exams.",
      icon: <FaTrophy size={28} />
    },
    {
      title: "Study Material",
      desc: "Well-structured notes and practice material provided.",
      icon: <FaBook size={28} />
    }
  ];

  /* Stagger animation for grid */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  /* Individual card animation */
  const card = {
    hidden: {
      opacity: 0,
      y: 35
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

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Ideal Coaching?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a focused learning environment designed to help
            students achieve academic excellence and competitive success.
          </p>

        </motion.div>

        {/* Features Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.15, once: false }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >

          {features.map((item, index) => (

            <motion.div
              key={index}
              variants={card}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition group"
            >

              {/* Icon */}

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default WhyUs;