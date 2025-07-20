// Эта часть отвечает за сохранение данных пользователя
let userData = {
  name: '',
  phone: '',
  telegramId: '',
  avatar: '',
  rating: '0.0 ⭐' // начальный рейтинг сотрудника
};

// Получаем элементы формы и просмотра
const profileForm = document.getElementById('profile-form');
const profileFormSection = document.getElementById('profile-form-section');
const profileViewSection = document.getElementById('profile-view-section');

// Прикрепляем обработчик отправки формы
profileForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Считываем данные из формы
  userData.name = document.getElementById('name').value;
  userData.phone = document.getElementById('phone').value;
  userData.telegramId = document.getElementById('telegramId').value;

  // Работа с аватаркой
  const avatarInput = document.getElementById('avatar');
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      userData.avatar = reader.result;
      showProfileView(); // Показать личный кабинет после загрузки аватарки
    };
    reader.readAsDataURL(file);
  } else {
    userData.avatar = ''; // если аватарка не загружена
    showProfileView();
  }
});

// Эта функция показывает личный кабинет с данными
function showProfileView() {
  document.getElementById('profile-name').textContent = userData.name;
  document.getElementById('profile-phone').textContent = userData.phone;
  document.getElementById('profile-telegramId').textContent = userData.telegramId;
  document.getElementById('profile-rating').textContent = userData.rating;

  // Устанавливаем аватар (если есть)
  const avatarPreview = document.getElementById('profile-avatar');
  if (userData.avatar) {
    avatarPreview.src = userData.avatar;
  } else {
    avatarPreview.src = 'default-avatar.png'; // путь к изображению по умолчанию
  }

  // Переключение секций
  profileFormSection.style.display = 'none';
  profileViewSection.style.display = 'block';
}

// Кнопка "Редактировать профиль"
const editBtn = document.getElementById('edit-profile-btn');
editBtn.addEventListener('click', () => {
  profileFormSection.style.display = 'block';
  profileViewSection.style.display = 'none';
});

// Кнопка "На главный экран"
const homeBtn = document.getElementById('btn-home');
homeBtn.addEventListener('click', () => {
  window.location.href = 'index.html'; // переадресация на главную страницу
});

