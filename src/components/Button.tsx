import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const Button = ({
    type = "button",
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <>
            <button type={type} className={twMerge(`${className}`)} {...props}>
                {children}
            </button>
        </>
    );
};
export default Button;
