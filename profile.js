document.getElementById("open-profile").addEventListener("click", () => {
  document.getElementById("profile-panel").classList.add("show");
});

document.getElementById("close-profile").addEventListener("click", () => {
  document.getElementById("profile-panel").classList.remove("show");
});

document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const telegramId = document.getElementById("telegram-id");
  const message = document.getElementById("message");

  let valid = true;
  [name, phone, telegramId].forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("error");
      valid = false;
    } else {
      field.classList.remove("error");
    }
  });

  if (!valid) {
    message.textContent = "Пожалуйста, заполните все поля!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Успешная регистрация!";
  message.style.color = "limegreen";

  // Здесь можно отправить данные в Telegram-бота через API
});