import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    errors?: string;
    labelClass?: string;
    label: string;
};

// eslint-disable-next-line react/display-name
const LabelInput = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = "text",
            name = "",
            errors,
            className,
            label,
            labelClass,
            ...props
        },
        ref
    ) => {
        return (
            <label className="flex flex-col ">
                <p
                    className={twMerge(
                        `text-[25px] font-semibold ${labelClass}`
                    )}
                >
                    {label}
                </p>
                <input
                    className={twMerge(
                        `shadow-md outline-none h-[3rem] px-2 rounded-md ${className}`
                    )}
                    type={type}
                    name={name}
                    ref={ref}
                    {...props}
                />
                {errors && <span className="text-red-500">{errors}</span>}
            </label>
        );
    }
);

export default LabelInput;
