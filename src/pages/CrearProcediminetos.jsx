import { useState } from 'react';

export function CrearProcedimientos() {
  const [procedimientos, setProcedimientos] = useState([
    { numero_procedimiento: 1, desc_procedimiento: "", photo: null }
  ]);
  console.log(procedimientos)
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newProcedimientos = [...procedimientos];
    newProcedimientos[index][name] = value;
    setProcedimientos(newProcedimientos);
  };

  const handleChangePhoto = (index, event) => {
    const newProcedimientos = [...procedimientos];
    newProcedimientos[index].photo = event.target.files[0];
    setProcedimientos(newProcedimientos);
  };

  const handleSubmit = async () => {
    try {
      const recetaId = 1; // ID de la receta a la que se agregarán los procedimientos

      const formData = new FormData();
      procedimientos.forEach((procedimiento, index) => {
        formData.append(`procedimientos[${index}][numero_procedimiento]`, procedimiento.numero_procedimiento);
        formData.append(`procedimientos[${index}][desc_procedimiento]`, procedimiento.desc_procedimiento);
        formData.append("photo", procedimiento.photo);
      });

      const response = await fetch(`http://localhost:3000/api/home/${recetaId}/procedimientos`, {
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
    setProcedimientos([...procedimientos, { numero_procedimiento: procedimientos.length + 1, desc_procedimiento: "", photo: null }]);
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
              onChange={(e) => handleChangePhoto(index, e)}
            />
          </label>
        </div>
      ))}
      <button onClick={handleAddProcedimiento}>Agregar Procedimiento</button>
      <button onClick={handleSubmit}>Crear Procedimientos</button>
    </div>
  );
}
