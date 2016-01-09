;(function (win) {

	win.sys = {
		booting: 1,
		host: {},
		dev: {}
	}

})(window)

;(function (host) {
	navigator.webkitTemporaryStorage.queryUsageAndQuota(
		function (usedBytes, grantedBytes) {
			host.memory = grantedBytes
	    },
	    function () {
	    	host.memory = 0
		}
    )
})(window.sys.host)

;(function (host) {
	function parse_config () {
		var config = new UAParser().getResult()
		var format = function (key) {
			return config[key].name + '/' + config[key].version
		}

		host.browser = format('browser')
		host.engine = format('engine')
		host.os = format('os')
		host.cpu = config.cpu.architecture
	}

	load('ua-parser.min.js').then(parse_config)
})(window.sys.host);

;(function (host) {

	function gen_name () {
		var identifier = JSON.stringify(host)
		sha256(identifier).then(function (digest) {
			host.name = digest
		})
	}

	setTimeout(function poll () {
		if (host && host.browser && host.memory)
			gen_name()
		else
			setTimeout(poll, 100)
	})
})(window.sys.host)
