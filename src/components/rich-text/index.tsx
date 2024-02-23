import { motion } from "framer-motion"; // Assuming framer-motion for animation
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
  // Define your animation variants for the list
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Custom renderer for 'ul' using motion component for animation
  const AnimatedUl = motion.ul;

  return (
    <CMSRichText
      {...props}
      renderers={{
        ul: ({ children }) => (
          <AnimatedUl
            initial="hidden"
            animate="visible"
            variants={variants}
            className="list-disc list-inside pl-2 flex flex-col gap-1"
          >
            {children}
          </AnimatedUl>
        ),
      }}
    />
  );
};
