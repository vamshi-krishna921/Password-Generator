let range = document.querySelector("#range");
let passDisplay = document.querySelector(".passDisplay");
let options = document.querySelectorAll(".option");
let button = document.querySelector("button");
let p = document.querySelector("p");
let copy = document.querySelector('.ri-file-copy-line')
const password = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:'\",.<>/?",
};
button.addEventListener("click", () => {
  let randomPassword = "";
  let finalPassword = "";
  options.forEach((option) => {
    if (option.checked) {
      randomPassword += password[option.id];
    }
  });
  if (randomPassword.length == 0) {
    p.style.display = "block";
    return;
  }
  if (randomPassword.length != 0) {
    p.style.display = "none";
  }
  for (let i = 0; i < range.value; i++) {
    finalPassword +=
      randomPassword[Math.floor(Math.random() * randomPassword.length)];
  }
  passDisplay.value = finalPassword;
});
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(passDisplay.value)
})