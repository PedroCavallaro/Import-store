import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    errors?: string;
};

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = "text", name = "", errors, className, ...props }, ref) => {
        return (
            <>
                <input
                    className={twMerge(`shadow-md outline-none ${className}`)}
                    type={type}
                    name={name}
                    ref={ref}
                    {...props}
                />
                {errors && <span>{errors}</span>}
            </>
        );
    }
);

export default Input;
