document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu functionality for mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden"); // Toggle visibility of the mobile menu
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Smooth scrolling for anchor links
  // This isn't strictly necessary with `scroll-behavior: smooth` in CSS,
  // but can be useful for fallback or more controlled scrolling.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default jump behavior

      const targetId = this.getAttribute("href").substring(1); // Get target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Smooth scroll
        });
      }
    });
  });

  // Basic form handling example (for booking and contact forms)
  const bookingForm = document.getElementById("booking-form");
  const contactForm = document.getElementById("contact-form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission
      console.log("Booking Form Submitted!");
      // In a real application, you'd send this data to a server using fetch()
      const formData = new FormData(bookingForm);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      // Display a simple confirmation message
      alert("Booking request received! We will contact you soon."); // Using alert for example, replace with custom modal in production
      bookingForm.reset(); // Clear the form
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission
      console.log("Contact Form Submitted!");
      // In a real application, you'd send this data to a server using fetch()
      const formData = new FormData(contactForm);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      // Display a simple confirmation message
      alert("Your message has been sent! We will get back to you shortly."); // Using alert for example, replace with custom modal in production
      contactForm.reset(); // Clear the form
    });
  }
});
