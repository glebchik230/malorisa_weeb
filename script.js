// Получаем элементы
const btnHot = document.getElementById('btnHot');
const btnCold = document.getElementById('btnCold');
const btnOperators = document.getElementById('btnOperators');

const popupHot = document.getElementById('popupHot');
const popupCold = document.getElementById('popupCold');
const popupOperators = document.getElementById('popupOperators');

const btnProfile = document.getElementById('btnProfile');
const btnMain = document.getElementById('btnMain');
const profilePanel = document.getElementById('profile');
const btnCloseProfile = document.getElementById('btnCloseProfile');

const profileForm = document.getElementById('profileForm');

// Функция закрытия всех всплывающих окон
function closeAllPopups() {
  popupHot.classList.remove('active');
  popupCold.classList.remove('active');
  popupOperators.classList.remove('active');
}

// Открытие всплывающего окна горячего цеха
btnHot.addEventListener('click', () => {
  closeAllPopups();
  popupHot.classList.add('active');
  btnMain.style.display = 'inline-block';
});

// Открытие всплывающего окна холодного цеха
btnCold.addEventListener('click', () => {
  closeAllPopups();
  popupCold.classList.add('active');
  btnMain.style.display = 'inline-block';
});

// Открытие всплывающего окна операторов
btnOperators.addEventListener('click', () => {
  closeAllPopups();
  popupOperators.classList.add('active');
  btnMain.style.display = 'inline-block';
});

// Кнопка "Вернуться на главный экран"
btnMain.addEventListener('click', () => {
  closeAllPopups();
  btnMain.style.display = 'none';
});

// Открытие/закрытие личного кабинета
btnProfile.addEventListener('click', () => {
  profilePanel.classList.add('active');
});

btnCloseProfile.addEventListener('click', () => {
  profilePanel.classList.remove('active');
});

// Обработка формы личного кабинета
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Проверка заполнения полей
  const name = profileForm.name.value.trim();
  const phone = profileForm.phone.value.trim();
  const telegramId = profileForm.telegramId.value.trim();

  if (!name || !phone || !telegramId) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }
  alert('Данные сохранены! (Локально, не сохраняются)');
  profilePanel.classList.remove('active');
});
