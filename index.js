
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let notes = [];

// GET: Display all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// POST: Create a new note
app.post('/notes', (req, res) => {
  const { text, title } = req.body;

  if (!text) {
    return res.status(400).json({
      error: 'text is required'
    });
  }

  const note = {
    id: notes.length + 1,
    title: title || 'Untitled',
    text
  };

  notes.push(note);

  res.status(201).json(note);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`SimpleNotes API running on port ${PORT}`);
});
