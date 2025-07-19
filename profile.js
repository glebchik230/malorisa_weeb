// Получаем элементы
const profilePanel = document.getElementById("profile-panel");
const openProfileBtn = document.getElementById("open-profile");
const closeProfileBtn = document.getElementById("close-profile");
const registerBtn = document.getElementById("register-btn");
const registrationForm = document.getElementById("registration-form");
const userInfo = document.getElementById("user-info");
const mainContent = document.getElementById("main-content");

// Открыть личный кабинет
openProfileBtn.addEventListener("click", () => {
  profilePanel.classList.remove("translate-x-full");
});

// Вернуться на главный экран
closeProfileBtn.addEventListener("click", () => {
  profilePanel.classList.add("translate-x-full");
});

// Регистрация
registerBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const telegramInput = document.getElementById("telegram");

  let valid = true;

  [nameInput, phoneInput, telegramInput].forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("border-red-500");
      valid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  });

  if (!valid) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  // Регистрация прошла успешно
  registrationForm.classList.add("hidden");
  userInfo.classList.remove("hidden");
  userInfo.innerHTML = `
    <h2 class="text-lg font-semibold mb-2">Добро пожаловать, ${nameInput.value}!</h2>
    <p>Номер телефона: ${phoneInput.value}</p>
    <p>Telegram ID: ${telegramInput.value}</p>
    <p class="mt-4">📊 <strong>Статистика:</strong></p>
    <ul class="list-disc list-inside">
      <li>Выполненные задачи: 0</li>
      <li>Новые задачи: 0</li>
      <li>Пройдено тестов: 0</li>
    </ul>
  `;

  alert("Регистрация прошла успешно!");
});
