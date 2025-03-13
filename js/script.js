// Ask for visitor name and update welcome text
window.onload = function() {
    let visitorName = prompt("What is your name?");
    if (visitorName) {
        document.getElementById("welcome-text").textContent = `Hi ${visitorName}, Welcome to The Website`;
    }
};

// Carousel functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Auto-Slide Every 3 Seconds
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(slideIndex);

// Message Form Submission
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("visitorName").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector("input[name='gender']:checked")?.value || "Not specified";
    let message = document.getElementById("message").value;

    document.getElementById("submittedInfo").innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Date of Birth:</strong> ${dob} <br>
        <strong>Gender:</strong> ${gender} <br>
        <strong>Message:</strong> ${message}
    `;
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("messageForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Get input values
        let name = document.getElementById("name").value;
        let dob = document.getElementById("dob").value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let message = document.getElementById("message").value;

        // Ensure gender is selected
        if (!gender) {
            alert("Please select a gender!");
            return;
        }

        // Format output
        let output = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        // Display the submitted info
        document.getElementById("submittedInfo").innerHTML = output;

        // Clear form inputs
        document.getElementById("messageForm").reset();
    });
});

