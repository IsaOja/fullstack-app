const express = require("express"),
  path = require("path");
const { getArtists } = require("./db");

const app = express(),
  port = process.env.PORT || 3000;

app.get("/api/artists", async (_req, res) => {
  try {
    const artists = await getArtists();
    res.json({ artists });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load artists" });
  }
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
