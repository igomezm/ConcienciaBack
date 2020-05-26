const express = require('express');
const router = express.Router();

//rutas
router.get('/', (req,res) => {
    res.render('index.html', {title: 'PRIMER EJEMPLO DE EJS EN MODULOS WEB'});
    });

router.get('/contact', (req,res) => {
res.render('contact.html', {title: 'pagina de contacto'});
    });


module.exports = router;