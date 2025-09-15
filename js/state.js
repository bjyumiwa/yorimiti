export const DEFAULT_STATE={
attachment:0, // 0..100
history:[], // [{stage,event,choice}]
pattern:{help:0,watch:0,ignore:0},
consent:false,
started:true,
};


export function deepClone(o){return JSON.parse(JSON.stringify(o))}




// ========================= js/save.js =========================
// Minimal local encryption using Web Crypto; device-local random key persisted in localStorage
const STORAGE_KEY="yorimichi.save";
const KEY_KEY="yorimichi.key";


async function getKey(){
let raw=localStorage.getItem(KEY_KEY);
if(!raw){
const buf=new Uint8Array(32); crypto.getRandomValues(buf);
raw=btoa(String.fromCharCode(...buf));
localStorage.setItem(KEY_KEY,raw);
}
const bytes=Uint8Array.from(atob(raw),c=>c.charCodeAt(0));
return crypto.subtle.importKey("raw",bytes,{name:"AES-GCM"},false,["encrypt","decrypt"]);
}


export async function saveState(obj){
try{
const key=await getKey();
const iv=new Uint8Array(12); crypto.getRandomValues(iv);
const data=new TextEncoder().encode(JSON.stringify(obj));
const ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,data);
const blob=new Uint8Array(iv.byteLength+ct.byteLength);
blob.set(iv,0); blob.set(new Uint8Array(ct),iv.byteLength);
localStorage.setItem(STORAGE_KEY,btoa(String.fromCharCode(...blob)));
}catch(e){
console.warn("Encryption failed; saving plaintext",e);
localStorage.setItem(STORAGE_KEY,JSON.stringify(obj));
}
}


export async function loadState(){
const raw=localStorage.getItem(STORAGE_KEY);
if(!raw) return null;
try{
// try decrypt
const buf=Uint8Array.from(atob(raw),c=>c.charCodeAt(0));
const iv=buf.slice(0,12), ct=buf.slice(12);
const key=await getKey();
const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv},key,ct);
return JSON.parse(new TextDecoder().decode(pt));
}catch(_){
try{ return JSON.parse(raw) }catch(e){ console.error(e); return null }
}
}


export function clearSave(){ localStorage.removeItem(STORAGE_KEY) }

