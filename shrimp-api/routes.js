const express = require('express'); // Importa la llibreria Express per gestionar les rutes
const router = express.Router(); // Crea un router d'Express
const bcrypt = require('bcrypt'); // Importa la llibreria bcrypt per a encriptar contrasenyes
const jwt = require('jsonwebtoken'); // Importa la llibreria jsonwebtoken per a generar i verificar JWT
const models = require('./models'); // Importa els models de dades
// const multer  = require('multer');
// const fs = require('fs');
// const path = require('path');


const SECRET_KEY = "vols-que-et-punxi-amb-un-punxo";

const {
  // Usuario_Restaraunte,

  Usuario, Restaurante,
  Receta,TipoCocina,Procedimiento

} = require('./models'); // Importa els models de dades

const {
  updateRestItem,
  createItem,
  updateItem,
  deleteItem,
  readItem,
  readItems,
  readItemForUser,
  readItemsForUser,
  deleteItemForUser
} = require('./generics'); // Importa les funcions per a realitzar operacions CRUD genèriques







// AUTENTICACIO


// Middleware per verificar el JWT en la cookie


// banners: https://manytools.org/hacker-tools/ascii-banner/

/*
██╗   ██╗    ███████╗    ███████╗    ██████╗     ███████╗
██║   ██║    ██╔════╝    ██╔════╝    ██╔══██╗    ██╔════╝
██║   ██║    ███████╗    █████╗      ██████╔╝    ███████╗
██║   ██║    ╚════██║    ██╔══╝      ██╔══██╗    ╚════██║
╚██████╔╝    ███████║    ███████╗    ██║  ██║    ███████║
 ╚═════╝     ╚══════╝    ╚══════╝    ╚═╝  ╚═╝    ╚══════╝                                  
*/

// Operacions CRUD per als Usuaris
router.get('/users', async (req, res) => await readItems(req, res, Usuario)); // Llegeix tots els usuaris
router.get('/users/:id', async (req, res) => await readItem(req, res, Usuario)); // Llegeix un usuari específic
router.put('/users/:id', async (req, res) => await updateItem(req, res, Usuario)); // Actualitza un usuari
router.delete('/users/:id', async (req, res) => await deleteItem(req, res, Usuario)); // Elimina un usuari



// LOGIN
// Endpoint per iniciar sessió d'un usuari
router.post('/loginUser', async (req, res) => {
  const { correo, password } = req.body; // Obté l'correo i la contrasenya de la petició
  try {
    const user = await Usuario.findOne({ where: { correo } }); // Cerca l'usuari pel seu email
    if (!user) {
      return res.status(404).json({ error: 'User no trobat' }); // Retorna error 404 si l'usuari no es troba
    }
    const passwordMatch = await bcrypt.compare(password, user.password); // Compara la contrasenya proporcionada amb la contrasenya encriptada de l'usuari
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Password incorrecte' }); // Retorna error 401 si la contrasenya és incorrecta
    }
    const token = jwt.sign({ userId: user.id, nombre: user.nombre }, SECRET_KEY, { expiresIn: '2h' }); // Genera un token JWT vàlid durant 2 hores
    res.cookie('token', token, { httpOnly: false, maxAge: 7200000 }); // Estableix el token com una cookie
    res.json({ nombre: user.nombre, id: user.id }); // Retorna missatge d'èxit
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna error 500 amb el missatge d'error
  }
});


