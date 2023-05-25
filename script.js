// script.js
const container = document.getElementById('buttons-container');
const pass = [];

for (let i = 0; i < 26; i++) {
    const button = document.createElement('button');
    const char = String.fromCharCode(65 + i);
    button.textContent = char;
    
    // Add an event listener to each button
    button.addEventListener('click', function() {
      pass.push(char);
      console.log('pass:', pass); // Output the pass array to the console
    });
    
    container.appendChild(button);
  }

  const eraseButton = document.getElementById('reset-button');

  eraseButton.addEventListener('click', function() {
    pass.length = 0; // Clear the contents of the pass array
    updatePassContent();
  });







