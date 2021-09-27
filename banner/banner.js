window.addEventListener("load", ev => {rotate();});

let thisAd = 0;
const imageBase = "images/reading";

function rotate() {
   document.getElementById("adBanner").src = imageBase + thisAd + ".gif";
   thisAd++;
   thisAd %= 3;

   setTimeout(rotate, 3*1000);
}
