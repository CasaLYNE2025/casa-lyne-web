function initSlider(root){
  const track = root.querySelector('.slide-track');
  const slides = Array.from(root.querySelectorAll('.slide'));
  let index = 0;

  function update(){
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  root.querySelector('.arrow.left').addEventListener('click', ()=>{
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
  root.querySelector('.arrow.right').addEventListener('click', ()=>{
    index = (index + 1) % slides.length;
    update();
  });

  // Touch support
  let startX = null;
  root.addEventListener('touchstart', (e)=>{ startX = e.touches[0].clientX; }, {passive:true});
  root.addEventListener('touchmove', (e)=>{
    if(startX === null) return;
    let dx = e.touches[0].clientX - startX;
    if (Math.abs(dx) > 60){
      if (dx < 0) index = (index + 1) % slides.length;
      else index = (index - 1 + slides.length) % slides.length;
      update(); startX = null;
    }
  }, {passive:true});
}

document.querySelectorAll('.slider').forEach(initSlider);

// Smooth scroll for nav buttons
document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-target');
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});