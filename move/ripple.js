// ripple-effect.js
document.addEventListener("DOMContentLoaded", function() {
    const ripple = document.getElementById("ripple");
  
    document.addEventListener("mousemove", function(event) {
      // Update ripple position based on mouse movement
      ripple.style.left = `${event.clientX - ripple.clientWidth / 2}px`;
      ripple.style.top = `${event.clientY - ripple.clientHeight / 2}px`;
  
      // Trigger pulse by updating the transform property
      ripple.style.transform = "scale(1)";
      ripple.style.opacity = "0.2";
  
      // Reset transform after a short delay
      setTimeout(() => {
        ripple.style.transform = "scale(0)";
        ripple.style.opacity = "0";
      }, 500);
    });
  });
  