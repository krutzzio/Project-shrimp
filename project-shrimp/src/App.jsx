import { useState } from "react";

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
  const [ingredientes, setIngredientes] = useState([]);
  const [imgProfile, setImageProfile] = useState()

  const toggleMostrarIngredientes = () => {
  
      setMostrarIngredientes(!mostrarIngredientes);
      setInfo(!mostrarInfo);
  
  };

  const addIngrediente = () => {
    setIngredientes([
      ...ingredientes,
      {
        id:"",
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
      body:formData,
    };
console.log(formData)
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
    setPhotos(e.target.files[0])
    setImageProfile(URL.createObjectURL(e.target.files[0]))
  }

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
    <div >
    <h3 className="p-1">Formulario receta</h3>
    <form onSubmit={registroReceta}>
      {mostrarInfo&&
      <div>
      <div>
        <label htmlFor="nombreReceta">Nombre</label>
        <input
          onInput={(e) => setNombreReceta(e.target.value)}
          value={nombreReceta}
        />
      </div>
      <div>
        <label className="text-xs" htmlFor="descripcionReceta">Descripcio</label>
        <input
          onInput={(e) => setDescripcionReceta(e.target.value)}
          value={descripcionReceta}
        />
      </div>
      <div>
        <label htmlFor="tipoCocinaId">Tipo de cocina</label>
        <input
          onInput={(e) => setTipoCocinaId(e.target.value)}
          value={tipoCocinaId}
        />
      </div>
      <div>
        <label htmlFor="foto_receta">Imatge</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <img className="w-16 h-16 border-black" src={imgProfile} alt="" />
      </div>
      <div>
        <label htmlFor="tiempo">Tiempo</label>
        <input onInput={(e) => setTiempo(e.target.value)} value={tiempo} />
      </div>
      <div>
        <label htmlFor="dificultad">Dificultad</label>
        <input
          onInput={(e) => setDificultad(e.target.value)}
          value={dificultad}
        />
      </div>
      <div>
        <label htmlFor="persones">Persones</label>
        <input onInput={(e) => setPersones(e.target.value)} value={persones} />
      </div>
      <div>
        <label htmlFor="tipo">Tipo</label>
        <input onInput={(e) => setTipo(e.target.value)} value={tipo} />
      </div>
      </div>
      }
 
 {mostrarIngredientes &&
      <h3>Ingredientes</h3>
 }
      {mostrarIngredientes &&
      ingredientes.map((ingrediente, index) => (
        <div key={index}>
          <label>Ingrediente{index + 1}:</label> {/* Hay que poner el nombre del ingrediente*/}
          <input
            type="text"
            value={ingrediente.id}
            onChange={(e) => idIngre(index, e.target.value)}
            placeholder="Nombre"
          />
          <input
            type="text"
            value={ingrediente.cantidad}
            onChange={(e) =>
              CantiIngre(index, e.target.value)
            }
            placeholder="Cantidad"
          />
          <input
            type="text"
            value={ingrediente.medida}
            onChange={(e) =>
              mediIngre(index, e.target.value)
            }
            placeholder="Medida"
          />
        </div>
      ))
    }
    {mostrarIngredientes &&
      <button type="button" onClick={addIngrediente}>
        Agregar Ingrediente
      </button>
}

      <button type="button" onClick={toggleMostrarIngredientes}>
        {mostrarIngredientes ? "Ocultar Ingredientes" : "Mostrar Ingredientes"}
      </button>
      <button type="submit">Registrar Receta</button>
    </form>
    </div>
    </>
  );
};

export default RegistroRecetaForm;
