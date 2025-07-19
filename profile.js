document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-profile");
  const closeBtn = document.getElementById("close-profile");
  const panel = document.getElementById("profile-panel");

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const telegramInput = document.getElementById("telegram");
  const registerBtn = document.getElementById("register-btn");

  openBtn.addEventListener("click", () => {
    panel.classList.remove("-translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.add("-translate-x-full");
  });

  registerBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const telegram = telegramInput.value.trim();

    [nameInput, phoneInput, telegramInput].forEach(input => input.classList.remove("border", "border-red-500"));

    if (!name  !phone  !telegram) {
      if (!name) nameInput.classList.add("border", "border-red-500");
      if (!phone) phoneInput.classList.add("border", "border-red-500");
      if (!telegram) telegramInput.classList.add("border", "border-red-500");

      alert("Пожалуйста, заполните все поля.");
      return;
    }

    alert("Регистрация прошла успешно! (данные не сохраняются)");
    panel.classList.add("-translate-x-full");
  });
});
