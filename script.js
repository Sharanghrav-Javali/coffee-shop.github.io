document.addEventListener("DOMContentLoaded", function () {

  // ===== VARIABLES =====
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const popup = document.getElementById("popup");
  const whatsappButton = document.querySelector(".whatsapp-float");

  const phoneNumber = "918088366539"; // Your WhatsApp number


  // ===== MOBILE MENU =====
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }


  // ===== SMOOTH SCROLL =====
  document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }

      // Close mobile menu after click
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });


  // ===== POPUP FUNCTIONS =====
  window.openPopup = function () {
    popup.classList.add("active");
  };

  window.closePopup = function () {
    popup.classList.remove("active");
  };


  // ===== SCROLL REVEAL =====
  function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();


  // ===== SECTION FADE =====
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  });


  // ===== PRODUCT ORDER BUTTONS =====
  document.querySelectorAll(".order-btn").forEach(button => {

    button.addEventListener("click", function () {

      const productName = this.dataset.product;

      const message = `Hello Shree Coffee Works,
I would like to order the ${productName}.
Kindly share price, availability, and delivery details.
Thank you.`;

      const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");
    });

  });


  // ===== FLOATING WHATSAPP BUTTON =====
  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {

      const message = `Hello Shree Coffee Works,
I would like to know more about your coffee products.
Kindly assist me with the details.
Thank you.`;

      const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");
    });
  }

});
