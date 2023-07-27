import { cn } from "@/lib/utils";
import { HiMenu } from "react-icons/hi";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn("flex  flex-col gap-3", className)}>
      <h3
        className="text-4xl  font-medium text-cornflower-blue md:text-xl
      
      "
      >
        {title}
      </h3>
      {subtitle && (
        <div className="flex justify-end items-center gap-2">
          <HiMenu className="text-md text-cornflower-blue" />
          <p className="font-semibold text-md text-gray-500">{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
