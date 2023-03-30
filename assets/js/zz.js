		//注释部分是设置1.5秒的定时延迟，timeout结束后加载网页
		setTimeout(() => {
			$(".ld").hide();
			$("body").css("overflow", "auto");
		}, 1500);
		//这是根据js判断，页面加载完毕就显示
		// document.onreadystatechange = function () {
		// 	if (document.readyState == "complete") {
		// 			$(".ld").hide();
		// 			$("body").css("overflow", "auto");
		// 			$(".ld").attr("style","animation: loadingbg 1.5s linear infinite;");
		// 	}
		// }