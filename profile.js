// Получаем элементы из DOM
const profileFormSection = document.getElementById('profile-form-section');
const profileViewSection = document.getElementById('profile-view-section');

const profileForm = document.getElementById('profile-form');
const avatarInput = document.getElementById('avatar-input');
const avatarPreview = document.getElementById('avatar-preview');

const displayName = document.getElementById('display-name');
const displayPhone = document.getElementById('display-phone');
const displayTelegramId = document.getElementById('display-telegramId');
const employeeRating = document.getElementById('employee-rating');

const editProfileBtn = document.getElementById('edit-profile-btn');
const btnHome = document.getElementById('btn-home');

// Переменная для хранения данных пользователя
let userData = {
  avatar: '',
  name: '',
  phone: '',
  telegramId: '',
  rating: '★★★★☆'  // Пример рейтинга
};

// Показываем или скрываем секции
function showProfileView() {
  profileFormSection.style.display = 'none';
  profileViewSection.style.display = 'block';

  // Отображаем данные пользователя
  avatarPreview.src = userData.avatar || 'default-avatar.png'; // Путь к аватару по умолчанию
  displayName.textContent = userData.name;
  displayPhone.textContent = userData.phone;
  displayTelegramId.textContent = userData.telegramId;
  employeeRating.textContent = userData.rating;
}

function showProfileForm() {
  profileFormSection.style.display = 'block';
  profileViewSection.style.display = 'none';

  // Заполняем форму текущими данными
  avatarPreview.src = userData.avatar || 'default-avatar.png';
  profileForm.name.value = userData.name;
  profileForm.phone.value = userData.phone;
  profileForm.telegramId.value = userData.telegramId;
}

// Обработчик загрузки аватарки
avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      userData.avatar = e.target.result; // base64
      avatarPreview.src = userData.avatar;
    };
    reader.readAsDataURL(file);
  }
});

// Обработчик отправки формы регистрации/редактирования
profileForm.addEventListener('submit', e => {
  e.preventDefault();
  // Получаем значения из формы
  const name = profileForm.name.value.trim();
  const phone = profileForm.phone.value.trim();
  const telegramId = profileForm.telegramId.value.trim();

  if (!name || !phone || !telegramId) {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  // Сохраняем данные пользователя (в памяти)
  userData.name = name;
  userData.phone = phone;
  userData.telegramId = telegramId;

  // Переходим к просмотру профиля
  showProfileView();
});

// Обработчик кнопки редактирования
editProfileBtn.addEventListener('click', () => {
  showProfileForm();
});

// Кнопка "На главный экран"
btnHome.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// При загрузке страницы показываем форму регистрации по умолчанию
showProfileForm();
