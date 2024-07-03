import { getAllRockets, getRocketById } from "./module/rockets.js";
import {
    load, 
    paginationCapsules, 
    paginationRockets
} from "./components/pagination.js";
import { getAllCapsules } from "./module/capsules.js";

//console.table(await getAllRockets());
//console.table(await getRocketById("5e9d0d95eda69955f709d1eb"));
const headerRockets = document.querySelector(".header");
const mainOverview = document.querySelector(".main__overview");
const mainDescriptionLeft = document.querySelector(".main__description__left");
// document.addEventListener("DOMContentLoaded",  async()=>{
//     const params = new URLSearchParams(location.search);
    
//     let receivedAllRocket = await getAllRockets();
//     let loadImageInnerMainOverview = '';
//     console.log(receivedAllRocket);
//     headerRockets.innerHTML = `<h1>${receivedAllRocket[0].name}</h1>`;
//     //mainDescriptionLeft.innerHTML = 
//     // receivedAllRocket[0].flickr_images.forEach(individualImage => {
//     //     loadImageInnerMainOverview += `<img src="${individualImage}" alt="" referrerpolicy="no-referrer">`
//     // });
//     //mainOverview.innerHTML = loadImageInnerMainOverview;
// });

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}

let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
});

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
});

capsules.click();