const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active'); 
});
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
function toggleGallery(button) {
  const gallery = button.closest(".gallery-grid");
  gallery.classList.toggle("show-more");
  button.textContent = gallery.classList.contains("show-more")
    ? "Show less"
    : "Show more";
}
console.log("Script loaded!");
