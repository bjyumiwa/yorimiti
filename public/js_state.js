// Persistent state helpers
const Y_STATE = {
  get(key, def=null){ try{return JSON.parse(localStorage.getItem(key)) ?? def}catch(_){return def}},
  set(key, val){ localStorage.setItem(key, JSON.stringify(val)); },
  del(key){ localStorage.removeItem(key); }
};

// Defaults
if(!localStorage.getItem("yorimichi.stage")) Y_STATE.set("yorimichi.stage", 1);
if(!localStorage.getItem("yorimichi.attachment")) Y_STATE.set("yorimichi.attachment", 0);
if(!localStorage.getItem("yorimichi.lang")) localStorage.setItem("yorimichi.lang","ja");

function go(p){
  localStorage.setItem("yorimichi.lastPage", p);
  location.href = p;
}
