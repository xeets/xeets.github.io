;(function () {
	document.body.style.background = "#AAF3F3"
})();

;(function (body) {
	setTimeout(function () {
		body.style.display = 'flex'
		body.style.justifyContent = 'space-around'
	}, schedule(2, 2))

	setTimeout(function () {
		body.style.height = window.innerHeight + 'px'
		body.style.alignItems = 'center'
		body.style.margin = '0'
	}, schedule(3, 2))
})(document.body)