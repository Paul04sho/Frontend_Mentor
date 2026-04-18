
const mobileMenu = document.querySelector(".navbar");
const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector("overlay");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.style.width = "250px";
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    mobileMenu.style.width = "0";
    overlay.style.display = "none";
})