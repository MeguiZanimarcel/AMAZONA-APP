//npm i express
//npm i --save-dev nodemon
import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products' ,(req,res) => {
    res.send(data.products);
});

app.get('/' ,(req,res) =>{
res.send('Serveur En Marche');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})