// REGISTER crea usuari
// Endpoint per registrar un usuari
router.post('/registerUser', async (req, res) => {
  try {
    const { nombre, apellidos, correo, password, localizacion, tipos_cocina, dieta } = req.body; // Obté el nom, email i contrasenya de la petició
    if (!nombre || !apellidos || !correo || !password || !localizacion) {
      return res.status(400).json({ error: 'Nombre, apellido, email, password y localización son requeridos' }); // Retorna error 400 si no es proporcionen el nom, email o contrasenya
    }
    const existingUser = await Usuario.findOne({ where: { correo } }); // Comprova si l'email ja està registrat
    if (existingUser) {
      return res.status(400).json({ error: 'Email ja existeix' }); // Retorna error 400 si l'email ja està registrat
    }
    const user = await Usuario.create({ nombre, apellidos, correo, password, localizacion, tipos_cocina, dieta }); // Crea l'usuari amb les dades proporcionades

    res.status(201).json({id: user.id, nombre: user.nombre, apellidos: user.apellidos, email: user.email, localizacion: user.localizacion,}); // Retorna l'usuari creat amb el codi d'estat 201 (Creat)
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna error 500 amb el missatge d'error
  }
});

///
////
////
////

////

//RESTAURANTE

router.get('/restaurant', async (req, res) => await readItems(req, res, Restaurante)); // Llegeix tots els restaurants
router.get('/restaurant/:id', async (req, res) => await readItem(req, res, Restaurante)); // Llegeix un restaurant específic
router.put('/restaurant/:id', async (req, res) => await updateItem(req, res, Restaurante)); // Actualitza un restaurant
router.delete('/restaurant/:id', async (req, res) => await deleteItem(req, res, Restaurante)); // Elimina un restaurant

//REGISTER
router.post('/registerRest', async (req, res) => {
  try {
    const { nombre_restaurante, correo_restaurante, password_restaurante, numero, direccion, cp, telefono, descripcio, tipos_cocina} = req.body; // Obté el nom, email i contrasenya de la petició
    if (!nombre_restaurante || !cp || !correo_restaurante || !password_restaurante) {
      return res.status(400).json({ error: 'Nombre, cp, email, password y localización son requeridos' }); // Retorna error 400 si no es proporcionen el nom, email o contrasenya
    }
    const existingRest = await Restaurante.findOne({ where: { correo_restaurante } }); // Comprova si l'email ja està registrat
    if (existingRest) {
      return res.status(400).json({ error: 'Email ja existeix' }); // Retorna error 400 si l'email ja està registrat
    }
    const restaurant = await Restaurante.create({ nombre_restaurante, telefono, correo_restaurante, password_restaurante, descripcio, numero, tipos_cocina, direccion, cp }); // Crea l'usuari amb les dades proporcionades

    res.status(201).json({
      id: restaurant.id, 
      nombre_restaurante: restaurant.nombre_restaurante, 

    }); // Retorna l'usuari creat amb el codi d'estat 201 (Creat)
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna error 500 amb el missatge d'error
  }
});
//LOGIN
router.post('/loginRest', async (req, res) => {
  const { correo_restaurante, password_restaurante } = req.body; // Obté l'correo i la contrasenya de la petició
  try {
    const restaurant = await Restaurante.findOne({ where: { correo_restaurante } }); // Cerca l'usuari pel seu email
    if (!restaurant) {
      return res.status(404).json({ error: 'User no trobat' }); // Retorna error 404 si l'usuari no es troba
    }
    const passwordMatch = await bcrypt.compare(password_restaurante, restaurant.password_restaurante); // Compara la contrasenya proporcionada amb la contrasenya encriptada de l'usuari
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Password incorrecte' }); // Retorna error 401 si la contrasenya és incorrecta
    }
    const token = jwt.sign({ id: restaurant.id, nombre: restaurant.nombre_restaurante }, SECRET_KEY, { expiresIn: '2h' }); // Genera un token JWT vàlid durant 2 hores
    res.cookie('token', token, { httpOnly: false, maxAge: 7200000 }); // Estableix el token com una cookie
    res.json({ nombre: restaurant.nombre_restaurante, id: restaurant.id }); // Retorna missatge d'èxit
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna error 500 amb el missatge d'error
  }
});



/////////
/////////
/////////
/////////
/////////
/////////

//RECETAS

