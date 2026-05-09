import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ZRX AI LIVE 🚀");
});

app.get("/health", (req, res) => {
  res.send("OK");
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
