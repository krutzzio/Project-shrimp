import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

import mex from "../assets/iconosComida/Taco.svg";
import chino from "../assets/iconosComida/Chino.svg";
import burguer from "../assets/iconosComida/Hamburguesa.svg";
import indio from "../assets/iconosComida/Indio.svg";
import japo from "../assets/iconosComida/Japonesa.svg";
import marroc from "../assets/iconosComida/Marroquí.svg";
import pincho from "../assets/iconosComida/Pincho.svg";
import italia from "../assets/iconosComida/Pizza.svg";
import poke from "../assets/iconosComida/Poke.svg";
import colombia from "../assets/iconosComida/Colombiano.svg";
import corea from "../assets/iconosComida/Coreana.svg";
import griego from "../assets/iconosComida/Griego.svg";
import peruano from "../assets/iconosComida/Peruano.svg";
import tailandes from "../assets/iconosComida/Tailandes.svg";

export default function HomeRecetas() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Dietética"])
  );
  const [selectedDif, setSelectedDif] = React.useState(new Set(["Dificultad"]));
  const [selectedPlato, setSelectedPlato] = React.useState(new Set(["Plato"]));

  const selectedValue = Array.from(selectedKeys)
    .join(", ")
    .replaceAll("_", " ");
  const selectedValueDif = Array.from(selectedDif)
    .join(", ")
    .replaceAll("_", " ");
  const selectedValuePlato = Array.from(selectedPlato)
    .join(", ")
    .replaceAll("_", " ");

  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <main className="block">
        <div className="pl-2 lg:pl-8">
          {/*Tipos de comida*/}
          <section className="relative flex">
            <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide">
              <div className="relative flex lg:gap-6">
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={mex}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Mexicano
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={chino}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Chino
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={burguer}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Americano
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={indio}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Indio
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={japo}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Japonés
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={marroc}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Marruecos
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={pincho}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        España
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={italia}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Italiano
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={poke}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Hawaiano
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={colombia}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Colombiano
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={corea}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Coreano
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={griego}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Griego
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={peruano}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Peruano
                      </span>
                    </div>
                  </div>
                </Link>
                <Link className="max-w-fit min-w-20 items-center flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="block relative mb-1">
                      <div className="object-contain aspect-square block w-full transition">
                        <img
                          src={tailandes}
                          className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                        />
                      </div>
                    </div>
                    <div className="break-all overflow-hidden	">
                      <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                        Tailandes
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/*Filtros*/}
          <section className="md:flex pt-4 pl-1 overflow-x-auto hidden lg:block	">
            <div className="mx-1 flex gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    variant="bordered"
                    color="primary"
                    className="min-w-36"
                  >
                    {selectedValue}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  <DropdownItem key="Vegetariano">Vegetariano</DropdownItem>
                  <DropdownItem key="Vegano">Vegano</DropdownItem>
                  <DropdownItem
                    key="Dietética"
                    className="text-danger"
                    color="danger"
                  >
                    Restablecer
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    variant="bordered"
                    color="primary"
                    className="min-w-32"
                  >
                    {selectedValueDif}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedDif}
                  onSelectionChange={setSelectedDif}
                >
                  <DropdownItem key="Fácil">Fácil</DropdownItem>
                  <DropdownItem key="Medio">Medio</DropdownItem>
                  <DropdownItem key="Dificil">Difícil</DropdownItem>
                  <DropdownItem
                    key="Dietética"
                    className="text-danger"
                    color="danger"
                  >
                    Restablecer
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    variant="bordered"
                    color="primary"
                    className="min-w-32"
                  >
                    {selectedValuePlato}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedPlato}
                  onSelectionChange={setSelectedPlato}
                >
                  <DropdownItem key="Entrante">Entrante</DropdownItem>
                  <DropdownItem key="Principal">Principal</DropdownItem>
                  <DropdownItem key="Segundo">Segundo</DropdownItem>
                  <DropdownItem key="Postre">Postre</DropdownItem>
                  <DropdownItem
                    key="Plato"
                    className="text-danger"
                    color="danger"
                  >
                    Restablecer
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
