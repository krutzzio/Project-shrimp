import logoGamba from "../assets/logo/logoGamba_logoNaranja.svg";
import iconoGamba from "../assets/logo/iconoGamba_iconoNaranja.svg";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Switch,
} from "@nextui-org/react";
import SwitchHome from "../components/SwitchHome";
import lupa from "../assets/iconos/iconos_Lupa.svg";
import CP from "../assets/iconos/iconos_Mapa.svg";
import receta from "../assets/iconos/iconos_Recetas.svg";
import rest from "../assets/iconos/iconos_Restaurante.svg";
import mex from "../assets/iconosComida/Taco.svg";
import chino from "../assets/iconosComida/Chino.svg";
import burguer from "../assets/iconosComida/Hamburguesa.svg";
import indio from "../assets/iconosComida/Indio.svg";
import japo from "../assets/iconosComida/Japonesa.svg";
import marroc from "../assets/iconosComida/Marroquí.svg";
import pincho from "../assets/iconosComida/Pincho.svg";
import italia from "../assets/iconosComida/Pizza.svg";
import poke from "../assets/iconosComida/Poke.svg";
import { Link } from "react-router-dom";
import React from "react";

export default function HomeRecetas() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Dietética"]));
  const [selectedDif, setSelectedDif] = React.useState(new Set(["Dificultad"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const selectedValueDif = React.useMemo(
    () => Array.from(selectedDif).join(", ").replaceAll("_", " "),
    [selectedDif]
  );

  return (
    <div>
      <header className="relative z-10 flex p-4 items-center justify-between lg:px-8">
        {/*Desktop*/}

        {/*Logo*/}
        <img
          className="hidden w-32 lg:block lg:w-44"
          src={logoGamba}
          alt="Gamba Logo"
        />
        {/*Switch largo*/}
        <section className="hidden mx-2 lg:block">
          <SwitchHome />
        </section>
        {/*Codigo Postal*/}
        <section className="hidden lg:block w-24">
          <Input
            variant="underlined"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "group-data-[focused=true]:bg-default-200/50",
                "!cursor-text",
              ],
            }}
            placeholder="CP..."
            startContent={<img src={CP} className="w-5" />}
          />
        </section>
        {/*Barra Buscador*/}
        <section className="hidden mx-2 lg:block w-1/2">
          <Input
            variant="underlined"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "group-data-[focused=true]:bg-default-200/50",
                "!cursor-text",
              ],
            }}
            placeholder="Buscar..."
            startContent={<img src={lupa} className="w-5" />}
          />
        </section>

        {/*Mobile*/}

        {/*Logo + switch pequeño*/}
        <div className="flex gap-2 items-center">
          <img
            className="hidden w-32 md:block lg:hidden lg:w-44"
            src={logoGamba}
            alt="Gamba Logo"
          />
          <img
            className="w-9 md:hidden lg:w-44"
            src={iconoGamba}
            alt="Gamba Icono"
          />
          <Switch
            className="lg:hidden"
            defaultSelected
            size="lg"
            color="primary"
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <img src={rest} className="w-5" />
              ) : (
                <img src={receta} className="w-4" />
              )
            }
          />
        </div>
        {/*iconos + avatar*/}
        <div className="flex gap-2 items-center">
          <button className="lg:hidden w-8">
            <img src={CP} />
          </button>
          <button type="button" className="lg:hidden w-8">
            <img src={lupa} />
          </button>
          <Avatar
            size="sm"
            classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
          />
        </div>
      </header>

      <main className="block">
        <div className="pl-4 lg:pl-8">
          {/*Tipos de comida*/}
          <section className="relative flex">
            <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide">
              <div className="relative flex gap-1 lg:gap-2">
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={mex}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Mexicano
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={chino}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Chino
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={burguer}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Americano
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={indio}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Indio
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={japo}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Japonés
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={marroc}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Marruecos
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={pincho}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            España
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={italia}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Italiano
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="block">
                  <li className="relative max-w-24 block">
                    <Link className="max-w-fit min-w-16 items-center flex flex-col">
                      <div className="flex flex-col items-center">
                        <div className="block relative mb-1">
                          <div className="object-contain aspect-square block w-full transition">
                            <div className="w-fit overflow-hidden flex">
                              <div className="w-max overflow-hidden flex">
                                <img
                                  src={poke}
                                  className="w-16 object-cover max-h-full max-w-full h-16 overflow-clip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-all overflow-hidden	">
                          <span className="no-underline whitespace-pre-wrap text-xs p-0 leading-4 font-medium">
                            Hawaiano
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </section>

          {/*Filtros*/}
          <section className="flex pt-4 pl-1 overflow-x-auto	">
            <div className="mx-1 flex gap-2">
              <Dropdown >
                <DropdownTrigger>
                  <Button variant="bordered" color="primary" >
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
                  <DropdownItem key="Dietética" className="text-danger" color="danger">
                    Restablecer
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown >
                <DropdownTrigger>
                  <Button variant="bordered" color="primary">
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
                  <DropdownItem key="Dietética" className="text-danger" color="danger">
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
