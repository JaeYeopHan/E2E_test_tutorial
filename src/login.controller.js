import validator from "validator";

export default class LoginController {
  constructor() {
    this.email = document.getElementById("email");
    this.email.addEventListener("blur", this.onBlurEmail.bind(this));
  }

  onBlurEmail() {
    let validation = false;
    const email = this.email.value;

    if (!validator.isEmpty(email)) {
      validation = validator.isEmail(email);
    }

    this.toggleErrorClass(this.email, validation);
  }

  toggleErrorClass(el, validation) {
    if (!validation) {
      el.parentNode.classList.add("has-error");
    } else {
      el.parentNode.classList.remove("has-error");
    }
  }
}

