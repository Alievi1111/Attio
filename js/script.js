const cards = [
  {
    img: "assets/images/vectors/1_Quick actions.svg",
    title: "Quick actions",
    text: "Streamline your workflow with customizable shortcuts.",
  },
  {
    img: "assets/images/vectors/2_Automatic enrichment.svg",
    title: "Automatic enrichment",
    text: "Update your contacts with the latest information on autopilot.",
  },
  {
    img: "assets/images/vectors/3_chrome.svg",
    title: "Chrome extension",
    text: "Stay lean with Attio’s lightweight browser extension.",
  },
  {
    img: "assets/images/vectors/4_contact.svg",
    title: "Contact analysis",
    text: "Get deeper insights into your contacts at a single glance.",
  },
  {
    img: "assets/images/vectors/5_Filters.svg",
    title: "Filters",
    text: "Streamline your workflow with customizable shortcuts.",
  },
  {
    img: "assets/images/vectors/6_tiered.svg",
    title: "Tiered sorting",
    text: "Update your contacts with the latest information on.",
  },
];

const container = document.getElementById("card_container");

cards.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card_1");

  cardElement.innerHTML = `
    <img class="card_1_photo" src="${card.img}" alt="${card.title}">
    <div class="card_1_text">
      <h6>${card.title}</h6>
      <p>${card.text}</p>
    </div>
  `;

  container.appendChild(cardElement);
});
