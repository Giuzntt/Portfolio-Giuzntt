import Image from "next/image";

const Header = () => {
  return (
    <header
      className=" fixed inset-x-0 top-0 z-50  w-full
      bg-gradient-to-r from-cornflower-blue to-periwinkle-blue 
    
    "
    >
      <div
        className="px-4 mx-auto sm:px-6 lg:px-8   w-full max-w-7xl
      "
      >
        <div className="flex items-center  h-16 lg:h-20 justify-between">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <Image
                className="w-auto h-8"
                src="logoDev.svg"
                alt=""
                width={121}
                height={33}
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-lg text-gray-50 transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Sobre mim{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-lg text-gray-50 transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Projetos{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-lg text-gray-50 transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Experiência{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-lg text-gray-50 transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Formação{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
