const popUps = [
  {
    id: 0,
    title: 'Multi-Post Stories',
    image: './images/SnapshootPortfolio.png',
    description:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live_link: 'https://jheart-vic.github.io/My-Portfolio-Website/',
    source_link: 'https://github.com/jheart-vic/My-Portfolio-Website',
  },

  {
    id: 1,
    title: 'Professional Art Printing Data',
    image: './images/SnapshootPortfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://jheart-vic.github.io/My-Portfolio-Website/',
    source_link: 'https://github.com/jheart-vic/My-Portfolio-Website',
  },
  {
    id: 2,
    title: 'Book Store App',
    image: './images/bookstoreimage.png',
    description: 'An application that allows users to add and remove books from a list.The application is built with React and Redux.',
    technologies: ['React', 'Redux', 'CSS'],
    live_link: 'https://store-your-book.netlify.app/',
    source_link: 'https://github.com/jheart-vic/BookStore/',
  },

  {
    id: 3,
    title: 'Budget App',
    image: './images/budget1.png',
    description:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://budgetory.herokuapp.com/',
    source_link: 'https://github.com/jheart-vic/Budget-App',
  },
  {
    id: 4,
    title: 'Crypto Market Data',
    image: './images/cryptoimg.png',
    description:
  'An App that displays information on crypto market',
    technologies: ['React', 'CSS', 'Redux'],
    live_link: 'https://crypto-area.herokuapp.com/',
    source_link: 'https://github.com/jheart-vic/cryptoapp',
  },
  {
    id: 5,
    title: 'Food App',
    image: './images/hbdiet.png',
    description:
  'This is a balanced diet site that helps you know how to eat right and what to eat at the right time',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live_link: 'https://jheart-vic.github.io/capstone/',
    source_link: 'https://github.com/jheart-vic/capstone',
  },
];

function popUpDiv(id) {
  const mainDiv = document.createElement('div');
  const divTitle = document.createElement('h1');
  const divLiveBtn = document.createElement('a');
  const divSourceBtn = document.createElement('a');
  const divParagraph = document.createElement('p');
  const divImage = document.createElement('img');
  const divTech = document.createElement('div');
  const divExitBtn = document.createElement('img');
  divTitle.innerText = `${popUps[id].title}`;
  divTitle.classList.toggle('popup-title');

  divParagraph.innerText = `${popUps[id].description}`;
  divParagraph.classList.toggle('popup-paragraph');
  divLiveBtn.textContent = 'see live';
  divLiveBtn.className = 'live';
  divLiveBtn.classList.add('popup-btn', 'live');
  divLiveBtn.href = `${popUps[id].live_link}`;
  divSourceBtn.innerText = 'see source';
  divSourceBtn.className = 'source';
  divSourceBtn.classList.add('popup-btn', 'popup-margin', 'source');
  divSourceBtn.href = `${popUps[id].source_link}`;
  divImage.src = `${popUps[id].image}`;
  divImage.classList.toggle('popup-img');
  divTech.innerHTML = `<div>${popUps[id].technologies[0]}</div>
                     <div>${popUps[id].technologies[1]}</div>
                     <div>${popUps[id].technologies[2]}</div>`;
  divTech.className = 'popup-languages';
  divExitBtn.src = './images/close.png';
  divExitBtn.className = 'icon';
  function closed() {
    mainDiv.style.display = 'none';
    document.body.style.overflow = 'unset';
  }
  divExitBtn.addEventListener('click', closed);
  mainDiv.classList.toggle('popup');

  if (window.innerWidth < 900) {
    mainDiv.classList.toggle('mobile-width');
    divTitle.classList.toggle('mobile-title');
    divTech.classList.toggle('mobile-languages');
    divImage.classList.toggle('popup-mobile-img');
    divParagraph.classList.toggle('popup-mobile-p');
    divSourceBtn.classList.toggle('mobile-btn');
    divLiveBtn.classList.toggle('mobile-btn');
    divExitBtn.classList.toggle('mobile-icon');

    const mobileView = document.querySelector('.mobile-view');
    mobileView.appendChild(mainDiv);
  }

  mainDiv.appendChild(divTitle);
  mainDiv.appendChild(divExitBtn);
  mainDiv.appendChild(divTech);
  mainDiv.appendChild(divImage);
  mainDiv.appendChild(divParagraph);
  mainDiv.appendChild(divLiveBtn);
  mainDiv.appendChild(divSourceBtn);
  document.body.appendChild(mainDiv);
}

// card section
const cardWrap = document.createElement('div');
cardWrap.className = 'project-section';
const card0 = document.createElement('div');
const card1 = document.createElement('div');
const card2 = document.createElement('div');
const card3 = document.createElement('div');
const card4 = document.createElement('div');
const card5 = document.createElement('div');
// card0
card0.className = 'project-section-img';
const card0Heading = document.createElement('h3');
card0Heading.textContent = 'Profesional Art Printing Data';
const card0Paragraph = document.createElement('p');
card0Paragraph.className = 'paragraph';
card0Paragraph.textContent = "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard";
const card0Btn = document.createElement('div');
card0Btn.innerHTML = `<button type="button" class="button"><span>Html</span></button>
    <button type="button" class="button"><span class="big-span">bootstrap</span></button>
    <button type="button" class="button"><span>Ruby</span></button>`;
