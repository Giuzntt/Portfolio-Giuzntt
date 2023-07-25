import { cn } from "@/lib/utils";
import { Tooltip } from "flowbite-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Fa500Px } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { CMSIcon } from "../cms-icon";

type SocialIconProps = {
  className?: string;
  nameSocial: string;
  icon: string;
  href: string;
  target?: string;
  placement?: "top" | "bottom" | "left" | "right";
};

export const SocialIcon = ({
  className,
  nameSocial,
  icon,
  href,
  target,
  placement,
}: SocialIconProps) => {
  return (
    <Tooltip content={nameSocial} placement={placement}>
      <Link href={href} target={target}>
        <CMSIcon icon={icon} className={className} />
      </Link>
    </Tooltip>
  );
};
