import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import TiposComida from "../components/TiposComida/TiposComida";


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
    <div className="max-w-screen mx-auto">
      <NavBar />
      <main className="block pl-2 lg:pl-4">

        <TiposComida />

        {/*Filtros*/}
        <section className="md:flex pt-4 pl-1 overflow-x-auto hidden">
          <div className=" flex gap-2">
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

        <Outlet />

      </main>
    </div>
  );
}
