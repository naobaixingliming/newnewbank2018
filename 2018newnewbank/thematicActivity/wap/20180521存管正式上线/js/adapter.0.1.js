! function() {
	setRem();
	window.addEventListener('orientation' in window ? "deviceorientation" : "resize", setRem);
	function setRem() {
		var html = document.documentElement;
		var width = html.clientWidth;
		html.style.fontSize = width / 640 + 'px';
	}
}()