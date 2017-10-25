$(document).ready(function(){
	$('#welcome').css("left", "0%");
	setTimeout(function(){$('#welcome').css("left", "-100%");}, 2500);
	wordClock();
});


function wordClock(){
	function clockUpdate(){
		var hour =(new Date).getHours();
		var abbrev = (hour>11) ? "pm" : "am";
		var minute =(new Date).getMinutes();
		if(minute > 10 && minute < 20)
			var l = minute,r = null;
		else if(minute > 9)
			var l = 10*Math.floor(minute/10),r=minute%10;
		else if(minute == 0)
			var l = null,r = null;
		else
			var l = 'zero',r = minute;

		$(".hour li").removeClass("now");
		hour%12==0?$(".hour > .12").addClass("now"):$(".hour > ."+hour%12).addClass("now");
		$(".abbrev").removeClass("now");
		$("#"+abbrev).addClass("now");
		$(".minute li").removeClass("now");
		$(".minute >."+l).addClass("now");
		$(".minute >."+r).addClass("now");
		setTimeout(clockUpdate,1e3);
	}
	clockUpdate();
}