// Получаем данные пользователя из localStorage
const user = JSON.parse(localStorage.getItem("user"));

const profileInfo = document.getElementById("profile-info");

if (!user) {
  // Если пользователь не найден — редирект на страницу входа/регистрации
  window.location.href = "auth.html";
} else {
  // Показываем данные пользователя
  profileInfo.innerHTML = `
    <img src="${user.avatar}" alt="Аватар" width="100" />
    <p><strong>Имя:</strong> ${user.name}</p>
    <p><strong>Телефон:</strong> ${user.phone}</p>
    <p><strong>Telegram ID:</strong> ${user.telegramId}</p>
  `;
}

// Обработка выхода
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "auth.html";
});

