var modal = document.getElementById("modalWrapper");
var transparentBg = document.getElementById("transparentBg");

function openModal() {
  modal.style.display = "block";
  transparentBg.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  transparentBg.style.display = "none";
}

//Script for slider

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");

  let currentIndex = 0;

  function nextSlider() {
    slides[currentIndex].classList.remove("active");

    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    slides[currentIndex].classList.add("active");
  }

  setInterval(nextSlider, 3000);
  slides[currentIndex].classList.add("active");
});

//Scroll into section//

function scrollIntoSection(sectionId) {
  var section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  return false;
}
