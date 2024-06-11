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

promosDesc = new Array("Compre uma pizza grande e ganhe outra do mesmo sabor de graça! Escolha entre margherita, pepperoni ou vegetariana.",
    "Peça nosso hambúrguer especial e ganhe uma bebida (refrigerante ou suco) de cortesia! Acompanhe com batatas fritas.",
    "Compre dois sanduíches naturais e pague apenas pelo primeiro! Escolha entre frango, atum ou veggie.", 
    "Compre uma latinha de Coca-Cola e ganhe um petisco à sua escolha! Acompanhe com nossos petiscos especiais. Uma combinação perfeita para a tarde.", 
    "Compre uma pizza grande e ganhe uma bola de sorvete de sobremesa! Escolha seu sabor favorito.",
    "Peça um pote de açaí e ganhe um energético para acompanhar! Perfeito para a sexta-feira agitada.", 
    "Compre uma pizza grande e ganhe outra do mesmo sabor de graça! Escolha entre margherita, pepperoni ou vegetariana.");

document.getElementById("day-promocao-area").style.backgroundImage = promosURL[date.getDay()];
document.querySelector(".desc-promocao p").innerHTML = promosDesc[date.getDay()];
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