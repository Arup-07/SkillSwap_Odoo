const users = [
  {
    name: "Anjali R.",
    skillsOffered: ["Graphic Design", "Photoshop"],
    skillsWanted: ["HTML", "CSS"],
    availability: "Weekends",
  },
  {
    name: "Rajeev P.",
    skillsOffered: ["Excel", "Data Analysis"],
    skillsWanted: ["JavaScript", "React"],
    availability: "Evenings",
  },
  {
    name: "Sara M.",
    skillsOffered: ["Public Speaking", "Content Writing"],
    skillsWanted: ["Video Editing"],
    availability: "Flexible",
  },
];

const container = document.getElementById("user-cards");

users.forEach((user) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h4>${user.name}</h4>
    <p><strong>Offers:</strong> ${user.skillsOffered.join(", ")}</p>
    <p><strong>Wants:</strong> ${user.skillsWanted.join(", ")}</p>
    <p><strong>Available:</strong> ${user.availability}</p>
  `;
  container.appendChild(card);
});