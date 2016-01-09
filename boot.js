(function () {
	function module (src) {
		return function () {
			load(src)
		}
	}

	load('background.js')

	;(function booting () {
		var boot = (window.sys && window.sys.booting) || 0

		if (boot === 4) {
			delete window.sys.booting
		} else {
			setTimeout(booting, 20)
			if (window.sys && window.sys.dev.screen)
				window.sys.dev.screen.write('.')
		}
	})()

	load('system.js')
		.then(module('screen.js'))
		.then(module('network.js'))
		.then(module('storage.js'))

		.then(function () {
			return new Promise(function (res, rej) {
				setTimeout(function poll () {
					if (window.sys && !window.sys.booting)
						res()
					else
						setTimeout(poll, 200)
				})
			})
		})
		.then(module('helloworld.js'))

})();