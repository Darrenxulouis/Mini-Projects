$(document).ready(function(){
	var projects = window.projects;
	for(var i = 0; i < projects.length; i++)
	{
		var thumbnail = $("<div/>");
		var project_title = $("<a/>");
		project_title.text(projects[i]["name"]);
		project_title.attr("href", projects[i]["link"]);
		thumbnail.append(project_title);
		thumbnail.attr("class", "project_thumbnail project_thumbnail_shadow");
		$(".project_container").append(thumbnail);
	}


	$(".circle").hover(function(e){
		$(".circle").stop().animate({'stroke-dashoffset':1000},1000);
		$(e.target).stop().animate({'stroke-dashoffset':0},1500);
	});

	$("li").click(function(){
		var text = about_text(this.id);
		$('#about_text').animate({left:'-100%'},{duration:1000,complete: function(){
			$('#about_text').text(text);
			$('#about_text').animate({left:'0%'},500);
		}
	});
	});

	function about_text(id){
		switch(id){
			case 'about_li_one' : return "Hello, how are you?";
			case 'about_li_two' : return "I'm doing these to improve myself in front end technologies";
			case 'about_li_three' : return "The projects are inspired from Jennifer Dewalt's 180 websites in 180 days";
			case 'about_li_four' : return "How you doing??";
		}
	}

	function send_email(){
		emailjs.send("gmail", "template_fCQya2gw", {"from_name":"Alex","email":"Ales@alex.com","message_html":"Hi I got an idea"})
	}
});