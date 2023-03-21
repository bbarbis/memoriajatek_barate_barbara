// létrehozunk egy konstans tömböt a képekkel
const LIST = [
    "kepek/kep1.jpg",
    "kepek/kep2.jpg",
    "kepek/kep3.jpg",
    "kepek/kep4.jpg",
    "kepek/kep5.jpg",
    "kepek/kep6.jpg",
    "kepek/kep1.jpg",
    "kepek/kep2.jpg",
    "kepek/kep3.jpg",
    "kepek/kep4.jpg",
    "kepek/kep5.jpg",
    "kepek/kep6.jpg",
  ];
  
  // kiválasztott képek tárolására szolgáló tömb
  const KIVALASZTOTTKEPEK = [];
  
  // a kattintások számának számlálója
  let db = 0;
  
  $(function () {
    // HTML építése
    const FELSOELEM = $("#felso");
    const tartalom = osszeAllit();
    FELSOELEM.append(tartalom);
  
    // kisképekre kattintás
    const FELSOKEPEK = $("#felso img");
    FELSOKEPEK.on("click", kepreKattintas);
  });
  
  // kisképre kattintás
  function kepreKattintas() {
    // megkeressük az aktuális képet
    const aktKep = event.target;
  
    // ha a képre már kattintottunk, nem történik semmi
    if (aktKep.classList.contains("kivalasztott")) {
      return;
    }
  
    // eltároljuk a kiválasztott kép id-jét
    const aktKepId = $(aktKep).attr("id");
    KIVALASZTOTTKEPEK.push(aktKepId);
  
    // ha már két képet kiválasztottunk, akkor visszafordítjuk őket
    db++;
    if (db == 2) {
      disableClicks();
      db = 0;
      visszafordit();
    }
  
    // megfordítjuk a kattintott képet
    $(aktKep).addClass("kivalasztott");
    aktKep.src = LIST[aktKepId];
  }
  // kiválasztott képek visszafordítása
function visszafordit() {
    const FELSOKEPEK = $("#felso img");
    const kivalasztottKepek = $(".kivalasztott");
    const id1 = $(kivalasztottKepek[0]).attr("id");
    const id2 = $(kivalasztottKepek[1]).attr("id");
    
    setTimeout(function () {
    const kep1 = FELSOKEPEK.eq(id1);
    kep1.removeClass("kivalasztott");
    kep1.attr("src", "kepek/hatter.jpg");}, 1000);
}// kiválasztott képek engedélyezése
function enableClicks() {
    const FELSOKEPEK = $("#felso img");
    FELSOKEPEK.each(function () {
    const kep = $(this);
    if (!kep.hasClass("kivalasztott")) {
    kep.on("click", kepreKattintas);
    }
    });
    }
    
    // HTML építése
    function osszeAllit() {
    let html = "";
    for (let i = 0; i < LIST.length; i++) {
    html += <img id="${i}" src="kepek/hatter.jpg" alt="kép">;
    }
    return html;
    }