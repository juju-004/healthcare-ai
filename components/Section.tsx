import Link from "next/link";
import React, { ReactNode } from "react";

type SectionProps = {
  header: string;
  text: ReactNode;
  link?: string;
};

const Section = ({ header, text, link }: SectionProps) => {
  return (
    <section className="mt-20 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center flex-col flex justify-center items-center">
        <h1 className="text-indigo-700 max-w-2xl mb-5 font-bold text-3xl xl:text-4xl">
          {header}
        </h1>
        <div className="text-gray-600 leading-relaxed lg:text-xl sm:mx-auto lg:ml-0">
          {text}
        </div>
        {link && (
          <div className="pt-8 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              href={link}
              className="px-7 py-3 w-full text-center sm:w-auto text-indigo-600 font-medium rounded-md inline-flex items-center hover:bg-indigo-100 duration-300"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
