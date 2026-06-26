// Smooth scroll for all anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
  });
});

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
    }
  });
},{threshold:.1});

document.querySelectorAll('.detail-cell,.program-card,.ticket-card,.tt-row').forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(20px)';
  el.style.transition='opacity .6s ease, transform .6s ease';
  obs.observe(el);
});