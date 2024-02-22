import React, { ReactNode, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

type ButtonProps = ComponentProps<"button"> & {
  children?: React.ReactNode;
  className?: string;
  icon?: ReactNode;
  copy: string;
};

export const ButtonCopy = ({
  children,
  className,
  icon,
  copy,
}: ButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = useCallback(() => {
    if (copy) {
      navigator.clipboard.writeText(copy).then(
        () => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        },
        (error) => {
          console.error("Error copying text:", error);
        }
      );
    }
  }, [copy]);

  return (
    <button
      className={cn(
        "w-full bg-cornflower-blue-light text-white font-bold rounded-lg px-4 py-2 mt-5 transition duration-300 ease-in-out hover:bg-blue-200 mr-6 uppercase relative",
        className
      )}
      onClick={handleCopyClick}
    >
      <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-white text-2xl">
        {isCopied ? <FaCheckCircle className="w-6 h-6 " /> : icon}
      </span>
      {isCopied ? "Email Copiado!" : children}
    </button>
  );
};
