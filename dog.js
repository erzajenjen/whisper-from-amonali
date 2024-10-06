const dog = document.getElementById('dog'); // Get the dog element
let position = 0; // Starting position
let direction = 1; // 1 means right, -1 means left
const speed = 3; // Speed of movement

function animateDog() {
    position += speed * direction; // Update position based on speed and direction
    
    // Check if the dog hits the edge of the window
    if (position > window.innerWidth - 60 || position < 0) {
        direction *= -1; // Change direction
    }

    dog.style.left = position + 'px'; // Update dog's position

    requestAnimationFrame(animateDog); // Call animateDog again for the next frame
}

animateDog(); 

<button onclick="window.location.href='index2.html';">next</button>

// Start the animation
