const express = require('express');
const path = require('path');

const app = express();
const PORT = 3200; // Du kannst den Port ändern, falls nötig

// Statische Dateien im "public"-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// Standard-Route, um die index.html aus dem public-Ordner zu laden
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
