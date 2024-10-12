let alertCount = 0; // Initialize a counter

card.addEventListener("mouseenter", function () {
    if (alertCount < 2) { // Check if the alert has been shown less than 2 times
        alert("I recommend you open this website using a laptop.");
        alertCount++; // Increment the counter
    }

    setTimeout(function () {
        document.getElementById("text-container").style.opacity = 1;
    }, 500); // Teks muncul lebih cepat setelah hover (500ms delay)
});
