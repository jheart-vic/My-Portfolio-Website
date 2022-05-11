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
    document.body.style.overflow = 'unset';

  }
  function resetMenu () {
    if(window.innerWidth > 768){
      div.style.display = 'none';
    }
  }
  let ul = document.createElement('ul')
   let li = document.createElement('li')
   let a = document.createElement('a')
   a.href = '#Portfolio'
   li.appendChild(a)
   a.textContent = 'Portfolio';
   a.style.textDecoration = 'none'
   a.style.color ='white'
   a.addEventListener('click', closed)
   li.style.listStyle = 'none'
   ul.appendChild(li);
   li = document.createElement('li');
   a = document.createElement('a')
   a.href = '#About'
   li.appendChild(a)
   a.textContent = 'About';
   a.style.textDecoration = 'none'
   a.style.color ='white'
   a.addEventListener('click', closed)
   li.style.listStyle = 'none'
   ul.appendChild(li);
   li = document.createElement('li');
   a = document.createElement('a')
   a.href = '#Contact'
   li.appendChild(a)
   a.textContent = 'Contact';
   a.style.textDecoration = 'none'
   a.style.color ='white'
   ul.appendChild(li);
   a.addEventListener('click', closed)
   li.style.listStyle = 'none'
   ul.className = "nav-links";
   ul.style.display = 'block';
   div.appendChild(ul);
   document.body.style.overflow = 'hidden';
   const wrapper = document.querySelector('.wrapper');
   wrapper.appendChild(div);
   window.addEventListener('resize', resetMenu);
  }

 
  hamBurger.addEventListener('click', clicked);

  