window.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to CodeLibrary!");

  const signupForm = document.querySelector(".signup form");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission

      const name = signupForm.querySelector("input[type='text']").value;
      const email = signupForm.querySelector("input[type='email']").value;

      alert(`Thanks for signing up, ${name}! Confirmation sent to ${email}.`);
    });
  }
});