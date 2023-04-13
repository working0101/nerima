'use strict';
// Carousel 
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('carouselUl');
  const slides = ul.children;
  const dots =[];
  let currentIndex = 0;
  
  let clone = ul.firstElementChild.cloneNode(true);
  document.getElementById('carouselUl').appendChild(clone)

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');  
      if (currentIndex === 0) {
        prev.classList.add('hidden');
      }
      if (currentIndex === slides.length - 1) {
          next.classList.add('hidden');
      }
  }
  // 画像のサイズを取得してその分移動させる
  function moveSlides() {
    const slideWidth = slides[0]. getBoundingClientRect().width; 
    ul.style.transform = `translatex(${-1 * slideWidth * currentIndex}px)`;
  }
  
  // 画像の数だけボタンを作る
  function setupDots() {
    for (let i =0; i<slides.length; i++){
      const button = document.createElement ('button');
      button.addEventListener('click', () =>{
        currentIndex = i;
        updatedots();
        updateButtons();
        moveSlides();
      }); 
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
  }
  

  function updatedots(){
    dots.forEach(dot =>{
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }
  
  updateButtons();
  setupDots();
  
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updatedots();
    moveSlides();
  });
  
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updatedots();
    moveSlides();
  });
}
  
  
  window.addEventListener('resize', () => {
    moveSlides();
  });