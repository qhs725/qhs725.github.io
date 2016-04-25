jQuery(document).ready(function($) {

    
    /* Github Calendar*/
    GitHubCalendar("#github-cal", "qhs725");
    
    
    /* Github Activity Feed*/
    GitHubActivity.feed({ username: "qhs725", selector: "#github-feed" });

	
	window.setTimeout(resizeSVG, 1000);

	
});

function resizeSVG(){

	var svg = document.getElementsByTagName("svg")[0];
	svg.setAttribute('viewBox', '0 0 800 100');
}

