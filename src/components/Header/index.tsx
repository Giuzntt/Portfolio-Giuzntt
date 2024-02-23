import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};
const NAV_ITEMS: NavItem[] = [
  {
    label: "Sobre mim",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/Projects",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 w-full bg-gradient-to-r from-cornflower-blue to-periwinkle-blue"
      initial={{
        top: -100,
      }}
      animate={{
        top: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="flex items-center h-16 lg:h-20 justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="w-auto h-8"
                src="logoDev.svg"
                alt=""
                width={121}
                height={33}
              />
            </Link>
          </div>

          {/* Collapsed Menu Icon */}
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Full Menu */}
          <nav
            className={`hidden ${
              isMenuOpen ? "block" : "lg:flex"
            } lg:items-center lg:justify-center lg:space-x-10`}
          >
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </nav>

          {isMenuOpen && (
            <div
              className="sm:hidden absolute top-16 left-0 w-full bg-gray-900 text-white shadow-md py-2
            "
            >
              <nav className="flex flex-col items-center justify-center space-y-2">
                <ul className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <NavItem {...item} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
