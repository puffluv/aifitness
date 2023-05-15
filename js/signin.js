		function onSignIn(googleUser) {
			var profile = googleUser.getBasicProfile();
			console.log('ID: ' + profile.getId()); // Вывод ID пользователя
			console.log('Name: ' + profile.getName()); // Вывод имени пользователя
			console.log('Image URL: ' + profile.getImageUrl()); // Вывод URL-адреса аватарки пользователя
			console.log('Email: ' + profile.getEmail()); // Вывод адреса электронной почты пользователя
		}
