const form = document.getElementById("contact-form");
const submitButton = document.querySelector(".contact-submit");
const successMessage = document.getElementById("form-submitted-msg");

const formElements = [...form.elements];

function allInputsValid() {
  const valid = formElements.every((element) => {
    if (element.nodeName !== "BUTTON") {
      return element.checkValidity();
    } else {
      return true;
    }
  });

  return valid;
}

function handleBlur(e) {
  const element = e.target;

  if (!element.checkValidity() && element.nodeName !== "BUTTON") {
    element.style.border = "2px solid red";
  }

  if (element.checkValidity() && element.nodeName !== "BUTTON") {
    element.style.border = "2px solid #CED4DA";
  }

  if (allInputsValid()) {
    submitButton.removeAttribute("disabled", "");
  } else {
    submitButton.setAttribute("disabled", "");
  }
}

function handleSubmit(e) {
  e.preventDefault();

  if (allInputsValid()) {
    successMessage.style.display = "block";
    form.reset();
    submitButton.setAttribute("disabled", "");

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
}

formElements.forEach((element) => {
  if (element.nodeName !== "BUTTON") {
    element.addEventListener("blur", (e) => handleBlur(e));
  }
});

form.addEventListener("submit", (e) => handleSubmit(e));
