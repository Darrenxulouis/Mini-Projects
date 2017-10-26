$(document).ready(function(){
	$.get("http://ipinfo.io", function(response) {
		displayIP(response.ip);
	}, "jsonp");
});

function displayIP(ip)
{
	setTimeout(function(){
		$("#ip_address").text("detecting your machine..");
		setTimeout(function(){
			$("#ip_address").text("contacting the ISS..");
			setTimeout(function(){
				$("#ip_address").text("getting data..");
				setTimeout(function(){
					$("#ip_address").text("dusting data..");
					setTimeout(function(){
						$("#ip_address").text("packaging data..");
						setTimeout(function(){
							$("#ip_address").text("waiting for data..");
							setTimeout(function(){
								$("#ip_address").text("entering atmosphere..");
								setTimeout(function(){
									$("#ip_address").text("going through your browser history..");
									setTimeout(function(){
										$("#ip_address").text("whoops!");
										setTimeout(function(){
											$("#ip_address").text("don't worry, we don't judge..");
											setTimeout(function(){
												$("#ip_address").text("*Hey Barry, come look at this guy's browser history!");
												setTimeout(function(){
													$("#ip_address").text("don't worry, this stays only between you and me..");
													setTimeout(function(){
														$("#ip_address").text("unpackaging the data..");
														setTimeout(function(){
															$("#ip_address").text("How are you, by the way?");
															setTimeout(function(){
																$("#ip_address").text("No need to answer that, i'm just following protocol..");
																setTimeout(function(){
																	$("#ip_address").text("Thank you for waiting..");
																	setTimeout(function(){
																		$("#ip_address").text(ip);
																	},2500);
																},3500);
															},3500);
														},2000);
													},3500);
												}, 4000);
											}, 2500);
										},1000);
									},3000);
								},1500);
							},1000);
						},1000);
					},500);
				},500);
			},1000);
		},2000);
	}, 1500);	
}