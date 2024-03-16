// Function to hide the loader and show the message after 3 seconds
function hideLoader() {
    setTimeout(function () {
        document.querySelector('.loader-container').style.display = 'none';
        document.querySelector('.main').style.display = 'block';
        document.querySelector('.users').style.display = 'flex';
        // Fetching and displaying the user's IP address
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                var ipAddress = data.ip;
                var ipMessage = document.getElementById("ip_message");
                var ipSpan = document.createElement("span");
                ipSpan.textContent = ipAddress;
                ipSpan.style.color = "#e0800b";
                ipMessage.textContent = "Welcome (";
                ipMessage.appendChild(ipSpan);
                ipMessage.insertAdjacentText("beforeend", ")!");
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
    }, 3000); // Delaying the display for 3 seconds (3000 milliseconds)
}


document.addEventListener("DOMContentLoaded", function () {
    // Generate random number between 2994 and 3279
    var onlineUsers = Math.floor(Math.random() * (3279 - 2994 + 1)) + 2994;

    // Update the user count in the HTML
    document.getElementById("userCount").innerText = onlineUsers;
});


document.getElementById("Btn").addEventListener("click", function () {
    var loader2 = document.getElementById("loader2");
    var popup = document.getElementById("popup");
    // Display loader2
    loader2.style.display = "block";
    // Hide loader2 and show popup after 3 seconds
    setTimeout(function () {
        loader2.style.display = "none";
        popup.style.display = "block";
    }, 5000);
});
// Close popup when X button is clicked
document.querySelector(".popup-close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});