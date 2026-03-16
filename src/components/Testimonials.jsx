function Testimonials() {
  const testimonials = [
    {
      message:
        "Ideal Coaching Classes helped me build a strong conceptual foundation in Physics and Mathematics. The structured teaching approach and regular tests greatly improved my confidence for JEE preparation.",
      name: "Rahul Patil – JEE Main Student",
    },
    {
      message:
        "The teachers explain every topic in a very clear and simple way. The doubt solving sessions helped me achieve excellent marks in my CET exam.",
      name: "Sneha Kulkarni – CET Student",
    },
    {
      message:
        "The study material provided by Ideal Coaching is extremely helpful and well structured for both board exams and competitive exams.",
      name: "Amit Deshpande – 12th Science",
    },
    {
      message:
        "Small batch sizes allow teachers to focus on every student individually. This personal attention helped me improve my weak areas.",
      name: "Priya Joshi – JEE Aspirant",
    },
    {
      message:
        "Weekly tests and performance analysis helped me track my preparation effectively and stay motivated.",
      name: "Kunal Sharma – CET Rank Holder",
    },
    {
      message:
        "The teachers are very supportive and motivating. The learning environment is disciplined and focused.",
      name: "Neha Patil – 11th Science Student",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What Our Students Say
        </h2>

        <div className="slider">

          <div className="slide-track">

            {/* FIRST SET */}
            {testimonials.map((item, index) => (
              <div className="slide-card" key={index}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  “{item.message}”
                </p>

                <p className="mt-6 text-sm text-gray-500 font-medium">
                  {item.name}
                </p>
              </div>
            ))}

            {/* DUPLICATE SET */}
            {testimonials.map((item, index) => (
              <div className="slide-card" key={"dup-" + index}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  “{item.message}”
                </p>

                <p className="mt-6 text-sm text-gray-500 font-medium">
                  {item.name}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;