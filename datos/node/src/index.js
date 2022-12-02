//requerir todos los modulos
import express from 'express';
import ejs from 'ejs';

import routes from './routes/index.js'

import {dirname, join} from 'path';
import { fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))

//inicializar módulos
const app = express();

//configuraciones
  //crear servidor
  app.listen(4000)
  console.log('El servidor funciona en el puerto 4000');
  // configurar el motor de plantilla EJS
  app.set('views', join(__dirname, 'views'))
  app.set('view engine', 'ejs');
  //configurar routes
  app.use(routes);
  
  //configurar estilos css
  app.use(express.static(join(__dirname,'public')));

console.log('Nodemon!!');
