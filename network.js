;(function (sys) {
	setTimeout(function () {
		sys.dev.screen.write('\nloaded network unit. connecting to network')
	}, schedule(2))

	setTimeout(function () {
		sys.dev.screen.write('\nconnected to network')
		sys.booting++
	}, schedule(7))
})(window.sys)