// profile.js

// Показ сообщения пользователю
function showMessage(text, isError = false) {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.style.color = isError ? "red" : "green";
}

// Регистрация нового пользователя
function register() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const avatarInput = document.getElementById("avatar");

  if (!name || !phone || !password || !confirmPassword) {
    showMessage("Заполните все поля", true);
    return;
  }

  if (password !== confirmPassword) {
    showMessage("Пароли не совпадают", true);
    return;
  }

  const reader = new FileReader();
  if (avatarInput.files.length > 0) {
    reader.onload = function (e) {
      saveUser(name, phone, password, e.target.result);
    };
    reader.readAsDataURL(avatarInput.files[0]);
  } else {
    saveUser(name, phone, password, null);
  }
}

// Сохраняем пользователя в localStorage
function saveUser(name, phone, password, avatar) {
  const userData = {
    name,
    phone,
    password,
    avatar,
    rating: 5, // Стартовый рейтинг
  };

  localStorage.setItem("user", JSON.stringify(userData));
  showMessage("Регистрация успешна");
  setTimeout(() => {
    window.location.href = "cabinet.html";
  }, 1000);
}

// Вход по данным
function login() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.phone === phone &&
    storedUser.password === password
  ) {
    showMessage("Вход успешен");
    setTimeout(() => {
      window.location.href = "cabinet.html";
    }, 1000);
  } else {
    showMessage("Неверный номер или пароль", true);
  }
}

