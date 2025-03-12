const modalButton = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");
const form = document.querySelector("form");


function openModal() {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    
    setTimeout(() => {
        document.getElementById("username").focus();
    }, 100);
    

    document.body.style.overflow = "hidden";
}


function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    
  
    document.body.style.overflow = "";
}


modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// Close the modal when clicking outside the modal content
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

// Form submission (prevent page reload)
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Here you would typically handle the form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    console.log("Form submitted:", { username, password });
    
    // Close the modal after submission
    closeModal();
    
    // Reset the form
    form.reset();
});