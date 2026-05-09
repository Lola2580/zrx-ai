import express from "express";
import cors from "cors";

import { fetchHistory }
from "./apiFetcher.js";

import { runSmartAI }
from "./smartAI.js";

import { getMemory }
from "./memory.js";

const app = express();

// MIDDLEWARE

app.use(cors());

app.use(express.json());

// HOME ROUTE

app.get("/",(req,res)=>{

res.json({

success:true,

message:"ZRX AI Backend Running 🚀"

});

});

// MAIN AI ROUTE

app.get(
"/api/predict",
async(req,res)=>{

try{

// FETCH HISTORY

const history =
await fetchHistory();

// RUN AI

const prediction =
await runSmartAI(
history
);

// RESPONSE

res.json({

success:true,

serverTime:
new Date(),

prediction,

memory:getMemory()

});

}catch(err){

console.log(err);

res.status(500).json({

success:false,

message:"AI SERVER ERROR"

});

}

});

// MEMORY ROUTE

app.get(
"/api/memory",
(req,res)=>{

res.json({

success:true,

memory:getMemory()

});

});

// PORT

const PORT =
process.env.PORT || 3000;

// START SERVER

app.listen(PORT,()=>{

console.log(

`🚀 ZRX AI Running On Port ${PORT}`

);

});
