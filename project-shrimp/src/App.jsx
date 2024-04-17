import { useState } from "react";

const RegistroRecetaForm = () => {
  const [nombreReceta, setNombreReceta] = useState("");
  const [descripcionReceta, setDescripcionReceta] = useState("");
  const [tipoCocinaId, setTipoCocinaId] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [tipo, setTipo] = useState("");
  const [persones, setPersones] = useState("");
  const [photo, setPhotos] = useState("");
  const [procedimientos, setProcedimientos] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [fotosProcedimiento, setFotosProcedimiento] = useState([]);

  const addProcedimiento = (e) => {
    setProcedimientos([
      ...procedimientos,
      {
        desc_procedimiento: "",
        numero_procedimiento: procedimientos.length + 1,
        foto_procedimiento:""

      },
    ]);
  };

  const addIngrediente = () => {
    setIngredientes([
      ...ingredientes,
      {
        nombre:"",
        medida: "",
        cantidad: "",

      },
    ]);
  };

  const registroReceta = (e) => {
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
      ingredientes: ingredientes,
      foto_receta: photo
    };
    console.log(recetaData)

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

  const DescProcedimiento = (index, value) => {
    const nuevosProcedimientos = [...procedimientos];
    nuevosProcedimientos[index].desc_procedimiento = value;
    setProcedimientos(nuevosProcedimientos);
  };
  const CantiIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].cantidad = value;
    setIngredientes(nuevosIngredientes);
  };

  const ImgProcedimiento = (index, file) => {
    const nuevosImg = [...procedimientos];
    nuevosImg[index].foto_procedimiento = file;
    console.log(nuevosImg[index].foto_procedimiento)
    setProcedimientos(nuevosImg);
  };

  const mediIngre = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index].medida = value;
    setIngredientes(nuevosIngredientes);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]; // Obtiene el archivo de imagen seleccionado
    const fileName = file.name; // Obtiene el nombre del archivo
    const photoUrl = `http://localhost:3000/api/uploads/${fileName}`; // Construye la URL deseada
  
    // Ahora puedes usar photoUrl según sea necesario, como guardarla en el estado
    setPhotos(photoUrl);
  };





  return (
    <form onSubmit={registroReceta}>
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
        <label htmlFor="photo">Imatge</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
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
                DescProcedimiento(index, e.target.value)
              }
              placeholder="Descripción del paso"
            />
            <input
              type="file"
              // value={procedimiento.foto_procedimiento}
              accept="image/*"
              onChange={(e) =>
                ImgProcedimiento(index, e.target.files[0])
              }
              placeholder="URL de la imagen"
            />
          </div>
        ))}
        <button type="button" onClick={addProcedimiento}>
          Agregar Procedimiento
        </button>
      </div>
      <h3>Ingredientes</h3>
      {ingredientes.map((ingrediente, index) => (
        <div key={index}>
          <label>Ingrediente{index + 1}:</label> {/* Hay que poner el nombre del ingrediente*/}
          <input
            type="text"
            value={ingrediente.IngredienteId}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
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
      ))}
      <button type="button" onClick={addIngrediente}>
        Agregar Ingrediente
      </button>
      <button type="submit">Registrar Receta</button>
    </form>
  );
};

export default RegistroRecetaForm;
