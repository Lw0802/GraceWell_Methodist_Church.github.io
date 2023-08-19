/*
The JaveScript code in this file affects all the web pages
Make changes to it when necessary
*/
document.addEventListener("DOMContentLoaded", function() {
  // Fade in all center panels in the header
  const centerPanels = document.querySelectorAll(".center-panel");
  const backButtons = document.querySelectorAll(".back_btn");

  centerPanels.forEach(function(panel) {
    panel.style.opacity = "0";
    setTimeout(function() {
      panel.style.transition = "opacity 1.2s";
      panel.style.opacity = "1";
    }, 500);
  });

  backButtons.forEach(function(panel) {
    panel.style.opacity = "0";
    setTimeout(function() {
      panel.style.transition = "opacity 1.2s";
      panel.style.opacity = "1";
    }, 500);
  });

    // Slide up and fade in the header image and content section
    const headerImage = document.querySelector(".header-image");
    const contentSection = document.querySelector(".content-section");
  
  setTimeout(function() {
    headerImage.style.opacity = "1";
    headerImage.style.transform = "translateY(0)";
  
    contentSection.style.opacity = "1";
    contentSection.style.transform = "translateY(0)";
  }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
  // ... (your existing code)

  // Vue.js code for recent sermons
  new Vue({
    el: "#recent-sermons",
    data: {
      sermons: [
        {
          id: 1,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 1"
        },
        {
          id: 2,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 2"
        },
        {
          id: 3,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 3"
        },
        {
          id: 4,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 3"
        },
        {
          id: 5,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 3"
        },
        {
          id: 6,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 3"
        },
        {
          id: 7,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 3"
        },
        {
          id: 8,
          imageSrc: "/website_images/pexels-pixabay-the-cross.jpg",
          title: "Sermon Title 3"
        },
      ]
    }
  });
});
