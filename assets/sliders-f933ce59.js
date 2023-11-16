var w=globalThis&&globalThis.__assign||function(){return w=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},w.apply(this,arguments)},h=function(){return typeof window<"u"&&!!window.document&&!!window.document.createElement},S=function(){function e(){var t=this;this.handleWheel=function(o){o.preventDefault()},this.handleScroll=function(){window.scrollTo.apply(window,t.lockToScrollPos)},this.handleKeydown=function(o){var n=t.options.keyboardKeys;["INPUT","TEXTAREA"].includes(o.target.tagName)&&(n=n.filter(function(s){return!t.options.authorizedInInputs.includes(s)})),n.includes(o.keyCode)&&o.preventDefault()},this.element=null,this.lockToScrollPos=[0,0],this.options={authorizedInInputs:[32,37,38,39,40],disableKeys:!0,disableScroll:!0,disableWheel:!0,keyboardKeys:[32,33,34,35,36,37,38,39,40]},h()&&(this.element=document.scrollingElement)}return e.prototype.on=function(t,o){var n,s,i,c;if(h()){this.element=t||this.element,this.options=w(w({},this.options),o);var d=this.options,b=d.disableKeys,L=d.disableScroll,E=d.disableWheel;E&&(document.addEventListener("wheel",this.handleWheel,{passive:!1}),document.addEventListener("touchmove",this.handleWheel,{passive:!1})),L&&(this.lockToScrollPos=[(s=(n=this.element)===null||n===void 0?void 0:n.scrollLeft)!==null&&s!==void 0?s:0,(c=(i=this.element)===null||i===void 0?void 0:i.scrollTop)!==null&&c!==void 0?c:0],document.addEventListener("scroll",this.handleScroll,{passive:!1})),b&&document.addEventListener("keydown",this.handleKeydown,{passive:!1})}},e.prototype.off=function(){h()&&(document.removeEventListener("wheel",this.handleWheel),document.removeEventListener("touchmove",this.handleWheel),document.removeEventListener("scroll",this.handleScroll),document.removeEventListener("keydown",this.handleKeydown))},e}();const W=new S;let v=!1;const u=document.querySelector("#reviews-toggle"),r=document.querySelector("#reviews-list"),p=document.querySelector(".reviews"),k=document.querySelectorAll(".review-item"),T=["https://www.trustpilot.com/review/logolivery.com","https://www.trustpilot.com/review/logolivery.com","https://www.trustpilot.com/review/logolivery.com","https://www.trustpilot.com/review/logolivery.com","https://www.producthunt.com/products/logolivery/reviews","https://www.producthunt.com/products/logolivery/reviews","https://twitter.com/amilkoff/status/1567778588795052032","https://www.producthunt.com/products/logolivery/reviews","https://www.producthunt.com/products/logolivery/reviews","https://www.producthunt.com/products/logolivery/reviews","https://www.trustpilot.com/reviews/63fc6deb9b64b1bdaf639be0","https://www.producthunt.com/products/logolivery/reviews","https://www.producthunt.com/products/logolivery/reviews","https://www.producthunt.com/products/logolivery/reviews","https://www.producthunt.com/products/logolivery/reviews"];r&&u&&u.addEventListener("click",()=>{if(v){v=!1,p.classList.remove("opened"),r.classList.remove("opened"),r.style.maxHeight="600px",u.textContent="More Customer Reviews";const e=window.scrollY+r.getBoundingClientRect().top;window.scrollTo({top:e})}else{v=!0;const e=r.scrollHeight;r.classList.add("opened"),p.classList.add("opened"),r.style.maxHeight=e+"px",u.textContent="Got It!"}});k.forEach((e,t)=>{e.addEventListener("click",()=>{window.open(T[t],"_blank")})});r.addEventListener("transitionend",()=>{window.dispatchEvent(new Event("height-increase"))});const l=document.querySelector("#navbar");var f;const C=Array.from((f=document.querySelector("[data-nav]"))==null?void 0:f.children);let m=window.scrollY,a=!1;function D(e,t){var o=Date.now();return function(){o+t-Date.now()<0&&(e(),o=Date.now())}}const g=()=>{const e=l.getBoundingClientRect().bottom,t=window.scrollY;if(e>=t){a||(l.classList.add("navbar-show"),l.classList.remove("navbar-hide"));return}m<window.scrollY?(a&&(l.classList.add("navbar-hide"),l.classList.remove("navbar-show")),a=!1):m>window.scrollY&&(a||(l.classList.add("navbar-show"),l.classList.remove("navbar-hide")),a=!0),m=window.scrollY};window.addEventListener("load",()=>{const e=l.getBoundingClientRect().bottom,t=window.scrollY;a=e>t,g()});window.addEventListener("scroll",D(g,50));C.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(`#${e.dataset.navLink}`);if(t){const o=window.scrollY+t.getBoundingClientRect().top;window.scrollTo({top:o})}})});const _=document.querySelectorAll("[data-carousel]"),y=document.createElement("style"),x=()=>_.forEach(e=>{const t=!!e.dataset.carouselInvertDirection,o=e.dataset.carouselAnimationName,n=Array.from(e.children).slice(0,e.children.length/2).reduce((s,i)=>{const c=getComputedStyle(i),d=Number(c.marginLeft.replace(/\D/g,""))+Number(c.marginRight.replace(/\D/g,""))+Number(getComputedStyle(e.parentElement).gap.replace(/\D/g,""));return s+i.clientWidth+d},0);y.innerHTML+=` @keyframes ${o} {
      from {
        transform: translateX(${t?-n+"px":"0px"});
      }
  
      to {
        transform: translateX(${t?0:-n}px)
      }
    }`});window.addEventListener("load",x);document.head.appendChild(y);export{W as d};
