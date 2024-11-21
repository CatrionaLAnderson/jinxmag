

// Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}


// Show the modal with hover
function showModal() {
    const modal = document.getElementById('arcModal');
    modal.style.display = 'flex'; // Show the modal (flex layout for centering)
    setTimeout(() => {
        modal.classList.add('show'); // Add the class that triggers the animation
    }, 10); // Slight delay to allow the display change to take effect
}

// Hide the modal when mouse leaves the modal area
function hideModal() {
    const modal = document.getElementById('arcModal');
    modal.classList.remove('show'); // Remove the animation class
    modal.classList.add('hide'); // Add the hide class for leave animation
    setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after animation
        modal.classList.remove('hide'); // Reset hide class for future opens
    }, 500); // Delay to match the animation duration
}

// Close modal when hovering outside of it
window.onmouseover = function(event) {
    const modal = document.getElementById('arcModal');
    if (event.target === modal) {
        hideModal(event);
    }
};


