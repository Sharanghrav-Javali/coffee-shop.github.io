document.addEventListener("DOMContentLoaded", function(){

  // Smooth Scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {   // prevent "#" error
      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});


  // Contact Form
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      alert("Thank you! We will contact you shortly.");
      this.reset();
    });
  }

  // WhatsApp Order
  document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", function(){
      window.open("https://wa.me/918088366539", "_blank");
    });
  });

  // Popup
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopupBtn");

  if(closeBtn){
    closeBtn.addEventListener("click", function(){
      popup.style.display = "none";
    });
  }

  // Scroll Reveal
  function reveal(){
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if(elementTop < windowHeight - 100){
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

function openPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function orderAnniversary() {
  window.open(
    "https://wa.me/918088366539?text=Hello%20I%20want%20to%20order%20the%2070%20Year%20Anniversary%20Coffee%20Pack",
    "_blank"
  );
}
