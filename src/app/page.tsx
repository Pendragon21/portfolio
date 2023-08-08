import React from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-4xl font-bold mb-10">Hello, I'm Rafael Mendes</h1>
        <h2 className="text-lg text-center mb-8">
          An enthusiastic 23-year-old front-end developer who has worked in{" "}
          <br />
          large companies and is always willing to learn more and give his best.
        </h2>
        <Link
          href="/projects"
          className="inline-block bg-purple-500 text-white mb-10 font-bold px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition-colors"
        >
          Projects
        </Link>
      </section>
    </>
  );
}
