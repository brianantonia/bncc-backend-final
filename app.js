const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ===== DATA SEMENTARA =====
let feedbacks = [];

// ===== CREATE FEEDBACK =====
app.post("/api/feedback", (req, res) => {
  const data = req.body;

  const newFeedback = {
    id: Date.now().toString(),
    name: data.name,
    email: data.email,
    eventName: data.eventName,
    division: data.division,
    rating: data.rating,
    comment: data.comment || "",
    suggestion: data.suggestion || "",
    createdAt: new Date().toISOString(),
    status: "open"
  };

  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback);
});

// ===== READ FEEDBACK =====
app.get("/api/feedback", (req, res) => {
  res.json(feedbacks);
});

// ===== UPDATE FEEDBACK =====
app.put("/api/feedback/:id", (req, res) => {
  const { id } = req.params;
  const index = feedbacks.findIndex(f => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Feedback not found" });
  }

  feedbacks[index] = { ...feedbacks[index], ...req.body };
  res.json(feedbacks[index]);
});

// ===== DELETE FEEDBACK =====
app.delete("/api/feedback/:id", (req, res) => {
  const { id } = req.params;
  feedbacks = feedbacks.filter(f => f.id !== id);
  res.json({ message: "Deleted" });
});

// ===== JALANKAN SERVER =====
app.listen(5000, () => console.log("Backend jalan di port 5000"));
