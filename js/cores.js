import { getAllCores } from "./module/cores.js";

document.addEventListener("DOMContentLoaded",  async()=>{
    const params = new URLSearchParams(location.search);
    let receivedAllCores = await getAllCores();
    console.log(receivedAllCores);
});