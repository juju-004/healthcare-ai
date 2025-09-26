import Image from "next/image";
import Link from "next/link";
import HeroIcon from "../public/assets/icons/undraw_medicine_b-1-ol.svg";

const HeroSection = () => {
  return (
    <section className="mt-16 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-indigo-700 font-bold text-4xl xl:text-5xl">
          Benefits and challenges of expert system in pneumonia diagnosis
        </h1>
        <div className="pt-8 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <Link
            href="/ai-chat"
            className="px-7 py-3 w-full bg-indigo-700 text-white text-center rounded-lg shadow-md block sm:w-auto hover:bg-indigo-800 duration-300"
          >
            Use our healthcare ai
          </Link>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <Image src={HeroIcon} alt="Doctor" priority={true} />
      </div>
    </section>
  );
};

export default HeroSection;
