const fund = document.querySelector("#fund");
const removeBtn = document.querySelector("#removeBtn");
const attio = document.querySelector("#attio");

removeBtn.addEventListener("click", function () {
  fund.classList.add("hidden");
  attio.classList.add("attio-margin-top");
});
