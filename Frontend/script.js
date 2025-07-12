const users = [
  {
    name: "Anjali R.",
    photo: "",
    skillsOffered: ["Graphic Design", "Photoshop"],
    skillsWanted: ["HTML", "CSS"],
    availability: "Weekends",
  },
  {
    name: "Rajeev P.",
    photo: "",
    skillsOffered: ["Excel", "Data Analysis"],
    skillsWanted: ["JavaScript", "React"],
    availability: "Evenings",
  },
  {
    name: "Sara M.",
    photo: "",
    skillsOffered: ["Public Speaking", "Content Writing"],
    skillsWanted: ["Video Editing"],
    availability: "Flexible",
  },
];

const allSkills = [...new Set(users.flatMap(u => [...u.skillsOffered, ...u.skillsWanted]))];

function createSkillTags(skills) {
  return skills.map(skill => `<span class="tag">${skill}</span>`).join(" ");
}

function showSwapMessage(name) {
  const popup = document.createElement("div");
  popup.className = "swap-popup";
  popup.innerText = `🔁 Swap request sent to ${name}`;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 2500);
}

function renderUsers(list, container) {
  container.innerHTML = "";
  list.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";
    const photo = user.photo || "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    card.innerHTML = `
      <img class="avatar" src="${photo}" alt="${user.name}" />
      <h4>${user.name}</h4>
      <p><strong>Offers:</strong> ${createSkillTags(user.skillsOffered)}</p>
      <p><strong>Wants:</strong> ${createSkillTags(user.skillsWanted)}</p>
      <p><strong>Available:</strong> ${user.availability}</p>
      <button class="btn request-btn">Request Swap</button>
    `;
    container.appendChild(card);

    card.querySelector(".request-btn").addEventListener("click", () => showSwapMessage(user.name));
  });
}

// --- Browse Page Logic ---
const skillInput = document.getElementById("search");
const skillSuggestions = document.getElementById("suggestions");
const availSelect = document.getElementById("availabilityFilter");
const resultContainer = document.getElementById("browse-results") || document.getElementById("user-cards");

function filterUsers() {
  const skill = skillInput?.value.trim().toLowerCase() || "";
  const availability = availSelect?.value || "All";
  let filtered = users;

  if (skill) {
    filtered = filtered.filter(u =>
      u.skillsOffered.concat(u.skillsWanted).some(s => s.toLowerCase().includes(skill))
    );
  }

  if (availability !== "All") {
    filtered = filtered.filter(u => u.availability === availability);
  }

  renderUsers(filtered, resultContainer);
}

skillInput?.addEventListener("input", () => {
  const typed = skillInput.value.toLowerCase();
  skillSuggestions.innerHTML = "";
  if (typed.length === 0) return;

  const matches = allSkills.filter(skill => skill.toLowerCase().startsWith(typed));
  matches.forEach(skill => {
    const opt = document.createElement("div");
    opt.className = "suggestion-item";
    opt.textContent = skill;
    opt.addEventListener("click", () => {
      skillInput.value = skill;
      skillSuggestions.innerHTML = "";
      filterUsers();
    });
    skillSuggestions.appendChild(opt);
  });

  filterUsers();
});

availSelect?.addEventListener("change", filterUsers);

// Render on page load
if (resultContainer) renderUsers(users, resultContainer);
