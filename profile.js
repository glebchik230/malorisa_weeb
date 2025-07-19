// Получаем элементы
const profilePanel = document.getElementById("profile-panel");
const openProfileBtn = document.getElementById("open-profile");
const closeProfileBtn = document.getElementById("close-profile");
const registerBtn = document.getElementById("register-btn");
const registrationForm = document.getElementById("registration-form");
const userInfo = document.getElementById("user-info");

// Открыть личный кабинет
openProfileBtn.addEventListener("click", () => {
  profilePanel.classList.remove("translate-x-full");
});

// Закрыть личный кабинет (вернуться на главный экран)
closeProfileBtn.addEventListener("click", () => {
  profilePanel.classList.add("translate-x-full");
});

// Регистрация пользователя
registerBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const telegramInput = document.getElementById("telegram");

  let valid = true;

  // Проверка на заполненность полей
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

  // Успешная регистрация
  registrationForm.classList.add("hidden");
  userInfo.classList.remove("hidden");
  userInfo.innerHTML = `
    <h2 class="text-xl font-semibold mb-2">Добро пожаловать, ${nameInput.value}!</h2>
    <p>Номер телефона: ${phoneInput.value}</p>
    <p>Telegram ID: ${telegramInput.value}</p>
    <p class="mt-4 font-semibold">Статистика:</p>
    <ul class="list-disc list-inside">
      <li>Выполненные задачи: 0</li>
      <li>Новые задачи: 0</li>
      <li>Пройдено тестов: 0</li>
    </ul>
  `;

  alert("Регистрация прошла успешно!");
});
