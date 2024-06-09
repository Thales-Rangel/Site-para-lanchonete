date = new Date;

promosURL = new Array("url(../img/Promo-Dom.jpeg)",
    "url(../img/Promo-Seg.jpeg)",
    "url(../img/Promo-Ter.jpeg)",
    "url(../img/Promo-Quar.jpeg)",
    "url(../img/Promo-Quin.jpeg)",
    "url(../img/Promo-Sex.jpeg)",
    "url(../img/Promo-Sab.jpeg)");

promosID = new Array("promo-Dom",
    "promo-Seg",
    "promo-Ter",
    "promo-Quar",
    "promo-Quin",
    "promo-Sex",
    "promo-Sab");

document.getElementById("day-promocao-area").style.backgroundImage = promosURL[date.getDay()];
document.getElementById(promosID[date.getDay()]).style.display = "flex";

function selectCardapio(id, div){
    for(element of document.querySelectorAll("#cardapio .section")){
        element.style.display = "none";
    }

    for(element of document.querySelectorAll(".opcoes-cardapio div")){
        element.classList.remove("selected");
    }

    document.getElementById(id).style.display = "flex";
    div.classList.add("selected");
}

function selectPromo(id, div){
    for(element of document.querySelectorAll("#promocoes .section")){
        element.style.display = "none";
    }

    for(element of document.querySelectorAll(".dias-semana div")){
        element.classList.remove("selected");
    }

    document.getElementById(id).style.display = "flex";
    div.classList.add("selected");
}