document.addEventListener("DOMContentLoaded", function () {
    // Vue.js code for recent sermons
    new Vue({
      el: "#recent-sermons",
      data: {
        sermons: [
          {
            id: 1,
            videoSrc: "https://www.facebook.com/GraceWellMC/videos/1126375311659767/?mibextid=zDhOQc/",
            title: "Sermon Title 1"
          },
          {
            id: 2,
            videoSrc: "https://fb.watch/nIR4RzHB0l/",
            title: "Sermon Title 2"
          },
          {
            id: 3,
            videoSrc: "https://fb.watch/nIR80-qTM9/",
            title: "Sermon Title 3"
          },
          {
            id: 4,
            videoSrc: "https://fb.watch/nIRbL8QjiJ/",
            title: "Sermon Title 4"
          },
          {
            id: 5,
            videoSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Sermon Title 5"
          },
          {
            id: 6,
            videoSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Sermon Title 6"
          },
          {
            id: 7,
            videoSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Sermon Title 7"
          }
        ]
      }
    });
    // Vue.js code for recent events
    new Vue({
      el: "#recent-events",
      data: {
        events: [
          {
            id: 1,
            imageSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Event Title 1"
          },
          {
            id: 2,
            imageSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Event Title 2"
          },
          {
            id: 3,
            imageSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Event Title 3"
          },
          {
            id: 4,
            imageSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Event Title 4"
          },
          {
            id: 5,
            imageSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Event Title 5"
          },
          {
            id: 6,
            imageSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Event Title 6"
          },
          {
            id: 7,
            imageSrc: "././website_images/pexels-pixabay-the-cross.jpg",
            title: "Event Title 7"
          }
          // Add more events as needed
        ]
      }
    });
  });