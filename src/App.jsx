import { useState, useEffect } from "react";

const RegistroRecetaForm = () => {
  const [nombreReceta, setNombreReceta] = useState("");
  const [descripcionReceta, setDescripcionReceta] = useState("");
  const [tipoCocinaId, setTipoCocinaId] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [tipo, setTipo] = useState("");
  const [persones, setPersones] = useState("");
  const [foto_receta, setPhotos] = useState("");
  const [mostrarIngredientes, setMostrarIngredientes] = useState(false); // Estado para controlar la visibilidad de la sección de ingredientes
  const [mostrarInfo, setInfo] = useState(true); // Estado para controlar la visibilidad de la sección de Info
  const [ingredientes, setIngredientes] = useState(['']);
  const [imgProfile, setImageProfile] = useState();
  const [datos, setDatos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tipuscuina");
        if (!response.ok) {
          throw new Error("Hubo un problema al realizar la solicitud.");
        }
        const data = await response.json();
        setDatos(data);
        
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData(); // Llama a la función para obtener los datos cuando el componente se monta
  }, []); 
  console.log(datos)
  const toggleMostrarIngredientes = () => {
    setMostrarIngredientes(!mostrarIngredientes);
    setInfo(!mostrarInfo);

    if(!mostrarIngredientes && ingredientes.lenght==0){
      addIngrediente()
    }

    if(!mostrarInfo){
      setPhotos(""); // Reiniciar el estado del input file
    setImageProfile(null); // Reiniciar la vista previa de la imagen
    }
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
    });

    const options = {
      method: "POST",
      body: formData,
    };
    console.log(formData);
    fetch("http://localhost:3000/api/home/1/registerReceta", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al registrar receta:", error);
      });
  };
  


  const handleChange = (e) => {
    setPhotos(e.target.files[0]);
    setImageProfile(URL.createObjectURL(e.target.files[0]));
  };

  const CantiIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].cantidad = value;
    setIngredientes(nuevosIngredientes);
  };

  const idIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].id = value;
    setIngredientes(nuevosIngredientes);
  };

  const mediIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].medida = value;
    setIngredientes(nuevosIngredientes);
  };

  
  return (
    <>
      <div className="flex items-center flex-col w-[100%]">
        <h3 className="text-red-500 ">Formulario receta</h3>
        <div className="border border-black block">
        <img
          className="w-[250px] h-[250px] flex items-center text-red-500"
          src={imgProfile}
          alt="Suba una imgen"
        />
        </div>

        <div className="">
          <form className="" onSubmit={registroReceta}>
            {mostrarInfo && (
              <div className="grid items-center flex-col m-5  space-y-4">
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black" htmlFor="nombreReceta">Nombre</label>
                  </div>
                  <input
                    className="border border-black"
                    onInput={(e) => setNombreReceta(e.target.value)}
                    value={nombreReceta}
                  />
                </div>
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black font-black" htmlFor="descripcionReceta">
                      Descripcio
                    </label>
                  </div>
                  <textarea
                    type="textarea"
                    className="border border-black w-[100%]"
                    onInput={(e) => setDescripcionReceta(e.target.value)}
                    value={descripcionReceta}
                  />
                </div>
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black" htmlFor="tipoCocinaId">Tipo de cocina</label>
                  </div>
                  <div className="w-[100%]">
                  <select
                    className="border border-black w-[100px]"
                    onInput={(e) => setTipoCocinaId(e.target.value)}
                    value={tipoCocinaId}
                  >
                    {
                      datos.map((tipo) =>(
                        <option key={tipo.id} value={tipo.id}>{tipo.nombre_tipo}</option>
                      )
                    )}
                  </select>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black" htmlFor="foto_receta">Imatge</label>
                  </div>
                  <input type="file" accept="image/*" onChange={handleChange} />
                </div>
                <div className="flex">
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black" htmlFor="tiempo">Tiempo</label>
                  </div>
                  <input
                    className="border border-black"
                    onInput={(e) => setTiempo(e.target.value)}
                    value={tiempo}
                  />
                </div>
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black" htmlFor="dificultad">Dificultad</label>
                  </div>
                  <select
                    className="border border-black"
                    onInput={(e) => setDificultad(e.target.value)}
                    value={dificultad}
                  >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>
                </div>
                <div className="flex">
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black" htmlFor="personas">Personas</label>
                  </div>
                  <select
                    className="border border-black"
                    onInput={(e) => setPersones(e.target.value)}
                    value={persones}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div>
                  <div>
                    <label className="text-[#3964FE] font-black" htmlFor="tipo">Tipo</label>
                  </div>
                  <select
                    className="border border-black"
                    onInput={(e) => setTipo(e.target.value)}
                    value={tipo}
                  >
                    <option value="entrante">Entrante</option>
                    <option value="primero">Primero</option>
                    <option value="segundo">Segundo</option>
                    <option value="postre">Postre</option>
                  </select>
                </div>
                </div>
              </div>
            )}

            {mostrarIngredientes && <h3 className="text-red-500">Ingredientes</h3>}
            <div className="flex flex-col  space-y-4">
              {mostrarIngredientes &&
                ingredientes.map((ingrediente, index) => (
                  <div key={index}>
                    <div>
                      <label className="text-[#3964FE] font-black"  >Ingrediente{index + 1}:</label>{" "}
                      {/* Hay que poner el nombre del ingrediente*/}
                    </div>
                    <input
                      className="border border-black"
                      type="text"
                      name="hola"
                      value={ingrediente.id}
                      onChange={(e) => idIngre(index, e.target.value)}
                      placeholder="Nombre"
                    />
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
            <div className="flex flex-col p-3 items-center gap-3">
              <div>
            {mostrarIngredientes && (
              <button
                className="border border-black"
                type="button"
                onClick={addIngrediente}
              >
                Agregar Ingrediente
              </button>
            )}
</div>
<div>
            {mostrarIngredientes &&
            <button className="border border-black" type="submit">
              Registrar Receta
            </button>
}
</div>
</div>
          </form>

        </div>
        <button
              className="border border-black flex items-center rounded bg-[#3964FE] p-1 "
              type="button"
              onClick={toggleMostrarIngredientes}
            >
              {mostrarIngredientes
                ? "Atras"
                : "Continuar"}
            </button>
      </div>
    </>
  );
};

export default RegistroRecetaForm;
