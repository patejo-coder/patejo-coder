function previewMenu(imgD) {
    document.getElementById("img-desafio").style.opacity = "100%";
    document.getElementById("logo").style.display = "none";
    document.getElementById("img-desafio").src = "./images/section-frontend/" + imgD + ".jpg";
}

function previewText(tituloD) {
    document.getElementById("numero-desafio").innerHTML = tituloD;
}

function previewLink(nomeP) {
    document.getElementById("linkFrontend").href = "https://patejo-coder.github.io/" + nomeP + "/";
}

function selectMenu0() {
    previewMenu('desafio-1');
    previewText('Column Preview Card Component');
    previewLink('3-column-preview-card-component-main');
}

function selectMenu1() {
    previewMenu('desafio-2');
    previewText('NFT Preview Card Component');
    previewLink('nft-preview-card-component-main');
}

function selectMenu2() {
    previewMenu('desafio-3');
    previewText('Order Summary Component');
    previewLink('order-summary-component-main');
}

function selectMenu3() {
    previewMenu('desafio-4');
    previewText('Profile Card Component');
    previewLink('profile-card-component-main');
}

function selectMenu4() {
    previewMenu('desafio-5');
    previewText('Results Summary Component');
    previewLink('results-summary-component-main');
}

function selectMenu5() {
    previewMenu('desafio-6');
    previewText('Social Proof Section Master');
    previewLink('social-proof-section-master');
}

function selectMenu6() {
    previewMenu('desafio-7');
    previewText('Four Card Feature Section Master');
    previewLink('four-card-feature-section-master');
}

function selectMenu7() {
    previewMenu('desafio-8');
    previewText('Stats Preview Card Component');
    previewLink('stats-preview-card-component-main');
}

function selectMenu8() {
    previewMenu('desafio-9');
    previewText('Single Price Grid Component Master');
    previewLink('single-price-grid-component-master');
}

function selectMenu9() {
    previewMenu('desafio-10');
    previewText('QR Code Component');
    previewLink('qr-code-component-main');
}

function selectMenu10() {
    previewMenu('desafio-11');
    previewText('Product Preview Card Component');
    previewLink('product-preview-card-component-main');
}

