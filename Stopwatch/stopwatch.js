$(document).ready(function(){
	var milisec = 0;
	var seconds = 0;
	var minutes = 0;
	var running = false;
	$("#start").click(function(){
		running = true;
		$("#start").attr("disabled",true);
		timer();
	});

	$("#stop").click(function(){
		running = false;
		$("#start").removeAttr("disabled");
	});

	$("#lap").click(function(){
		if(running)
		{
			var lap_time = $("<li/>");
   			lap_time.attr("class","lap_time");
   			lap_time.text(format_number(minutes)+":"+format_number(seconds)+":"+format_number(milisec));
			$("#laps").append(lap_time);
		}
	});

	$("#clear").click(function(){
   		minutes = 0, seconds = 0, milisec = 0, running = false;
   		update_display("minutes", minutes);
   		update_display("seconds", seconds);
   		update_display("miliseconds", milisec);
   		$("#laps").children().remove();
   		$("#start").removeAttr("disabled");
	});

	function timer(){
		this.running = running;
		function count(){
			if(running)
			{
				milisec ++;
				if(milisec == 100)
				{
					console.log(running);
					milisec = 0;
					seconds++;
					update_display("seconds",seconds);
				}
				if(seconds == 60)
				{
					seconds = 0;
					minutes++;
					update_display("minutes",minutes);
				}
				update_display("miliseconds",milisec);
				setTimeout(count,10);
			}
		}
		count();
	}
});

function update_display(type, digits){
	var unit = digits%10;
	var tens = (digits - unit)/10;
	$("#"+type+">.num_left>*").show();
	$("#"+type+">.num_right>*").show();
	$("#"+type+">.num_left").find(display_timer(tens)).hide();
	$("#"+type+">.num_right").find(display_timer(unit)).hide();
}

function format_number(number){
	return formattedNumber = ("0" + number).slice(-2);
}

function display_timer(number){
	switch(number){
		case 0: return '.hor.mid';
		case 1: return '.hor.top,.hor.bot,.hor.mid,.ver.bot.left,.ver.top.left';
		case 2: return '.ver.top.left,.ver.bot.right';
		case 3: return '.ver.top.left,.ver.bot.left';
		case 4: return '.hor.top,.hor.bot,.ver.bot.left';
		case 5: return '.ver.top.right,.ver.bot.left';
		case 6: return '.ver.top.right';
		case 7: return '.hor.bot,.hor.mid,.ver.top.left,.ver.bot.left';
		case 8: return '';
		case 9: return '.ver.bot.left';
	}
}