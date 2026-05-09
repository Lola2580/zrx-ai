import { CONFIG }
from "./config.js";

// AI MEMORY

let aiMemory = [];

// SAVE MEMORY

export function saveMemory(data){

aiMemory.unshift(data);

// LIMIT MEMORY

if(
aiMemory.length >
CONFIG.MAX_HISTORY
){

aiMemory.pop();

}

}

// GET MEMORY

export function getMemory(){

return aiMemory;

}

// LAST MEMORY

export function getLastMemory(){

return aiMemory[0] || null;

}

// CLEAR MEMORY

export function clearMemory(){

aiMemory = [];

}
