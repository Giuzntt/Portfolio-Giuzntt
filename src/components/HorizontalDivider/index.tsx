import { cn } from "@/lib/utils";

interface HorizontalDividerProps {
  className?: string;
}

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div className={cn("w-full my-8 border-b border-gray-200", className)} />
  );
};
