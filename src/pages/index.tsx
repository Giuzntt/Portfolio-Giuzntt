import Image from "next/image";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { Button, Tooltip } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main
        className="flex flex-col items-center justify-center w-full h-full 
         bg-gradient-to-r from-cornflower-blue to-periwinkle-blue 

      
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
                  className="max-w-lg mt-3 text-2xl leading-relaxed  md:mt-8 text-gray-50 font-light
                "
                >
                  Tenho 22 anos, sou desenvolvedor front-end com 2 anos de
                  experiência. Trabalho como freelancer e estou sempre aberto a
                  novas oportunidades.
                </p>

                <div className="mt-8 flex gap-4 items-center justify-start ">
                  <Tooltip content="Github" placement="bottom">
                    <Link href="https://www.github.com/Giuzntt" target="_blank">
                      <FaGithub className="text-4xl text-gray-50 cursor-pointer hover:text-gray-950 transition-all duration-200" />
                    </Link>
                  </Tooltip>
                  <Tooltip content="LinkedIn" placement="bottom">
                    <Link
                      href="https://www.linkedin.com/in/giulianno-zanetti/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-4xl text-gray-50 cursor-pointer hover:text-linkedin-blue transition-all duration-200" />
                    </Link>
                  </Tooltip>
                  <Tooltip content="Meu Currículo" placement="bottom">
                    <Link
                      href="https://drive.google.com/file/d/1HsjjexYlam_abBI4TBxQqTkNkgHSGON_/view?usp=sharing"
                      target="_blank"
                    >
                      <FaFilePdf className="text-4xl text-gray-50 cursor-pointer hover:text-red-600 transition-all duration-200" />
                    </Link>
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
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 64H48C96 64 192 64 288 53.3C384 43 480 21 576 37.3C672 53 768 107 864 117.3C960 128 1056 96 1152 80C1248 64 1344 64 1392 64H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V64Z"
          fill="url(#paint0_linear_4_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4_3"
            x1="720"
            y1="0"
            x2="720"
            y2="119.445"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#758BFD" />
            <stop offset="1" stop-color="#AEB8FE" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-16 bg-gray-50">
        <p className="text-gray-500 text-sm font-light">
          Feito com ❤️ por Giulianno Zanetti
        </p>
      </div>
    </>
  );
}
