window.addEventListener("load", evt => {initBanner();});

let thisAd = 0;
const imageBase = "images/reading";

function initBanner() {
   document.getElementById("adBanner").parentNode.addEventListener("click", evt => {evt.returnValue = goToLink();});
   rotate();
}

function goToLink() {
   let links = ["google.com", "helion.pl", "gmail.com"];
   document.location.href = "http://www." + links[thisAd];

   return false;
}

function rotate() {
   document.getElementById("adBanner").src = imageBase + thisAd + ".gif";
   thisAd++;
   thisAd %= 3;

   setTimeout(rotate, 1000);
}
