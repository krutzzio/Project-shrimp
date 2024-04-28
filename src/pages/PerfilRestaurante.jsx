import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBarSinBusqueda";
import perfil from "../assets/perfilRestaurante/perfilRestaurante1.jpg";

import {
  Button,
  Card,
  CardBody,
  Chip,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  Textarea,
  useDisclosure
} from "@nextui-org/react";
import { CardReceta } from "../components/Home/Cards/CardReceta";
import Promociones from "../components/Promociones";
import { RegisterReceta } from "./RegisterReceta";

export default function PerfilRestaurante() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col items-center gap-2">
        <Image
          width={400}
          height={200}
          radius="none"
          alt="NextUI hero Image"
          src={perfil}
        />
        <h2 className="text-2xl font-bold">Don Corleone</h2>
        <div className="flex gap-2">
          <Chip color="secondary" className="text-white">
            3 recetas
          </Chip>
          <Chip color="secondary" className="text-white">
            Italiano
          </Chip>
        </div>
      </div>

      <div className="flex w-full flex-col mt-4 max-w-screen-2xl m-auto">
        <Tabs
          aria-label="Options"
          variant="underlined"
          color="secondary"
          size="lg"
        >
          <Tab key="Datos" title="Datos">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-lg">Datos básicos</h2>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="nombre">
                      Nombre del restaurante
                    </label>
                    <Input
                      placeholder="Don Corleone"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="nombre"
                      name="nombre"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="dirección">
                      Dirección
                    </label>
                    <Input
                      placeholder="Calle Pilar, 93, 08940, Cornellà de Llobregat"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="dirección"
                      name="dirección"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="teléfono">
                      Correo
                    </label>
                    <Input
                      placeholder="info@doncorleone.es"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="teléfono"
                      name="teléfono"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="teléfono">
                      Teléfono
                    </label>
                    <Input
                      placeholder="93 337 03 06"
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="teléfono"
                      name="teléfono"
                    />
                  </article>
                  <article className="flex flex-col justify-start text-sm">
                    <label className="w-fit" htmlFor="teléfono">
                      Descripción
                    </label>
                    <Textarea
                      placeholder="Restaurante italiano con una extensa carta de platos de nuestra tierra. Destacamos por nuestras pizzas al horno de piedra."
                      variant="underlined"
                      className="input-form"
                      type="text"
                      id="descripción"
                      name="descripción"
                    />
                  </article>
                  <Button color="secondary" className="text-white w-36">
                    Aplicar cambios
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Recetas" title="Recetas">
            <Card>
              <CardBody>
                <div className="flex flex-col items-center">
                  <Button
                    color="secondary"
                    onPress={onOpen}
                    className="text-white w-36 my-4"
                  >
                    Subir receta
                  </Button>
                  <Modal isOpen={isOpen} scrollBehavior="outside" size="2xl" onOpenChange={onOpenChange}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1 text-primary text-2xl font-bold mt-4">
                            ¡Vamos a crear tu receta!
                          </ModalHeader>
                          <ModalBody>
                            <RegisterReceta />
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              variant="light"
                              onPress={onClose}
                            >
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
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-lg">Tus recetas</h2>

                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Promociones" title="Promociones">
            <Card>
              <CardBody>
                <Promociones />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <div className="flex items-center justify-center px-4 py-6 mt-4 bg-primary rounded shadow hover:bg-orange-600">
        <Link to="/">
          <button className="text-lg font-bold text-white">Desloguear</button>
        </Link>
      </div>
    </div>
  );
}
