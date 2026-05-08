const supabaseUrl = "https://bzvokldwbhgjqypiocco.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dm9rbGR3YmhnanF5cGlvY2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNDA5NDUsImV4cCI6MjA5MzgxNjk0NX0.ESR4HgtWgAB9GXYFL_dEFX45LHSaWv_gWDfpB2r6tAw";

const client =
supabase.createClient(
   supabaseUrl,
   supabaseKey
);

async function login(){

const username =
document.getElementById(
   "username"
).value;

const password =
document.getElementById(
   "password"
).value;

const message =
document.getElementById(
   "message"
);

message.innerText =
"Checking...";

const { data, error } =
await client
.from("users")
.select("*")
.eq("username", username)
.eq("password", password)
.single();

if(data){

message.innerText =
"Login Success 😎";

localStorage.setItem(
   "user",
   JSON.stringify(data)
);

setTimeout(()=>{

window.location.href =
"dashboard.html";

},1000);

}else{

message.innerText =
"Invalid Login ❌";

}
}