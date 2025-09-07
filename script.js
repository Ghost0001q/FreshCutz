// Testimonials auto-slider
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showNextTestimonial() {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}

setInterval(showNextTestimonial, 4000);

// Form submission
function submitBooking(event) {
  event.preventDefault();
  alert("Appointment submitted! We'll contact you shortly.");
  event.target.reset();
  return false;
}
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
