export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
    // <div class="carousel__item">
    //     <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">
    // </div>
}
export const imageCapsule = async (capsule) => {
    const { launches: [{ links: { patch: { small } } }] } = capsule;
    const imageContainer = document.querySelector('#section__image');
    imageContainer.style.cssText = 'height: 260px; display: block;';
  
    const imageElement = Object.assign(document.createElement('img'), {
      src: small,
      referrerPolicy: 'no-referrer',
      style: 'width: 250px; height: 250px;',
    });
  
    const loadingElement = imageContainer.querySelector('.load');
    loadingElement.parentNode.replaceChild(imageElement, loadingElement);
  };
  
  export const videoCapsule = async (videoId, containerSelector) => {
    const videoContainer = Object.assign(document.createElement('div'), {
      id: 'youtube-video',
    });
  
    const iframe = Object.assign(document.createElement('iframe'), {
      src: `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&modestbranding=1&loop=1`,
      frameborder: '0',
      allowfullscreen: true,
    });
  
    videoContainer.appendChild(iframe);
  
    const descriptionItem = document.querySelector(containerSelector);
    const loadingElement = descriptionItem.querySelector('.load');
    descriptionItem.replaceChild(videoContainer, loadingElement);
  };
  