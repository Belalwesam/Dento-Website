const mobileNav = document.getElementById("mobileNav");
const mobileNavBtn = document.getElementById("mobileNavBtn");
mobileNavBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  mobileNavBtn.classList.toggle("Xsign");
});
const topBtn = document.getElementById("topBtn");
const header = document.getElementById("header")
window.onscroll = function () {
    if (window.scrollY > 400) {
        topBtn.style.display = 'block';
        header.classList.add('header-new');
    } else {
        topBtn.style.display = 'none';
        header.classList.remove('header-new');
    }
}
$("#topBtn").click(function(e) {
    e.preventDefault();
    $('body , html').animate({scrollTop: $('body').offset().top} , 2000);
})