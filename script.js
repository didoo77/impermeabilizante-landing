const pulseStyle = document.createElement('style');
pulseStyle.id = 'tapizsafe-guaranteed-pulse-style';
pulseStyle.textContent = `
  .tapizsafe-organic-pulse{
    position:fixed;
    inset:0;
    z-index:6;
    pointer-events:none;
    overflow:hidden;
    opacity:.82;
  }
  .tapizsafe-organic-pulse::before{
    content:"";
    position:absolute;
    width:160vw;
    height:130vh;
    left:-34vw;
    top:-18vh;
    background:
      linear-gradient(112deg,transparent 0%,transparent 25%,rgba(75,184,212,.00) 31%,rgba(75,184,212,.26) 40%,rgba(168,221,233,.34) 48%,rgba(245,166,35,.14) 58%,rgba(75,184,212,.00) 69%,transparent 100%),
      radial-gradient(circle at 70% 32%,rgba(75,184,212,.30),transparent 26%),
      radial-gradient(circle at 20% 74%,rgba(245,166,35,.18),transparent 22%);
    transform:translate3d(42vw,0,0) rotate(-5deg) scale(1.02);
    animation:tapizsafeVisibleWave 14s cubic-bezier(.45,0,.2,1) infinite;
    will-change:transform,opacity;
  }
  .tapizsafe-organic-pulse::after{
    content:"";
    position:absolute;
    width:52vw;
    height:52vw;
    right:6vw;
    top:13vh;
    border-radius:999px;
    background:radial-gradient(circle,rgba(75,184,212,.30),rgba(168,221,233,.18) 42%,transparent 70%);
    animation:tapizsafeLivingOrb 9s ease-in-out infinite alternate;
    will-change:transform,opacity;
  }
  @keyframes tapizsafeVisibleWave{
    0%{transform:translate3d(46vw,0,0) rotate(-6deg) scale(1);opacity:.24}
    18%{opacity:.70}
    50%{transform:translate3d(0vw,-2vh,0) rotate(4deg) scale(1.04);opacity:.86}
    82%{opacity:.58}
    100%{transform:translate3d(-44vw,1vh,0) rotate(7deg) scale(1.01);opacity:.22}
  }
  @keyframes tapizsafeLivingOrb{
    0%{transform:translate3d(5vw,1vh,0) scale(.92);opacity:.35}
    55%{transform:translate3d(-5vw,-2vh,0) scale(1.08);opacity:.72}
    100%{transform:translate3d(-9vw,2vh,0) scale(1);opacity:.46}
  }
  @media(max-width:900px){
    .tapizsafe-organic-pulse{opacity:.64}
    .tapizsafe-organic-pulse::before{width:190vw;left:-56vw;animation-duration:17s}
    .tapizsafe-organic-pulse::after{width:90vw;height:90vw;right:-28vw;top:24vh}
  }
  @media(prefers-reduced-motion:reduce){
    .tapizsafe-organic-pulse,.tapizsafe-organic-pulse::before,.tapizsafe-organic-pulse::after{animation:none!important}
  }
`;
document.head.appendChild(pulseStyle);

const pulseLayer = document.createElement('div');
pulseLayer.className = 'tapizsafe-organic-pulse';
pulseLayer.setAttribute('aria-hidden','true');
document.body.appendChild(pulseLayer);

function icon(type){
  const span = document.createElement('span');
  span.className = 'social-chip ' + type;
  span.setAttribute('aria-hidden','true');
  if(type === 'wsp-chip') span.innerHTML = `<svg viewBox="0 0 32 32"><path d="M16.04 3C8.86 3 3.02 8.84 3.02 16.02c0 2.3.6 4.54 1.74 6.51L3 29l6.64-1.71a13 13 0 0 0 6.4 1.63h.01c7.18 0 13.02-5.84 13.02-13.02S23.22 3 16.04 3zm7.57 18.58c-.32.9-1.86 1.72-2.58 1.78-.66.06-1.5.09-2.42-.15-.56-.14-1.28-.41-2.2-.8-3.86-1.67-6.38-5.54-6.57-5.8-.19-.25-1.57-2.09-1.57-3.99s.99-2.83 1.34-3.22c.35-.39.77-.49 1.03-.49h.74c.24.01.56-.09.87.67.32.78 1.09 2.69 1.19 2.88.1.19.16.42.03.67-.13.26-.2.42-.39.65-.19.23-.41.51-.58.68-.19.19-.39.4-.17.78.22.39.97 1.59 2.08 2.58 1.43 1.27 2.63 1.67 3.02 1.86.39.19.61.16.84-.1.23-.26.97-1.13 1.23-1.52.26-.39.52-.32.87-.19.35.13 2.24 1.06 2.62 1.25.39.19.65.29.74.45.1.16.1.94-.23 1.84z"/></svg>`;
  return span;
}

function ensureIcon(selector, type){
  document.querySelectorAll(selector).forEach(btn=>{
    btn.querySelectorAll('.social-chip').forEach(el=>el.remove());
    btn.prepend(icon(type));
  });
}

ensureIcon('.btn-whatsapp','wsp-chip');
const floatBtn = document.querySelector('.float-whatsapp');
if(floatBtn){
  floatBtn.querySelectorAll('.social-chip').forEach(el=>el.remove());
  floatBtn.prepend(icon('wsp-chip'));
}

const heroVideo = document.querySelector('.hero-video');
if(heroVideo){
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.loop = true;
  heroVideo.autoplay = true;
  heroVideo.playsInline = true;
  heroVideo.setAttribute('muted','');
  heroVideo.setAttribute('playsinline','');
  heroVideo.setAttribute('webkit-playsinline','');
  const tryPlay = () => {
    const promise = heroVideo.play();
    if(promise && typeof promise.catch === 'function') promise.catch(()=>{});
  };
  heroVideo.addEventListener('canplay', tryPlay, {once:true});
  heroVideo.addEventListener('loadeddata', tryPlay, {once:true});
  tryPlay();
}

const footer = document.querySelector('footer');
if(footer && !footer.querySelector('.footer-extra')){
  const extra = document.createElement('div');
  extra.className = 'footer-extra';
  extra.innerHTML = '<span>© 2026 TapizSafe. Todos los derechos reservados.</span><span class="footer-credit">Landing desarrollada por <strong>Lux Render</strong>.</span>';
  footer.appendChild(extra);
}

function trackWhatsappClick(el){
  const position = el.dataset.whatsappCta || (el.classList.contains('float-whatsapp') ? 'floating' : 'whatsapp');
  if(typeof window.fbq === 'function'){
    window.fbq('track','Contact',{content_name:'WhatsApp',cta_position:position});
    window.fbq('trackCustom','WhatsAppClick',{cta_position:position});
  }
}

const whatsappButtons = new Set([
  ...document.querySelectorAll('[data-whatsapp-cta]'),
  ...document.querySelectorAll('.btn-whatsapp'),
  ...document.querySelectorAll('.float-whatsapp')
]);
whatsappButtons.forEach(btn=>{
  btn.addEventListener('click',()=>trackWhatsappClick(btn),{passive:true});
});

function updateFloatingCta(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  document.body.classList.toggle('hero-passed', hero.getBoundingClientRect().bottom < 90);
}
window.addEventListener('scroll', updateFloatingCta, {passive:true});
window.addEventListener('resize', updateFloatingCta);
updateFloatingCta();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
