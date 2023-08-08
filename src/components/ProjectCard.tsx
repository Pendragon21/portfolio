import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="h-40 w-full mb-4 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover object-center h-full w-full"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProjectCard;
