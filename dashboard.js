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

// CHECK

if(
!data.success
){

return;

}

// AI DATA

const ai =
data.prediction;

// UPDATE UI

document.getElementById(
"prediction"
).innerText =
ai.prediction;

document.getElementById(
"confidence"
).innerText =
ai.confidence + "%";

document.getElementById(
"signal"
).innerText =
ai.signal;

document.getElementById(
"iq"
).innerText =
ai.iq;

document.getElementById(
"period"
).innerText =
ai.period;

// HISTORY

renderHistory(
data.memory
);

}catch(err){

console.log(
"FRONTEND ERROR",
err
);

}

}

// HISTORY

function renderHistory(memory){

const history =
document.getElementById(
"history"
);

history.innerHTML = "";

memory.forEach(item=>{

history.innerHTML += `

<div class="history-item">

<div class="history-top">

<div>
${item.prediction}
</div>

<div>
${item.confidence}%
</div>

</div>

<div>
Period:
${item.period}
</div>

<div>
Signal:
${item.signal}
</div>

<div>
Status:
${item.status}
</div>

<div class="time">
${item.time}
</div>

</div>

`;

});

// TOTAL

document.getElementById(
"total"
).innerText =
memory.length;

}

// COUNTDOWN

function startCountdown(){

setInterval(()=>{

const now =
new Date();

let seconds =
now.getSeconds();

let remaining =
60 - seconds;

if(remaining < 10){

remaining =
"0" + remaining;

}

document.getElementById(
"countdown"
).innerText =
"00:" + remaining;

},1000);

}

// START

fetchAI();

startCountdown();

// AUTO REFRESH

setInterval(()=>{

fetchAI();

},5000);
