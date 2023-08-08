import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">Contact Me:</h1>
            <h2 className="text-xl mt-2 text-gray-600">
              Feel free to get in touch
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                Let's Connect!
              </h1>
              <p className="text-gray-600 mb-4">
                I'm always open to new opportunities and collaborations. If
                you're interested in working together or just want to say hi,
                feel free to reach out.
              </p>
              <Link
                href="/"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
