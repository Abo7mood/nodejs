const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for your frontend domain
app.use(cors({
  origin: 'https://forms.odel.sa/' // Replace with your actual frontend domain
}));

// JSON Parser for incoming requests
app.use(express.json());

const PORT = process.env.PORT || 3000; // Use the environment PORT or 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
