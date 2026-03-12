import Database from "better-sqlite3";

const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS shipments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  trackingNumber TEXT,
  origin TEXT,
  destination TEXT,
  status TEXT,
  progress INTEGER,
  location TEXT
);
`);

export default db;