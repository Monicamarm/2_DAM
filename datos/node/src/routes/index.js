import { Router } from 'express'
const router = Router();

//Rutas de las páginas
router.get('/', (req,res)=> {res.render('index' ,{title:'Inicio'})})
router.get('/Registro', (req,res)=> {res.render('Registro' ,{title:'Registro'})})
router.get('/crud', (req,res)=> {res.render('crud' ,{title:'Crud'})})
router.get('/login', (req,res)=> {res.render('login' ,{title:'Login'})})

export default router;