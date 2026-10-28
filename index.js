
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
