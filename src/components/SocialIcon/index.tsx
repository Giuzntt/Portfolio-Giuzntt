import { Tooltip } from "flowbite-react";
import Link from "next/link";
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
  nameSocial,
  icon,
  href,
  target,
  placement,
}: SocialIconProps) => {
  return (
    <Tooltip content={nameSocial} placement={placement}>
      <Link href={href} target={target}>
        <CMSIcon icon={icon} className={"text-4xl"} />
      </Link>
    </Tooltip>
  );
};
