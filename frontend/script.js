const container = document.getElementById("container");
const forgotPassword = document.getElementById("forgot-password");

document
  .getElementById("signup-btn-for-switch")
  .addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

document
  .getElementById("login-btn-for-switch")
  .addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

document.getElementById("forgot-password").addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("right-panel-active");
  container.classList.add("forgot-panel-active");
});
-document.getElementById("back-to-login-btn").addEventListener("click", () => {
  container.classList.remove("forgot-panel-active");
  resetForgotFlow();
});

const mockdata = [{ username: "admin", password: "12345" }];

document.getElementById("login-btn").addEventListener("click", () => {
  const enteredusername = document
    .getElementById("username-login")
    .value.trim();
  const enteredpassword = document
    .getElementById("password-login")
    .value.trim();

  const user = mockdata.find(
    (u) => u.username === enteredusername && u.password === enteredpassword,
  );

  if (enteredusername === "" && enteredpassword === "") {
    alert("Please fill in all field.");
  } else if (user) {
    alert("Login successful! Welcome " + user.username);
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect username and password.");
  }
});
