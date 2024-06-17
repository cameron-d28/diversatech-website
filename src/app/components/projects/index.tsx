import { projects } from "@/app/content/content";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <main>
      <p>
        We have worked with a multitude of companies to build out their tech
        stacks
      </p>
      <div className="projects-scroll">
        {projects.technical.map((project) => (
          <div className="project-inner-scroll" key={project.company}>
            <div className={`projects-image-overlay to-${project.color}`}>
              <Image
                src={project.image}
                alt="Overlay"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <p className="text-2xl font-bold py-2 underline">
              {project.company}
            </p>
            <div className="flex flex-col grow justify-between text-lg">
              <p>
                <u>Company Description:</u> {project.company_description}
              </p>
              <p>
                <u>Project Description:</u> {project.project_description}
              </p>
              <p>
                <u>Technologies Used:</u> {project.tech.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-scroll">
        {projects.consulting.map((project) => (
          <div className="project-inner-scroll" key={project.company}>
            <div className="projects-image-overlay">
              <Image
                src={project.image}
                alt="Overlay"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <p className="text-2xl font-bold">{project.company}</p>
            <p>{project.company_description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
