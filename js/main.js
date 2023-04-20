let insideImg = document.getElementById("insideImg");
let image = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]

let btnIndietro = document.getElementById("indietro");
let btnAvanti = document.getElementById("avanti");

let pointScroll = 0;

for (let i = 0; i<image.length; i++) {
    let img = image[i];

    let m = document.createElement("img");
    m.src = img ;
    m.className = "scrollImg";

    insideImg.append(m);
    if (i != 0) {
        m.className = "scrollImg hidden";
    }
}


