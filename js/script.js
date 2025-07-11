const fund = document.querySelector("#fund");
const removeBtn = document.querySelector("#removeBtn");
const attio = document.querySelector("#attio");
const burger = document.querySelector("#burger");
const mobileMenu = document.querySelector("#mobile-menu");
const contact = document.querySelector("#contact");
const popup = document.querySelector("#contactPopup");
const footerBottom = document.querySelector("#footerBottom");

removeBtn.addEventListener("click", function () {
  fund.classList.add("hidden");
  attio.classList.add("attio-margin-top");
});

burger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

contact.addEventListener("click", function () {
  popup.classList.toggle("visible");
});
