import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="md:container px-5 pt-16 mb-11 md:pt-32 md:mb-32">
        {/* Title */}
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />

        {/* Swiper */}
        <Swiper
          direction="horizontal"
          pagination={{ clickable: true }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={30}
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          modules={[Pagination]}
          className="max-w-3xl w-full"
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1280: { slidesPerView: 1 },
          }}
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className="duration-500 bg-bg_light_primary mx-4 border-2 
                p-8 h-full rounded-2xl flex items-center gap-6
                border-slate-200 md:flex-row flex-col"
              >
                {/* <img src={content.img} alt="testimonial" className="h-24 w-24 object-cover rounded-full" /> */}

                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6 className="font-semibold">{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
