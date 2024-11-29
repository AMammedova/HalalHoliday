import React from "react";

interface ButtonProps {
  /** Optional additional CSS classes to apply to the button */
  className?: string;
  /** The content to be displayed inside the button, can be a React node or a string */
  children?: React.ReactNode | string;
  /** Size of the button, can be 'regular', 'small', or 'large'. Default is 'regular' */
  size?: "regular" | "small" | "large" | "mobile";
  /** Type of the button, determines the styling. Can be 'primary_filled' or 'primary_ghost'. Default is 'primary_filled' */
  type?: "primary_filled" | "primary_ghost" | "bg_transparant";
  /** Function to handle button click events */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A customizable button component.
 *
 * This component renders a button with different sizes and types based on the provided props.
 * - **Size** determines the button's padding, font size, and minimum width.
 * - **Type** determines the button's background, text color, and border style.
 *
 * @param {ButtonProps} props - The properties to customize the button.
 * @returns {JSX.Element} The rendered button element.
 */
const Button = ({
  children,
  className,
  size = "regular",
  type = "primary_filled",
  onClick,
}: ButtonProps) => {
  // Define size-specific styles
  const sizeClasses = {
    large: "text-[18px] px-8 py-4 min-w-[220px] leading-[28px]",
    small: "text-[14px] px-3 py-1.5 min-w-[100px] leading-[20px]",
    regular: "text-[16px] px-6 py-3  min-w-[160px] leading-[24px]",
    mobile: "text-[16px] px-6 py-3  min-w-[126px] leading-[24px]",
  };

  // Define type-specific styles
  const typeClasses = {
    primary_filled: "bg-secondary-03 text-secondary-10",
    primary_ghost: "bg-white text-secondary-06 border border-secondary-06",
    bg_transparant:
      "bg-transparent text-secondary-06 border border-secondary-06",
  };

  return (
    <button
      className={`${className} rounded-[100px] w-auto ${sizeClasses[size]} ${typeClasses[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
