import { useState, useEffect } from "react";

import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  useDisclosure,
} from "@nextui-org/react";
import logoGamba from "../assets/logo/logoGamba_logoNaranja.svg";
import iconoGamba from "../assets/logo/iconoGamba_iconoNaranja.svg";
import lupa from "../assets/iconos/iconos_Lupa.svg";
import CP from "../assets/iconos/iconos_Mapa.svg";
import rest from "../assets/iconos/iconos_Restaurante.svg";
import receta from "../assets/iconos/iconos_Recetas.svg";
import filtro from "../assets/iconos/iconos_Filtro.svg";
import { Link } from "react-router-dom";
import { CardReceta } from "../components/Home/Cards/CardReceta";

const Busqueda = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const URL = "https://jsonplaceholder.typicode.com/photos";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  let filteredUsers = users;

  if (filter !== "all") {
    filteredUsers = filteredUsers.filter((user) => {
      return user.title.toLowerCase().includes(filter.toLowerCase());
    });
  }

  if (search) {
    filteredUsers = filteredUsers.filter((user) => {
      return user.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <main className="w-full p-2">
      <section className="relative z-10 flex flex-row items-center justify-between lg:gap-4">
        {/*Mobile*/}

        {/*Logo + switch pequeño*/}
        <div className="flex gap-2 items-center">
          <Link to={"/home"} className="w-9 md:hidden lg:w-44">
            <img src={iconoGamba} alt="Gamba Icono" />
          </Link>
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
          <Link to={"/perfil"}>
            <Avatar
              size="md"
              classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
            />
          </Link>
        </div>
      </section>

      <div className="flex items-center justify-between mt-4 lg:hidden">
        <Input
          variant="faded"
          radius="full"
          placeholder="Buscar..."
          startContent={<img src={lupa} className="w-6" />}
          value={search}
          onChange={handleSearch}
        />
        <img className="w-10" onClick={onOpen} src={filtro} />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filtros</ModalHeader>
              <ModalBody>
                <CheckboxGroup
                  label="Dietética"
                  orientation="vertical"
                  color="primary"
                >
                  <Checkbox value="vegetariano">Vegetariano</Checkbox>
                  <Checkbox value="vegano">Vegano</Checkbox>
                </CheckboxGroup>
                <CheckboxGroup
                  label="Dificultad"
                  orientation="vertical"
                  color="primary"
                >
                  <Checkbox value="facil">Fácil</Checkbox>
                  <Checkbox value="media">Media</Checkbox>
                  <Checkbox value="difícil">Difícil</Checkbox>
                </CheckboxGroup>
                <CheckboxGroup
                  label="Plato"
                  orientation="vertical"
                  color="primary"
                >
                  <Checkbox value="entrante">Entrante</Checkbox>
                  <Checkbox value="primero">Primero</Checkbox>
                  <Checkbox value="segundo">Segundo</Checkbox>
                  <Checkbox value="postre">Postre</Checkbox>
                </CheckboxGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Aplicar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="flex flex-col">
        <h1 className="text-2xl py-2 font-bold">Te puede gustar</h1>
        <div className="block overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4">
          <div className="relative flex gap-4">
            <CardReceta />
            <CardReceta />
            <CardReceta />

          </div>
        </div>
      </div>
      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="">
          <tr>
            <th className="p-3"><h1 className="text-2xl py-2 font-bold">Todas las recetas</h1></th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              className="border-b border-orange-200 hover:bg-orange-100"
            >
              <td className="p-3">
                <img
                  className="mx-auto block"
                  src={user.thumbnailUrl}
                  alt={user.title}
                />
                <p className="text-center capitalize ">{user.title}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Busqueda;
