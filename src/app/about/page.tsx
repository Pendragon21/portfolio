import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <section className="py-10 px-4 md:px-0 bg-gray-400 h-screen flex justify-center items-center">
        <div className="container mx-auto mb-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">About me:</h1>
            <h2 className="text-lg md:text-xl mt-2 text-gray-600">
              What I do, my current skills and what I have to offer
            </h2>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center text-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
              <h1 className="text-xl md:text-2xl font-bold mt-10">
                Give a chance to know me!
              </h1>
              <p className="text-gray-600 mt-25">
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that are scalable and clean coded. Just to
                know, I have experience with data science. Check out some of my
                work in the Projects section.
                <br />
                I'm open to job opportunities where I can contribute, learn, and
                grow. If you have a good opportunity that matches my skills and
                experience, then don't hesitate to contact me.
              </p>
              <div className="flex justify-center mt-20">
                <Link
                  href="/contact"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
