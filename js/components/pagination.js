import { getAllCompaniesInfo } from "../module/company-info.js";
import { fetchData } from "../module/generic.js";
import { getAllRockets,
     getRocketById } from "../module/rockets.js";
import { imageCapsule, imageRockets, videoCapsule } from "./card.js";
import { getCapsuleQuery } from "./filter.js";
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

const getRocketsId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let Rocket = await getRocketById(e.target.id);
    await clear();

    await informationRockets(Rocket.country, Rocket.description);
    await mainTitle(Rocket.name);
    await informationLaunchCostRocket(Rocket.cost_per_launch);
    await informationFirstFlightRocket(Rocket.first_flight);
    await informationWebRocket(Rocket.wikipedia);

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket);
    await tableRocketColum2(Rocket);

    await progressRocketWeight(Rocket);
    await progressPayloadWeights(Rocket);
    await progressHeightRocket(Rocket);
    await progressDiameterRocket(Rocket);
    await progressSecondStageDiameterRocket(Rocket);
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

const getCapsulesId = async(event)=>{
    if (event.target.dataset.page) {
        const paginationContainer = document.querySelector('#paginacion');
        paginationContainer.innerHTML = '';
        paginationContainer.appendChild(await paginationCapsules(Number(event.target.dataset.page)));
    }
    const capsuleItems = event.target.parentElement.children;
    for (const item of capsuleItems) {
        item.classList.remove('activo');
    }
    event.target.classList.add('activo');
    const selectedCapsuleId = event.target.id;
    
    const capsuleData = await fetchData(getCapsuleQuery(selectedCapsuleId), 'capsules');
    const { docs: selectedCapsule } = capsuleData;
    await load();
    await mainTitle(selectedCapsule[0].serial);
    await tableCapsuleColumn1(selectedCapsule[0]);
    await tableCapsuleColumn2(selectedCapsule[0]);
    await imageCapsule(selectedCapsule[0]);
    await informationCapsule(selectedCapsule[0].last_update);
    const { launches: [{ links: { webcast } }] } = selectedCapsule[0];
    await informationWebCapsule(webcast, 'Youtube');
    const { launches: [{ links: { presskit } }] } = selectedCapsule[0];
    await informationWebCapsule(presskit, 'SpaceX');
    const { launches: [{ links: { wikipedia } }] } = selectedCapsule[0];
    await informationWebCapsule(wikipedia, 'Wikipedia');
    const { launches: [{ links: { youtube_id } }] } = selectedCapsule[0];
    await videoCapsule(youtube_id, '#section__information__1');
}

export const paginationCapsules = async(page=1, limit=4)=>{  
    const { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page, limit), 'capsules');

    const paginationContainer = Object.assign(document.createElement('div'), {
        classList: ['buttom__paginacion'],
    });

    const createPaginationLink = (label, pageNumber) => {
        const link = Object.assign(document.createElement('a'), {
        href: '#',
        textContent: label,
        dataset: { page: pageNumber },
        onclick: getCapsulesId,
        });
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
}

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
  