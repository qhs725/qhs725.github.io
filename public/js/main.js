jQuery(document).ready(function($) {

    
    /* Github Calendar*/
    GitHubCalendar("#github-cal", "qhs725");
    
    
    /* Github Activity Feed*/
    GitHubActivity.feed({ username: "qhs725", selector: "#github-feed" });


});