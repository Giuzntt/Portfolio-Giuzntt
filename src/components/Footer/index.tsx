import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
            <Link
              className="w-6 h-6 transition text-cornflower-blue hover:text-blue-500"
              href="www.github.com/Giuzntt"
              target="_blank"
            >
              <span className="sr-only">github</span>
              <SiGithub className="w-5 h-5 md hydrated" />
            </Link>
            <Link
              className="w-6 h-6 transition text-cornflower-blue hover:text-blue-500"
              href="https://www.linkedin.com/in/giulianno-zanetti/?originalSubdomain=br"
              target="_blank"
            >
              <span className="sr-only">linkedin</span>
              <SiLinkedin className="w-5 h-5 md hydrated" />
            </Link>
            <Link
              className="w-6 h-6 transition text-cornflower-blue hover:text-blue-500"
              href="https://github.com/Giuzntt/Portfolio-Giuzntt"
            >
              <span className="sr-only">codigo</span>
              <BsCodeSlash className="w-5 h-5 md hydrated" />
            </Link>
          </span>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">
            <span className="mx-auto mt-2 text-sm text-gray-500">
              Copyright © 2023
              <Link
                href="https://github.com/Giuzntt"
                className="mx-2 text-blue-500 hover:text-gray-500"
                rel="noopener noreferrer"
              >
                @giuzntt
              </Link>
              .Since 2020
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
