import { getAllDragons } from "./module/dragon.js";

document.addEventListener("DOMContentLoaded",  async()=>{
    const params = new URLSearchParams(location.search);
    let receivedAllDragon = await getAllDragons();
    console.log(receivedAllDragon);
});