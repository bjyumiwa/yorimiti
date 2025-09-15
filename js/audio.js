let enabled=false; let bgmEl, tapEl, okEl;
export function initAudio(){
bgmEl=new Audio('public/sfx/bgm.mp3'); bgmEl.loop=true; bgmEl.volume=0.4;
tapEl=new Audio('public/sfx/tap.mp3'); okEl=new Audio('public/sfx/confirm.mp3');
document.addEventListener('pointerdown',()=>{ if(!enabled){ enabled=true; bgmEl.play().catch(()=>{}); }}, {once:true});
}
export function sfxTap(){ if(enabled) tapEl.currentTime=0, tapEl.play().catch(()=>{}) }
export function sfxOk(){ if(enabled) okEl.currentTime=0, okEl.play().catch(()=>{}) }
export function setBgm(on){ if(on){ bgmEl.play().catch(()=>{}) } else { bgmEl.pause() } }
