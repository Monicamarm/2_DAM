//requerir todos los modulos
import express from 'express';
import ejs from 'ejs';

import {dirname, join} from 'path';
import { fileURLToPath} from 'url';
const __dirname =dirname (fileURLToPath(import.meta.url))

//inicializar módulos
const app = express();

//configuraciones
  //crear servidor
  app.listen(4000)
  console.log('El servidor funciona en el puerto 4000');
  // configurar el motor de plantilla EJS
  app.set('views', join(__dirname, 'views'))
  console.log(__dirname, 'views');
  app.set('view engine', 'ejs');

//Rutas de las páginas
app.get('/', (req,res)=> {res.render('index' ,{title:'Inicio'})})
app.get('/Registro', (req,res)=> {res.render('Registro' ,{title:'Registro'})})
app.get('/crud', (req,res)=> {res.render('crud' ,{title:'Crud'})})
app.get('/login', (req,res)=> {res.render('login' ,{title:'Login'})})

console.log('Nodemon!!');
