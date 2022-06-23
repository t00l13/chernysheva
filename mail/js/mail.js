(function ($) {
	$(".contact-form").submit(function (event) {
		event.preventDefault();
		let form = $('#' + $(this).attr('id'))[0];

		// Сохраняем в переменные дивы, в которые будем выводить текст ошибки
		let inpNameError = $(this).find('.contact-form__error_name');
		let inpEmailError = $(this).find('.contact-form__error_email');
		let inpTelError = $(this).find('.contact-form__error_tel');
		let inpTextError = $(this).find('.contact-form__error_text');
		let inpFileError = $(this).find('.contact-form__error_file');
		let succsesForm = document.querySelector('#succses');
		let contactFrom= document.querySelector('#contact');

		// Сохраняем в переменную див, в который будем выводить сообщение формы
		let formDescription = $(this).find('.contact-form__description');

		let fd = new FormData(form);
		$.ajax({
			url: "./mail/php/mail.php",
			type: "POST",
			data: fd,
			processData: false,
			contentType: false,
			success: function success(res) {
				console.log(res);
				let respond = $.parseJSON(res);
				
				if (respond.name) {
					inpNameError.text(respond.name);
				} else {
					inpNameError.text('');
				}

				if (respond.tel) {
					inpTelError.text(respond.tel);
				} else {
					inpTelError.text('');
				}

				if (respond.email) {
					inpEmailError.text(respond.email);
				} else {
					inpEmailError.text('');
				}

				if (respond.text) {
					inpTextError.text(respond.text);
				} else {
					inpTextError.text('');
				}
				
				if (respond.file) {
					inpFileError.text(respond.file);
				} else {
					inpFileError.text('');
				}

				if (respond.attantion) {
					formDescription.text(respond.attantion).css('color', '#e84a66').fadeIn();
				} else {
					formDescription.text('');
				}

				if (respond.success) {
					if (respond.success) {
						contactFrom.classList.add('popup_opened');
						 succsesForm.classList.remove('popup_opened');
					  }
				}
			},
		});
	});
}(jQuery));