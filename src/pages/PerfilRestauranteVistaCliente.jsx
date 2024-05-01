import { CardReceta } from "../components/Home/Cards/CardReceta";
import NavBarSinBusqueda from "../components/navbar/NavBarSinBusqueda";
import { Card, Divider, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import Telefono from "../assets/Recetas/telefono.png";
import Correo from "../assets/Recetas/correo.png";
import Ubicacion from "../assets/Recetas/ubicacion.png";
import fav from "../assets/iconos/iconos_Favorito.svg";
import favRelleno from "../assets/iconos/iconos_FavoritoRelleno.svg";
import Receta3 from "../assets/Recetas/Receta1.jpg";
import Footer from "../components/Footer";
import { useRestauranteCliente } from "../hooks/useRestauranteCliente";
import { useParams } from "react-router-dom";
import { DIETAS } from "../utils/fetchs/constants";


export function PerfilRestauranteVistaCliente() {

  const { id } = useParams()
  const { recetasRest, restaurante, restGuardado, handleSeguirRest, cocinasRest } = useRestauranteCliente({ restId: id })
  console.log(recetasRest[0], recetasRest)
  const handleCorreo = () => {
    window.location.href = `mailto:${restaurante.correo}?subject=Asunto del correo&body=Cuerpo del correo`
  };

  const handleTelefono = () => {
    window.location.href = `tel:${restaurante.telefono}`
  };

  const handleMaps = () => {
    window.open(`https://www.google.com/maps?q=${restaurante.direccion} ${restaurante.numero} ${restaurante.cp}`, '_blank');
  };

  return (
    <div className="">
      <NavBarSinBusqueda />

      <div className="relative">
        <div className="absolute z-20 p-2 bottom-0 right-0">
          <Chip color="primary" className="text-white">{`${recetasRest.length} receta${recetasRest.length == 1 ? `` : `s`} `}</Chip>
        </div>

        <Image
          alt="Foto de la receta"
          width={400}
          height={200}
          radius="none"
          className="object-cover h-72"
          src={restaurante.foto_restaurante}
        />
      </div>

      <div className="flex flex-col gap-8 my-4">
        <div className="flex flex-col gap-3 mx-4">
          <div className="flex justify-between gap-2 items-start">
            <h2 className="text-3xl font-bold text-primary leading-7">
              {restaurante.nombre}
            </h2>
            <img onClick={handleSeguirRest} src={restGuardado ? favRelleno : fav} className="h-8" />
          </div>
          <div className="flex gap-1">
            {
              !cocinasRest.length
                ? <></>
                : cocinasRest.map(tipoCocina => {
                  return (
                    <Chip key={tipoCocina.id} color="primary" className="text-white">
                      {tipoCocina.nombre_tipo}
                    </Chip>
                  )
                })
            }
            {
              !restaurante.dieta
                ? <></>
                : <Chip color="primary" className="text-white">{DIETAS[restaurante.dieta]}</Chip>
            }
          </div>
        </div>

        <p className="text-gray-500 leading-5 text-md mx-4">
          {restaurante.descripcio}
        </p>

        <div className="flex h-4 items-center text-md justify-around mx-4">
          <div className="flex gap-2">
            <img onClick={handleTelefono} className="h-6" src={Telefono} alt="Tiempo" />
            {/* <p>{restaurante.telefono}</p> */}
          </div>
          <Divider orientation="vertical" />
          <div className="flex gap-2">
            <img onClick={handleCorreo} className="h-6" src={Correo} alt="Dificultad" />
            {/* <p>{restaurante.correo}</p> */}
          </div>
          <Divider orientation="vertical" />
          <div className="flex gap-2">
            <img onClick={handleMaps} className="h-5" src={Ubicacion} alt="Tipo de comida" />
            {/* <p>{restaurante.direccion} {restaurante.numero}, {restaurante.cp} </p> */}
          </div>
        </div>

        <div className="flex flex-col gap-2 mx-4">
          <h3 className="font-bold text-xl">Recetas:</h3>
          <div className="m-auto md:m-0 md:flex md:gap-4">

            {
              !recetasRest.length
                ? <></>
                : recetasRest.map(receta => <CardReceta key={receta.receta.id} recetaInfo={receta} />)
            }
          </div>
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
      </div>
      <Footer />
    </div>
  );
}
