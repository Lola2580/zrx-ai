import { CONFIG }
from "./config.js";

import {

saveMemory,
getLastMemory

}

from "./memory.js";

// LOCKED PERIOD

let lockedPeriod = null;

// MAIN AI

export async function runSmartAI(history){

try{

if(!history.length){

return null;

}

// LATEST RESULT

const latest =
history[0];

const completedPeriod =
parseInt(
latest.issueNumber
);

// NEXT PERIOD

const nextPeriod =
String(
completedPeriod + 1
);

// LOCK PREDICTION

if(
lockedPeriod === nextPeriod
){

return getLastMemory();

}

lockedPeriod =
nextPeriod;

// TREND ANALYSIS

let bigCount = 0;
let smallCount = 0;

history
.slice(0,10)
.forEach(item=>{

const number =
parseInt(item.number);

if(number >= 5){

bigCount++;

}else{

smallCount++;

}

});

// STREAK ANALYSIS

let streak = 1;

const firstResult =
parseInt(
history[0].number
) >= 5
? "BIG"
: "SMALL";

for(let i=1;i<5;i++){

const currentResult =
parseInt(
history[i].number
) >= 5
? "BIG"
: "SMALL";

if(
currentResult ===
firstResult
){

streak++;

}else{

break;

}

}

// HOT NUMBER

const hotMap = {};

history
.slice(0,20)
.forEach(item=>{

const n = item.number;

hotMap[n] =
(hotMap[n] || 0) + 1;

});

let hotNumber = 0;
let hotCount = 0;

for(const n in hotMap){

if(hotMap[n] > hotCount){

hotCount = hotMap[n];

hotNumber = n;

}

}

// AI DECISION

let prediction =
bigCount >= smallCount
? "BIG"
: "SMALL";

// REVERSAL LOGIC

if(
streak >=
CONFIG.REVERSAL_STREAK
){

prediction =
prediction === "BIG"
? "SMALL"
: "BIG";

}

// CONFIDENCE

let confidence =

CONFIG.MIN_CONFIDENCE +

Math.abs(
bigCount - smallCount
) * 5;

// STREAK BOOST

if(streak >= 4){

confidence += 10;

}

// LIMIT

if(
confidence >
CONFIG.MAX_CONFIDENCE
){

confidence =
CONFIG.MAX_CONFIDENCE;

}

// SIGNAL

let signal = "LOW";

if(confidence >= 90){

signal = "STRONG";

}else if(confidence >= 80){

signal = "NORMAL";

}

// IQ

const iq =
Math.floor(
170 + Math.random()*30
);

// MEMORY DATA

const predictionData = {

period:nextPeriod,

prediction,

confidence,

signal,

iq,

trend:

bigCount > smallCount
? "BIG"
: "SMALL",

streak:
`${firstResult} x${streak}`,

hotNumber,

status:"PENDING",

time:
new Date().toLocaleTimeString()

};

// SAVE MEMORY

saveMemory(
predictionData
);

// RETURN

return predictionData;

}catch(err){

console.log(

"SMART AI ERROR:",
err.message

);

return null;

}

}
