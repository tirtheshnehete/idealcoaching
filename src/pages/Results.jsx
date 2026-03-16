function Results() {

  const results = [
    {
      name: "Rahul Sharma",
      exam: "JEE Main 2024",
      score: "98.7 Percentile",
      subject: "Physics • Chemistry • Mathematics"
    },
    {
      name: "Priya Patil",
      exam: "MHT CET 2024",
      score: "99.1 Percentile",
      subject: "PCM Stream"
    },
    {
      name: "Amit Joshi",
      exam: "JEE Main 2024",
      score: "97.5 Percentile",
      subject: "PCM Stream"
    },
    {
      name: "Sneha Kulkarni",
      exam: "MHT CET 2024",
      score: "98.3 Percentile",
      subject: "PCM Stream"
    },
    {
      name: "Kunal Deshmukh",
      exam: "JEE Main 2024",
      score: "96.9 Percentile",
      subject: "Physics • Chemistry • Mathematics"
    },
    {
      name: "Neha Patil",
      exam: "MHT CET 2024",
      score: "97.8 Percentile",
      subject: "PCM Stream"
    }
  ];

  return (

    <section id="results" className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}

        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold mb-2">
            Our Achievements
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Outstanding Student Results
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Our students consistently achieve excellent ranks in competitive
            exams like JEE Main and MHT CET through disciplined preparation
            and expert guidance.
          </p>

        </div>

        {/* Results Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {results.map((student, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >

              {/* Rank Highlight */}

              <div className="text-blue-600 font-bold text-xl mb-3">
                {student.score}
              </div>

              {/* Student Name */}

              <h3 className="text-lg font-semibold">
                {student.name}
              </h3>

              {/* Exam */}

              <p className="text-gray-600 mt-1">
                {student.exam}
              </p>

              {/* Subjects */}

              <p className="text-gray-400 text-sm mt-3">
                {student.subject}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Results;