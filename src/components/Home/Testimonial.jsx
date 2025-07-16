import testimonialImg from "/assets/testimonial.png";
export const Testimonial = () => {
  return (
    <section className="py-16 text-center max-w-5xl mx-auto px-4">
      <p className="text-sm text-orange-500 font-semibold mb-2">Testimonial</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:max-w-lg mx-auto">
        Empowering Over 150,000 Business To Thrive In The Digital Age
      </h2>
      <p className="text-gray-600 max-w-xl mb-10 lg:max-w-sm mx-auto">
        Empower your business with our advanced POS solutions, designed to
        streamline operations and drive growth in today’s digital landscape.
      </p>

      <div className="flex justify-center">
        <div className="max-w-4xl">
          <img
            src={testimonialImg}
            alt="Testimonial collage"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};
