import { projects } from "@/app/content/content";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <div className="flex flex-col space-y-8 pb-8">
      <p className="w-full text-center">
        We have worked with a multitude of companies to build out their tech
        stacks and help them think about their future. Hover over them to see
        more details
      </p>
      <div className="projects-scroll">
        {projects.map((project) => (
          <div
            className={`project-inner-scroll `}
            style={{ borderColor: project.color, borderWidth: 2 }}
            key={project.company}
          >
            <div
              className={`projects-image-overlay`}
              style={{
                background: `radial-gradient(circle, ${
                  project.secondary_color || "#ADD8E6"
                }, ${project.color})`,
              }}
            >
              <Image
                src={`/icons${project.image}`}
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
                <u>Company:</u> {project.company_description}
              </p>
              <p>
                <u>Project:</u> {project.project_description}
              </p>
              {project.tech && (
                <p>
                  <u>Tech Stack:</u> {project.tech.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
