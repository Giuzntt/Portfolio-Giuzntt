import Image from "next/image";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { Button, Tooltip } from "flowbite-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main
        className="flex flex-col items-center justify-center w-full h-full 
         bg-gradient-to-r from-cornflower-blue to-periwinkle-blue border-b border-dotted border-5 border-gray-500

      
      "
      >
        <section
          className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 max-w-7xl mx-auto 
        
        "
        >
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2
                  className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl
                  text-gray-50
                "
                >
                  Olá 👋 <br className="block sm:hidden" />
                  <span className="relative text-md inline-block">
                    Meu nome é Giulianno
                  </span>
                </h2>
                <p
                  className="max-w-lg mt-3 text-2xl leading-relaxed  md:mt-8 text-gray-50
                "
                >
                  Sou desenvolvedor front-end, apaixonado por tecnologia e por
                  criar interfaces de usuário.
                </p>

                <div className="mt-8 flex gap-4 items-center justify-start ">
                  <Tooltip content="Github" placement="bottom">
                    <FaGithub className="text-4xl text-gray-50 cursor-pointer hover:text-gray-950 transition-all duration-200" />
                  </Tooltip>
                  <Tooltip content="LinkedIn" placement="bottom">
                    <FaLinkedin className="text-4xl text-gray-50 cursor-pointer hover:text-linkedin-blue transition-all duration-200" />
                  </Tooltip>
                  <Tooltip content="Meu Curriculo" placement="bottom">
                    <FaFilePdf className="text-4xl text-gray-50 cursor-pointer hover:text-red-600 transition-all duration-200" />
                  </Tooltip>
                </div>
              </div>

              <div className="relative">
                <Image
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100"
                  src="/blob_indigo.svg"
                  alt=""
                  width={400}
                  height={300}
                />
                <Image
                  className="absolute inset-x-0 bottom-0  -translate-x-1/2 left-1/2"
                  src="/giulianno.png"
                  alt=""
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
