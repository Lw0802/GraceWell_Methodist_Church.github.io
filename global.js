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

new Vue({
  el: '#app',
  data: {
    images: [
      { src: '/website_images/pexel', title: 'Image 1 Title' },
      { src: 'image2.jpg', title: 'Image 2 Title' },
      { src: 'image3.jpg', title: 'Image 3 Title' },
      { src: 'image4.jpg', title: 'Image 4 Title' },
      { src: 'image5.jpg', title: 'Image 5 Title' },
      { src: 'image6.jpg', title: 'Image 6 Title' },
      { src: 'image7.jpg', title: 'Image 7 Title' }
    ],
    translateValue: 0
  },
  methods: {
    scrollCarousel(direction) {
      const step = 300; // Adjust this value for smoother/faster scrolling
      if (direction === 'left') {
        this.translateValue += step;
      } else if (direction === 'right') {
        this.translateValue -= step;
      }
    }
  }
});
