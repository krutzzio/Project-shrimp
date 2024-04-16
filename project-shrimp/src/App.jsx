import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users/1');
        if (!response.ok) {
          console.log(response)
          throw new Error('Error al obtener el usuario');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h2>Perfil de Usuario</h2>
          <p>Nombre: {user.nombre}</p>
          <p>Apellidos: {user.apellidos}</p>
          <p>Correo: {user.correo}</p>
          <img src={`http://localhost:3000/api/${user.foto_perfil}`} alt="Foto de perfil" />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
