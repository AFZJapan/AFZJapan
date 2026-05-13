let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-slide";

  let prev = document.getElementsByClassName("prev");
  prev[0].style.display = (slideIndex == 1) ? "none" : "initial";
  let next = document.getElementsByClassName("next");
  next[0].style.display = (slideIndex == slides.length) ? "none" : "initial";
}
