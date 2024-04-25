import { useState } from 'react';

function CrearProcedimientos() {
  const [procedimientos, setProcedimientos] = useState([
    { numero_procedimiento: 1, desc_procedimiento: "", foto_procedimiento: null }
  ]);

  const handleChange = (index, event) => {
    const { name, value, files } = event.target;
    const newProcedimientos = [...procedimientos];
    if (files) {
      newProcedimientos[index][name] = files[0];
    } else {
      newProcedimientos[index][name] = value;
    }
    setProcedimientos(newProcedimientos);
  };

  const handleSubmit = async () => {
    try {
      const recetaId = 3; // ID de la receta a la que se agregarán los procedimientos

      const formData = new FormData();
      procedimientos.forEach((procedimiento, index) => {
        formData.append(`procedimientos[${index}][numero_procedimiento]`, procedimiento.numero_procedimiento);
        formData.append(`procedimientos[${index}][desc_procedimiento]`, procedimiento.desc_procedimiento);
        formData.append(`procedimientos[${index}][foto_procedimiento]`, procedimiento.foto_procedimiento);
      });

      const response = await fetch(`http://localhost:3000/api/home/${recetaId}/registerReceta`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al crear los procedimientos.');
      }

      const responseData = await response.json();
      console.log('Procedimientos creados:', responseData.procedimientos);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleAddProcedimiento = () => {
    setProcedimientos([...procedimientos, { numero_procedimiento: procedimientos.length + 1, desc_procedimiento: "", foto_procedimiento: "" }]);
  };

  return (
    <div>
      <h1>Crear Procedimientos</h1>
      {procedimientos.map((procedimiento, index) => (
        <div key={index}>
          <h3>Procedimiento {procedimiento.numero_procedimiento}</h3>
          <label>
            Descripción:
            <input
              type="text"
              name="desc_procedimiento"
              value={procedimiento.desc_procedimiento}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Subir imagen:
            <input
              type="file"
              name="photo"
              onChange={(e) => handleChange(index, e)}
            />
          </label>
        </div>
      ))}
      <button onClick={handleAddProcedimiento}>Agregar Procedimiento</button>
      <button onClick={handleSubmit}>Crear Procedimientos</button>
    </div>
  );
}

export default CrearProcedimientos;
