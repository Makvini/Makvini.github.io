import"./footer-animation-8e3ebe1c.js";import{d as a}from"./sliders-f933ce59.js";const d=new IntersectionObserver(s=>{s.forEach(e=>{e.isIntersecting&&e.target.classList.add("show-animation")})},{rootMargin:"-10px"}),h=s=>{const e=Array.from(s.children);return e.forEach((o,m)=>{o.classList.add("hidden-animation")}),e||[]},f=()=>{const s=document.querySelectorAll(".stagger"),e=document.querySelectorAll(".hidden-animation");s.length&&s.forEach(o=>{h(o).forEach(u=>{d.observe(u)})}),e.forEach(o=>d.observe(o))};f();let l=!1;const c=document.querySelector("#open-menu"),n=document.querySelector("#mobile-menu"),t=document.querySelector("#menu-bg"),p=Array.from(document.querySelectorAll("[data-mobile-nav-link]")),r=document.querySelector("#navbar"),i=()=>{l=!1,t.hidden=!0,n.hidden=!0,a.off(),c.classList.remove("open"),c.classList.add("close"),n.classList.remove("open"),n.classList.add("close"),t.classList.remove("open"),t.classList.add("close")};t.addEventListener("click",i);c.addEventListener("click",()=>{l?i():(document.documentElement.style.setProperty("--menuTop",(r==null?void 0:r.scrollHeight)+"px"),l=!0,a.on(document.documentElement),c.classList.add("open"),c.classList.remove("close"),n.classList.add("open"),n.classList.remove("close"),n.hidden=!1,t.classList.add("open"),t.classList.remove("close"),t.hidden=!1)});p.forEach(s=>{s.addEventListener("click",()=>{i(),setTimeout(()=>{const e=document.querySelector(`#${s.dataset.mobileNavLink}`);if(e){const o=window.scrollY+e.getBoundingClientRect().top;window.scrollTo({top:o,behavior:"smooth"})}},100)})});