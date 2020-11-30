// Kasutatud material slaidshowks: 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
var slideIndex = 1; //paeb slaidi indeks väärtuseks ühe
showSlides(slideIndex);

function plusSlides(n) //paneb slaidi indeksi väärtuseks järgmise slaidi väärtuse
{
  showSlides(slideIndex += n);
}

function currentSlide(n) //paneb slaidi indeksi väärtuseks esitatava slaidi väärtuse
{ 
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i; //muutuja nimi
  var slides = document.getElementsByClassName("mySlides"); //loeb dokumendist kokku piltide arvu ja seab selle muutuja slides väärtuseks
  var dots = document.getElementsByClassName("dot"); //loeb dokumendist kokku nö täppide arvu ja seab selle vastava muutuja väärtuseks
  if (n > slides.length) {slideIndex = 1}   //kui parameetri n väärtus läheb suuremaks kui slaidide arv, paneb slaidide indeksi väärtuseks ühe
  if (n < 1) {slideIndex = slides.length} //kui parameetri n väärtus on väiksem kui üks seab slaidi indeksi väärtuseks suurima slaidi arvu
  for (i = 0; i < slides.length; i++) //Suurendab muutujat i iga kord ühe võrra kui i on väiksem kui slaidide koguarv
  {
      slides[i].style.display = "none";  //vastutab selle eest, et esitataks vaid ühte pilti korraga
  }
  for (i = 0; i < dots.length; i++) //suurenab muutuja i iga kord ühe võrra kui i väärtus väiksem kui täppide koguarv
  {
      dots[i].className = dots[i].className.replace(" active", ""); //vastutab, et täpid, mis ei tohiks olla aktiivsed seda ka ei oleks
  }
  slides[slideIndex-1].style.display = "block";  //esitab õiget slaidi
  dots[slideIndex-1].className += " active"; //Valitud järiekorra numbriga täpp muutub aktiivseks
}