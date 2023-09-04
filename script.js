function ToggleMode () {
	const html = document.documentElement

	html.classList.toggle('light')

	imgProfile = window.document.querySelector('#profile-pic')

	if (html.classList.contains('light')) {
		imgProfile.src = 'assets/assets/avatar-light.png'
		imgProfile.alt = 'light profile-pic'
	} else {
		imgProfile.src = 'assets/assets/avatar.png'
	}
}