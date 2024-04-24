import { useState } from "react";
import "../components/forms/Receta/formsReceta.css";
import Selector from "../components/forms/Receta/Selector";
import { Button } from "@nextui-org/button";

export default function RegisterRecetaForm() {
    const [imgProfile, setImageProfile] = useState();
    const [nombreReceta, setNombreReceta] = useState("");
    const [descripcionReceta, setDescripcionReceta] = useState("");
    const [tipoCocinaId, setTipoCocinaId] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [dificultad, setDificultad] = useState("");
    const [tipo, setTipo] = useState("");
    const [persones, setPersones] = useState("");
    const [foto_receta, setPhotos] = useState("");
    const [mostrarIngredientes, setMostrarIngredientes] = useState(false);
    const [mostrarInfo, setInfo] = useState(true);
    const [ingredientes, setIngredientes] = useState([""]);
    const [procedimientos, setProcedimientos] = useState([""]);
    const [datos, setDatos] = useState([]);
    const [valor, setValor] = useState([]);
    const [selectedIngredientId, setSelectedIngredientId] = useState("")

    const change = () => {
        setMostrarIngredientes(!mostrarIngredientes);
        setInfo(!mostrarInfo);
    };


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
console.log('hola '+tipoCocinaId)
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
    
        ingredientes.forEach((ingrediente, index) => {
          formData.append(`ingredientes[${index}][id]`, ingrediente.id);
          formData.append(`ingredientes[${index}][cantidad]`, ingrediente.cantidad);
          formData.append(`ingredientes[${index}][medida]`, ingrediente.medida);
        }),
        
        ingredientes.forEach((procedimiento, index) => {
            formData.append(`procedimientos[${index}][id]`, procedimiento.id);
            formData.append(`procedimientos[${index}][descripcion]`, procedimiento.descripcion);
            formData.append(`procedimientos[${index}][numero]`, procedimiento.numero);
          }
    );
    
        const options = {
          method: "POST",
          body: formData,
        };
        console.log(formData);
        fetch("http://localhost:3000/api/home/1/registerReceta", options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setDatos(data)
          })
          .catch((error) => {
            console.error("Error al registrar receta:", error);
          });
      };



    const CantiIngre = (index, value) => {
        const nuevosIngredientes = [...ingredientes];
        nuevosIngredientes[index].cantidad = value;
              console.log(ingredientes)

        setIngredientes(nuevosIngredientes);
    };

    const idIngre = (index, id) => {
        console.log('ptua' +index)
        const nuevosIngredientes = [...ingredientes];
        nuevosIngredientes[index].id = id;

        console.log(id)
        setIngredientes(nuevosIngredientes);
    };

    const mediIngre = (index, value) => {
        const nuevosIngredientes = [...ingredientes];
        nuevosIngredientes[index].medida = value;
        console.log(ingredientes)
        setIngredientes(nuevosIngredientes);
    };
    const handleChange = (e) => {
        setPhotos(e.target.files[0]);
        setImageProfile(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className=" flex flex-col items-center h-auto">
            <img className="w-44 p-2 " src="/src/assets/logo/logoGamba_logoNaranja.svg" alt="Gamba Logo"></img>
            {mostrarInfo&&
            
            <h1 className="text-primary text-3xl font-bold leading-8 mb-4">¡Vamos a crear tu receta!</h1>
            }
            <div className="h-[150px] w-[150px] border border-black">
                <img src={imgProfile} alt="aaa" />
            </div>
            {mostrarInfo && (
                <div className="h-auto p-4 ">
                    <article className="flex flex-col text-gray-400 justify-start p-2">
                        <label className=" mb-2 w-fit text-xs text-gray-400 font-semibold">
                            Subir imagen
                        </label>
                        <input
                            className="text-sm text-gray-900 rounded bg-gray-50 "
                            id="imagen"
                            type="file"
                            onChange={handleChange}
                        />
                    </article>
                    <article className="flex flex-col justify-start p-2">
                        <label
                            className="w-fit text-xs text-gray-400  font-semibold"
                            htmlFor="name"
                        >
                            Nombre receta
                        </label>
                        <input
                        className="border-[#3964fe]"
                            type="text"
                            id="name"
                            name="name"
                            onInput={(e) => setNombreReceta(e.target.value)}
                            value={nombreReceta}
                        />
                    </article>
                    <article className="flex flex-col justify-start p-2">
                        <label
                            htmlFor="descripcion"
                            className="mb-2 w-fit text-xs text-gray-400 font-semibold"
                        >
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            rows="4"
                            className="p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300  "
                            placeholder="Breve explicación de la receta"
                            onInput={(e) => setDescripcionReceta(e.target.value)}
                            value={descripcionReceta}
                        ></textarea>
                    </article>
                    <article className="flex flex-col justify-start p-2">
                        <label
                            className="w-fit text-xs text-gray-400 font-semibold w/auto"
                            htmlFor="personas"
                        >
                            Personas
                        </label>
                        <select
                            className="{}"
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
                    <article className="flex flex-col justify-start p-2">
                        <label
                            className="w-fit text-xs text-gray-400 font-semibold w/auto"
                            htmlFor="tipo"
                        >
                            tipo
                        </label>
                        <select
                            className="{}"
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
                    <article className="flex flex-col justify-start p-2">
                        <label
                            className="w-fit text-xs text-gray-400 font-semibold w/auto"
                            htmlFor="dificultad"
                        >
                            Dificultad
                        </label>
                        <select type="dificultad" id="dificultad" name="dificultad" onInput={(e) => setDificultad(e.target.value)}
                    value={dificultad}>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                    </article>
                    <article className="flex flex-col justify-start p-2">
                        <label
                            className="w-fit text-xs text-gray-400 font-semibold"
                            htmlFor="tiempo"
                        >
                            Tiempo
                        </label>
                        <input 
                         className="border-[#3964fe]"
                        type="tiempo" 
                        id="tiempo" 
                        name="tiempo"
                        onInput={(e) => setTiempo(e.target.value)}
                        value={tiempo}/>
                    </article>
                    <article className="flex flex-col justify-start">
                        <Selector endpoint="tipuscuina" onSelectId={setTipoCocinaId} />
                    </article>
                </div>
            )}

            <div className="flex flex-col  space-y-4">
                {mostrarIngredientes &&
                    ingredientes.map((ingrediente, index) => (
                        <div key={index}>
                            <div>
                                <label className="text-[#3964FE] font-black">
                                    Ingrediente{index + 1}:
                                </label>
                                {/* Hay que poner el nombre del ingrediente*/}
                            </div>
                            <Selector endpoint="ingredientes" onSelectId={(id) => idIngre(index, id)} />

                            <input
                                className="border border-black"
                                type="text"
                                value={ingrediente.cantidad}
                                onChange={(e) => CantiIngre(index, e.target.value)}
                                placeholder="Cantidad"
                            />
                            <input
                                className="border border-black"
                                type="text"
                                value={ingrediente.medida}
                                onChange={(e) => mediIngre(index, e.target.value)}
                                placeholder="Medida"
                            />
                        </div>
                    ))}
            </div>
            <div>
            {mostrarIngredientes &&
            <div className="p-2">

            <button
                className="border border-black"
                type="button"
                onClick={addIngrediente}
              >
                Agregar Ingrediente
              </button>
              <button
                className="border border-black"
                type="button"
                onClick={registroReceta}
              >
                Crear
              </button>
              </div>
}

            </div>
            <div className="">
                <Button className="" onClick={change}>
                    <p>Ingredientes</p>
                </Button>
            </div>
        </div>
    );
}
