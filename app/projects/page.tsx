"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Card } from "./components/Card";
import { RxCross2 } from "react-icons/rx";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiVuedotjs,
    SiNodedotjs,
    SiAngular,
    SiTailwindcss,
} from "react-icons/si";

export default function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "project-1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.",
            technologies: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: 2,
            name: "project-2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.",
            technologies: ["React", "TypeScript", "TailwindCSS"],
        },
        {
            id: 3,
            name: "project-3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.",
            technologies: ["Vue"],
        },
        {
            id: 4,
            name: "project-4",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.",
            technologies: ["NodeJS"],
        },
    ]);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [technologies, setTechnologies] = useState([
        {
            id: 1,
            name: "HTML",
            checked: false,
            icon: <SiHtml5 />,
        },
        {
            id: 2,
            name: "CSS",
            checked: false,
            icon: <SiCss3 />,
        },
        {
            id: 3,
            name: "JavaScript",
            checked: false,
            icon: <SiJavascript />,
        },
        {
            id: 4,
            name: "React",
            checked: false,
            icon: <SiReact />,
        },
        {
            id: 5,
            name: "TypeScript",
            checked: false,
            icon: <SiTypescript />,
        },
        {
            id: 6,
            name: "Vue",
            checked: false,
            icon: <SiVuedotjs />,
        },
        {
            id: 7,
            name: "NodeJS",
            checked: false,
            icon: <SiNodedotjs />,
        },
        {
            id: 8,
            name: "Angular",
            checked: false,
            icon: <SiAngular />,
        },
        {
            id: 9,
            name: "TailwindCSS",
            checked: false,
            icon: <SiTailwindcss />,
        },
    ]);

    useEffect(() => {
        if(technologies.every((tech) => !tech.checked) || technologies.every((tech) => tech.checked)) {
            setFilteredProjects(projects);
            return;
        } else {
            const filteredProjects = projects.filter((project) => {
                return project.technologies.some((tech) => {
                    return technologies.find((t) => t.name === tech && t.checked);
                });
            });

            setFilteredProjects(filteredProjects);

        }
    }, [technologies, projects]);

    return (
        <div className="flex flex-col lg:flex-row h-full">
            <div className="flex lg:hidden px-5 py-4 lg:h-full">
                <span className="text-sm">_projects</span>
            </div>
            <div className="flex flex-col h-auto lg:w-64 lg:border-c-ghost lg:border-r-2 lg:h-full lg:shrink-0">
                <Sidebar
                    technologies={technologies}
                    setTechnologies={setTechnologies}
                />
            </div>
            <div className="flex flex-col w-full h-full">
                <div className="hidden lg:flex flex-col w-full border-b-2 border-c-border">
                    <span className="flex items-center justify-between p-2 w-fit border-r-2 border-c-border text-cl-muted">
                        <span className="line-clamp-1">
                            {technologies.every((tech) => tech.checked) ||
                            technologies.every((tech) => !tech.checked)
                                ? "all-technologies"
                                : technologies.reduce((acc: string[], curr) => {
                                      if (curr.checked) {
                                          acc.push(curr.name + "; ");
                                      }
                                      return acc;
                                  }, [])}
                        </span>
                        <RxCross2 className="ml-10" />
                    </span>
                </div>
                <div className="flex w-full h-auto lg:overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-4 p-4">
                        {filteredProjects.map((project) => {
                            return <Card project={project} key={project.id} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
