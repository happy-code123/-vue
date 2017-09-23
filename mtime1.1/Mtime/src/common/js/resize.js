
// 重设font-size属性,默认以 ipnone6 为标准尺寸大小
(function (window) {
	function resizeFunc(){
		var iphone = navigator.userAgent;
		// console.log(iphone)

		var width = document.documentElement.clientWidth;
		var scale = 100*(width /375);
		document.getElementsByTagName("html")[0].style.fontSize = scale+"px";
		console.log("scale="+scale)
	}

	resizeFunc();

	window.addEventListener("resize",resizeFunc,false)



})(window)