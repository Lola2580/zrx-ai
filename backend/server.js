import express from "express";

const app = express();

// IMPORTANT

app.disable("x-powered-by");

// ROOT ROUTE

app.get("/", (req, res) => {

res.status(200).send(
"ZRX AI LIVE 🚀"
);

});

// TEST API

app.get("/api/predict", (req, res) => {

res.status(200).json({

success: true,

prediction: {

prediction: "BIG",

confidence: 92

}

});

});

// HEALTHCHECK

app.get("/health", (req, res) => {

res.status(200).send("OK");

});

// PORT

const PORT =
process.env.PORT || 8080;

// VERY IMPORTANT

const HOST = "0.0.0.0";

// START

app.listen(PORT, HOST, () => {

console.log(
`🚀 Server Running On ${PORT}`
);

});
