const express = require('express');
const router = express.Router();
const multiplicarHelper = require('../helpers/multiplicar');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

router.get('/', (req, res) => {
  res.render('index', { title: 'Tabla de multiplicar' });
});


router.post('/multiplicar', async (req, res) => {
  try {
    const base = parseInt(req.body.base);

    if (isNaN(base)) {
      throw new Error('Por favor, ingrese un número válido.');
    }

    const resultado = await multiplicarHelper.multiplicar(base);

    res.render('index', { title: 'Tabla de multiplicar', resultado: { html: resultado } });
  } catch (error) {
    res.render('index', { error: error.message });
  }
});


// Función para generar una quiniela aleatoria
function generarQuiniela() {
  const quiniela = [];
  for (let i = 0; i < 15; i++) {
    const resultado = Math.floor(Math.random() * 3); // 0, 1, 2
    quiniela.push(resultado === 0 ? '1' : resultado === 1 ? 'X' : '2');
  }
  return quiniela;
}
module.exports = router;
