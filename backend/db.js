const dotenv = require("dotenv"),
  { Client } = require("pg");
dotenv.config();

async function getClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;
  const client = new Client({ connectionString: databaseUrl });
  await client.connect();
  return client;
}

async function getArtists() {
  const client = await getClient();
  try {
    const res = await client.query(
      "SELECT id, name, genre FROM artists ORDER BY id"
    );
    return res.rows;
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  } finally {
    await client.end();
  }
}

module.exports = { getArtists };
