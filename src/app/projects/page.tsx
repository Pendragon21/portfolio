import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            If you want to see some of my projects, here it is!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <ProjectCard
              title="Pokenext"
              description="A Pokedex made with Next"
              imageUrl="pokeball.png"
            />
            <ProjectCard
              title="Tailwind Spotify"
              description="A Spotify Clone made with Tailwind"
              imageUrl="spotify.png"
            />
            <ProjectCard
              title="Podcaster"
              description="The project from Rocketseat NLW"
              imageUrl="podcaster.png"
            />
            <ProjectCard
              title="Widget"
              description="A simple application of a widget"
              imageUrl="widget.png"
            />
            <ProjectCard
              title="Chat AI"
              description="Using the Vercel AI SDK to make a chatbot model"
              imageUrl="chatAI.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
