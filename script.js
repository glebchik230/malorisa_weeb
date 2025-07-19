// Получаем элементы
const mainScreen = document.getElementById('main-screen');
const profileSection = document.getElementById('profile');
const registerForm = document.getElementById('register-form');
const registerSuccess = document.getElementById('register-success');
const toProfileBtn = document.getElementById('to-profile-btn');

const btnMain = document.getElementById('btn-main');
const btnProfile = document.getElementById('btn-profile');

const openHotBtn = document.getElementById('open-hot');
const openColdBtn = document.getElementById('open-cold');
const openOperatorsBtn = document.getElementById('open-operators');

const hotKitchen = document.getElementById('hot-kitchen');
const coldKitchen = document.getElementById('cold-kitchen');
const operatorsPopup = document.getElementById('operators');

const closeButtons = document.querySelectorAll('.close-btn');

const userNameSpan = document.getElementById('user-name');
const userPhoneSpan = document.getElementById('user-phone');
const userTelegramSpan = document.getElementById('user-telegram');
const userRatingSpan = document.getElementById('user-rating');

const logoutBtn = document.getElementById('logout-btn');
const btnMainFromProfile = document.getElementById('btn-main-from-profile');

let currentUser = null; // Объект пользователя

// Функция показа экрана
function showScreen(screen) {
  mainScreen.classList.add('hidden');
  profileSection.classList.add('hidden');
  screen.classList.remove('hidden');
}

// Закрыть все popup
function closeAllPopups() {
  hotKitchen.classList.add('hidden');
  coldKitchen.classList.add('hidden');
  operatorsPopup.classList.add('hidden');
}

// Обработка регистрации
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('reg-name').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const telegramId = document.getElementById('reg-telegramId').value.trim();

  if (!name || !phone || !telegramId) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  currentUser = {
    name,
    phone,
    telegramId,
    rating: 0, // Можно позже менять админом
  };

  registerForm.classList.add('hidden');
  registerSuccess.classList.remove('hidden');
});

// Переход в профиль
toProfileBtn.addEventListener('click', () => {
  if (!currentUser) return alert('Сначала зарегистрируйтесь');

  // Заполня
