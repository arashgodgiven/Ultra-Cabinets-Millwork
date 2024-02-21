// Navbar Border on Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav.container ul li");
const navbar = document.querySelector("ul.navbar");
const products_navbar = document.querySelector("nav .container");
window.addEventListener("scroll", () => {

  if (window.scrollY >= document.querySelector("#product_pictures").offsetTop) {
    navbar.style.borderBottom = "3px solid rgb(232,202,164)";
  } else {
    navbar.style.borderBottom = "none";
  }
});

// Change Product Pictures
document.addEventListener("DOMContentLoaded", function() {
  const project1Button = document.getElementById("project1Button");
  const images1 = [
    "thumbnails/products/product5.jpg",
    "thumbnails/products/product6.jpg",
    "thumbnails/products/product8.jpg",
    "thumbnails/products/product9.jpg",
    "thumbnails/products/product15.jpg",
    "thumbnails/products/product11.jpg"
  ];

  project1Button.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Update the src attributes of the images
    for (let i = 0; i < images1.length; i++) {
      const imageElement = document.getElementById(`image${i + 1}`);
      if (imageElement) {
        imageElement.src = images1[i];
      }
    }
  });

  const project2Button = document.getElementById("project2Button");
  const images2 = [
    "thumbnails/products/product1.jpg",
    "thumbnails/products/product2.jpg",
    "thumbnails/products/product3.jpg",
    "thumbnails/products/product4.jpg",
    "thumbnails/products/product5.jpg",
    "thumbnails/products/product6.jpg"
  ];

  project2Button.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Update the src attributes of the images
    for (let i = 0; i < images2.length; i++) {
      const imageElement = document.getElementById(`image${i + 1}`);
      if (imageElement) {
        imageElement.src = images2[i];
      }
    }
  });

  const project3Button = document.getElementById("project3Button");
  const images3 = [
    "thumbnails/products/product12.jpg",
    "thumbnails/products/product13.jpg",
    "thumbnails/products/product10.jpg",
    "thumbnails/products/product16.jpg",
    "thumbnails/products/product15.jpg",
    "thumbnails/products/product14.jpg"
  ];

  project3Button.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Update the src attributes of the images
    for (let i = 0; i < images3.length; i++) {
      const imageElement = document.getElementById(`image${i + 1}`);
      if (imageElement) {
        imageElement.src = images3[i];
      }
    }
  });

  const project4Button = document.getElementById("project4Button");
  const images4 = [
    "thumbnails/products/product4.jpg",
    "thumbnails/products/product3.jpg",
    "thumbnails/products/product1.jpg",
    "thumbnails/products/product6.jpg",
    "thumbnails/products/product5.jpg",
    "thumbnails/products/product13.jpg"
  ];

  project4Button.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Update the src attributes of the images
    for (let i = 0; i < images4.length; i++) {
      const imageElement = document.getElementById(`image${i + 1}`);
      if (imageElement) {
        imageElement.src = images4[i];
      }
    }
  });

  const project5Button = document.getElementById("project5Button");
  const images5 = [
    "thumbnails/products/product11.jpg",
    "thumbnails/products/product16.jpg",
    "thumbnails/products/product10.jpg",
    "thumbnails/products/product2.jpg",
    "thumbnails/products/product8.jpg",
    "thumbnails/products/product3.jpg"
  ];

  project5Button.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Update the src attributes of the images
    for (let i = 0; i < images5.length; i++) {
      const imageElement = document.getElementById(`image${i + 1}`);
      if (imageElement) {
        imageElement.src = images5[i];
      }
    }
  });

  const projectButtons = document.querySelectorAll(".navbar .container ul li");
  projectButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();

      // Remove the border from all project buttons
      projectButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      // Add the border to the clicked project button
      this.classList.add("active");

      // Call the function to change product pictures
      changeProductPictures(this.id);
    });
  });
  
});



// document.addEventListener("DOMContentLoaded", function() {
//   const projectButtons = document.querySelectorAll(".navbar .container ul li");

//   projectButtons.forEach(button => {
//     button.addEventListener("click", function(event) {
//       event.preventDefault();

//       // Remove the border from all project buttons
//       projectButtons.forEach(btn => {
//         btn.classList.remove("active");
//       });

//       // Add the border to the clicked project button
//       this.classList.add("active");

//       // Call the function to change product pictures
//       changeProductPictures(this.id);
//     });
//   });

//   function changeProductPictures(projectId) {
//     const images = {
//       project1Button: [
//         "thumbnails/products/product5.jpg",
//         "thumbnails/products/product6.jpg",
//         "thumbnails/products/product8.jpg",
//         "thumbnails/products/product9.jpg",
//         "thumbnails/products/product15.jpg",
//         "thumbnails/products/product11.jpg"
//       ],
//       project2Button: [
//         "thumbnails/products/product1.jpg",
//         "thumbnails/products/product2.jpg",
//         "thumbnails/products/product3.jpg",
//         "thumbnails/products/product4.jpg",
//         "thumbnails/products/product5.jpg",
//         "thumbnails/products/product6.jpg"
//       ],
//       project3Button: [
//         "thumbnails/products/product12.jpg",
//         "thumbnails/products/product13.jpg",
//         "thumbnails/products/product10.jpg",
//         "thumbnails/products/product16.jpg",
//         "thumbnails/products/product15.jpg",
//         "thumbnails/products/product14.jpg"
//       ],
//       project4Button: [
//         "thumbnails/products/product4.jpg",
//         "thumbnails/products/product3.jpg",
//         "thumbnails/products/product1.jpg",
//         "thumbnails/products/product6.jpg",
//         "thumbnails/products/product5.jpg",
//         "thumbnails/products/product13.jpg"
//       ],
//       project5Button: [
//         "thumbnails/products/product11.jpg",
//         "thumbnails/products/product16.jpg",
//         "thumbnails/products/product10.jpg",
//         "thumbnails/products/product2.jpg",
//         "thumbnails/products/product8.jpg",
//         "thumbnails/products/product3.jpg"
//       ]
//     };

//     const imageElements = document.querySelectorAll(".product_pictures img");

//     for (let i = 0; i < imageElements.length; i++) {
//       imageElements[i].src = images[projectId][i];
//     }
//   }
// });