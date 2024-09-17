document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log("Form Submitted!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        form.reset(); // Clears the form fields
    });
});
