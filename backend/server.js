import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ZRX AI LIVE 🚀");
});

app.get("/api/predict", (req, res) => {
  res.json({
    success: true,
    prediction: {
      prediction: "BIG",
      confidence: 92
    }
  });
});

app.listen(process.env.PORT || 3000);
