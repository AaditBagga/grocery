const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes

const prices = {
  Apple: 1.0,
  Banana: 0.5,
  Bread: 2.5,
  Milk: 3.0,
  // Add more items and their prices here
};

app.get('/api/getPrice/:itemName', (req, res) => {
  const itemName = req.params.itemName;
  const price = prices[itemName];
  if (price !== undefined) {
    res.json({ price });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
