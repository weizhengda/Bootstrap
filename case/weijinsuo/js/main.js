/**
 * Created by Administrator on 2017/4/1 0001.
 */

//鼠标滑动切换轮播图
$(function () {
	
	var startX=0;
	
	 $("#carousel").on({
	 	touchstart:function (evt) {
			startX=evt.originalEvent.changedTouches[0].clientX;
		},
		touchend:function (evt) {
			var endX=evt.originalEvent.changedTouches[0].clientX;
			
			//滑动距离
			if(Math.abs(startX-endX)>50){
				if(startX-endX>0){
					$("#carousel").carousel("prev");
				}else{
					$("#carousel").carousel("next");
				}
			}
		}
	 })
});