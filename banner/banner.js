window.addEventListener("load", evt => {initBanner();});

let thisAd = 0;
const imageBase = "images/reading";

function initBanner() {
   document.getElementById("adBanner").parentNode.addEventListener("click", evt => {goToLink();});
   rotate();
}

function goToLink() {
   let links = ["google.com", "helion.pl", "gmail.com"];
   document.location.href = "http://www." + links[thisAd];

   //workaround for non working return false
   let count = 1000000000;
   while(--count){
   }

   return false;
}

function rotate() {
   document.getElementById("adBanner").src = imageBase + thisAd + ".gif";
   thisAd++;
   thisAd %= 3;

   setTimeout(rotate, 1000);
}
