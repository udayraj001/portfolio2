import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex flex-col-reverse md:flex-row md:items-end items-center justify-center md:justify-between px-4 md:px-10">
        
        {/* Background Gradient with Rotated Text */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full w-full md:w-4/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="hidden md:block rotate-90 whitespace-nowrap absolute top-[35%] right-[-25%] text-[#EAF2FA] text-2xl md:text-5xl font-bold">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* Left Column - Text Content */}
        <div
          className="pt-5 pb-6 md:pb-32 text-center w-full md:w-[720px] md:text-right"
          data-aos="fade-down"
        >
          <h2 className=" text-3xl md:text-6xl font-bold">{hero.title}</h2>
          <br />
          <button className="btn">{hero.btnText}</button>

          <div className="flex flex-col gap-6 mt-10 ">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-end gap-5 w-full max-w-[22rem]
                ${i === 1 ? "flex-row-reverse text-right" : "text-right"} md:ml-56`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-dark_primary md:ml-7 ">{item.count}</h3>
                <p className="text-sm md:text-base ">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-[70%] h-80 md:h-[37rem] flex justify-center items-center">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Hero"
            className="hidden md:block h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
