// 重置 font-size
function resetFontSize () {
	var width = document.documentElement.clientWidth
	console.log(width)
	var scale = width / 320
	var newFontSize = 100*scale
	document.getElementsByTagName('html')[0].style.fontSize= newFontSize + 'px';
}

resetFontSize();

// 当改变屏幕尺寸，就触发此事件
window.addEventListener('resize',function(){ 
	resetFontSize();
})