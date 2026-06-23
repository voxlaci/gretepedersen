const header = document.querySelector("[data-header]");
const contactForm = document.querySelector(".contact-form");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  button.textContent = "Enquiry Noted";
  window.setTimeout(() => {
    button.textContent = "Send Enquiry";
  }, 2200);
});
