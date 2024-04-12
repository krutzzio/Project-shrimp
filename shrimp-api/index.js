const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
<<<<<<< HEAD


const app = express();

// Middlewares
// permet llegir contingut json en posts
app.use(express.json());
// cors necessari quan api/front son a servidors diferents
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
=======
const fs = require('fs');
const path = require('path');

const app = express();

const uploadDirectory = path.join(__dirname, 'uploads');

// Verificar si la carpeta de carga de archivos existe, si no, crearla
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}
// Middlewares
// permet llegir contingut json en posts
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// cors necessari quan api/front son a servidors diferents
>>>>>>> origin/hannibal
// permet llegir les cookies
app.use(cookieParser());

// Routes
app.use('/api', routes);

// iniciem servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});