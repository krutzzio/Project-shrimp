import SwitchHome from "../SwitchHome";
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
import logoGamba from "../../assets/logo/logoGamba_logoNaranja.svg";
import iconoGamba from "../../assets/logo/iconoGamba_iconoNaranja.svg";
import lupa from "../../assets/iconos/iconos_Lupa.svg";
import CP from "../../assets/iconos/iconos_Mapa.svg";
import rest from "../../assets/iconos/iconos_Restaurante.svg";
import receta from "../../assets/iconos/iconos_Recetas.svg";
import filtro from "../../assets/iconos/iconos_Filtro.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="p-4">
      <section className="relative z-10 flex items-center justify-between lg:px-8">
        {/*Desktop*/}

        {/*Logo*/}
        <Link to={"/home"} className="hidden w-32 lg:block lg:w-52">
          <img src={logoGamba} alt="Gamba Logo" />
        </Link>

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

      <div className="flex mt-4 lg:hidden">
        <Input
          variant="underlined"
          placeholder="Buscar..."
          startContent={<img src={lupa} className="w-7" />}
        />
        <div className="w-12">
          <Button
            onPress={onOpen}
            size="sm"
            variant="light"
            className="md:hidden"
          >
            <img src={filtro} />
          </Button>
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Filtros
                </ModalHeader>
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
      </div>
    </header>
  );
}
