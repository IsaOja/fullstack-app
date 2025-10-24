import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadArtists() {
      try {
        setLoading(true);
        const res = await fetch("/api/artists");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setArtists(json.artists || []);
      } catch (err) {
        setError(err.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    }

    loadArtists();
  }, []);

  return (
    <div className="App-root">
      <header className="App-header">
        <h1>Artists</h1>
      </header>

      <main>
        {loading && <p>Loading artists…</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!loading && !error && (
          <ul className="artist-list">
            {artists.length === 0 && <li>No artists found</li>}
            {artists.map((a) => (
              <li key={a.id}>
                <strong>{a.name}</strong>
                {a.genre ? ` — ${a.genre}` : null}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
