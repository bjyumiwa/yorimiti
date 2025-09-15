export class Character {
constructor(rootEl,color="blue"){
this.root=rootEl; this.color=color; this.face="calm"; this.progress=0; this.bob=0;
this.updateSprite();
}
setColor(c){ this.color=c; this.updateSprite() }
setFace(f){ this.face=f; this.updateSprite() }
updateSprite(){ this.root.style.backgroundImage=`url(public/char/${this.color}/${this.face}.png)` }
setProgress(p){ this.progress=Math.max(0,Math.min(1,p)); this.render() }
render(){
const x=8+ this.progress*72; // vw from 8 to 80
this.bob=(this.bob+0.08)%Math.PI;
const y= Math.sin(this.bob)*4;
this.root.style.left=`${x}vw`; this.root.style.transform=`translateY(${y}px)`;
}
joyPulse(){ this.setFace("joy"); setTimeout(()=>this.setFace("calm"), 900) }
}




// ========================= js/ui.js =========================
import {t} from './i18n.js';


export function fillLangSelect(select,langs,current){
select.innerHTML=""; langs.forEach(l=>{
const opt=document.createElement('option'); opt.value=l.code; opt.textContent=l.name; if(l.code===current) opt.selected=true; select.appendChild(opt);
})
}


export function showBubble(name,text){
const b=document.getElementById('bubble');
document.getElementById('bubbleName').textContent=name||"";
document.getElementById('bubbleText').textContent=text||"";
b.hidden=false;
}
export function hideBubble(){ document.getElementById('bubble').hidden=true }


export function showChoices(items){
const box=document.getElementById('choices'); box.innerHTML="";
items.forEach(it=>{
const btn=document.createElement('button'); btn.className='choice'; btn.textContent=it.label; btn.onclick=()=>it.onClick?.();
box.appendChild(btn);
}); box.hidden=false;
}
export function hideChoices(){ document.getElementById('choices').hidden=true }


export function setBg(src){ const img=document.getElementById('bg'); img.src=src; }
export function setMeter(val){
const v=Math.max(0,Math.min(100,val));
document.getElementById('meterFill').style.width=`${v}%`;
document.getElementById('meterLabel').textContent=String(Math.round(v));
}


export function toast(msg){ const el=document.getElementById('sysMsg'); el.textContent=msg; el.hidden=false; setTimeout(()=>el.hidden=true, 1600) }


export function openMenu(renderer){
const root=document.getElementById('menuRoot'); root.style.display='flex'; root.innerHTML=""; const box=document.createElement('div'); box.className='menu'; root.appendChild(box);
renderer(box, ()=>{ root.style.display='none' });
}
