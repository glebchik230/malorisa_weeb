// Получаем элементы форм и кнопок переключения
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const loginToggle = document.getElementById("loginToggle");
const registerToggle = document.getElementById("registerToggle");

// Переключение между формами
loginToggle.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

registerToggle.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Регистрация пользователя
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const avatarInput = document.getElementById("avatar");
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const telegramId = document.getElementById("telegramId").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Пароли не совпадают!");
    return;
  }

  if (avatarInput.files.length === 0) {
    alert("Пожалуйста, загрузите аватар.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const avatar = reader.result;

    // Создаем объект пользователя и сохраняем в localStorage
    const userData = {
      avatar,
      name,
      phone,
      telegramId,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Переход в профиль
    window.location.href = "profile.html";
  };

  reader.readAsDataURL(avatarInput.files[0]);
});

// Вход пользователя
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const phone = document.getElementById("login-phone").value.trim();
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.phone === phone && user.password === password) {
    // Переход в профиль
    window.location.href = "profile.html";
  } else {
    alert("Неверный номер телефона или пароль!");
  }
});

