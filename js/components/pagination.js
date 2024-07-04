import { getAllCapsules } from "../module/capsules.js";
import { getAllCompaniesInfo } from "../module/company-info.js";
import { fetchData } from "../module/generic.js";
import { getAllRockets,
     getRocketById } from "../module/rockets.js";
import { imageCapsule, imageCrew, imageRockets, videoCapsule } from "./card.js";
import { buildPaginationOptions, getCapsuleQuery, getlaunchesQuery, getRocketLaunchpadQuery } from "./filter.js";
import { informRocketEngineThrustSeaLevel, informRocketEngineThrustVacuum } from "./inform.js";
import { informationCapsule, informationCompany, informationCompany2, informationFirstFlightRocket,
     informationLaunchCostRocket,
     informationRockets,
     informationWebCapsule,
     informationWebRocket } from "./information.js";
import { progressDiameterRocket,
     progressHeightRocket,
     progressPayloadWeights,
     progressRocketWeight, 
     progressSecondStageDiameterRocket} from "./progressBar.js";
import { mainTableCompany, tableCapsuleColumn1, tableCapsuleColumn2,tableCompany1,tableCompany2,tableRocketColum1,
     tableRocketColum2 } from "./tables.js";
import { mainTitle } from "./title.js";

export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}

export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}

const getRocketsId = async(event)=>{
    event.preventDefault();

    const links = event.target.parentElement.children;
    for (const link of links) {
      link.classList.remove('activo');
    }
    event.target.classList.add('activo');

    const selectedRocketId = event.target.id;
    const rocketData = await getRocketById(selectedRocketId);
    await clear();

    await informationRockets(rocketData.country, rocketData.description);
    await mainTitle(rocketData.name);
    await informationLaunchCostRocket(rocketData.cost_per_launch);
    await informationFirstFlightRocket(rocketData.first_flight);
    await informationWebRocket(rocketData.wikipedia);

    await informRocketEngineThrustSeaLevel(rocketData.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(rocketData.engines.thrust_vacuum);
    await imageRockets(rocketData.flickr_images);

    await tableRocketColum1(rocketData);
    await tableRocketColum2(rocketData);

    await progressRocketWeight(rocketData);
    await progressPayloadWeights(rocketData);
    await progressHeightRocket(rocketData);
    await progressDiameterRocket(rocketData);
    await progressSecondStageDiameterRocket(rocketData);
}

export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a1.click();
    return div;
}

const getCapsulesId = async (event) => {
    if (event.target.dataset.page) {
        let paginationContainer = document.querySelector('#paginacion');
        paginationContainer.innerHTML = '';
        paginationContainer.append(await paginationCapsules(Number(event.target.dataset.page)));
    }
    
    let links = event.target.parentElement.children;
    for (let link of links) {
        link.classList.remove('activo');
    }
    event.target.classList.add('activo');
  
    let selectedCapsuleId = event.target.id;

    let capsuleData = await fetchData(getCapsuleQuery(selectedCapsuleId), 'capsules');
    let { docs: capsules } = capsuleData;
    console.log(capsuleData)
    await load();
    await mainTitle(capsules[0].serial);
    await tableCapsuleColumn1(capsules[0]);
    await tableCapsuleColumn2(capsules[0]);
    await imageCapsule(capsules[0]);
    await informationCapsule(capsules[0].last_update);
  
    const { launches: [{ links: { webcast } }] } = capsules[0];
    await informationWebCapsule(webcast, 'Youtube');
  
    const { launches: [{ links: { presskit } }] } = capsules[0];
    await informationWebCapsule(presskit, 'SpaceX');
  
    const { launches: [{ links: { wikipedia } }] } = capsules[0];
    await informationWebCapsule(wikipedia, 'Wikipedia');
  
    const { launches: [{ links: { youtube_id } }] } = capsules[0];
    await videoCapsule(youtube_id, '#section__information__1');
  };  

