var BWL = 640;

exports.selectMode = function () {
	return window.innerWidth()>BWL?'pc':'mobile';
}