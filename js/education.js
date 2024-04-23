document.addEventListener('DOMContentLoaded', function() {
    const classItems = document.querySelectorAll('.class-item');
    const descriptionContainer = document.querySelector('.description-container');
  
    classItems.forEach((item, index) => {
      const description = item.querySelector('.class-description').innerHTML;
      const button = item.querySelector('.class-button');
  
      button.style.display = 'none'; // Hide button
  
      // Add click event listener to each class item
      item.addEventListener('click', function() {
        // Close all descriptions
        descriptionContainer.innerHTML = '';
  
        // Create a new div for the description and insert it below the clicked class item
        const descDiv = document.createElement('div');
        descDiv.classList.add('class-description');
        descDiv.innerHTML = description;
        descriptionContainer.appendChild(descDiv);
      });
    });
  });
  