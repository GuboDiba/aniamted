const personImage = document.querySelector('.person-image');
let frameIndex = 1;

setInterval(() => {
  frameIndex = (frameIndex % numFrames) + 1;
  personImage.src = `frame${frameIndex}.png`;
}, frameDuration);


// dress

const video = document.getElementById("my-video");

video.addEventListener("ended", function() {
  this.currentTime = 0;
  this.play();
});

// const videoo = document.getElementById("my-video");
// video.muted = true;

// baloon

setTimeout(function() {
    var balloons = document.querySelectorAll('.balloon');
    balloons.forEach(function(balloon) {
      balloon.style.animationPlayState = 'running';
    });
  }, 2000); // Start the animation after 2 seconds
  


//   led
var ledContainer = document.getElementById('led-container');

function createLEDs() {
  var numLEDs = 100; // Adjust the number of LEDs
  for (var i = 0; i < numLEDs; i++) {
    var led = document.createElement('div');
    led.classList.add('led');
    led.style.top = Math.random() * 100 + '%';
    led.style.left = Math.random() * 100 + '%';
    led.style.animationDelay = Math.random() + 's';
    ledContainer.appendChild(led);
  }
}

createLEDs();


// tshirt
// document.addEventListener("DOMContentLoaded", function(event) {
//   var slides = document.querySelectorAll(".slide");
//   var currentSlide = 0;

//   function showSlide(n) {
//     slides[currentSlide].classList.remove("active");
//     slides[currentSlide].classList.add("previous");
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].classList.add("active");
//     slides[currentSlide].classList.remove("previous");
//   }

//   function startSlideshow() {
//     setInterval(function() {
//       showSlide(currentSlide + 1);
//     }, 3000);
//   }

//   showSlide(currentSlide);
//   startSlideshow();
// });
document.addEventListener("DOMContentLoaded", function(event) {
  var image = document.querySelector(".fade-in img");
  image.classList.add("fade-in-active");
});



