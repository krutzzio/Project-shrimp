import { useState } from "react";

const RegistroRecetaForm = () => {
  const [nombreReceta, setNombreReceta] = useState("");
  const [descripcionReceta, setDescripcionReceta] = useState("");
  const [tipoCocinaId, setTipoCocinaId] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [tipo, setTipo] = useState("");
  const [persones, setPersones] = useState("");
  const [procedimientos, setProcedimientos] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [fotosProcedimiento, setFotosProcedimiento] = useState([]);

  const agregarProcedimientoInput = () => {
    setProcedimientos([
      ...procedimientos,
      {
        desc_procedimiento: "",
        foto_procedimiento:'',
        numero_procedimiento: procedimientos.length + 1,

      },
    ]);
  };

  const agregarIngreIn = () => {
    setIngredientes([
      ...ingredientes,
      {
        medida: "",
        cantidad: "",
      },
    ]);
  };

  const handleRegistroReceta = (e) => {
    e.preventDefault();

    const recetaData = {
      nombre_receta: nombreReceta,
      desc_receta: descripcionReceta,
      TipoCocinaId: tipoCocinaId,
      persones: persones,
      dificultad: dificultad,
      tipo: tipo,
      tiempo: tiempo,
      procedimientos: procedimientos,
      ingredientes: ingredientes
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaData),
    };

    fetch("http://localhost:3000/api/home/1/registerReceta", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al registrar receta:", error);
      });
  };
  const handleCambiarDescProcedimiento = (index, value) => {
    const nuevosProcedimientos = [...procedimientos];
    nuevosProcedimientos[index].desc_procedimiento = value;
    setProcedimientos(nuevosProcedimientos);
  };
  const cantiIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].cantidad = value;
    setIngredientes(nuevosIngredientes);
  };

  const mediIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].medida = value;
    setIngredientes(nuevosIngredientes);
  };

  const handleCambiarFotoProcedimiento = (index, file) => {
    const nuevasFotos = [...fotosProcedimiento];
    nuevasFotos[index] = file;
    setFotosProcedimiento(nuevasFotos);
  };
  

  return (
    <form onSubmit={handleRegistroReceta}>
      <div>
        <label htmlFor="nombreReceta">Nombre</label>
        <input
          onInput={(e) => setNombreReceta(e.target.value)}
          value={nombreReceta}
        />
      </div>
      <div>
        <label htmlFor="descripcionReceta">Descripcio</label>
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
      <label htmlFor="tipoCocinaId">Imatge</label>
      <input
              type="file"
              onChange={(e) => setTipoCocinaId(e.target.value)}
            />
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
      <div>
        <h3>Procedimiento</h3>
        {procedimientos.map((procedimiento, index) => (
          <div key={index}>
            <label>Paso {index + 1}:</label>
            <input
              type="text"
              value={procedimiento.desc_procedimiento}
              onChange={(e) =>
                handleCambiarDescProcedimiento(index, e.target.value)
              }
              placeholder="Descripción del paso"
            />
            <input
              type="file"
              // value={procedimiento.foto_procedimiento}
              accept="image/*"
              onChange={(e) =>
                handleCambiarFotoProcedimiento(index, e.target.files[0])
              }
              placeholder="URL de la imagen"
            />
          </div>
        ))}
        <button type="button" onClick={agregarProcedimientoInput}>
          Agregar Procedimiento
        </button>
      </div>
      <h3>Ingredientes</h3>
      {ingredientes.map((ingrediente, index) => (
          <div key={index}>
            <label>Ingrediente{index + 1}:</label> {/* Hay que poner el nombre del ingrediente*/ }
            <input
              type="text"
              value={ingrediente.cantidad}
              onChange={(e) =>
                cantiIngre(index, e.target.value)
              }
              placeholder="Descripción del paso"
            />
            <input
              type="text"
              value={ingrediente.medida}
              onChange={(e) =>
                mediIngre(index, e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={agregarIngreIn}>
          Agregar Ingrediente
        </button>
      <button type="submit">Registrar Receta</button>
    </form>
  );
};

export default RegistroRecetaForm;
