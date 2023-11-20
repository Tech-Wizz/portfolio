// jiggle.js
function moveMouseToCenter() {
    // Move the mouse cursor to the center of the page
    const event = new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2
    });
  
    // Dispatch the mousemove event
    document.dispatchEvent(event);
  }
  
  // Set an interval to move the mouse to the center every few seconds
  const intervalId = setInterval(moveMouseToCenter, 5000);
  
  // Optionally, you can stop the mouse jiggler after a certain duration
  setTimeout(() => {
    clearInterval(intervalId);
    alert("Mouse Jiggler stopped after 10 minutes.");
  }, 600000); // Stop after 10 minutes (10 minutes * 60 seconds * 1000 milliseconds)
  