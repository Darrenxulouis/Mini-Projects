$(".button").mouseenter(function(){
		$("#textarea").css("box-shadow","5px 5px 1px #888888");
	});

$(".button").mouseleave(function(){
		$("#textarea").css("box-shadow","");
	});

$("#teleprompter").submit(function(e){
	e.preventDefault();
	var content = $("#teleprompter > textarea").val();
	var startHeight = 0;

	if (content.replace(/^\s+|\s+$/g, '') == '') {
			content = 'Aww.. no need to be shy, enter some text ;)';
		}

	$(".main_content").remove();
	$("body").css("background-color","#000d1a");

	var teletv = $("<div/>");
	teletv.attr("class","tele_screen");
	teletv.text(content);
	$("body").append(teletv);

	teleprompt(startHeight);
});

function teleprompt(y){
	setTimeout(function(){
		var newY = y;
		var height = $(".tele_screen").height();
		if(newY > -1*height - 150)
		{
			newY--;
			$(".tele_screen").css("top",newY);
			teleprompt(newY);
		}	
	},30);	
}