import NavBar from "../components/navbar/NavBarSinBusqueda";
import Tiempo from "../assets/iconos/iconos_Tiempo.svg";
import Dificultad from "../assets/iconos/iconos_Nivel.svg";
import TipoComida from "../assets/iconos/iconos_Plato.svg";
import {
  Divider,
  Chip,
  CheckboxGroup,
  Checkbox,
  Tab,
  Tabs,
  Card,
  CardBody,
  Image,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import Receta3 from "../assets/Recetas/Receta1.jpg";
import fav from "../assets/iconos/iconos_Favorito.svg";
import favRelleno from "../assets/iconos/iconos_FavoritoRelleno.svg";
import guardarVacio from "../assets/iconos/iconos_Corazon.svg";
import guardarRelleno from "../assets/iconos/iconos_CorazonRelleno.svg";
import { Link, useParams } from "react-router-dom";
import TiposAlergias from "../components/TiposAlergias/TiposAlergias";
import Footer from "../components/Footer";
import { useReceta } from "../hooks/useReceta";

export function Receta() {

  const { id } = useParams()
  const { restauranteReceta, receta, tipoCocina, alergias, ingredientesRecetas, procedimientosReceta,
    restGuardado, handleSeguirRest, recetaGuardada, handleSeguirReceta } = useReceta({ recetaId: id })


  return (

    <div className=" ">
      <NavBar />
      <Card isFooterBlurred radius="none" className="border-none">
        <Image
          alt="Foto de la receta"
          width={400}
          height={200}
          radius="none"
          className="object-cover h-72"
          src={receta.foto_receta} />
        <CardFooter className="justify-between bg-background/40 overflow-hidden p-2 py-4 absolute before:rounded-xl rounded-large bottom-2 left-0.5 w-[98%] mx-auto z-10">
          <div className="flex absolute z-11 gap-2 items-center">
            <Avatar
              size="md"
              src={restauranteReceta.foto_restaurante}
              classNames={{ base: "bg-[#FE7139]", icon: "text-[#F2F2F2]" }}
            />
            <div className="flex flex-col leading-5">
              <p className="text-md font-bold">Creado por:</p>
              <p className="text-xl font-bold text-primary max-w-64 leading-5">{restauranteReceta.nombre}</p>
            </div>
          </div>
          <Link>
            <img onClick={handleSeguirRest} className="h-8 items-start z-10" src={restGuardado ? favRelleno : fav} alt="Guardar en favoritos" />

          </Link>
        </CardFooter>
      </Card>

      <div className="flex flex-col gap-6 mt-4">
        <div className="flex flex-col gap-3 mx-4">
          <div className="flex justify-between gap-2 items-start">
            <h2 className="text-3xl font-bold text-primary leading-7">
              {receta.nombre_receta}
            </h2>
            <img onClick={handleSeguirReceta} className="h-8" src={recetaGuardada ? guardarRelleno : guardarVacio} />
          </div>
          <div className="flex gap-1">
            <Chip color="primary" className="text-white">{tipoCocina.nombre_tipo}</Chip>
            {
              receta.dieta
                ? <Chip color="primary" className="text-white">{receta.dieta === 1 ? "Vegetariana" : "Vegana"}</Chip>
                : <></>
            }
          </div>
        </div>

        <p className="text-gray-500 leading-5 text-md mx-4">
          {receta.desc_receta}
        </p>

        <div className="flex h-8 items-center space-x-2 text-md justify-between mx-4">
          <div className="flex gap-2">
            <img className="h-6" src={Tiempo} alt="Tiempo" />
            <p>{receta.tiempo}</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex gap-2">
            <img className="h-6" src={Dificultad} alt="Dificultad" />
            <p>{receta.dificultad}</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex gap-2">
            <img className="h-5" src={TipoComida} alt="Tipo de comida" />
            <p>{receta.tipo}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 mx-4">
          <p className="text-gray-500">Alérgenos:</p>
          <TiposAlergias alergiasChips={alergias} />
        </div>

        <div className="flex flex-col gap-2 mx-4">
          <h3 className="font-bold text-xl">Ingredientes:</h3>
          <CheckboxGroup color="primary">
            {
              ingredientesRecetas.map(ingrediente =>
                <Checkbox key={ingrediente.id} value={ingrediente.id} className="w-full" >
                  {ingrediente.Receta_Ingrediente.cantidad} {ingrediente.Receta_Ingrediente.medida} de {ingrediente.nombre_ingrediente}
                </Checkbox>)
            }
          </CheckboxGroup>


        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl mx-4">Preparación:</h3>
          <Tabs aria-label="Options" size="lg" color="primary" variant="underlined">
            {
              procedimientosReceta.map(procedimiento => {
                return (
                  <Tab key={procedimiento.id} title={`Paso ${procedimiento.numero_procedimiento}`}>
                    <Card>
                      <CardBody>
                        <div className="flex flex-col gap-4">
                          <img className="h-52 object-cover" src={procedimiento.foto_procedimiento}></img>
                          <p className="text-md leading-5">
                            {
                              procedimiento.desc_procedimiento
                            }
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                )
              })
            }
          </Tabs>
        </div>

        {/*Instagram*/}
        <div className="flex flex-col gap-1 mx-4">
          <div>
            <h3 className="font-bold text-xl">Instagram:</h3>
            <p className="text-primary">#donkamaronelmejor</p>
          </div>
          <div className="flex gap-2 items-center">
            <Card isFooterBlurred radius="lg">
              <Image
                src={Receta3}
                width={300}
                height={200}

                className="object-cover rounded-x"
                alt="Receta"
              />
            </Card>
            <Card isFooterBlurred radius="lg">
              <Image
                src={Receta3}
                width={300}
                height={200}
                className="object-cover rounded-x"
                alt="Receta"
              />
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-2 mx-4">
          <h3 className="font-bold text-xl">Restaurante:</h3>
          <Image
            src={restauranteReceta.foto_restaurante}
            width={400}
            height={200}
            className="object-cover h-52"
            alt="Receta"
          />
          <h3 className="text-2xl font-bold text-primary">{restauranteReceta.nombre}</h3>
          <p className="leading-5 text-md">{restauranteReceta.descripcio}</p>
        </div>
      </div>
      <Footer />
    </div >
  );
}
