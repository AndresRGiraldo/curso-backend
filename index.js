const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.get('/new-route', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      prece: '$1000',
    },
    {
      name: 'producto 2',
      prece: '$2000',
    },
  ]);
});

app.get('/categories', (req, res) => {
  res.json([
    {
      name: 'categorie 1',
      products: [
        {
          name: 'producto 1',
          prece: '$1000',
        },
        {
          name: 'producto 2',
          prece: '$2000',
        },
      ],
    },
    {
      name: 'categorie 2',
      products: [
        {
          name: 'producto 1',
          prece: '$1000',
        },
        {
          name: 'producto 2',
          prece: '$2000',
        },
      ],
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'produnro 2',
    prece: '$2000',
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log(`My port ${port}`);
});
