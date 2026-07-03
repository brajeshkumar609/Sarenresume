// animations.js - GSAP-based animations (simple, performant)
window.addEventListener('load', ()=>{
  // hero entrance
  if(window.gsap){
    gsap.from('.hero-title',{y:24,opacity:0,duration:0.9,ease:'power3.out'});
    gsap.from('.hero-sub',{y:18,opacity:0,duration:0.9,delay:0.12,ease:'power3.out'});
    gsap.from('.hero-ctas',{y:8,opacity:0,duration:0.8,delay:0.24,ease:'power3.out'});
    gsap.from('.hero-media img',{opacity:0,scale:0.98,duration:0.9,delay:0.32,ease:'power3.out'});
  }

  // floating icons or subtle background effects can be added here
});