router.get('/home/:restId/recipes/:id', async (req, res) => await readItems(req, res, Receta)); // Llegeix tots els restaurants
router.get('/recipes/:id', async (req, res) => await readItem(req, res, Receta)); // Llegeix un recipes específic
router.put('/home/:restId/recipes/:id', async (req, res) => {
 try{
  const restaurantId = req.params.restId
  const recipesId = req.params.restId
  await updateRestItem(req, res, Receta, restaurantId, recipesId)}
  catch(error) {
    return res.status(404).json({ error: 'Tipo de cocina no encontrado' });
  }
}); // Actualitza un recipes
router.delete('/recipes/:id', async (req, res) => await deleteItem(req, res, Receta)); // Elimina un recipes

///CREAR RECETA
router.post('/home/:restId/registerReceta', async (req, res) => {
  try {
    const { nombre_receta, desc_receta, TipoCocinaId, procedimientos, personas, tiempo, dificultad, tipo} = req.body;
    const restauranteId = req.params.restId;
    
    // Verifica que todos los campos requeridos estén presentes en la solicitud
    if (!nombre_receta || !desc_receta || !TipoCocinaId || !procedimientos || procedimientos.length === 0) {
      return res.status(400).json({ error: 'Nombre, descripción, TipoCocinaId y al menos un procedimiento son requeridos' });
    }
    
    const tipoCocina = await TipoCocina.findByPk(TipoCocinaId);
    if (!tipoCocina) {
      return res.status(404).json({ error: 'Tipo de cocina no encontrado' });
    }

    // Crea la receta con los datos proporcionados
    const receta = await Receta.create({ nombre_receta, desc_receta, TipoCocinaId, RestauranteId: restauranteId, personas, tiempo, dificultad, tipo});

    // Crea los procedimientos asociados a la receta
    const procedimientosCreados = [];
    for (const procedimiento of procedimientos) {
      const nuevoProcedimiento = await Procedimiento.create({
        numero_procedimiento: procedimiento.numero_procedimiento,
        desc_procedimiento: procedimiento.desc_procedimiento,
        foto_procedimiento: procedimiento.foto_procedimiento,
        RecetumId: receta.id // Asociar el procedimiento con la receta recién creada
      });
      procedimientosCreados.push(nuevoProcedimiento);
    }
    
    // Devuelve la receta junto con los procedimientos creados
    res.status(201).json({
      receta: {
        id: receta.id,
        nombre_receta: receta.nombre_receta,
        desc_receta: receta.desc_receta,
        TipoCocinaId: receta.TipoCocinaId,
        RestauranteId: restauranteId
      },
      procedimientos: procedimientosCreados
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/////////
/////////
/////////
//PROMOSSSSS
/////////
/////////
/////////

const { Promo } = require('./models');

// Obtener todas las promos
router.get('/promos', async (req, res) => {
  try {
    const promos = await Promo.findAll();
    res.json(promos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las promos' }); 
  }
});

// Obtener una promo por ID
router.get('/promos/:id', async (req, res) => {
  try { 
    const promo = await Promo.findByPk(req.params.id);
    if(!promo) {
      return res.status(404).json({ message: 'Promo no encontrada' });
    }
    res.json(promo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la promo' });
  }
});

// Crear una nueva promo
router.post('/promos', async (req, res) => {
  try {
    const promo = await Promo.create(req.body);
    res.status(201).json(promo); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la promo' });
  }  
});

// Actualizar una promo
router.put('/promos/:id', async (req, res) => {
  try {
    const promo = await Promo.findByPk(req.params.id);
    if(!promo) {
      return res.status(404).json({ message: 'Promo no encontrada' });
    }
    await promo.update(req.body);
    res.json(promo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la promo' }); 
  }
});

// Eliminar una promo
router.delete('/promos/:id', async (req, res) => {
  try {
    const promo = await Promo.findByPk(req.params.id);
    if(!promo) {
      return res.status(404).json({ message: 'Promo no encontrada' });
    }
    await promo.destroy();
    res.json({ message: 'Promo eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la promo' });
  }
});





module.exports = router; // Exporta el router amb les rutes definides