const card0Btn2 = document.createElement('button');
card0Btn2.className = 'project-btn2';
card0Btn2.innerText = 'See Project';
card0Btn2.onclick = () => popUpDiv(0);

card0.appendChild(card0Heading);
card0.appendChild(card0Paragraph);
card0.appendChild(card0Btn);
card0.appendChild(card0Btn2);
// end of card0

// card1
card1.className = 'project-section-img1';
const card1Heading = document.createElement('h3');
card1Heading.textContent = 'Dashboard Healthcare';
const card1Paragraph = document.createElement('p');
card1Paragraph.className = 'paragraph';
card1Paragraph.textContent = "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard";
const card1Btn = document.createElement('div');
card1Btn.innerHTML = `<button type="button" class="button"><span>Html</span></button>
    <button type="button" class="button"><span class="big-span">bootstrap</span></button>
    <button type="button" class="button"><span>Ruby</span></button>`;
const card1Btn2 = document.createElement('button');
card1Btn2.className = 'project-btn2';
card1Btn2.onclick = () => popUpDiv(1);
card1Btn2.innerText = 'See Project';
card1.appendChild(card1Heading);
card1.appendChild(card1Paragraph);
card1.appendChild(card1Btn);
card1.appendChild(card1Btn2);
// end of card1

// card2
card2.className = 'project-section-img2';
const card2Heading = document.createElement('h3');
card2Heading.textContent = 'Website Portfolio';
const card2Paragraph = document.createElement('p');
card2Paragraph.className = 'paragraph';
card2Paragraph.textContent = "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard";
const card2Btn = document.createElement('div');
card2Btn.innerHTML = `<button type="button" class="button"><span>Html</span></button>
    <button type="button" class="button"><span class="big-span">bootstrap</span></button>
    <button type="button" class="button"><span>Ruby</span></button>`;
const card2Btn2 = document.createElement('button');
card2Btn2.className = 'project-btn2';
card2Btn2.onclick = () => popUpDiv(2);
card2Btn2.innerText = 'See Project';
card2.appendChild(card2Heading);
card2.appendChild(card2Paragraph);
card2.appendChild(card2Btn);
card2.appendChild(card2Btn2);
// end of card2

// card3
card3.className = 'project-section-img3';
const card3Heading = document.createElement('h3');
card3Heading.textContent = 'Budget App';
const card3Paragraph = document.createElement('p');
card3Paragraph.className = 'paragraph';
card3Paragraph.textContent = "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard";
const card3Btn = document.createElement('div');
card3Btn.innerHTML = `<button type="button" class="button"><span>Ruby</span></button>
     <button type="button" class="button"><span class="big-span">Bootstrap</span></button>
     <button type="button" class="button"><span>Rails</span></button>`;
const card3Btn2 = document.createElement('button');
card3Btn2.className = 'project-btn2';
card3Btn2.onclick = () => popUpDiv(3);
card3Btn2.innerText = 'See Project';
card3.appendChild(card3Heading);
card3.appendChild(card3Paragraph);
card3.appendChild(card3Btn);
card3.appendChild(card3Btn2);
// end of card3

// card4
card4.className = 'project-section-img4';
const card4Heading = document.createElement('h3');
card4Heading.textContent = 'Crypto App';
const card4Paragraph = document.createElement('p');
card4Paragraph.className = 'paragraph';
card4Paragraph.textContent = "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard";
const card4Btn = document.createElement('div');
card4Btn.innerHTML = `<button type="button" class="button"><span>React</span></button>
     <button type="button" class="button"><span class="big-span">Bootstrap</span></button>
     <button type="button" class="button"><span>CSS</span></button>`;
const card4Btn2 = document.createElement('button');
card4Btn2.className = 'project-btn2';
card4Btn2.onclick = () => popUpDiv(4);
card4Btn2.innerText = 'See Project';
card4.appendChild(card4Heading);
card4.appendChild(card4Paragraph);
card4.appendChild(card4Btn);
card4.appendChild(card4Btn2);
// end of card4

// card5
card5.className = 'project-section-img5';
const card5Heading = document.createElement('h3');
card5Heading.textContent = 'Food App';
const card5Paragraph = document.createElement('p');
card5Paragraph.className = 'paragraph';
card5Paragraph.textContent = "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard";
const card5Btn = document.createElement('div');
card5Btn.innerHTML = `<button type="button" class="button"><span>Html</span></button>
     <button type="button" class="button"><span class="big-span">JavaScript</span></button>
     <button type="button" class="button"><span>CSS</span></button>`;
const card5Btn2 = document.createElement('button');
card5Btn2.className = 'project-btn2';
card5Btn2.onclick = () => popUpDiv(5);
card5Btn2.innerText = 'See Project';
card5.appendChild(card5Heading);
card5.appendChild(card5Paragraph);
card5.appendChild(card5Btn);
card5.appendChild(card5Btn2);
// end of card 5
cardWrap.appendChild(card0);
cardWrap.appendChild(card1);
cardWrap.appendChild(card2);
cardWrap.appendChild(card3);
cardWrap.appendChild(card4);
cardWrap.appendChild(card5);
const wrapper = document.getElementById('idproject-section');
wrapper.appendChild(cardWrap);
