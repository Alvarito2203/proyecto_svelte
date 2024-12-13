const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto_svelte',
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

// Ruta principal para probar conexión
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Ruta para guardar datos y calcular
app.post('/calcular', (req, res) => {
    const { peso, dias } = req.body;

    // Cálculos
    const pesoIdealMin = 57.2;
    const pesoIdealMax = 77.5;
    const pesoPerdido = (peso - pesoIdealMin).toFixed(1);

    const resultado = {
        pesoIdealMin,
        pesoIdealMax,
        pesoPerdido,
        diasEstimados: dias,
    };

    // Guardar en la base de datos
    const query = 'INSERT INTO calculos (peso, dias, resultado) VALUES (?, ?, ?)';
    db.query(query, [peso, dias, JSON.stringify(resultado)], (err) => {
        if (err) throw err;
        res.json(resultado);
    });
});

// Iniciar el servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
