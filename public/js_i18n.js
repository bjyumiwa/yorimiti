// Minimal i18n for Yorimichi
const Y_LANGS = ["ja","en","zh","ko"];
const Y_I18N = {
  ja: {
    title:"寄り道 — Yorimichi",
    start:"スタート", continue:"続きから", research:"研究について",
    chooseChar:"いっしょに歩く仲間をえらんでください",
    calm:"穏やか", joy:"喜び",
    hudAttachment:"愛着", hudStage:"ステージ",
    guide:"導く", watch:"見守る", ignore:"放置",
    next:"次へ", toMenu:"メニューに戻る",
    reflectTitle:"ふりかえり",
    reflectQ1:"なぜこのタイミングで手を差し伸べましたか？",
    reflectQ2:"何に心が動きましたか？",
    destination:"目的地", arrive:"到着！",
    stageCleared:"ステージクリア",
  },
  en: {
    title:"Yorimichi — Detour",
    start:"Start", continue:"Continue", research:"About",
    chooseChar:"Choose a companion to walk with",
    calm:"Calm", joy:"Joy",
    hudAttachment:"Bond", hudStage:"Stage",
    guide:"Guide", watch:"Watch", ignore:"Ignore",
    next:"Next", toMenu:"Back to Menu",
    reflectTitle:"Reflection",
    reflectQ1:"Why did you intervene at that moment?",
    reflectQ2:"What moved your heart most?",
    destination:"Destination", arrive:"Arrived!",
    stageCleared:"Stage Cleared",
  },
  zh: {
    title:"绕路 — Yorimichi",
    start:"开始", continue:"继续", research:"关于研究",
    chooseChar:"请选择你的同伴",
    calm:"平静", joy:"喜悦",
    hudAttachment:"依恋", hudStage:"阶段",
    guide:"引导", watch:"守望", ignore:"放任",
    next:"下一步", toMenu:"返回菜单",
    reflectTitle:"回顾",
    reflectQ1:"为什么在那个时刻介入？",
    reflectQ2:"什么最打动你？",
    destination:"目的地", arrive:"到达！",
    stageCleared:"关卡完成",
  },
  ko: {
    title:"여리미치 — Yorimichi",
    start:"시작", continue:"이어하기", research:"연구 소개",
    chooseChar:"함께 걸을 동반자를 선택하세요",
    calm:"잔잔함", joy:"기쁨",
    hudAttachment:"애착", hudStage:"스테이지",
    guide:"이끈다", watch:"지켜본다", ignore:"방임",
    next:"다음", toMenu:"메뉴로",
    reflectTitle:"되돌아보기",
    reflectQ1:"왜 그 순간 개입했나요?",
    reflectQ2:"무엇이 가장 마음을 움직였나요?",
    destination:"목적지", arrive:"도착!",
    stageCleared:"스테이지 완료",
  },
};
function yGetLang(){
  return localStorage.getItem("yorimichi.lang") || "ja";
}
function ySetLang(l){ localStorage.setItem("yorimichi.lang", l); }
function t(key){
  const L = Y_I18N[yGetLang()] || Y_I18N.ja;
  return L[key] || key;
}
function applyTexts(){
  document.querySelectorAll("[data-t]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-t"));
  });
}
