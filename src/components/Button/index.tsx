// Import necessary dependencies and utility functions
import React from "react";
import { cn } from "@/lib/utils";
import { ComponentProps, ElementType } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IconType } from "react-icons/lib";

// Define the ButtonProps type
type ButtonProps = ComponentProps<"button"> & {
  children?: React.ReactNode;
  className?: string;
  icon?: IconType;
};

// Button component with optional icon
export const Button = ({ children, className, icon: Icon }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full bg-white text-cornflower-blue font-bold rounded-lg px-4 py-2 mt-5 transition duration-300 ease-in-out hover:bg-gray-200 mr-6 uppercase relative",
        className
      )}
    >
      {/* Check if the icon is provided, and render it */}
      {Icon && (
        <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
          <Icon className="w-5 h-5" />
        </span>
      )}
      {children}
    </button>
  );
};
