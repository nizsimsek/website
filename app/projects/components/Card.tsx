"use client";

export const Card = ({
  project: { id, name, description, technologies },
}: {
  project: {
    id: number;
    name: string;
    description: string;
    technologies: string[];
  };
}) => {
  return <div>Card Falan</div>;
};
