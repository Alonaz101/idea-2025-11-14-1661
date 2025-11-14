import React, { useState } from 'react';

function App() {
  const [mood, setMood] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const submitMood = async () => {
    setError(null);
    try {
      const response = await fetch('/api/mood', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood }),
      });
      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }
      const data = await response.json();
      setRecipes(data.recommendedRecipes);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Mood-based Recipe Recommendation</h1>
      <input
        type="text"
        placeholder="Enter your mood (e.g. happy)"
        value={mood}
        onChange={handleMoodChange}
      />
      <button onClick={submitMood}>Get Recipes</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}: {recipe.details}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
