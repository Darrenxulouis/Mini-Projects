$(document).ready(function(){
	var screen = '';
	var currNum = 0;
	var operator = '';
	var val1=0,val2=0;

	$(".ac").click(function(e){
		screen='',operator='',currNum=0,val1=0,val2=0;
		$("#screen").val(screen);
	});

	$(".percent").click(function(e){
		if(val2) val2 = currNum;
		val1 = parseFloat(currNum/100);
		currNum = val1;
		screen = val1;
		$("#screen").val(screen);
	});

	$(".num").click(function(e){
		if(currNum == 0) currNum = '';

		currNum += $(e.target).text();

		screen = currNum;
		$("#screen").val(screen);
	});

	$(".operator").click(function(e){
		if($(e.target).text() == '=')
		{
			if(operator)
			{
				if(val1)
				{
					currNum = math(operator, val1, parseFloat(currNum));
					operator = '';
					screen = currNum;
					val1 = 0;
				}
			}
			else
			{
				alert("Something is wrong..");
			}
		}
		else
		{
			if(!operator)
			{
				operator = $(e.target).text();
				if(!val1) val1 = parseFloat(currNum);
				currNum = 0;
			}
			else
			{
				if(operator == $(e.target).text())
				{
					val1 = math(operator, val1, parseFloat(currNum));
					currNum = 0;
					screen = val1;
				}
				else
				{
					operator = $(e.target).text();
				}
			}
		}
		$("#screen").val(screen);
	});
	
});

function math(o, v1, v2){
	switch(o){
		case '+':
			return v1+v2;
		case '-':
			return v1-v2;
		case '*':
			return v1*v2;
		case '/':
			return v1/v2;
	}
}

