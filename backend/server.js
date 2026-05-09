import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {

res.json({

success: true,
message: "🚀 ZRX AI Running"

});

});

app.get("/api/predict", (req, res) => {

res.json({

success: true,

prediction: {

period: "12345",

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
