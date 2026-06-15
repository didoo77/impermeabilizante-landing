const mobileFix = document.createElement('style');
mobileFix.textContent = `
.social-chip{width:24px;height:24px;border-radius:50%;display:inline-grid;place-items:center;flex:0 0 24px;line-height:1;overflow:hidden}.social-chip svg{width:16px;height:16px;display:block}.wsp-chip{background:#25D366;color:#073016}.wsp-chip svg{fill:#073016}.ig-chip{background:radial-gradient(circle at 30% 110%,#fdf497 0%,#fdf497 13%,#fd5949 42%,#d6249f 62%,#285AEB 100%);color:#fff}.ig-chip svg{fill:none;stroke:#fff;stroke-width:2}.fb-chip{background:#1877F2;color:#fff;font-family:Arial,sans-serif;font-weight:900;font-size:18px}.btn-facebook{background:linear-gradient(135deg,#ffffff,#f4f8ff);border:1px solid rgba(24,119,242,.22);box-shadow:none;color:#0D2137}.btn-facebook:hover{box-shadow:0 16px 32px rgba(24,119,242,.14)}
.hero-card{background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04)),url('assets/stain.webp?v=9')!important;background-size:cover!important;background-position:center center!important}.hero-card img{object-fit:contain!important;object-position:center center!important}.photo-stack{border-radius:28px;overflow:hidden;background-image:linear-gradient(rgba(246,251,252,.20),rgba(246,251,252,.20)),url('assets/hero.webp?v=9')!important;background-size:cover!important;background-position:center center!important}.photo-main{object-fit:contain!important;object-position:center center!important;background:transparent!important}.footer-extra{width:100%;border-top:1px solid rgba(255,255,255,.10);margin-top:18px;padding-top:16px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:rgba(255,255,255,.48);font-size:12px;letter-spacing:.02em}.footer-credit{color:rgba(255,255,255,.55)}.footer-credit strong{color:rgba(255,255,255,.78);font-weight:700}
@media(max-width:900px){
  .site-header{padding:7px 18px!important;min-height:58px!important;}
  .brand img{width:39px!important;height:39px!important;}
  .brand{gap:8px!important;font-size:10px!important;letter-spacing:.055em!important;}
  .hero{display:flex!important;flex-direction:column!important;gap:9px!important;min-height:auto!important;padding-top:14px!important;padding-bottom:24px!important;}
  .hero-copy{display:contents!important;}
  .hero-copy .eyebrow{order:1!important;text-align:center!important;margin:0 0 5px!important;font-size:9.5px!important;letter-spacing:.2em!important;}
  .hero-copy h1{order:2!important;font-size:clamp(30px,8.1vw,37px)!important;line-height:1.01!important;margin-bottom:6px!important;letter-spacing:-.048em!important;}
  .hero-copy .hero-lead{order:3!important;font-size:14.5px!important;line-height:1.36!important;margin-bottom:0!important;}
  .hero-visual{order:4!important;width:100%!important;margin:5px 0 0!important;}
  .hero-card{max-width:100%!important;margin:0!important;transform:none!important;border-radius:22px!important;aspect-ratio:4/3!important;}
  .hero-card img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center center!important;padding:0!important;}
  .hero-card:before{background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(75,184,212,.03),rgba(245,166,35,.04))!important;}
  .hero-actions{order:5!important;margin:10px 0 8px!important;gap:8px!important;display:flex!important;flex-wrap:wrap!important;}
  .hero .hero-actions .btn-whatsapp{width:100%!important;min-height:48px!important;padding:11px 16px!important;font-size:15.5px!important;}
  .hero .hero-actions .btn-instagram,.hero .hero-actions .btn-facebook{width:calc(50% - 4px)!important;min-height:45px!important;padding:10px 12px!important;font-size:14px!important;}
  .final-cta .hero-actions .btn{width:100%!important;min-height:48px!important;padding:11px 16px!important;font-size:15px!important;}
  .social-chip{width:22px!important;height:22px!important;flex-basis:22px!important}.social-chip svg{width:14px!important;height:14px!important}.fb-chip{font-size:17px!important}
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
  .photo-stack{border-radius:22px!important;}
  .photo-main{width:100%!important;aspect-ratio:4/3!important;border-radius:22px!important;object-fit:contain!important;object-position:center center!important;}
  .note-card{left:12px!important;right:12px!important;bottom:12px!important;max-width:none!important;padding:14px 16px!important;border-radius:16px!important;font-size:14px!important;}
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
  .float-whatsapp{width:46px!important;height:46px!important;right:11px!important;bottom:11px!important;padding:0!important;border-radius:50%!important;display:grid!important;place-items:center!important;box-shadow:0 10px 22px rgba(37,211,102,.22)!important;opacity:.9!important;font-size:0!important;background:#25D366!important;}
  .float-whatsapp:before{content:'';width:20px;height:20px;background:#073016;mask:url("data:image/svg+xml,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.04 3C8.86 3 3.02 8.84 3.02 16.02c0 2.3.6 4.54 1.74 6.51L3 29l6.64-1.71a13 13 0 0 0 6.4 1.63h.01c7.18 0 13.02-5.84 13.02-13.02S23.22 3 16.04 3zm7.57 18.58c-.32.9-1.86 1.72-2.58 1.78-.66.06-1.5.09-2.42-.15-.56-.14-1.28-.41-2.2-.8-3.86-1.67-6.38-5.54-6.57-5.8-.19-.25-1.57-2.09-1.57-3.99s.99-2.83 1.34-3.22c.35-.39.77-.49 1.03-.49h.74c.24.01.56-.09.87.67.32.78 1.09 2.69 1.19 2.88.1.19.16.42.03.67-.13.26-.2.42-.39.65-.19.23-.41.51-.58.68-.19.19-.39.4-.17.78.22.39.97 1.59 2.08 2.58 1.43 1.27 2.63 1.67 3.02 1.86.39.19.61.16.84-.1.23-.26.97-1.13 1.23-1.52.26-.39.52-.32.87-.19.35.13 2.24 1.06 2.62 1.25.39.19.65.29.74.45.1.16.1.94-.23 1.84z'/%3E%3C/svg%3E") center/contain no-repeat;}
  .float-label{display:none!important;}
  footer{padding:26px 20px 76px!important;display:block!important;}
  footer p{font-size:13px!important;line-height:1.55!important;}
  .footer-brand{gap:12px!important;align-items:flex-start!important;margin-bottom:14px!important}.footer-brand img{width:42px!important;height:42px!important;}
  .footer-brand p{font-family:'Playfair Display',serif!important;font-size:16px!important;line-height:1.35!important;color:rgba(255,255,255,.72)!important;}
  .footer-extra{font-size:11.5px!important;line-height:1.45!important;gap:8px!important;display:block!important;}
  .footer-credit{margin-top:8px!important;display:block!important;}
}
@media(max-width:420px){
  .hero-copy h1{font-size:31px!important;}
  .hero-card{aspect-ratio:4/3!important;}
}
`;
document.head.appendChild(mobileFix);

