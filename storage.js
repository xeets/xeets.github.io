;(function (sys) {
	setTimeout(function () {
		sys.dev.screen.write('\nloaded storage unit')
		sys.booting++
	}, schedule(1, 3))
})(window.sys)