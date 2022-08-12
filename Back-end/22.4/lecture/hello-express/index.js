const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 1
app.use(bodyParser.json());

// const cors = require('cors'); // connect back to front
// app.use(cors()); // connect back to front

// app.get('/', (req, res) => {
//     res.send('Hello World!!!')
// })

// app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3002, () => {
//   console.log('Aplicação ouvindo na porta 3002');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World!'); // 4
// }


// Estructuring API

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

// app.get('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipe = recipes.find((r) => r.id === Number(id));

//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

//   res.status(200).json(recipe);
// });

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= Number(maxPrice));
  res.status(200).json(filteredRecipes); // http://localhost:3002/recipes/search?name=Lasanha&maxPrice=40
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// fetch(`http://localhost:3002/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30
//   })
// });

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params; // good practice
  const { name, price } = req.body; // good practice
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
}); 