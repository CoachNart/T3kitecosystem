
(() => {
const R=document.documentElement,wp=document.getElementById('wp');
// The legacy whitepaper/infrastructure section is not part of the current page.
// Exit safely when its markup is absent so the site scripts never crash.
if(!wp)return;
const nv=document.querySelector('body>nav'),links=[...wp.querySelectorAll('.wpnav a')],bar=wp.querySelector('.wpbar');
const sh=()=>R.style.setProperty('--navh',(nv?nv.offsetHeight:64)+'px');sh();addEventListener('resize',sh);
const jump=id=>{const el=id&&document.getElementById(id);if(el)el.scrollIntoView({behavior:'instant'});else scrollTo({top:0,behavior:'instant'})};
const view=(on,id)=>{R.classList.toggle('wpv',on);sh();jump(id)};
const route=()=>{const h=location.hash,on=h==='#whitepaper'||h.startsWith('#wp-');view(on,on&&h!=='#whitepaper'?h.slice(1):h.slice(1)==='whitepaper'?'':h.slice(1))};
document.addEventListener('click',e=>{
 const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;
 const h=a.getAttribute('href');if(h.length<2)return;
 const toWp=h==='#whitepaper'||h.startsWith('#wp-');
 if(!toWp&&!R.classList.contains('wpv'))return;
 e.preventDefault();
 try{history.pushState(null,'',h)}catch(_){}
 view(toWp,h==='#whitepaper'?'':h.slice(1));
});
addEventListener('hashchange',route);addEventListener('popstate',route);
if(/^#(whitepaper|wp-)/.test(location.hash))route();
const navStrip=wp.querySelector('.wpin');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;links.forEach(a=>{const o=a.hash==='#'+e.target.id;a.classList.toggle('on',o);if(o&&navStrip){const left=a.offsetLeft-navStrip.offsetLeft-(navStrip.clientWidth-a.offsetWidth)/2;navStrip.scrollTo({left,behavior:'smooth'})}})}),{rootMargin:'-30% 0px -60% 0px'});
wp.querySelectorAll('section').forEach(s=>io.observe(s));
addEventListener('scroll',()=>{if(!R.classList.contains('wpv'))return;const h=R.scrollHeight-innerHeight;bar.style.width=Math.min(100,scrollY/h*100)+'%'},{passive:true});
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.08});
wp.querySelectorAll('.wpc,.wpflow>div,.wptbl,.wpcode,.wpck li').forEach(x=>{x.classList.add('wprv');ro.observe(x)});
})();
