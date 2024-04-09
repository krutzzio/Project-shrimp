// npm install bcrypt mysql2 sequelize cors express cookie-parser jsonwebtoken multer


// Es defineix la configuració de sequelize
const { Sequelize, DataTypes } = require("sequelize"); // Importa la llibreria Sequelize

const bcrypt = require("bcrypt"); // Importa la llibreria bcrypt per a encriptar contrasenyes

const sequelize = new Sequelize("gamba", "root", "admin", {
    host: "localhost",
    //host: '192.168.1.133', //IP de la base de dades
    port: 3308,
    dialect: "mysql", // connectem a mysql
});

// Model per a la taula Projectes
const Usuario = sequelize.define("Usuario", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: { // no se si aquesta columna la voleu o no?
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localizacion:{
        type: DataTypes.STRING,// o INT si es CP????
        allowNull: false,
    },
    tipo_cuina: {
        type: DataTypes.ENUM('china','japonesa','india','mediterranea','mejicana'),
        allowNull: false,
    },
    grupo_alimento: {
        type: DataTypes.ENUM('vegetariano','vegano','niguna','sin gluten'),
        allowNull: false,
    }
});

// Model per a la taula Issues
const Restaurante = sequelize.define("Restaurante", {
    nombre_restaurante: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password_restaurante: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo_restaurante: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    numero:{
        type: DataTypes.STRING,// o INT si es CP????
        allowNull: false,
    },
    direccion:{
        type: DataTypes.STRING,// o INT si es CP????
        allowNull: false,
    },
    cp:{
        type: DataTypes.STRING,// o INT si es CP????
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_cuina: {
        type: DataTypes.ENUM('china','japonesa','india','mediterranea','mejicana'),
        allowNull: false,
    }
});

// Model per a la taula Receta
const Receta = sequelize.define("Receta", {
    nombre_receta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc_receta: {
        type: DataTypes.STRING,
        unique: true,
    },
    tipo_cocina: {
        type: DataTypes.ENUM('china','japonesa','india','mediterranea','mejicana'),
        allowNull: false,
        unique: true,
    },
});

// Model per a la taula Receta
const Ingrediente = sequelize.define("Ingrediente", {
    nombre_ingrediente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Model per a la taula Receta
const GrupoAlimento = sequelize.define("GrupoAlimento", {
    nombre_grupo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Model per a la taula Receta
const Promo = sequelize.define("Promo", {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    validada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

// Model per a la taula Receta
const TipoCocina = sequelize.define("TipoCocina", {
    nombre_tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Model per a la taula Receta
const Procedimiento = sequelize.define("Procedimiento", {
    numero_procedimiento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc_procedimiento: {
        type: DataTypes.STRING,
        unique: true,
    },
    foto_procedimiento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Model per a la taula Receta
const Receta_Ingrediente = sequelize.define("Receta_Ingrediente", {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});


// hook per encriptar la contrasenya abans de desar un nou usuari o restaurant
Usuario.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10); // Encripta la contrasenya amb bcrypt
    user.password = hashedPassword;
});

Restaurante.beforeCreate(async (restaurant) => {
    const hashedPassword = await bcrypt.hash(restaurant.password_restaurante, 10); // Encripta la contrasenya amb bcrypt
    restaurant.password_restaurante = hashedPassword;
});



// Definim les relacions

// Project.hasMany(Issue, { onDelete: 'CASCADE', hooks: true });  DE REFERNCIA PER SI ESTE QUE BORRAR ALGO EN CASCADA

Usuario.hasMany(Restaurante); // Un usuario puede seguir a muchos restaurantes
Restaurante.hasMany(Usuario); // Un restaurante puede seguir a muchos restaurantes

Receta.hasMany(Ingrediente); // Una receta puede tener varios ingredientes
Ingrediente.hasMany(Receta); // Un ingrediente puede ser usado por varias recetas

Usuario.hasMany(TipoCocina); // Un usuario puede tener varios tipos cocina
TipoCocina.hasMany(Usuario); // Un tipo de cocina lo pueden tener varios usuarios

Receta.belongsTo(TipoCocina); // Una receta tiene un unico tipo de cocina
TipoCocina.hasMany(Receta); // Un tipo de cocina pertence a varias recetas

Ingrediente.belongsTo(GrupoAlimento); // Un ingrediente tiene un unico grupo
GrupoAlimento.hasMany(Ingrediente); // Un grupo pertence a varios ingredientes

Promo.belongsTo(Usuario); // Una promo tiene un unico usuario
Usuario.hasMany(Promo); // Un usuario puede tener varias promos

Promo.belongsTo(Restaurante); // Una promo tiene un unico restaurante
Restaurante.hasMany(Promo); // Un restaurante puede tener varias promos

Procedimiento.belongsTo(Receta); // Un procedimineto tiene una unica receta
Receta.hasMany(Procedimiento); // Un receta puede tener varios procedimiento

Receta_Ingrediente.belongsTo(Receta); // Un procedimineto tiene una unica receta
Receta.hasMany(Receta_Ingrediente); // Un receta puede tener varios procedimiento

Receta_Ingrediente.belongsTo(Ingrediente); // Un procedimineto tiene una unica receta
Ingrediente.hasMany(Receta_Ingrediente); // Una receta puede tener varios procedimiento

GrupoAlimento.hasMany(Usuario) // Un grupo de alimento puede estar en muchos usuarios
Usuario.hasMany(GrupoAlimento) // Un usuario puede tener muchos grupos de alimentos

Restaurante.hasMany(Receta)// Un restaurante puede tener muchas recetas
Receta.belongsTo(Restaurante) // Un receta pertences a un solo restaurante
// connectem a base de dades
async function iniDB() {
    await sequelize.sync({ force: true });
}

// iniDB();

//Exportem els models
module.exports = {

    Receta,
    Usuario,
    Restaurante,
    Receta_Ingrediente,
    Ingrediente,
    Promo,
    Procedimiento,
    GrupoAlimento,
    TipoCocina,
    sequelize, // Per si vols utilitzar la instància de Sequelize per a altres operacions
};
