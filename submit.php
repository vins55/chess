<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$tariff = $_POST['tariff'];

// Формируем сообщение для отправки в Telegram
$message = "Заявка с сайта:\nИмя: $name\nEmail: $email\nТелефон: $phone\nТариф: $tariff";

// Устанавливаем данные для отправки в Telegram API
$telegramBotToken = 'bot7259866862:AAH9LNAQc5mluA4LybcSJQjOLKtNi33UG68';
$telegramChatID = '906402574';
$telegramAPI = "https://api.telegram.org/bot$telegramBotToken/sendMessage";

// Отправляем запрос в Telegram
$params = [
    'chat_id' => $telegramChatID,
    'text' => $message
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $telegramAPI);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Отправляем ответ на запрос
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'message' => 'Ваша заявка успешно отправлена в Telegram']);
?>


