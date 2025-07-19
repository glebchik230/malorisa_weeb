// Получаем элементы
const mainScreen = document.getElementById('main-screen');
const profileScreen = document.getElementById('profile');

const btnMain = document.getElementById('btn-main');
const btnProfile = document.getElementById('btn-profile');

const hotPopup = document.getElementById('hot-kitchen');
const coldPopup = document.getElementById('cold-kitchen');
const operatorsPopup = document.getElementById('operators');

const btnOpenHot = document.getElementById('open-hot');
const btnOpenCold = document.getElementById('open-cold');
const btnOpenOperators = document.getElementById('open-operators');

const closeButtons = document.querySelectorAll('.close-btn');

const profileForm = document.getElementById('profile-form');
const profileInfo = document.getElementById('profile-info');
const logoutBtn = document.getElementById('logout-btn');

function showScreen(screen) {
  mainScreen.classList.remove('active');
  profileScreen.classList.remove('active');
  hotPopup.classList.add('hidden');
  coldPopup.classList.add('hidden');
  operatorsPopup.classList.add('hidden');

  screen.classList.add('active');
}

function showPopup(popup) {
  mainScreen.classList.remove('active');
  profileScreen.classList.remove('active');
  hotPopup.classList.add('hidden');
  coldPopup.classList.add('hidden');
  operatorsPopup.classList.add('hidden');

  popup.classList.remove('hidden');
}

btnOpenHot.addEventListener('click', () => {
  showPopup(hotPopup);
});
btnOpenCold.addEventListener('click', () => {
  showPopup(coldPopup);
});
btnOpenOperators.addEventListener('click', () => {
  showPopup(operatorsPopup);
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.add('hidden');
    showScreen(mainScreen);
  });
});

btnMain.addEventListener('click', () => {
  showScreen(mainScreen);
});

btnProfile.addEventListener('click', () => {
  showScreen(profileScreen);
});

// Обработка формы личного кабинета (регистрация)
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Простая проверка заполненности полей
  const name = profileForm.name.value.trim();
  const phone = profileForm.phone.value.trim();
  const telegramId = profileForm.telegramId.value.trim();
  const notifications = profileForm.notifications.checked;

  if (!name || !phone || !telegramId) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }

  // Отображаем информацию в профиле
  document.getElementById('user-name').textContent = name;
  document.getElementById('user-phone').textContent = phone;
  document.getElementById('user-telegram').textContent = telegramId;
  document.getElementById('user-notifications').textContent = notifications ? 'Включены' : 'Выключены';
  // Пример: статусы можно пока сделать нулём
  document.getElementById('user-tasks').textContent = '0';
  document.getElementById('user-tests').textContent = '0';

  // Скрываем форму, показываем инфо
  profileForm.classList.add('hidden');
  profileInfo.classList.remove('hidden');
});

logoutBtn.addEventListener('click', () => {
  // Возврат к форме
  profileInfo.classList.add('hidden');
  profileForm.classList.remove('hidden');
  profileForm.reset();

  // Возврат на главный экран
  showScreen(mainScreen);
});
