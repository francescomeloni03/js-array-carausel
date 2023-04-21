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



let scrollImgEM = document.getElementsByClassName("scrollImg");



// Click sul button per scrollare avanti

btnAvanti.addEventListener("click", function(){

    if(pointScroll < image.length-1) {
        for (let c = 0; c < image.length; c++) {
            const scrollImg = scrollImgEM[c];

            if(c == pointScroll+1 ) {
                scrollImg.classList.remove("hidden");
            } 
            else {
                scrollImg.classList.add("hidden");
            }
        }
        pointScroll++;
    }
     else {
        let ultimaScrollImg = scrollImgEM [image.length-1]
        ultimaScrollImg.classList.add("hidden");
        let primaScrollImg =  scrollImgEM [0]
        primaScrollImg.classList.remove("hidden");
        pointScroll = 0;


    }
    
});


// Click sul button per scrollare indietro

btnIndietro.addEventListener("click", function(){

    if(pointScroll>0) {
        for (let c = 0; c < scrollImgEM.length; c++) {
                const scrollImg = scrollImgEM[c];

            if(c == pointScroll-1 ) {
                scrollImg.classList.remove("hidden");
            } else {
                scrollImg.classList.add("hidden");
            }
        }
        
        pointScroll--;
    } else {
        let ultimaScrollImg = scrollImgEM [image.length-1]
        let primaScrollImg =  scrollImgEM [0]
        primaScrollImg.classList.add("hidden");
        ultimaScrollImg.classList.remove("hidden");
        pointScroll = image.length-1
    }

});