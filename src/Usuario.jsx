import { useState, useEffect } from 'react';

function UserProfile() {

  const [userData, setUserData] = useState(null);


  useEffect(() => {
    fetch('http://localhost:3000/api/users/1') 
      .then(response => response.json())
      .then(data => 
        // console.log(data)
        setUserData(data)
    )
      .catch(error => console.error('Error fetching user data:', error));
      
  }, []);

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      {userData && (
        <div>
          <p><strong>Nombre:</strong> {userData.nombre}</p>
          <p><strong>Apellidos:</strong> {userData.apellidos}</p>
          <p><strong>Correo:</strong> {userData.correo}</p>
          <p><strong>Localización:</strong> {userData.localizacion}</p>
          <p><strong>Tipos de Cocina:</strong> {userData.tipos_cocina}</p>
          <p><strong>Dieta:</strong> {userData.dieta}</p>
          <p><strong>Imagen de Perfil:</strong></p>
          <img src={userData.foto_perfil} alt="Imagen de Perfil" />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
