"use client";
import { Button } from "../../../components/Button";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Color {
    border: string;
    color: string;
}

interface Colors {
    [key: string]: Color;
}

interface CardProps {
    project: {
        id: number;
        name: string;
        description: string;
        technologies: string[];
        siteUrl?: string;
        image?: StaticImageData;
    };
}

export const Card = ({ project: { id, name, description, technologies, siteUrl, image } }: CardProps) => {
    const colors = {
        HTML: {
            border: "2px solid #E34F26",
            color: "#fff",
        } as Color,
        CSS: {
            border: "2px solid #1572B6",
            color: "#fff",
        } as Color,
        JavaScript: {
            border: "2px solid #F7DF1E",
            color: "#fff",
        } as Color,
        React: {
            border: "2px solid #61DAFB",
            color: "#fff",
        } as Color,
        TypeScript: {
            border: "2px solid #3178C6",
            color: "#fff",
        } as Color,
        NodeJS: {
            border: "2px solid #339933",
            color: "#fff",
        } as Color,
        TailwindCSS: {
            border: "2px solid #38B2AC",
            color: "#fff",
        } as Color,
        NextJS: {
            border: "2px solid #A49A8E",
            color: "#fff",
        } as Color,
        NextUI: {
            border: "2px solid #A49A8E",
            color: "#fff",
        } as Color,
    } as Colors;

    return (
        <div className="flex flex-col bg-c-darker rounded-2xl h-full border-2 border-c-ghost">
            <div className="w-full rounded-t-2xl h-[200px] flex align-center justify-center">
                <Image src={image ?? "https://picsum.photos/300/200"} alt={name} width={300} height={200} className={"rounded-t-2xl w-full h-auto" + (image ? " object-contain p-4" : "")} />
            </div>
            <div className="flex flex-col gap-2 p-4 text-c-muted border-t-2 border-c-ghost">
                <h2 className="text-lg font-semibold line-clamp-1 text-white">{name}</h2>
                <p className="text-sm line-clamp-3">{description}</p>
                <Button
                    type="button"
                    color="ghost"
                    text={siteUrl ? "view-project" : "not-viewable"}
                    className={"mt-2 text-sm min-h-[1rem]" + (siteUrl ? " hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-c-ghost" : " cursor-not-allowed")}
                    onClick={() => {
                        if (siteUrl) window.open(siteUrl, "_blank");
                    }}
                />
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech) => {
                        return (
                            <span
                                key={tech}
                                className="flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full bg-c-ghost"
                                style={{
                                    border: colors[tech].border,
                                    color: colors[tech].color,
                                }}
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
