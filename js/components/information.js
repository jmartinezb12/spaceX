export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}

export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}

export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationCapsule = async (lastUpdate) => {
  const container = Object.assign(document.createElement('div'), {
    classList: ['description__container'],
    style: { alignItems: 'center' },
  });

  const img = Object.assign(document.createElement('img'), {
    src: 'storage/img/icons/mech.svg',
  });

  const title = Object.assign(document.createElement('h3'), {
    textContent: 'Last Update',
  });

  const description = Object.assign(document.createElement('small'), {
    textContent: lastUpdate || 'No information available',
  });

  const infoContainer = document.createElement('div');
  infoContainer.append(title, description);

  container.append(img, infoContainer);

  const descriptionItem = document.getElementById('information__2');
  const loadingElement = descriptionItem.querySelector('.load');
  descriptionItem.replaceChild(container, loadingElement);
};
  
export const informationWebCapsule = async (url, label) => {
  const container = Object.assign(document.createElement('div'), {
    classList: ['description__container'],
  });

  const img = Object.assign(document.createElement('img'), {
    src: 'storage/img/icons/mech.svg',
  });

  const title = Object.assign(document.createElement('h3'), {
    textContent: 'Learn more about the capsule and its launch',
  });

  const link = Object.assign(document.createElement('a'), {
    href: url,
    target: '_blank',
    textContent: label,
  });

  const linkContainer = document.createElement('div');
  linkContainer.append(title, link);

  container.append(img, linkContainer);

  const loadingElement = document.querySelector('.load');
  loadingElement.parentNode.replaceChild(container, loadingElement);
};

export const informationCompany = async (company) => {
  const descriptionItem = document.querySelector('#description__item');
  descriptionItem.innerHTML = '';

  const informationRows = [
    { title: 'Founder', value: company.founder },
    { title: 'Founded', value: company.founded },
    { title: 'Employees', value: company.employees },
    { title: 'Valuation', value: company.valuation },
  ];

  informationRows.forEach(({ title, value }) => {
    const container = document.createElement('div');
    container.classList.add('description__container');
    container.style.padding = '15px';

    const content = document.createElement('div');
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    const valueElement = document.createElement('small');
    valueElement.textContent = value;
    content.append(titleElement, valueElement);

    container.append(content);
    descriptionItem.appendChild(container);
  });
};

export const informationCompany2 = async (company) => {
  const { links } = company;
  const linksSection = document.getElementById('information__2');
  linksSection.innerHTML = '';

  const linkItems = [
    { title: 'Website', text: 'Space X', url: links.website },
    { title: 'Flickr', text: 'Official SpaceX Photos', url: links.flickr },
    { title: 'Twitter', text: '@SpaceX', url: links.twitter },
    { title: 'Elon Twitter', text: '@elonmusk', url: links.elon_twitter },
  ];

  linksSection.append(
    ...linkItems.map(({ title, text, url }) => createLinkItem(title, text, url))
  );
};

const createLinkItem = (title, text, url) => {
  const linkContainer = document.createElement('div');
  linkContainer.classList.add('description__container');
  linkContainer.style.padding = '15px';
  linkContainer.style.alignItems = 'center';

  const linkContent = document.createElement('div');

  const linkTitle = document.createElement('h3');
  linkTitle.textContent = title;

  const linkElement = document.createElement('a');
  linkElement.href = url;

  const linkText = document.createElement('small');
  linkText.textContent = text;

  linkElement.appendChild(linkText);
  linkContent.appendChild(linkTitle);
  linkContent.appendChild(linkElement);
  linkContainer.appendChild(linkContent);

  return linkContainer;
};
