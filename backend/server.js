const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// In-memory DB simulation
const recipes = [
  { id: 1, name: 'Happy Salad', mood: 'happy', details: 'A bright and fresh salad to match your happy mood.' },
  { id: 2, name: 'Comfort Soup', mood: 'sad', details: 'Warm and cozy soup to lift your spirits.' },
  { id: 3, name: 'Energizing Smoothie', mood: 'energetic', details: 'A smoothie packed with vitamins and energy.' },
];

// POST /api/mood - Receive mood input
app.post('/api/mood', (req, res) => {
  const { mood } = req.body;
  if (!mood) {
    return res.status(400).json({ error: 'Mood is required' });
  }
  // In a real app, process mood and user context
  const recommendedRecipes = recipes.filter(r => r.mood === mood.toLowerCase());
  res.json({ mood, recommendedRecipes });
});

// GET /api/recipe/:id - Get recipe details
app.get('/api/recipe/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  res.json(recipe);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
