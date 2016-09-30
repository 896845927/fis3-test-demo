

exports.selectMode = function () {
	var BWL = 640;
	return window.innerWidth>BWL?'pc':'mobile';
}();