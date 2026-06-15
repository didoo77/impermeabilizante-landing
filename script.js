const mobileFix = document.createElement('style');
mobileFix.textContent = `
.social-chip{width:24px;height:24px;border-radius:50%;display:inline-grid;place-items:center;flex:0 0 24px;font-weight:900;line-height:1;font-family:Arial,sans-serif}.wsp-chip{background:#25D366;color:#072313;font-size:15px}.ig-chip{background:radial-gradient(circle at 30% 110%,#fdf497 0%,#fdf497 14%,#fd5949 42%,#d6249f 62%,#285AEB 100%);color:#fff;font-size:14px}.fb-chip{background:#1877F2;color:#fff;font-size:18px}.btn-facebook{background:linear-gradient(135deg,#ffffff,#f4f8ff);border:1px solid rgba(24,119,242,.22);box-shadow:none;color:#0D2137}.btn-facebook:hover{box-shadow:0 16px 32px rgba(24,119,242,.14)}
.hero-card img{object-fit:cover!important;object-position:center center!important}.photo-stack{border-radius:28px;overflow:hidden;background:#f6fbfc}.photo-main{object-fit:cover!important;object-position:center center!important;background:#f6fbfc!important}
@media(max-width:900px){
  .site-header{padding:7px 18px!important;min-height:58px!important;}
  .brand img{width:39px!important;height:39px!important;}
  .brand{gap:8px!important;font-size:10px!important;letter-spacing:.055em!important;}
  .hero{display:flex!important;flex-direction:column!important;gap:10px!important;min-height:auto!important;padding-top:18px!important;padding-bottom:28px!important;}
  .hero-copy{display:contents!important;}
  .hero-copy .eyebrow{order:1!important;text-align:center!important;margin:0 0 6px!important;font-size:10px!important;letter-spacing:.2em!important;}
  .hero-copy h1{order:2!important;font-size:clamp(32px,8.6vw,40px)!important;line-height:1!important;margin-bottom:8px!important;letter-spacing:-.05em!important;}
  .hero-copy .hero-lead{order:3!important;font-size:15.5px!important;line-height:1.4!important;margin-bottom:0!important;}
  .hero-visual{order:4!important;width:100%!important;margin:4px 0 0!important;}
  .hero-card{max-width:100%!important;margin:0!important;transform:none!important;border-radius:22px!important;aspect-ratio:4/5!important;background:#f6fbfc!important;}
  .hero-card img{object-fit:cover!important;object-position:center center!important;padding:0!important;}
  .hero-card:before{background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(75,184,212,.04),rgba(245,166,35,.05))!important;}
  .hero-actions{order:5!important;margin:12px 0 8px!important;gap:8px!important;}
  .hero-actions .btn{width:100%!important;min-height:49px!important;padding:11px 16px!important;font-size:15.5px!important;}
  .trust-row{order:6!important;gap:7px!important;margin:0!important;}
  .trust-row span,.audience-row span{font-size:12px!important;padding:7px 10px!important;}
  .section-pad{padding:30px 20px!important;}
  h2{font-size:clamp(28px,7.7vw,36px)!important;line-height:1.04!important;}
  p{font-size:15.5px!important;line-height:1.44!important;}
  .section-head{margin-bottom:20px!important;}
  .copy-block p{font-size:15.5px!important;}
  .benefit-grid{gap:9px!important;}
  .benefit{padding:15px 17px!important;border-radius:18px!important;}
  .benefit span{margin-bottom:6px!important;font-size:13px!important;}
  .benefit h3{font-size:18px!important;margin-bottom:4px!important;}
  .benefit p{font-size:14px!important;}
  .photo-stack{border-radius:22px!important;background:#f6fbfc!important;}
  .photo-main{width:100%!important;aspect-ratio:4/5!important;border-radius:22px!important;object-fit:cover!important;object-position:center center!important;}
  .showcase{padding:32px 14px!important;}
  .showcase-card,.cta-card{border-radius:24px!important;}
  .showcase-card img,.cta-card img{min-height:255px!important;}
  .showcase-card>div,.cta-card>div{padding:22px 20px!important;}
  .steps{gap:8px!important;}
  .step{grid-template-columns:42px 1fr!important;gap:10px!important;padding:11px 12px!important;border-radius:16px!important;}
  .step strong{width:34px!important;height:34px!important;font-size:12.5px!important;}
  .step p{font-size:15px!important;line-height:1.3!important;}
  details{padding:14px 16px!important;border-radius:16px!important;}
  summary{font-size:16px!important;}
  .float-whatsapp{width:48px!important;height:48px!important;right:12px!important;bottom:12px!important;padding:0!important;border-radius:50%!important;display:grid!important;place-items:center!important;box-shadow:0 10px 24px rgba(37,211,102,.24)!important;opacity:.92!important;font-size:0!important;}
  .float-whatsapp:before{content:'☎';font-size:22px;color:#073016;}
  .float-label{display:none!important;}
  footer{padding:24px 20px 76px!important;align-items:flex-start!important;gap:14px!important;}
  footer p{font-size:13.5px!important;line-height:1.42!important;}
  .footer-brand{gap:10px!important}.footer-brand img{width:42px!important;height:42px!important;}
}
@media(max-width:420px){
  .hero-copy h1{font-size:34px!important;}
  .hero-card{aspect-ratio:4/5!important;}
}
`;
document.head.appendChild(mobileFix);

const facebookUrl = 'https://www.facebook.com/impermeabilizantedetapices/';
function icon(type){
  const span = document.createElement('span');
  span.className = 'social-chip ' + type;
  span.setAttribute('aria-hidden','true');
  span.textContent = type === 'wsp-chip' ? '☎' : type === 'ig-chip' ? '◎' : 'f';
  return span;
}
function ensureIcon(selector, type){
  document.querySelectorAll(selector).forEach(btn=>{
    if(!btn.querySelector('.social-chip')) btn.prepend(icon(type));
  });
}
ensureIcon('.btn-whatsapp','wsp-chip');
ensureIcon('.btn-instagram','ig-chip');
ensureIcon('.btn-facebook','fb-chip');

const heroImg = document.querySelector('.hero-card img');
const secondImg = document.querySelector('.photo-main');
if(heroImg && secondImg){
  heroImg.src = 'assets/stain.webp?v=7';
  heroImg.alt = 'Impermeabilizante de tapices aplicado en sofá con derrame visible';
  secondImg.src = 'assets/hero.webp?v=7';
  secondImg.alt = 'Botella de impermeabilizante de tapices junto a gotas repelidas sobre una superficie textil';
}
const footerPs = document.querySelectorAll('footer p');
if(footerPs.length){
  footerPs[0].textContent = 'Impermeabilizante de Tapices · Protección textil premium.';
  if(footerPs[1]) footerPs[1].textContent = 'V Región · Envíos a regiones · Venta directa por WhatsApp';
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('in'); observer.unobserve(entry.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
