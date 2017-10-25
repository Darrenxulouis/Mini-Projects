$(document).ready(function(){

});

$(".button").mouseenter(function(){
		$("#textarea").css("box-shadow","5px 5px 1px #888888");
	});

$(".button").mouseleave(function(){
		$("#textarea").css("box-shadow","");
	});

$("#teleprompter").submit(function(e){
	e.preventDefault();
	var content = $("#teleprompter > textarea").val();
	$(".main_content").remove();
	$("body").css("background-color","red");

	var teletv = $("<div/>");
	teletv.attr("class","tele_screen");
	teletv.text(content);
	$("body").append(teletv);
});

function teleprompt(content){
	
}