import Image from "next/image";
import React, { FC } from "react";

interface ButtonProps {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button: FC<ButtonProps> = ({ type, title, icon, variant, full }) => {
    return (
        <button
            type={type}
            className={`${variant} flexCenter rounded-full gap-3 ${
                full && "w-full"
            }`}
        >
            {icon && <Image src={icon} alt="title" width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap cursor-pointer">
                {title}
            </label>
        </button>
    );
};

export default Button;
