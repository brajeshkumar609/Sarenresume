// script.js - Core client logic (navigation, AOS init, typed.js, particles, tilt)

// Accessibility: keyboard menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle && navToggle.addEventListener('click', ()=>{
  navLinks && navLinks.classList.toggle('open');
});

// AOS init
window.addEventListener('DOMContentLoaded', ()=>{
  if(window.AOS) AOS.init({duration:800,easing:'ease-out-cubic',once:true});

  // Typed.js for short typing animation
  if(window.Typed){
    const typed = new Typed('#typed', {strings:['reliability.','security.','automation.'],typeSpeed:60,backSpeed:40,backDelay:1800,loop:true});
  }

  // Particles.js if available - lightweight configuration
  if(window.particlesJS){
    try{
      particlesJS('particles-js', {
        particles:{number:{value:30,density:{enable:true,value_area:800}},color:{value:'#06b6d4'},shape:{type:'circle'},opacity:{value:0.06},size:{value:3},move:{enable:true,speed:0.9}}
      });
    }catch(e){console.warn('particles load failed',e)}
  }

  // Vanilla-tilt for elements with data-tilt
  const tiltEls = document.querySelectorAll('[data-tilt]');
  if(window.VanillaTilt){ VanillaTilt.init(tiltEls,{max:8,speed:400,glare:true,'max-glare':0.08}) }

  // Counters
  document.querySelectorAll('.counter strong').forEach(el=>{
    const target = +el.getAttribute('data-target') || +el.textContent;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = setInterval(()=>{
      current += step;
      if(current >= target){ el.textContent = target; clearInterval(interval);} else el.textContent = current;
    }, 18);
  });

  // Progress animations
  document.querySelectorAll('.progress').forEach(p=>{
    const v = p.getAttribute('data-value') || p.querySelector('span').style.width.replace('%','') || '50';
    p.querySelector('span').style.width = v + '%';
  });

});

// Intersection Observer for subtle reveal when JS available
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('in-view');
  });
},{threshold:0.12});
document.querySelectorAll('.glass-section, .project-card, .timeline-item, .skill-card').forEach(el=>io.observe(el));

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(!href || href==='#') return;
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      el && el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});
