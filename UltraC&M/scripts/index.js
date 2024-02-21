// JavaScript code for changing the slideshow image every 3 seconds
const images = [
  'thumbnails/kitchen1.jpg',
  'thumbnails/kitchen2.jpeg',
  'thumbnails/kitchen3.jpg',
  'thumbnails/kitchen4.jpg',
  'thumbnails/kitchen5.jpg',
  'thumbnails/kitchen6.jpg'
];
  
let currentImageIndex = 0;
const slideshowImage = document.getElementById('slideshowImage');

function changeImage() {
  slideshowImage.style.opacity = 0;
  slideshowImage.src = images[currentImageIndex];
  // Fade in the new image
  setTimeout(() => {slideshowImage.style.opacity = 1;}, 100);
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 2500); // Change image every 3 seconds (3000 milliseconds)



// Quotas
document.addEventListener("DOMContentLoaded", function () {
  const quotaForm = document.getElementById("quota_form");
  const kitchenSizeInput = document.getElementById("kitchenSize");
  const quotaResult = document.getElementById("quota_result");

  quotaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const kitchenSize = parseFloat(kitchenSizeInput.value);
    if (!isNaN(kitchenSize)) {
      const quota = kitchenSize * 2;
      quotaResult.textContent = `Your quota is: $${quota.toFixed(2)}`;
    } else {
      quotaResult.textContent = "Please enter a valid kitchen size.";
    }
  });
});


// Navbar Items Highlights & Navbar Background Color Change
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("ul.navbar .right_side_nav li");
const navbar = document.querySelector("ul.navbar");
window.addEventListener("scroll", () => {

  if (window.scrollY >= document.querySelector("#about_nav").offsetTop) {
    navbar.style.backgroundColor = "rgb(0, 9, 8)";
    navbar.style.borderBottom = "3px solid rgb(232,202,164, 0.8)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 9, 8, 0.9)";
    navbar.style.borderBottom = "none";
  }

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});



// // Replace YOUR_API_KEY with your actual API key
// const apiKey = 'YOUR_API_KEY';
// const mapContainer = document.getElementById('map-container');

// // Define the location
// const location = '2929 Coquitlam Centre, Coquitlam, BC V3B 5R5';

// // Generate the Google Maps URL
// const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(location)}`;

// // Create an iframe element for the map
// const mapIframe = document.createElement('iframe');
// mapIframe.src = mapUrl;
// mapIframe.width = '100%';
// mapIframe.height = '400';
// mapIframe.style.border = '0';

// // Append the map iframe to the map container
// mapContainer.appendChild(mapIframe);
