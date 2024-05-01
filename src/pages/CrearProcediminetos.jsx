import { Button } from '@nextui-org/react';
import { useState } from 'react';

export function CrearProcedimientos() {
  const [procedimientos, setProcedimientos] = useState([
    { numero_procedimiento: 1, desc_procedimiento: "", photo: null }
  ]);
  const [imgProfiles, setImgProfiles] = useState([]);
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
    const newImgProfiles = [...imgProfiles];
  newImgProfiles[index] = URL.createObjectURL(event.target.files[0]);
  setImgProfiles(newImgProfiles);
  };

  const handleSubmit = async () => {
    try {
      const recetaId = 1; // Esto habra que pasarlo por la url o por props

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
      <article className="flex flex-col gap-4">
        <label
          className="w-fit text-sm font-semibold"
          htmlFor="personas"
        >
          Procedimientos
        </label>
        {procedimientos.map((procedimiento, index) => (
          <div key={index}>
            <div className="max-w-60 object-cover m-auto">
                <img src={imgProfiles[index]} alt="a" />
            </div>
            <div>
              <label className="text-primary text-sm font-black flex mb-2">
                <h1>Paso {procedimiento.numero_procedimiento}</h1>
              </label>
            </div>
            <article className='flex flex-col gap-4'>
              <label
                htmlFor="descripcion"
                className="w-fit text-sm font-semibold">
                Descripción
              </label>
              <textarea
                type="text"
                rows="4"
                className="bg-gray-200 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                placeholder="Explicación del paso"
                name="desc_procedimiento"
                value={procedimiento.desc_procedimiento}
                onChange={(e) => handleChange(index, e)}
              />
              <label
                
                className='w-fit text-sm font-semibold'>
                Subir imagen:
              </label>
              <input
                type="file"
                name="photo"
                className="w-full border border-gray-300 py-2 text-gray-700 leading-tight"
                id="imagen"
                onChange={(e) => handleChangePhoto(index, e)}
              />
            </article>

          </div>
        ))}
      </article>
      <article className='flex flex-col gap-6 my-6'>
        <Button className="w-44 bg-primary text-white" type="button" onClick={handleAddProcedimiento}>Agregar Procedimiento</Button>
        <Button onClick={handleSubmit}>Crear recetas</Button>
      </article>

    </div>
  );
}
