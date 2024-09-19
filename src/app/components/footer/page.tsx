"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {

  const menus = [
    {
      name: "Nossa empresa",
      items: [
        { name: "Sobre nós", path: "/" },
        {
          name: "Serviços",
          path: "/",
        },
        {
          name: "O que fazemos?",
          path: "/",
        },
      ],
    },
    {
      name: "Nossos serviços",
      items: [
        {
          name: "Transporte e logística",
          path: "/",
        },
        {
          name: "Serviços de segurança",
          path: "/",
        },
        {
          name: "Serviços gráficos",
          path: "/",
        },
        {
          name: "Material sobresselente",
          path: "/",
        },
      ],
    },
    {
      name: "Contactos",
      items: [
        {
          name: "Ingombota - Maculusso, Av. Luanda",
          path: "/",
        },
        {
          name: "Casa 123",
          path: "/",
        },
        {
          name: "(+244) 921 388 575",
          path: "/",
        },
        {
          name: "Comercial@bereshit-angola.com",
          path: "/",
        },
      ],
    },
  ]

  return (
    <footer className="relative px-2 pt-8 pb-6 bg-slate-700 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h1 className="mb-4 rubik-bold text-[1.3rem]">
              Bereshit Angola
            </h1>
            <h2 className="font-normal text-blue-gray-500 lg:w-2/5 rubik-regular text-[0.8rem] sm:text-[1rem]">
              Estamos à disposição para atendê-lo e iniciar uma jornada comum para o sucesso
            </h2>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-4 md:mb-0 lg:justify-start">

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>

            </div>
          </div>
          <div className="mx-auto mt-12 w-max flex flex-col sm:flex-row flex-wrap gap-12 lg:mt-0">
            {menus.map((item, _index) => (
              <div key={_index}>
                <h1
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase rubik-bold"
                >
                  {item.name}
                </h1>
                <ul className="mt-3">
                  {item.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        className="mb-2 rubik-regular block font-normal text-blue-gray-500 hover:text-blue-gray-700 text-[0.8rem] sm:text-[1rem]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p
              className="font-normal text-blue-gray-500 rubik-regular text-[0.8rem]"
            >
              <>
                {/*Copyright © {year} Bereshit Angola{" "}*/}
                Copyright © {year} 
                <a
                  href="https://www.linkedin.com/in/elisandrof07"
                  target="_blank"
                  className="text-blue-gray-500 transition-colors ml-1 hover:text-slate-300"
                >
                   Elisandro Franco
                </a>
                .
              </>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}