import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Briefcase, Code, Star } from "lucide-react"; // professional icons

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
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
          {/* 🔥 Professional replacement instead of person image */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center items-start bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-3xl shadow-lg w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">Why My Projects?</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <Briefcase className="w-6 h-6" /> Real-world & industry-based
                projects
              </li>
              <li className="flex items-center gap-3">
                <Code className="w-6 h-6" /> Built with modern web technologies
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-6 h-6" /> Clean, scalable, and reusable code
              </li>
            </ul>
          </div>

          {/* 🔥 Bigger Cards Section */}
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
                className="bg-white rounded-3xl p-6 md:p-8 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img
                  src={content.image}
                  alt={content.title}
                  className="rounded-xl w-full object-cover"
                />
                <div className="flex flex-col gap-2 mt-4">
                  <h5 className="font-bold font-Poppins text-lg md:text-xl">
                    {content.title}
                  </h5>
                  <div className="flex justify-end gap-4 mt-3">
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
