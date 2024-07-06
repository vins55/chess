$(document).ready(function() {
  $('#closeButton').on('click', function(e) {
      e.preventDefault();
      $('#successMessage').fadeOut();
      $('#overlay').fadeOut(); // Скрыть затемнение при закрытии окна
      $('body').removeClass('no-scroll'); // Разрешить скроллинг на body
  });

  $('#form').on('submit', function(e) {
      e.preventDefault();
      
      // Получаем данные из формы
      var name = $('#forName').val();
      var email = $('#forEmail').val();
      var phone = $('#forPhone').val();
      var tariff = $('input[name="tariff"]:checked').val();
      
      // Отправляем данные в Telegram (здесь нужно указать ваш API и ID чата)
      var telegramAPI = 'https://api.telegram.org/bot7259866862:AAH9LNAQc5mluA4LybcSJQjOLKtNi33UG68/sendMessage';
      var telegramChatID = '906402574';
      var message = 'Заявка с сайта:\nИмя: ' + name + '\nEmail: ' + email + '\nТелефон: ' + phone + '\nТариф: ' + tariff;
      
      // Отправляем запрос на Telegram API
      $.ajax({
          url: telegramAPI,
          method: 'POST',
          data: {
              chat_id: telegramChatID,
              text: message
          },
          success: function(response) {
            $('#form')[0].reset();
            $('#successMessage').fadeIn();
            $('#overlay').fadeIn(); // Показать затемнение при показе окна
            $('body').addClass('no-scroll'); // Запретить скроллинг на body
          },
          error: function(xhr, status, error) {
            console.error('Ошибка при отправке сообщения в Telegram:', error);
            alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
          }
      });
  });
});


document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
});

const menuLinks = document.querySelectorAll('.nav__list a');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    document.querySelector('.burger').classList.remove('active');
    document.querySelector('.nav').classList.remove('open');
  });
});

