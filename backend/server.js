import express from "express";

const app = express();

app.get("/", (req, res) => {

res.send("ZRX AI Backend Running 🚀");

});

app.get("/api/predict", (req, res) => {

res.json({

success: true,

prediction: {

period: "123456",

prediction: "BIG",

confidence: 92,

signal: "STRONG",

iq: 188,

trend: "BIG",

streak: "BIG x3",

hotNumber: 7,

status: "PENDING",

time: new Date()

},

memory: []

});

});

const PORT =
process.env.PORT || 3000;

app.listen(PORT, () => {

console.log(
`🚀 Server Running On ${PORT}`
);

});
