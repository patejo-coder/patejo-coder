const main = document.getElementById("corpo");
const footer = document.querySelector("footer");
const eGit = document.getElementById('card-git');
const eEmail = document.getElementById("card-email");
const eFront = document.getElementById("card-front");
const eLink = document.getElementById("card-link");
const eFcc = document.getElementById("card-fcc");
const eInsta = document.getElementById("card-insta");
const container = document.getElementById("container");
const botao = document.getElementById("btn");

let estado = false;

botao.addEventListener("click", btnOn);

function transicao(card, delay){
    card.style.transition = `transform 1s ease-out ${delay}s, opacity 1s ease-out ${delay}s, box-shadow .3s`;
};

// Ativando Funções
function btnOn() {
    if(estado == false) {
        btnAtivado();
        gitMove();
        emailMove();
        frontMove();
        linkMove();
        fccMove();
        instaMove();
        revertColor();
        estado = true;
    }
    else {
        btnAtivado();
        gitReturn();
        emailReturn();
        frontReturn();
        linkReturn();
        fccReturn();
        instaReturn();
        resetRevert();
        estado = false;
    }
}
function btnAtivado() {
    botao.classList.toggle("ativo");
}
function gitMove() {
    eGit.style.transform = "translate(0px, -220px)";
    eGit.style.opacity = "100%";
    eGit.style.cursor = "pointer";
}
function emailMove() {
    transicao(eEmail, 1);
    eEmail.style.transform = "translate(-225px, -110px)";
    eEmail.style.opacity = "100%";
    eEmail.style.cursor = "pointer";
}
function frontMove() {
    transicao(eFront, 1.5);
    eFront.style.transform = "translate(-225px, 110px)";
    eFront.style.opacity = "100%";
    eFront.style.cursor = "pointer";
}
function linkMove() {
    transicao(eLink, 2);
    eLink.style.transform = "translate(0px, 220px)";
    eLink.style.opacity = "100%";
    eLink.style.cursor = "pointer";
}
function fccMove() {
    transicao(eFcc, 2.5);
    eFcc.style.transform = "translate(225px, 110px)";
    eFcc.style.opacity = "100%";
    eFcc.style.cursor = "pointer";
}
function instaMove() {
    transicao(eInsta, 3);
    eInsta.style.transform = "translate(225px, -110px)";
    eInsta.style.opacity = "100%";
    eInsta.style.cursor = "pointer";
}
function revertColor() {
    main.style.backgroundColor = "rgb(0, 0, 0)";
    footer.style.backgroundColor = "rgb(0, 0, 0)";
    footer.style.color = "rgb(255, 255, 255)";
}

// Efeito Mouse: Sombra no Card
function sombra(mouse, card, cor){
    const rect = card.getBoundingClientRect();
    const mouseX = mouse.clientX;
    const mouseY = mouse.clientY;
    const cardX = mouseX - rect.left; 
    const cardY = mouseY - rect.top;
    const meioX = (rect.width / 2) - cardX;
    const meioY = (rect.height / 2) - cardY;
    const relativoMeio = Math.abs(meioX) + Math.abs(meioY);

    card.style.boxShadow = `${meioX / 3}px ${meioY / 3}px ${relativoMeio / 10}px ${cor}`;
}

function resetSombra(card){
    card.style.boxShadow = "0px 0px 0px white";
}

eGit.addEventListener("mousemove", (mouse) => { sombra(mouse, eGit, "rgb(255, 255, 255)") });
eGit.addEventListener("mouseleave", () => { resetSombra(eGit)    });

eEmail.addEventListener("mousemove", (mouse) => {   sombra(mouse, eEmail, "rgb(221, 79, 67)")    });
eEmail.addEventListener("mouseleave", () => {   resetSombra(eEmail) });

eFront.addEventListener("mousemove", (mouse) => {   sombra(mouse, eFront, "rgb(255, 255, 255)")    });
eFront.addEventListener("mouseleave", () => {   resetSombra(eFront) });

eLink.addEventListener("mousemove", (mouse) => {   sombra(mouse, eLink, "rgb(0, 119, 181)")    });
eLink.addEventListener("mouseleave", () => {   resetSombra(eLink) });

eFcc.addEventListener("mousemove", (mouse) => {   sombra(mouse, eFcc, "rgb(255, 255, 255)")    });
eFcc.addEventListener("mouseleave", () => {   resetSombra(eFcc) });

eInsta.addEventListener("mousemove", (mouse) => {   sombra(mouse, eInsta, "rgb(228, 84, 111)")    });
eInsta.addEventListener("mouseleave", () => {   resetSombra(eInsta) });

// Desativando Funções
function btnAtivado() {
    botao.classList.toggle("ativo");
}
function gitReturn() {
    eGit.style.transform = "translate(0px, 0px)";
    eGit.style.opacity = "0";
    eGit.style.cursor = "default";
}
function emailReturn() {
    eEmail.style.transform = "translate(0px, 0px)";
    eEmail.style.opacity = "0";
    eEmail.style.cursor = "default";
}
function frontReturn() {
    eFront.style.transform = "translate(0px, 0px)";
    eFront.style.opacity = "0";
    eFront.style.cursor = "default";
}
function linkReturn() {
    eLink.style.transform = "translate(0px, 0px)";
    eLink.style.opacity = "0";
    eLink.style.cursor = "default";
}
function fccReturn() {
    eFcc.style.transform = "translate(0px, 0px)";
    eFcc.style.opacity = "0";
    eFcc.style.cursor = "default";
}
function instaReturn() {
    eInsta.style.transform = "translate(0px, 0px)";
    eInsta.style.opacity = "0";
    eInsta.style.cursor = "default";
} 
function resetRevert() {
    main.style.backgroundColor = "rgb(255, 255, 255)";
    footer.style.backgroundColor = "rgb(255, 255, 255)";
    footer.style.color = "rgb(0, 0, 0)";
}


// Funções para Links 
let git = document.getElementById("card-git");
git.addEventListener("click", onGit);

function onGit() {  window.open("https://github.com/patejo-coder", '_blank'); }

let mentor = document.getElementById("card-front");
mentor.addEventListener("click", onMentor);

function onMentor(){    window.open("https://www.frontendmentor.io/profile/patejo-coder", '_blank');    }

let linkedin = document.getElementById("card-link");
linkedin.addEventListener("click", onLinkedin);

function onLinkedin(){  window.open("https://www.linkedin.com/in/matheus-oliveira501/", '_blank');    }

let freecode = document.getElementById("card-fcc");
freecode.addEventListener("click", onFreecode);

function onFreecode(){  window.open("https://www.freecodecamp.org/Patejo-coder", '_blank');    }

let insta = document.getElementById("card-insta");
insta.addEventListener("click", onInsta);

function onInsta(){ window.open("https://www.instagram.com", '_blank');  }
