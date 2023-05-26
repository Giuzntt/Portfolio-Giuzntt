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
