import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="h-[450px] md:h-[600px] w-full bg-cover bg-no-repeat bg-center py-14"
      style={{ backgroundImage: "url('/bg_hero.svg')" }}
    >
      <div className="flex px-6 md:px-0 w-full lg:justify-around mx-auto container h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-6 h-[2px] bg-red-500 mr-2"></div>New Trend
          </div>
          <h1 className="uppercase text-[45px] md:text-[70px] leading-[1.1]">
            autumn sales stylish <br />{" "}
            <span className="font-semibold">women</span>
          </h1>
          <Link
            to={"/"}
            className="font-semibold border-b self-start uppercase pt-4 md:pt-2"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block mr-20">
          <img src="/woman_hero.png" alt="woman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
