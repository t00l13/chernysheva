<?
	// *** Настройка обязательности полей, в случае если они присутствуют в вашей форме

	// Имя
	const NAMEISREQUIRED = true;
	const MSGSNAMEERROR = "⚠ Поле обязательно для заполнения";

	// Телефон
	const TELISREQUIRED = true;
	const MSGSTELERROR = "⚠ Поле обязательно для заполнения";

	// Email
	const EMAILISREQUIRED = true;
	const MSGSEMAILERROR = "⚠ Поле обязательно для заполнения";
	const MSGSEMAILINCORRECT = "⚠ Некорректный почтовый адрес";

	// Текстовое поле
	const TEXTISREQUIRED = false;
	const MSGSTEXTERROR = "⚠ Поле обязательно для заполнения";


	// // Соглашение
	// const AGGREMENTISREQUIRED = true;
	// const MSGSAGGREMENTERROR = "⚠ Примите пользовательское соглашение";

	// Сообщение об успешной отправке
	const MSGSSUCCESS = "Сообщение успешно отправлено";

	// *** SMTP *** //

		// require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
		// const HOST = 'ssl://smtp.yandex.ru';
		// const LOGIN = 'timeout-store.ru@yandex.ru';
		// const PASS = 'Timeout228';
		// const PORT = '465';

	// *** /SMTP *** //

  // Почта с которой будет приходить письмо
	const SENDER = 'itollik@yandex.ru';

	// Почта на которую будет приходить письмо
	const CATCHER = 'arg.com@yandex.ru';

	// Тема письма
	const SUBJECT = 'Заявка с сайта';

	// Кодировка
  const CHARSET = 'UTF-8';
