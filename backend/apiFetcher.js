import axios from "axios";

import { CONFIG }
from "./config.js";

// FETCH HISTORY

export async function fetchHistory(){

try{

const response =
await axios.get(

CONFIG.HISTORY_API +

"?t=" + Date.now()

);

// SAFE CHECK

if(
response.data &&
response.data.data &&
response.data.data.list
){

return response.data.data.list;

}

return [];

}catch(err){

console.log(

"API FETCH ERROR:",
err.message

);

return [];

}

}
