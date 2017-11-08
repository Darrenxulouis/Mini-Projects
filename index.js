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


	/*$(".circle").hover(function(e){
		console.log(e.target.className);
		$(e.target).animate({'stroke-dashoffset':1000},1000);
	});*/
});