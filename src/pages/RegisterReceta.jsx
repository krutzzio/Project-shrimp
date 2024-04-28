import { useState } from "react";
import "../components/Receta/formsReceta.css";
import Selector from "../components/Receta/Selector";
import { Button } from "@nextui-org/button";

export function RegisterReceta() {
  const [imgProfile, setImageProfile] = useState();
  const [nombreReceta, setNombreReceta] = useState("");
  const [descripcionReceta, setDescripcionReceta] = useState("");
  const [tipoCocinaId, setTipoCocinaId] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [tipo, setTipo] = useState("");
  const [persones, setPersones] = useState("");
  const [foto_receta, setPhotos] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [datos, setDatos] = useState([]);

  // Para agregar otros inputs para el siguiente ingrediente
  const addIngrediente = () => {
    setIngredientes([
      ...ingredientes,
      {
        id: "",
        medida: "",
        cantidad: "",
      },
    ]);
  };
  // el req.body que necesita la api
  const registroReceta = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre_receta", nombreReceta);
    formData.append("desc_receta", descripcionReceta);
    formData.append("TipoCocinaId", tipoCocinaId);
    formData.append("persones", persones);
    formData.append("dificultad", dificultad);
    formData.append("tipo", tipo);
    formData.append("tiempo", tiempo);
    formData.append("photo", foto_receta);
    // como ingrediente es un array utilizamos un foreach para que ponga todos los ingredeintes
    ingredientes.forEach((ingrediente, index) => {
      formData.append(`ingredientes[${index}][id]`, ingrediente.id);
      formData.append(`ingredientes[${index}][cantidad]`, ingrediente.cantidad);
      formData.append(`ingredientes[${index}][medida]`, ingrediente.medida);
    });

    const options = {
      method: "POST",
      body: formData,
    };
    console.log(formData);
    fetch("http://localhost:3000/api/home/1/registerReceta", options)
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
      })
      .catch((error) => {
        console.error("Error al registrar receta:", error);
      });
  };

  // esto es para poner la cantidad en ingredeintes, al ser un array
  // copias el array iañades en la posicion el valor del input en la cantidad
  const CantiIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].cantidad = value;

    setIngredientes(nuevosIngredientes);
  };
  //Lo mismo pero con id
  const idIngre = (index, id) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].id = id;

    console.log(id);
    setIngredientes(nuevosIngredientes);
  };
  //Lo mismo pero con la medida
  const mediIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].medida = value;
    setIngredientes(nuevosIngredientes);
  };

  // para previsualizar la imagen de la receta
  const handleChange = (e) => {
    setPhotos(e.target.files[0]);
    setImageProfile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex flex-col gap-4">
      {/*Subir imágenes*/}
      <article className="flex flex-col gap-4">
        <label className="w-fit text-sm font-semibold">
          Sube una imagen
        </label>
        <input
          className="w-full border border-gray-300 py-2 text-gray-700 leading-tight"
          id="imagen"
          type="file"
          onChange={handleChange}
        />
      </article>

      {/*Imagen subida*/}
      <div className="max-w-60 object-cover m-auto">
        <img src={imgProfile} alt="" />
      </div>

      {/*Título receta*/}
      <article className="flex flex-col gap-4">
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="name"
        >
          Título receta
        </label>
        <input
          className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          id="name"
          name="name"
          onInput={(e) => setNombreReceta(e.target.value)}
          value={nombreReceta}
        />
      </article>

      {/*Descripción receta*/}
      <article className="flex flex-col gap-4">
        <label
          htmlFor="descripcion"
          className="w-fit text-sm font-semibold"
        >
          Descripción
        </label>
        <textarea
          id="descripcion"
          rows="4"
          className="bg-gray-200 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
          placeholder="Breve explicación de la receta"
          onInput={(e) => setDescripcionReceta(e.target.value)}
          value={descripcionReceta}
        ></textarea>
      </article>

      {/*Tipo de plato*/}
      <article className="flex flex-col gap-4">
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="tipo"
        >
          Tipo
        </label>
        <select
          className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="tipo"
          id="tipo"
          name="tipo"
          onInput={(e) => setTipo(e.target.value)}
          value={tipo}
        >
          <option value="Entrante">Entrante</option>
          <option value="Primero">Primero</option>
          <option value="Segundo">Segundo</option>
          <option value="Postre">Postre</option>
        </select>
      </article>

      {/*Dificultad*/}
      <article className="flex flex-col gap-4">
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="dificultad"
        >
          Dificultad
        </label>
        <select
          className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="dificultad"
          id="dificultad"
          name="dificultad"
          onInput={(e) => setDificultad(e.target.value)}
          value={dificultad}
        >
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
      </article>

      {/*Tiempo*/}
      <article className="flex flex-col gap-4">
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="tiempo"
        >
          Tiempo
        </label>
        <select
          className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="tiempo"
          id="tiempo"
          name="tiempo"
          onInput={(e) => setTiempo(e.target.value)}
          value={tiempo}
        >
          <option value="10 min">10 min</option>
          <option value="15 min">15 min</option>
          <option value="20 min">20 min</option>
          <option value="30 min">30 min</option>
          <option value="40 min">40 min</option>
          <option value="50 min">50 min</option>
          <option value="1 hora">1 hora</option>
          <option value="2 horas">2 horas</option>
          <option value="3 horas">3 horas</option>
        </select>
      </article>

      {/*Para cuantas personas*/}
      <article className="flex flex-col gap-4">
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="personas"
        >
          Personas
        </label>
        <select
          className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="personas"
          id="personas"
          name="personas"
          onInput={(e) => setPersones(e.target.value)}
          value={persones}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </article>

      {/*Incluir tipo cocina*/}
      <article className="flex flex-col gap-4">
        {/* 
        Este componente es para tener un input select pero con un buscador incorporado para que no se haga pesado buscar las cosas en la propiedad endpoint de momento solo hay dos posibilidades que son: tipuscuina o ingredientes. Esto segun lo que querais buscar
        */}
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="personas"
        >
          Cocina
        </label>
        <Selector
          endpoint="tipuscuina"
          onSelectId={setTipoCocinaId}
          className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
      </article>

      {/*Incluir ingrediente*/}
      <article className="flex flex-col gap-4">
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="personas"
        >
          Ingredientes
        </label>
        {ingredientes.map((ingrediente, index) => (
          <div key={index}>
            <div>
              <label className="text-primary text-sm font-black flex mb-2">
                Ingrediente{index + 1}
              </label>
            </div>
            <Selector
              className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
              endpoint="ingredientes"
              onSelectId={(id) => idIngre(index, id)}
            />
            <div className="flex gap-2">
              <input
                className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                value={ingrediente.cantidad}
                onChange={(e) => CantiIngre(index, e.target.value)}
                placeholder="Cantidad"
              />
              <input
                className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                value={ingrediente.medida}
                onChange={(e) => mediIngre(index, e.target.value)}
                placeholder="Medida"
              />
            </div>
          </div>
        ))}
      </article>
      {/*Botones Agregar ingrediente*/}
      <Button className="w-40 bg-primary text-white" type="button" onClick={addIngrediente}>
        Agregar Ingrediente
      </Button>

      {/*Botones Crear receta*/}
      <Button className="" type="button" onClick={registroReceta}>
        Crear
      </Button>
    </div>
  );
}
