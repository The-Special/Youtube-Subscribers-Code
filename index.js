var i = 0;
var floor = 1
youtubeSubscribe();

function youtubeSubscribe () {    
    if (! document.querySelector("ytd-channel-renderer")) return;

    
    clickButton = document.querySelector('.ytd-subscribe-button-renderer button');
    clickButton.click();

    setTimeout(function () {
        document.querySelector(".yt-confirm-dialog-renderer #confirm-button button").click();
        i++;

        console.log(i + " Unsubscribe to channel.");

        setTimeout(function () {
            clickButton = document.querySelector("ytd-channel-renderer");
            clickButton.parentNode.removeChild(clickButton);

            youtubeSubscribe();
        }, 250);
    }, 250);
    
    // Wait 10 seconds for page to catchup every 60 unsubscribes
    if (Math.floor(i/60) == floor) 
    setTimeout(function () 	
		{
			floor++
		}, 10000
	)
}
