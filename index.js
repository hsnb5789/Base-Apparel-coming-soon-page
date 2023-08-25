const errorIcon = document.querySelector("form .error-icon");
const email = document.querySelector("#email");
const form = document.querySelector("form");
const errorMessage = document.querySelector("form .error-message");
const button = document.querySelector("form button");

form.addEventListener("submit", (e) => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
      errorMessage.textContent = "";
    } else {
      e.preventDefault();
      errorIcon.style.display = "block";
      errorMessage.style.display = "block";
    }
  } else {
    e.preventDefault();
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
  }
});
