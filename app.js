const hamBurger = document.querySelector('.hambuger');

function clicked () {
  let div = document.createElement('div');
  div.className = 'modal';
  let img = document.createElement('img');
  img.className = 'icon';
  img.src = './images/close.png';
  div.appendChild(img);

  img.addEventListener('click', closed);
  function closed() {
    div.style.display = 'none';
  }

  let ul = document.createElement('ul')
   let li = document.createElement('li')
   li.textContent = 'Portfolio';
   li.style.listStyle = 'none'
   ul.appendChild(li);
   li = document.createElement('li');
   li.textContent = 'About';
   li.style.listStyle = 'none'
   ul.appendChild(li);
   li = document.createElement('li');
   li.textContent = 'contact'
   ul.appendChild(li);
   li.className = 'nav-link';
   li.style.listStyle = 'none'
   ul.className = "nav-links";
   ul.style.display = 'block';
   div.appendChild(ul);
   const wrapper = document.querySelector('.wrapper');
   wrapper.appendChild(div);
  }

  hamBurger.addEventListener('click', clicked);
