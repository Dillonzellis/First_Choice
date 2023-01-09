const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
    
        const offset = btn.dataset.carouselButton === "next" ? 1 : -1
        const slides = btn.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
