document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

    document.addEventListener('keydown',function(e) 
{
if (e.ctrlkey && (e.key === 'u' || e.key === 's' )) {
    e.preventDefault();
}
});
// Show popup with clicked image
function showPopup(image) {
    const popupContainer = document.getElementById("popup-container");
    const popupImage = document.getElementById("popup-image");
    popupImage.src = image.src;  // Set the popup image to the clicked image's src
    popupContainer.style.display = "flex";  // Show the popup
}

// Hide popup
function hidePopup() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";  // Hide the popup
}
