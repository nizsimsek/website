"use client";

import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { RxCross2 } from "react-icons/rx";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiAngular, SiTailwindcss } from "react-icons/si";
import NFTKing from "./../assets/NFTKing.png";
import RiseFinance from "./../assets/RiseFinance.png";
import { Technologies } from "./components/Technologies";
import Sidebar from "@components/Sidebar";

export default function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "NFT King Landing Page",
            cardText: "_nft-king",
            description: "NFT King is a landing page for NFT Marketplace. It is built with NextJS, NextUI and TailwindCSS.",
            technologies: ["NextJS", "NextUI", "TailwindCSS"],
            siteUrl: "https://nft-hero.nizamettinsimsek.com/",
            image: NFTKing,
        },
        {
            id: 2,
            name: "Rise Finance Landing Page",
            cardText: "_rise-finance",
            description: "Rise Finance is a landing page for Rise Financial Technology Company. It is built with NextJS and TailwindCSS.",
            technologies: ["NextJS", "TailwindCSS"],
            siteUrl: "https://fintech.nizamettinsimsek.com/",
            image: RiseFinance,
        },
        {
            id: 3,
            name: "Demo Project 1",
            cardText: "_demo-project-1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.",
            technologies: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: 4,
            name: "Demo Project 2",
            cardText: "_demo-project-2",
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
            name: "NodeJS",
            checked: false,
            icon: <SiNodedotjs />,
        },
        {
            id: 7,
            name: "TailwindCSS",
            checked: false,
            icon: <SiTailwindcss />,
        },
        {
            id: 8,
            name: "NextJS",
            checked: false,
            icon: <SiNextdotjs />,
        },
    ]);

    useEffect(() => {
        if (technologies.every((tech) => !tech.checked) || technologies.every((tech) => tech.checked)) {
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

    const page = {
        name: "_projects",
        components: [<Technologies technologies={technologies} setTechnologies={setTechnologies} key="_technologies" />],
    };

    return (
        <div className="flex flex-col lg:flex-row h-full">
            <Sidebar page={page} />
            <div className="flex flex-col w-full h-full">
                <div className="hidden lg:flex flex-col w-full border-b-2 border-c-border">
                    <span className="flex items-center justify-between p-2 w-fit border-r-2 border-c-border text-cl-muted">
                        <span className="line-clamp-1">
                            {technologies.every((tech) => tech.checked) || technologies.every((tech) => !tech.checked)
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-4 p-4">
                        {filteredProjects.map((project) => {
                            return <Card project={project} key={project.id} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
