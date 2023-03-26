"use client";
import { Button } from "../../../components/Button";
import Image from "next/image";

interface Color {
    bgcolor: string;
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
    };
}

export const Card = ({
    project: { id, name, description, technologies },
}: CardProps) => {
    const colors = {
        HTML: {
            bgcolor: "#E34F26",
            color: "#fff",
        } as Color,
        CSS: {
            bgcolor: "#1572B6",
            color: "#fff",
        } as Color,
        JavaScript: {
            bgcolor: "#F7DF1E",
            color: "#000",
        } as Color,
        React: {
            bgcolor: "#61DAFB",
            color: "#000",
        } as Color,
        TypeScript: {
            bgcolor: "#3178C6",
            color: "#fff",
        } as Color,
        Vue: {
            bgcolor: "#4FC08D",
            color: "#000",
        } as Color,
        NodeJS: {
            bgcolor: "#339933",
            color: "#fff",
        } as Color,
        Angular: {
            bgcolor: "#DD0031",
            color: "#fff",
        } as Color,
        TailwindCSS: {
            bgcolor: "#38B2AC",
            color: "#000",
        } as Color,
    } as Colors;

    return (
        <div className="flex flex-col bg-c-darker rounded-2xl h-full border-2 border-c-ghost">
            <div className="w-full rounded-t-2xl">
                <Image
                    src={"https://picsum.photos/300/200"}
                    alt={name}
                    width={300}
                    height={200}
                    className="rounded-t-2xl w-full h-auto"
                />
            </div>
            <div className="flex flex-col gap-2 p-4 text-c-muted border-t-2 border-c-ghost">
                <h2 className="text-lg font-semibold line-clamp-1">{name}</h2>
                <p className="text-sm line-clamp-3">{description}</p>
                <Button
                    type="button"
                    color="ghost"
                    text="view-project"
                    className="mt-2 text-sm min-h-[1rem]"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech) => {
                        return (
                            <span
                                key={tech}
                                className="flex items-center justify-center px-2 py-1 text-xs font-semibold rounded-full"
                                style={{
                                    backgroundColor: colors[tech].bgcolor,
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
