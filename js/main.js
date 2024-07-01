import { getAllRockets, getRocketById } from "./module/rockets.js";

//console.table(await getAllRockets());
console.table(await getRocketById("5e9d0d95eda69955f709d1eb"));

document.addEventListener("DOMContentLoaded",  async()=>{
    const params = new URLSearchParams(location.search);
    
});