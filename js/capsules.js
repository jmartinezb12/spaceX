import { getAllCapsules } from "./module/capsules.js";

document.addEventListener("DOMContentLoaded",  async()=>{
    const params = new URLSearchParams(location.search);
    let receivedAllCapsules = await getAllCapsules();
    console.log(receivedAllCapsules);
});