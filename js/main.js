import {
    load, 
    paginationCapsules, 
    paginationCompany, 
    //paginationLaunches, 
    //paginationCrew, 
    paginationRockets
} from "./components/pagination.js";
import { getAllCompaniesInfo } from "./module/company-info.js";
import { getAllCores } from "./module/cores.js";

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

// let capsules = document.querySelector("#capsules")
// capsules.addEventListener("click", async(e)=>{
//     await footerSelect(e, capsules)
//     let paginacion = document.querySelector("#paginacion");
//     paginacion.innerHTML = ""
//     paginacion.append(await paginationCapsules())
// });

let company = document.querySelector("#company")
company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    //paginacion.append(await paginationCapsules())
    paginacion.append(await paginationCompany())
});

// let launches = document.querySelector("#launches")
// launches.addEventListener("click", async(e)=>{
//     await footerSelect(e, launches)
//     let paginacion = document.querySelector("#paginacion");
//     paginacion.innerHTML = ""
//     //paginacion.append(await paginationCapsules())
//     paginacion.append(await paginationLaunches());
// });

// let crew = document.querySelector("#crew")
// crew.addEventListener("click", async(e)=>{
//     await footerSelect(e, crew)
//     let paginacion = document.querySelector("#paginacion");
//     paginacion.innerHTML = ""
//     //paginacion.append(await paginationCapsules())
//     paginacion.append(await paginationCrew());
// });

console.log(await getAllCompaniesInfo());
console.log(await getAllCores());

company.click();