const pages = {
  dashboard: { title: "Dashboard", sub: "Welcome back, Admin" },
  transactions: { title: "Transactions", sub: "Your full transaction history" },
  transfer: { title: "Transfer", sub: "Send money or pay bills" },
  cards: { title: "My Cards", sub: "Manage your cards" },
  loans: { title: "Loans", sub: "Active loans and applications" },
  profile: { title: "Profile", sub: "Manage your account" },
  support: { title: "Support", sub: "Help center" },
};

function goTo(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));

  document.getElementById("page-" + id).classList.add("active");
  document.querySelector('[data-page="' + id + '"]').classList.add("active");

  document.getElementById("page-title").textContent = pages[id].title;
  document.getElementById("page-sub").textContent = pages[id].sub;
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => goTo(item.dataset.page));
});

document.getElementById("logout-btn").addEventListener("click", () => {
  if (confirm("Are you sure you want to log out?")) {
    window.location.href = "index.html"; // change to your login page filename
  }
});
