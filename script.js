const mobileFix = document.createElement('style');
mobileFix.textContent = `
@media(max-width:900px){
  .site-header{padding:8px 18px!important;min-height:62px!important;}
  .brand img{width:42px!important;height:42px!important;}
  .brand{gap:8px!important;font-size:10.5px!important;letter-spacing:.06em!important;}
  .hero{display:flex!important;flex-direction:column!important;gap:12px!important;min-height:auto!important;padding-top:20px!important;padding-bottom:30px!important;}
  .hero-copy{display:contents!important;}
  .hero-copy .eyebrow{order:1!important;margin-bottom:8px!important;font-size:10.5px!important;letter-spacing:.21em!important;}
  .hero-copy h1{order:2!important;font-size:clamp(34px,9.2vw,43px)!important;line-height:.98!important;margin-bottom:10px!important;letter-spacing:-.055em!important;}
  .hero-copy .hero-lead{order:3!important;font-size:16px!important;line-height:1.42!important;margin-bottom:0!important;}
  .hero-visual{order:4!important;width:100%!important;margin:2px 0 0!important;}
  .hero-card{max-width:100%!important;margin:0!important;transform:none!important;border-radius:22px!important;aspect-ratio:16/10.7!important;}
  .hero-card img{object-fit:cover!important;object-position:center 55%!important;}
  .hero-actions{order:5!important;margin:14px 0 10px!important;gap:9px!important;}
  .hero-actions .btn{width:100%!important;min-height:52px!important;padding:12px 18px!important;}
  .trust-row{order:6!important;gap:7px!important;margin:0!important;}
  .trust-row span,.audience-row span{font-size:12.5px!important;padding:8px 11px!important;}
  .section-pad{padding:34px 20px!important;}
  h2{font-size:clamp(30px,8.4vw,39px)!important;line-height:1.03!important;}
  p{font-size:16px!important;line-height:1.46!important;}
  .section-head{margin-bottom:22px!important;}
  .benefit-grid{gap:10px!important;}
  .benefit{padding:17px 18px!important;border-radius:18px!important;}
  .benefit span{margin-bottom:7px!important;}
  .benefit h3{font-size:19px!important;margin-bottom:5px!important;}
  .benefit p{font-size:14.5px!important;}
  .showcase{padding:34px 14px!important;}
  .showcase-card,.cta-card{border-radius:24px!important;}
  .showcase-card img,.cta-card img{min-height:270px!important;}
  .showcase-card>div,.cta-card>div{padding:24px 20px!important;}
  .steps{gap:9px!important;}
  .step{grid-template-columns:44px 1fr!important;gap:10px!important;padding:12px 13px!important;border-radius:17px!important;}
  .step strong{width:36px!important;height:36px!important;font-size:13px!important;}
  .step p{font-size:15.5px!important;line-height:1.32!important;}
  details{padding:15px 16px!important;border-radius:17px!important;}
  summary{font-size:16.5px!important;}
  .float-whatsapp{width:56px!important;height:56px!important;right:14px!important;bottom:14px!important;padding:0!important;border-radius:50%!important;display:grid!important;place-items:center!important;box-shadow:0 14px 32px rgba(37,211,102,.38)!important;}
  .float-whatsapp .social-icon{width:28px!important;height:28px!important;}
  .float-label{display:none!important;}
  footer{padding:26px 20px 92px!important;}
}
@media(max-width:420px){
  .hero-copy h1{font-size:36px!important;}
  .hero-card{aspect-ratio:16/10.2!important;}
}
`;
document.head.appendChild(mobileFix);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('in'); observer.unobserve(entry.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
