import { getAllCrews } from "./module/crew.js";

document.addEventListener("DOMContentLoaded",  async()=>{
    const params = new URLSearchParams(location.search);
    let receivedAllCrews = await getAllCrews();
    console.log(receivedAllCrews);
});