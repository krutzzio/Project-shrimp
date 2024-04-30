import NavBarPerfil from "../components/navbar/NavBarPerfil";
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
import { usePerfilRest } from "../hooks/usePerfilRest";
import { useContext } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";

export default function PerfilRestaurante() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user } = useContext(UserInfoContext)
  const { promos, setPromos, cocinasRest, recetasRestaurante } = usePerfilRest({ restId: user.id })

  return (
    <div className="flex flex-col h-screen">
      <NavBarPerfil userType={true} />
      <div className="flex flex-col items-center gap-2">
        <Image
          width={400}
          height={200}
          radius="none"
          alt="NextUI hero Image"
          src={perfil}
        />
        <h2 className="text-2xl font-bold">{user.nombre}</h2>
        <div className="flex gap-2">
          <Chip color="secondary" className="text-white">
            {recetasRestaurante.length} recetas
          </Chip>
          {
            !cocinasRest.length
              ? <></>
              : cocinasRest.map(tipoCocina => {
                return (
                  <Chip key={tipoCocina.id} color="secondary" className="text-white">
                    {tipoCocina.nombre_tipo}
                  </Chip>
                )
              })
          }
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
                  {
                    !recetasRestaurante.length
                      ? <></>
                      : recetasRestaurante.map(receta => <CardReceta key={receta.receta.id} recetaInfo={receta} />)
                  }
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Promociones" title="Promociones">
            <Card>
              <CardBody>
                <Promociones promos={promos} setPromos={setPromos} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div >
  );
}
