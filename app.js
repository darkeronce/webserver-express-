const express = require('express');

const app = express();


const { hbs } = require('./hbs/helpers');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));


//Express HBS
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('index', {
        nombre: 'FeLIpe',
    }); 
});

app.get('/about', (req, res) => {

    res.render('about');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
 