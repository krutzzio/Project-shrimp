import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
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
import NavBar from "../components/navbar/NavBar";

export default function HomeRecetas() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Dietética"]));
  const [selectedDif, setSelectedDif] = React.useState(new Set(["Dificultad"]));
  const [selectedPlato, setSelectedPlato] = React.useState(new Set(["Plato"]));


  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const selectedValueDif = React.useMemo(
    () => Array.from(selectedDif).join(", ").replaceAll("_", " "),
    [selectedDif]
  );
  const selectedValuePlato = React.useMemo(
    () => Array.from(selectedPlato).join(", ").replaceAll("_", " "),
    [selectedPlato]
  );

  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar/>
      <main className="block">
        <div className="md:pl-4 lg:pl-8">
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
          <section className="flex pt-4 pl-1 overflow-x-auto hidden lg:block	">
            <div className="mx-1 flex gap-2">
              <Dropdown >
                <DropdownTrigger >
                  <Button disableRipple variant="bordered" color="primary" className="min-w-36">
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
                  <Button disableRipple variant="bordered" color="primary" className="min-w-32">
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
              <Dropdown >
                <DropdownTrigger>
                  <Button disableRipple variant="bordered" color="primary" className="min-w-32">
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
                  <DropdownItem key="Plato" className="text-danger" color="danger">
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
