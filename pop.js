const popUps =  
  {
   id: 'project-button1',
title: 'Multi-Post Stories',
image: 'images'+ '\\' + 'SnapshootPortfolio.png',
description:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  live_link: 'https://jheart-vic.github.io/My-Portfolio-Website/',
  source_link: 'https://github.com/jheart-vic/My-Portfolio-Website',
}


let popUpBtn = document.querySelector('.project-btn');
function popUpDiv () { 
  let div = document.createElement('div');
  div.className = 'popup';
  let showDiv = document.createElement('div')
   showDiv.className = 'showpop'
  let img = document.createElement('img');
  img.className = 'icon';
  img.src = './images/close.png';
  div.appendChild(img);

  img.addEventListener('click', closed);
  function closed() {
    div.style.display = 'none';
    document.body.style.overflow = 'unset';

  }
  showDiv.appendChild(img)
  let popupImg = document.createElement('img');
  popupImg.className = 'popup-img'
  popupImg.src = `${popUps.image}`
  showDiv.appendChild(popupImg)
 let popupTitle = document.createElement('h3');
 popupTitle.textContent = popUps.title;
 popupTitle.className = 'popup-title'
showDiv.appendChild(popupTitle);
let popuptext = document.createElement('p');
popuptext.textContent = popUps.description;
 popuptext.className = 'popup-paragraph';
 showDiv.appendChild(popuptext); 
let popuplanguages = document.createElement('div');
popuplanguages.innerHTML =  `<div>${popUps.technologies[0]}</div>
<div>${popUps.technologies[1]}</div>
                              <div>${popUps.technologies[2]}</div>`;
popuplanguages.className  = 'popup-languages'                            
showDiv.appendChild(popuplanguages); 
let popupLiveBtn = document.createElement('a');
popupLiveBtn.textContent = 'see live';
// popupLiveBtn.className = 'live';
popupLiveBtn.classList.add('popup-btn', 'live')
popupLiveBtn.href= `${popUps.live_link}`;
let popupSourceBtn = document.createElement('a');
popupSourceBtn.textContent= 'see source';
// popupSourceBtn.className = 'source'
popupSourceBtn.classList.add('popup-btn', 'source', 'popup-margin')
popupSourceBtn.href= `${popUps.source_link}`;
div.appendChild(showDiv)
const wrapper = document.querySelector('.wrapper');
wrapper.appendChild(div);
}
popUpBtn.addEventListener('click', popUpDiv)