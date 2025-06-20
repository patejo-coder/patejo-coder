let elementoCaixinha = document.getElementById("caixinha");
let blocoHtml = document.getElementsByClassName("mark")[0];
let blocoCss = document.getElementsByClassName("mark")[1];
let blocoJs = document.getElementsByClassName("mark")[2];

function animation() {
        elementoCaixinha.classList.toggle("ativaAnimation");
}

function inverteS1() {
    blocoHtml.style.backgroundColor = "rgba(246, 123, 52, 255)";
    blocoHtml.style.color = "#ffffff";
    blocoHtml.style.transition = "1s";
    blocoHtml.style.borderRadius = "10px";
    blocoHtml.style.padding = "5px";
}

function inverteS2() {
    blocoCss.style.backgroundColor = "rgba(42, 184, 230, 255)";
    blocoCss.style.color = "#ffffff";
    blocoCss.style.transition = "1s";
    blocoCss.style.borderRadius = "10px";
    blocoCss.style.padding = "5px";
}

function inverteS3() {
    blocoJs.style.backgroundColor = "rgba(245, 206, 53, 255)";
    blocoJs.style.color = "#ffffff";
    blocoJs.style.transition = "1s";
    blocoJs.style.borderRadius = "10px";
    blocoJs.style.padding = "5px";
}

function resetInverte() {
    blocoHtml.style.backgroundColor = "transparent";
    blocoHtml.style.color = "rgba(246, 123, 52, 255)";
    blocoHtml.style.padding = "0px";
    blocoCss.style.backgroundColor = "transparent";
    blocoCss.style.color = "rgba(42, 184, 230, 255)";
    blocoCss.style.padding = "0px";
    blocoJs.style.backgroundColor = "transparent";
    blocoJs.style.color = "rgba(245, 206, 53, 255)";
    blocoJs.style.padding = "0px";
}

