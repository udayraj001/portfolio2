import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        {/* Section Title */}
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        <div className="flex items-center lg:flex-row flex-col gap-10">
          {/* ✅ Replacement of person image */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center items-start bg-white p-8 rounded-3xl shadow-lg border border-gray-200 w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              About My Projects
            </h3>
            <p className="text-gray-600 mb-6">
              Each project is built with clean code, modern technologies, and a
              focus on solving real-world problems. Here’s what makes them
              special:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-xl">📂</span> Real-world & industry-based
                projects
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">💻</span> Built with React, Tailwind &
                modern APIs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">⚡</span> Optimized for performance &
                usability
              </li>
            </ul>
          </div>

          {/* ✅ Projects Swiper (Bigger Cards) */}
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={30}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-md md:max-w-lg lg:max-w-xl drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-md h-fit"
              >
                {/* Project Image */}
                <img
                  src={content.image}
                  alt={content.title}
                  className="rounded-xl w-full object-cover"
                />

                {/* Project Content */}
                <div className="flex flex-col gap-2 mt-4">
                  <h5 className="font-bold font-Poppins text-lg md:text-xl text-gray-800">
                    {content.title}
                  </h5>

                  {/* Buttons */}
                  <div className="flex justify-start gap-4 mt-3">
                    <a
                      href={content.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                    >
                      LIVE DEMO
                    </a>
                    <a
                      href={content.read_more_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
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
    </section>
  );
};

export default Projects;
