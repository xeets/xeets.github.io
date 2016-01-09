;(function (body, sys) {
	var el = document.createElement('div')
	body.appendChild(el)

	sys.dev.screen = {
		write: function (msg) {
			el.textContent += msg
		},
		clear: function () {
			el.textContent = ""
		}
	}

	el.id = 'screen'
	el.textContent = 'booting'

	setTimeout(function () {
		el.style.width = '640px'
		el.style.height = '480px'
	}, schedule(1))

	setTimeout(function () {
		el.style.background = 'black'
	}, schedule(1, 2))

	setTimeout(function () {
		el.style.color = 'white'
	}, schedule(4))

	setTimeout(function () {
		el.style.fontFamily = 'monospace'
		el.style.whiteSpace = 'pre'
	}, schedule(5))

	setTimeout(function () {
		el.style.height = window.innerHeight + 'px'
		el.style.width = window.innerWidth + 'px'

		sys.booting++
	}, schedule(4, 2))

})(document.body, window.sys)