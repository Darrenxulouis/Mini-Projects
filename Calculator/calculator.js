$(document).ready(function(){
	var value = 0,screen = '',operator = '';

	$(".operator").click(function(e){
		if(operator && value) screen = calculate(operator,value,parseFloat(screen)),operator = '',value = 0;
		$(".chosen").removeClass("chosen");
	 	$target = $(e.target);
		$target.addClass("chosen");
		operator = $(".chosen").text();
		$("#screen").val(screen);
	});

	$(".num").click(function(e){
		if($("td").hasClass("chosen")) 
			value = parseFloat(screen),screen = '',$(".chosen").removeClass("chosen");
		screen += $(e.target).text();
		$("#screen").val(screen);
	});

	$(".equals").click(function(){
		if(value) 
			screen = calculate(operator,value,parseFloat(screen)), value=0,operator = '',$(".chosen").removeClass("chosen");
		$(".chosen").removeClass("chosen");
		$("#screen").val(screen);
	});

	$(".percent").click(function(){
		value = parseFloat(screen);
		value = value/100;
		screen = value;
		$("#screen").val(screen);
	});

	$(".negative").click(function(){
		screen = screen.toString();
		if(!screen.includes("-")) screen = "-"+screen;
		else screen = screen.substr(1);
		$("#screen").val(screen);
	});

	$(".ac").click(function(e){
		screen = '',value = 0, operator = '';
		$(".chosen").removeClass("chosen");
		$("#screen").val(screen);
	});

});

function calculate(operator, val1, val2)
{
	switch(operator){
		case '+':return (val1)+(val2);
		case '-':return (val1)-(val2);
		case '/':return (val1)/(val2);
		case '*':return (val1)*(val2);
	}
}
