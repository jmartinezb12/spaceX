export const tableRocketColum1 = async (Rocket)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information rocket"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Rocket in service"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.active) ? "Active" : "Low" }`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Number of stages"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.stages}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of propellants"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.boosters}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Type"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.type}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.landing_legs.number}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.landing_legs.material) ? Rocket.landing_legs.material : ""}`
    div6.append(span6, strong6)

    div.append(div4, div1, div2, div3, div5, div6)
    information__table__1.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}
export const tableRocketColum2 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Engine information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Maximum power loss"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.engines.engine_loss_max) ? Rocket.engines.engine_loss_max : 0}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Engine availability"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.engines.layout) ? Rocket.engines.layout : ""}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of engines"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${(Rocket.engines.number) ? Rocket.engines.number : 0}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Stage 1 fuel"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${(Rocket.engines.propellant_1) ? Rocket.engines.propellant_1 : ""}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Stage 2 fuel"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${(Rocket.engines.propellant_2) ? Rocket.engines.propellant_2 : ""}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Type"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.engines.type) ? Rocket.engines.type : 0} ${(Rocket.engines.version) ? Rocket.engines.version : ""}`
    div6.append(span6, strong6)

    div.append(div6, div1, div2, div3, div4, div5)
    information__table__2.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}
export const tableCapsuleColumn1 = async (capsule) => {
    const container = document.querySelector('#information__table__1');
    container.innerHTML = '';
  
    const title = Object.assign(document.createElement('h3'), {
      textContent: 'Capsule Information',
    });
  
    const divider = Object.assign(document.createElement('hr'), {});
  
    const tableContainer = Object.assign(document.createElement('div'), {
      classList: ['table__container__1'],
    });
  
    ['Status', 'Type', 'Reuse Count'].forEach((label) => {
      const row = document.createElement('div');
  
      const labelElement = Object.assign(document.createElement('span'), {
        textContent: label,
      });
  
      const valueElement = Object.assign(document.createElement('strong'), {
        textContent: capsule[label.toLowerCase().replace(' ', '_')],
      });
  
      row.append(labelElement, valueElement);
      tableContainer.appendChild(row);
    });
  
    container.append(title, divider, tableContainer);
  };

export const tableCapsuleColumn2 = async (capsule) => {
    const container = document.querySelector('#information__table__2');
    container.innerHTML = '';
  
    const title = Object.assign(document.createElement('h3'), {
      textContent: 'Capsule Landing Information',
    });
  
    const divider = Object.assign(document.createElement('hr'), {});
  
    const tableContainer = Object.assign(document.createElement('div'), {
      classList: ['table__container__1'],
    });
  
    ['Water Landings', 'Land Landings'].forEach((label) => {
      const row = document.createElement('div');
  
      const labelElement = Object.assign(document.createElement('span'), {
        textContent: label,
      });
  
      const valueElement = Object.assign(document.createElement('strong'), {
        textContent: capsule[label.toLowerCase().replace(' ', '_')],
      });
  
      row.append(labelElement, valueElement);
      tableContainer.appendChild(row);
    });
  
    container.append(title, divider, tableContainer);
};

export const mainTableCompany = async (company) => {
  const { headquarters } = company;

  const container = document.createElement('div');
  container.classList.add('description__container');
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description__container2');
  descriptionContainer.style.width = '80%';

  const summaryTable = document.createElement('div');
  summaryTable.classList.add('table__container__1');

  const summaryContent = document.createElement('div');
  const summaryText = document.createElement('strong');
  summaryText.textContent = company.summary;
  summaryText.style.textAlign = 'center';

  summaryContent.appendChild(summaryText);
  summaryTable.appendChild(summaryContent);

  const headquartersTable = document.createElement('div');
  headquartersTable.classList.add('information__table__1');
  headquartersTable.style.width = '30%';

  const headquartersTableTitle = document.createElement('h3');
  headquartersTableTitle.textContent = 'Headquarters';

  const headquartersTableDivider = document.createElement('hr');

  const headquartersTableRows = document.createElement('div');
  headquartersTableRows.classList.add('table__container__1');

  ['Address', 'City', 'State'].forEach((label) => {
    const row = document.createElement('div');

    const span = document.createElement('span');
    span.textContent = label;

    const strong = document.createElement('strong');
    strong.textContent = headquarters[label.toLowerCase()];

    row.appendChild(span);
    row.appendChild(strong);
    headquartersTableRows.appendChild(row);
  });

  headquartersTable.append(
    headquartersTableTitle,
    headquartersTableDivider,
    headquartersTableRows
  );

  descriptionContainer.appendChild(summaryTable);
  container.append(descriptionContainer, headquartersTable);

  const descriptionItem = document.getElementById('section__information__1');
  descriptionItem.style.flexDirection = 'column';
  descriptionItem.innerHTML = '';
  descriptionItem.appendChild(container);

  const loadingElement = descriptionItem.querySelector('.load');
  if (loadingElement) {
    descriptionItem.replaceChild(container, loadingElement);
  }
};

export const tableCompany1 = async(company) => {
  const container = document.querySelector("#information__table__1");
  container.innerHTML = "";

  const createAndAppendElement = (tag, text, parent, className) => {
      const element = document.createElement(tag);
      if (text) element.textContent = text;
      if (className) element.classList.add(className);
      parent.appendChild(element);
      return element;
  };

  createAndAppendElement("h3", "Company Information", container);
  createAndAppendElement("hr", null, container);

  const tableContainer = createAndAppendElement("div", null, container, "table__container__1");

  const rows = [
      { label: "CEO", value: company.ceo },
      { label: "CTO", value: company.cto },
      { label: "COO", value: company.coo },
      { label: "CTO Propulsion", value: company.cto_propulsion }
  ];

  rows.forEach(({ label, value }) => {
      const rowElement = createAndAppendElement("div", null, tableContainer);
      createAndAppendElement("span", label, rowElement);
      createAndAppendElement("strong", value, rowElement);
  });
};

export const tableCompany2 = async (company) => {
  const container = document.querySelector("#information__table__2");
  container.innerHTML = "";

  const createElement = (tag, text = '', className = '') => {
      const element = document.createElement(tag);
      if (text) element.textContent = text;
      if (className) element.classList.add(className);
      return element;
  };

  container.append(createElement("h3", "Company Installation"), createElement("hr"));

  const tableContainer = createElement("div", '', "table__container__1");

  const rows = [
      { label: "Launch Sites", value: company.launch_sites },
      { label: "Test Sites", value: company.test_sites }
  ];

  rows.forEach(({ label, value }) => {
      const rowElement = createElement("div");
      rowElement.append(createElement("span", label), createElement("strong", value));
      tableContainer.append(rowElement);
  });

  container.append(tableContainer);
};