const facebookUrl = 'https://www.facebook.com/impermeabilizantedetapices/';
function icon(type){
  const span = document.createElement('span');
  span.className = 'social-chip ' + type;
  span.setAttribute('aria-hidden','true');
  if(type === 'wsp-chip') span.innerHTML = `<svg viewBox="0 0 32 32"><path d="M16.04 3C8.86 3 3.02 8.84 3.02 16.02c0 2.3.6 4.54 1.74 6.51L3 29l6.64-1.71a13 13 0 0 0 6.4 1.63h.01c7.18 0 13.02-5.84 13.02-13.02S23.22 3 16.04 3zm7.57 18.58c-.32.9-1.86 1.72-2.58 1.78-.66.06-1.5.09-2.42-.15-.56-.14-1.28-.41-2.2-.8-3.86-1.67-6.38-5.54-6.57-5.8-.19-.25-1.57-2.09-1.57-3.99s.99-2.83 1.34-3.22c.35-.39.77-.49 1.03-.49h.74c.24.01.56-.09.87.67.32.78 1.09 2.69 1.19 2.88.1.19.16.42.03.67-.13.26-.2.42-.39.65-.19.23-.41.51-.58.68-.19.19-.39.4-.17.78.22.39.97 1.59 2.08 2.58 1.43 1.27 2.63 1.67 3.02 1.86.39.19.61.16.84-.1.23-.26.97-1.13 1.23-1.52.26-.39.52-.32.87-.19.35.13 2.24 1.06 2.62 1.25.39.19.65.29.74.45.1.16.1.94-.23 1.84z"/></svg>`;
  if(type === 'ig-chip') span.innerHTML = `<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="1.1" fill="#fff" stroke="none"></circle></svg>`;
  if(type === 'fb-chip') span.textContent = 'f';
  return span;
}
function ensureIcon(selector, type){
  document.querySelectorAll(selector).forEach(btn=>{
    btn.querySelectorAll('.social-chip').forEach(el=>el.remove());
    btn.prepend(icon(type));
  });
}
ensureIcon('.btn-whatsapp','wsp-chip');
ensureIcon('.btn-instagram','ig-chip');
ensureIcon('.btn-facebook','fb-chip');

const heroImg = document.querySelector('.hero-card img');
const secondImg = document.querySelector('.photo-main');
if(heroImg && secondImg){
  heroImg.src = 'assets/stain.webp?v=9';
  heroImg.alt = 'Impermeabilizante de tapices aplicado en sofá con derrame visible';
  secondImg.src = 'assets/hero.webp?v=9';
  secondImg.alt = 'Botella de impermeabilizante de tapices junto a gotas repelidas sobre una superficie textil';
}
const footer = document.querySelector('footer');
const footerPs = document.querySelectorAll('footer p');
if(footerPs.length){
  footerPs[0].textContent = 'Impermeabilizante de Tapices · Protección textil premium para sofás, sillas y superficies textiles.';
  if(footerPs[1]) footerPs[1].textContent = 'V Región · Envíos a regiones · Venta directa por WhatsApp';
}
if(footer && !footer.querySelector('.footer-extra')){
  const extra = document.createElement('div');
  extra.className = 'footer-extra';
  extra.innerHTML = '<span>© 2026 Impermeabilizante de Tapices. Todos los derechos reservados.</span><span class="footer-credit">Landing desarrollada por <strong>Lux Render</strong>.</span>';
  footer.appendChild(extra);
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('in'); observer.unobserve(entry.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
