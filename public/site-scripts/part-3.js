
/* mission footprint: a walk along the path, brighter and surer toward the future */
(function(){
  var NS='http://www.w3.org/2000/svg',path=document.getElementById('ftPath');if(!path)return;
  var L=path.getTotalLength(),N=28,prints=[],ghost=document.getElementById('ftGhost'),pg=document.getElementById('ftPrints'),mg=document.getElementById('ftMiles'),head=document.getElementById('ftHead');
  var calm=document.documentElement.classList.contains('calm');
  function el(t,a,p){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e}
  function foot(p,x,y,rot,side,sc,cls){var g=el('g',{transform:'translate('+x+' '+y+') rotate('+rot+') scale('+(side*sc)+' '+sc+')','class':cls},p);
    el('ellipse',{cx:0,cy:-3,rx:4.6,ry:8.6,transform:'rotate(-8 0 -3)'},g);el('ellipse',{cx:.6,cy:9.5,rx:3.4,ry:4},g);return g}
  var grid=document.getElementById('ftGrid');
  for(var i=1;i<10;i++)el('line',{x1:i*100,y1:0,x2:i*100,y2:420},grid);for(var j=1;j<5;j++)el('line',{x1:0,y1:j*84,x2:1000,y2:j*84},grid);
  for(var i=0;i<N;i++){
    var t=i/(N-1),p=path.getPointAtLength(t*L),q=path.getPointAtLength(Math.min(L,t*L+2)),r=path.getPointAtLength(Math.max(0,t*L-2));
    var ang=Math.atan2(q.y-r.y,q.x-r.x),nx=-Math.sin(ang),ny=Math.cos(ang),side=i%2?1:-1,off=side*12,sc=.8+t*.55;
    var x=p.x+nx*off,y=p.y+ny*off,rot=ang*180/Math.PI+90;
    foot(ghost,x,y,rot,side,sc,'ft-print ft-ghost');
    var g=foot(pg,x,y,rot,side,sc,'ft-print');g.style.opacity=0;prints.push({g:g,t:t,col:t});
  }
  var ms=[.26,.58].map(function(t){var p=path.getPointAtLength(t*L),g=el('g',{transform:'translate('+p.x+' '+p.y+')'},mg);
    var c=el('circle',{r:24,'class':'ft-ms'},g),d=el('circle',{r:4,'class':'ft-msdot'},g);g.style.opacity=.15;return{g:g,t:t}});
  var rays=document.getElementById('ftRays');for(var k=0;k<16;k++){var a=k*Math.PI/8,r1=64,r2=k%2?80:96;el('line',{x1:Math.cos(a)*r1,y1:Math.sin(a)*r1,x2:Math.cos(a)*r2,y2:Math.sin(a)*r2},rays)}
  function clamp(v){return v<0?0:v>1?1:v}
  function mix(t){var a=[143,169,180],b=[0,198,255];return 'rgb('+a.map(function(v,i){return Math.round(v+(b[i]-v)*t)}).join(',')+')'}
  function frame(ms_){
    var cyc=15000,p=((ms_%cyc)/cyc)*1.3;                 /* 0..1.3: walk, hold, fade */
    var fade=clamp(1-(p-1.05)/.22);
    prints.forEach(function(o){var on=clamp((p-o.t*.8)/.05);o.g.style.opacity=(on*fade*(.45+.55*o.t)).toFixed(3);o.g.style.color=mix(Math.pow(o.t,.8));o.g.style.transform='';});
    var hp=clamp(p/.8),pt=path.getPointAtLength(hp*L);head.setAttribute('cx',pt.x);head.setAttribute('cy',pt.y);head.style.opacity=0;
    var B=document.getElementById('ftBeing'),ph=hp*L/9,walking=p<.8,sw=walking?Math.sin(ph):0,bob=walking?Math.abs(Math.cos(ph))*3.2:Math.sin(ms_*.004)*1.2;
    var a2=path.getPointAtLength(Math.min(L,hp*L+6)),a1=path.getPointAtLength(Math.max(0,hp*L-6)),lean=Math.max(-14,Math.min(14,Math.atan2(a2.y-a1.y,a2.x-a1.x)*57.3*.35));
    var bf=clamp(p/.05)*clamp(1-(p-1.08)/.2);
    B.setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+') rotate('+lean.toFixed(1)+') scale(1.55)');B.style.opacity=bf.toFixed(2);
    function ln(id,x1,y1,x2,y2){var e=document.getElementById(id);e.setAttribute('x1',x1);e.setAttribute('y1',y1);e.setAttribute('x2',x2);e.setAttribute('y2',y2)}
    var lift=function(v){return v>0?v*3.5:0};
    ln('bLegL',-4,-11-bob,-5+sw*4,-lift(-Math.cos(ph))*1);ln('bLegR',4,-11-bob,5-sw*4,-lift(Math.cos(ph))*1);
    document.getElementById('bBody').setAttribute('transform','translate(0 '+(-bob).toFixed(2)+')');
    if(walking){ln('bArmF',8,-26-bob,8-sw*7,-17-bob+Math.abs(sw)*-1);ln('bArmB',-8,-26-bob,-8+sw*7,-17-bob)}
    else{var wv=Math.sin(ms_*.012)*6;ln('bArmF',8,-26-bob,16+wv*.4,-40-bob+Math.abs(wv)*.3);ln('bArmB',-8,-26-bob,-13,-17-bob)}
    document.getElementById('bBulb').style.opacity=.6+.4*Math.sin(ms_*.008);
    ms.forEach(function(m){m.g.style.opacity=(.15+.85*clamp((p-m.t*.8)/.08)*fade).toFixed(2)});
    var dest=document.querySelector('.ft-dest'),lit=clamp((p-.55)/.3)*fade;dest.style.opacity=(.45+.55*lit).toFixed(2);
    requestAnimationFrame(frame)
  }
  if(calm){prints.forEach(function(o){o.g.style.opacity=.3+.7*o.t;o.g.style.color=mix(o.t)});head.style.display='none';(function(){var B=document.getElementById('ftBeing'),e=path.getPointAtLength(L*.5);B.setAttribute('transform','translate('+e.x+' '+e.y+') scale(1.55)')})()}
  else requestAnimationFrame(frame);
})();