export const paginationCapsules = async (page = 1, limit = 4) => {
  let { docs, pagingCounter, totalPages, nextPage } = await fetchData(buildPaginationOptions(page, limit),"capsules");
  let paginationContainer = document.createElement('div');
  paginationContainer.classList.add('buttom__paginacion');
  
    let createPaginationLink = (label, pageNumber) => {
      let link = document.createElement('a');
      link.href = '#';
      link.textContent = label;
      link.dataset.page = pageNumber;
      link.onclick = getCapsulesId;
      return link;
    };
  
    paginationContainer.append(
      createPaginationLink('«', page === 1 ? totalPages : page - 1),
      ...docs.map((capsule) =>
        createPaginationLink(pagingCounter++, capsule.id)
      ),
      createPaginationLink('»', (page && nextPage) ? page + 1 : 1)
    );
    
  paginationContainer.children[1].click();
  return paginationContainer;
};  

export const paginationCompany = async () => {
    const company = await getAllCompaniesInfo();
  
    const paginationContainer = Object.assign(document.createElement('div'), {
      classList: ['buttom__paginacion'],
    });
  
    const createPaginationLink = (label) => {
      const link = Object.assign(document.createElement('a'), {
        href: '#',
        id: company.id,
        textContent: label,
        classList: ['pagination-link'],
        onclick: (e) => {
          for (const link of e.target.parentElement.children) {
            link.classList.remove('activo');
          }
          e.target.classList.add('activo');
        },
      });
      return link;
    };
  
    paginationContainer.appendChild(createPaginationLink('1'));
    paginationContainer.children[0].click();
    
    console.log(company.name);
    await Promise.all([        
        mainTitle(company.name),
        mainTableCompany(company),
        informationCompany(company),
        informationCompany2(company),
        tableCompany1(company),
        tableCompany2(company),
    ]);
  
    return paginationContainer;
  };
  
//   const getLaunches = async (event) => {
//     if (event.target.dataset.page) {
//       const paginationContainer = document.querySelector('#paginacion');
//       paginationContainer.innerHTML = '';
//       paginationContainer.append(await paginationLaunches(Number(event.target.dataset.page)));
//     }
  
//     const links = event.target.parentElement.children;
//     for (const link of links) {
//       link.classList.remove('activo');
//     }
//     event.target.classList.add('activo');
  
//     const selectedLaunchId = event.target.id;
  
//     const launchData = await fetchData(getRocketLaunchpadQuery(selectedLaunchId), 'launches');
//     const { docs: launches } = launchData;
//     await load();
//     await mainTitle(launches[0].name);
//     // await displayLaunchImage(launches[0]);
//     // const { links: { youtube_id } } = launches[0];
//     // await displayYoutubeVideo(youtube_id, '.section__information__1');
//     // await displayLaunchTable1(launches[0]);
//     // await displayLaunchTable2(launches[0]);
//     // await displayLaunchTable3(launches[0]);
//     // await displayLaunchTable4(launches[0]);
//     // await hideLoader();
//   };
  
//   export const paginationLaunches = async (currentPage = 1, pageSize = 4) => {
//     const { docs: launches, pagingCounter, totalPages, nextPage } = await fetchData(buildPaginationOptions(currentPage, pageSize), "launches");

//     const createLink = (text, page, clickHandler) => {
//         const link = document.createElement("a");
//         link.href = "#";
//         link.innerHTML = text;
//         link.dataset.page = page;
//         link.addEventListener("click", clickHandler);
//         return link;
//     };

//     const paginationContainer = document.createElement("div");
//     paginationContainer.classList.add("buttom__paginacion");

//     paginationContainer.appendChild(createLink("&laquo;", currentPage === 1 ? totalPages : currentPage - 1, getLaunches));

//     launches.forEach((launch, index) => {
//         const pageLink = createLink(pagingCounter + index, launch.id, getLaunches);
//         paginationContainer.appendChild(pageLink);
//     });

//     paginationContainer.appendChild(createLink("&raquo;", nextPage ? currentPage + 1 : 1, getLaunches));

//     paginationContainer.children[1]?.click();

//     return paginationContainer;
// };