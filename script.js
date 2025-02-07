document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const popup = document.getElementById("popup");
    const music = document.getElementById("backgroundMusic");

    envelope.addEventListener("click", function () {
        popup.style.display = "flex"; // Show the love message
        
        // Try playing music on user interaction
        music.play().catch(error => {
            console.log("Autoplay blocked. User must interact with the page first.");
        });
    });

    function closePopup() {
        popup.style.display = "none";
        music.pause();
        music.currentTime = 0;
    }

    window.closePopup = closePopup;
});
