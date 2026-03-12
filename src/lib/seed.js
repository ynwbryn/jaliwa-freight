import db from "./db.js";

db.prepare(`
INSERT OR REPLACE INTO shipments
(trackingNumber, status, origin, destination, progress)
VALUES (?, ?, ?, ?, ?)
`).run(
  "TEST123",
  "In Transit",
  "Dubai, UAE",
  "London, UK",
  70
);

console.log("Shipment added!");