require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');


const PORT = process.env.PORT;



app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

//Servir contenido estatico

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Leonardo',
        titulo: 'Curso de Node'
    });
});


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Leonardo',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Leonardo',
        titulo: 'Curso de Node'
    });
});



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});