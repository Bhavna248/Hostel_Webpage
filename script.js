const leaveForm = document.getElementById("leaveApplicationForm");
const loginForm = document.getElementById("loginForm");

leaveForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fromDate = new Date(document.getElementById("leaveFrom").value);
  const toDate = new Date(document.getElementById("leaveTo").value);
  const leaveMessage = document.getElementById("leaveMessage");

  if (toDate < fromDate) {
    leaveMessage.textContent = "Leave To date cannot be before Leave From date.";
    leaveMessage.style.color = "#c62828";
    return;
  }

  leaveMessage.textContent = "Leave request submitted successfully.";
  leaveMessage.style.color = "#1b5e20";
  leaveForm.reset();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginMessage = document.getElementById("loginMessage");
  loginMessage.textContent = "Login successful. Welcome to the resident portal.";
  loginMessage.style.color = "#1b5e20";
  loginForm.reset();
});
