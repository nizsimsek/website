"use client";

interface BtnClasses {
    [key: string]: string;
}

interface Props {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    color?: "primary" | "secondary" | "ghost";
    text: string;
    className?: string;
}

export const Button = ({
    type = "button",
    onClick,
    disabled = false,
    color = "primary",
    text,
    className,
}: Props) => {
    const classes: BtnClasses = {
        primary: "bg-c-primary text-white",
        secondary: "bg-c-secondary text-white",
        ghost: "bg-c-ghost text-white",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center min-h-[2.5rem] py-2 px-4 w-fit ${classes[color]} rounded-lg focus:outline-none ${className}`}
        >
            {text}
        </button>
    );
};
