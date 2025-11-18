import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="bg-bg_light_primary w-full" id="projects">
      <div className="container mx-auto px-4 md:px-5 pt-14 min-h-screen flex flex-col gap-10">

        {/* Section Title */}
        <div className="text-center">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>

        {/* MAIN RESPONSIVE WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full">

          {/* LEFT CARD CONTENT */}
          <div
            data-aos="fade-right"
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 
                       w-full lg:w-1/2 flex flex-col items-start"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              About My Projects
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Each project is built with clean code, modern technologies, and a
              focus on solving real-world problems.
            </p>

            <ul className="space-y-4 text-gray-700 w-full">
              <li className="flex items-center gap-3">
                <span className="text-xl">📂</span>
                Real-world & industry-based projects
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">💻</span>
                Built with React, Tailwind & modern APIs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">⚡</span>
                Optimized for performance & usability
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE — RESPONSIVE SWIPER */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              className="w-full pb-12"
              breakpoints={{
                0: { slidesPerView: 1 },       // Mobile
                480: { slidesPerView: 1 },     // Small Mobiles
                640: { slidesPerView: 1 },     // Tablets
                1024: { slidesPerView: 1.2 },  // Desktop slight preview
                1440: { slidesPerView: 1.3 },  // Large screens
              }}
            >
              {Projects.project_content.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl w-full object-cover"
                  />

                  {/* TEXT */}
                  <div className="flex flex-col gap-2 mt-4">
                    <h5 className="font-bold text-lg md:text-xl text-gray-800">
                      {item.title}
                    </h5>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-3">
                      <a
                        href={item.demo_link}
                        target="_blank"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold 
                                   rounded-lg hover:bg-blue-600 transition"
                      >
                        LIVE DEMO
                      </a>
                      <a
                        href={item.read_more_link}
                        target="_blank"
                        className="px-4 py-2 bg-gray-700 text-white font-semibold 
                                   rounded-lg hover:bg-gray-800 transition"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
