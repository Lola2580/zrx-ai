// BACKEND API

const API_URL =
"https://zrx-ai-production.up.railway.app/api/predict";

// CHECK LOGIN

const user =
JSON.parse(
localStorage.getItem("user")
);

if(!user){

window.location.href =
"index.html";

}

// LOGOUT

function logout(){

localStorage.removeItem(
"user"
);

window.location.href =
"index.html";

}

// FETCH AI

async function fetchAI(){

try{

const response =
await fetch(API_URL);

const data =
await response.json();

console.log(data);

if(!data.success){

return;

}

const ai =
data.prediction;

// PREDICTION

const predictionBox =
document.getElementById(
"prediction"
);

predictionBox.innerText =
ai.prediction || "WAIT";

// COLOR CHANGE

predictionBox.classList.remove(
"big",
"small"
);

if(
ai.prediction === "BIG"
){

predictionBox.classList.add(
"big"
);

}else{

predictionBox.classList.add(
"small"
);

}

// CONFIDENCE

const confidence =
document.getElementById(
"confidence"
);

if(confidence){

confidence.innerText =
(ai.confidence || 0) + "%";

}

// PERIOD

const period =
document.getElementById(
"period"
);

if(period){

period.innerText =
Date.now();

}

// HISTORY

addHistory(
ai.prediction,
ai.confidence
);

}catch(err){

console.log(
"FRONTEND ERROR",
err
);

}

}

// HISTORY

function addHistory(
prediction,
confidence
){

const history =
document.getElementById(
"history"
);

const item =
document.createElement(
"div"
);

item.className =
"history-item";

item.innerHTML = `

<div class="history-top">

<div>
${prediction}
</div>

<div>
${confidence}%
</div>

</div>

<div class="time">
${new Date().toLocaleTimeString()}
</div>

`;

history.prepend(
item
);

// KEEP LAST 10

while(
history.children.length > 10
){

history.removeChild(
history.lastChild
);

}

// TOTAL

document.getElementById(
"total"
).innerText =
history.children.length;

}

// COUNTDOWN

function startCountdown(){

setInterval(()=>{

const now =
new Date();

let remaining =
59 - now.getSeconds();

if(
remaining < 0
){

remaining = 59;

}

document.getElementById(
"countdown"
).innerText =
"00:" +
String(
remaining
).padStart(
2,
"0"
);

},1000);

}

// START

fetchAI();

startCountdown();

// AUTO REFRESH

setInterval(()=>{

fetchAI();

},5000);
