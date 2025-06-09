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
// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
(function() {
    emailjs.init("service_syzddag"); // Replace with your real EmailJS user ID
  })();

  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture current time
    const now = new Date().toLocaleString();

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      time: now // For use in your template if needed
    };

    // Send the email
    emailjs.send("gmail", "template_7hdjf9q", formData)
      .then(function(response) {
        document.getElementById("success-message").style.display = "block";
        document.getElementById("error-message").style.display = "none";
        document.getElementById("contact-form").reset();
        console.log("Email sent successfully:", response);
      }, function(error) {
        document.getElementById("success-message").style.display = "none";
        document.getElementById("error-message").style.display = "block";
        console.error("Failed to send email:", error);
      });
  });
console.log("Script loaded!");
