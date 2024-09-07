// JavaScript to handle button click and form submission

// Event listener for the "Click Me" button
document.getElementById('greetButton').addEventListener('click', function() {
    alert('Hello! Thanks for visiting my website.');
});

// Event listener for the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    // Get the name and email values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display a simple message with the user's name
    alert(`Thank you, ${name}, for contacting us! We will reach out to you at ${email}.`);
});
