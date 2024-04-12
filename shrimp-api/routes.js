const express = require('express'); // Importa la llibreria Express per gestionar les rutes
const router = express.Router(); // Crea un router d'Express
const bcrypt = require('bcrypt'); // Importa la llibreria bcrypt per a encriptar contrasenyes
const jwt = require('jsonwebtoken'); // Importa la llibreria jsonwebtoken per a generar i verificar JWT
<<<<<<< HEAD
=======
// const multer  = require('multer');
// const fs = require('fs');
// const path = require('path');

>>>>>>> origin/hannibal

const SECRET_KEY = "vols-que-et-punxi-amb-un-punxo";

const {
  // Usuario_Restaraunte,

  Usuario, Restaurante,
<<<<<<< HEAD
  Ingrediente,
=======
  Receta,TipoCocina
>>>>>>> origin/hannibal

} = require('./models'); // Importa els models de dades

const {
  createItem,
  updateItem,
  deleteItem,
  readItem,
  readItems,
  readItemForUser,
  readItemsForUser,
  deleteItemForUser
} = require('./generics'); // Importa les funcions per a realitzar operacions CRUD genèriques




<<<<<<< HEAD
=======



>>>>>>> origin/hannibal
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
<<<<<<< HEAD
// router.put('/users/:id', async (req, res) => await updateItem(req, res, User)); // Actualitza un usuari
=======
router.put('/users/:id', async (req, res) => await updateItem(req, res, Usuario)); // Actualitza un usuari
>>>>>>> origin/hannibal
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
<<<<<<< HEAD
    const { nombre, apellidos, correo, password, localizacion, tipo_cuina, grupo_alimento } = req.body; // Obté el nom, email i contrasenya de la petició
=======
    const { nombre, apellidos, correo, password, localizacion, tipos_cocina, grupo_alimento } = req.body; // Obté el nom, email i contrasenya de la petició
>>>>>>> origin/hannibal
    if (!nombre || !apellidos || !correo || !password || !localizacion) {
      return res.status(400).json({ error: 'Nombre, apellido, email, password y localización son requeridos' }); // Retorna error 400 si no es proporcionen el nom, email o contrasenya
    }
    const existingUser = await Usuario.findOne({ where: { correo } }); // Comprova si l'email ja està registrat
    if (existingUser) {
      return res.status(400).json({ error: 'Email ja existeix' }); // Retorna error 400 si l'email ja està registrat
    }
<<<<<<< HEAD
    const user = await Usuario.create({ nombre, apellidos, correo, password, localizacion, tipo_cuina, grupo_alimento }); // Crea l'usuari amb les dades proporcionades
=======
    const user = await Usuario.create({ nombre, apellidos, correo, password, localizacion, tipos_cocina, grupo_alimento }); // Crea l'usuari amb les dades proporcionades
>>>>>>> origin/hannibal

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

<<<<<<< HEAD
=======
router.get('/restaurant', async (req, res) => await readItems(req, res, Restaurante)); // Llegeix tots els restaurants
router.get('/restaurant/:id', async (req, res) => await readItem(req, res, Restaurante)); // Llegeix un restaurant específic
router.put('/restaurant/:id', async (req, res) => await updateItem(req, res, Restaurante)); // Actualitza un restaurant
router.delete('/restaurant/:id', async (req, res) => await deleteItem(req, res, Restaurante)); // Elimina un restaurant
>>>>>>> origin/hannibal

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


<<<<<<< HEAD
//INGREDIENTES

/* router.post('/registerIngrediente', async (req, res) => {
  try {
    const nuevoIngrediente = await Ingrediente.create(req.body);
    res.status(201).json(nuevoIngrediente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } */
=======

/////////
/////////
/////////
/////////
/////////
/////////

//RECETAS

router.get('/home/restId/recipes/:id', async (req, res) => await readItems(req, res, Receta)); // Llegeix tots els restaurants
router.get('/recipes/:id', async (req, res) => await readItem(req, res, Receta)); // Llegeix un recipes específic
router.put('/home/:restId/recipes/:id', async (req, res) => await updateItem(req, res, Receta)); // Actualitza un recipes
router.delete('/recipes/:id', async (req, res) => await deleteItem(req, res, Receta)); // Elimina un recipes

///CREAR RECETA

router.post('/home/:restId/registerReceta', async (req, res) => {
  try {
    
    const { nombre_receta, desc_receta, TipoCocinaId} = req.body;
    // Verifica si se proporcionó un ID de TipoCocina
    const restauranteId = req.params.restId;
    if (!nombre_receta || !desc_receta || !TipoCocinaId) {
      return res.status(400).json({ error: 'Nombre, descripción y TipoCocinaId son requeridos' });
    }
    // Verifica si el TipoCocinaId recibido es válido
    const tipoCocina = await TipoCocina.findByPk(TipoCocinaId);
    if (!tipoCocina) {
      return res.status(404).json({ error: 'Tipo de cocina no encontrado' });
    }
    // Crea la receta con los datos proporcionados
    const receta = await Receta.create({ nombre_receta, desc_receta, TipoCocinaId,RestauranteId: restauranteId });
    res.status(201).json({
      id: receta.id,
      nombre_receta: receta.nombre_receta,
      desc_receta: receta.desc_receta,
      TipoCocinaId: receta.TipoCocinaId,
      RestauranteId: restauranteId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
>>>>>>> origin/hannibal






module.exports = router; // Exporta el router amb les rutes definides