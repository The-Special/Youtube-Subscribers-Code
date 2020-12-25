var i = 0;
var x = document.querySelectorAll("ytd-channel-renderer:not(.ytd-item-section-renderer)").length;

youtubeSubscribe();

function youtubeSubscribe () {    
    if (x == 0) return;

    
    clickButton = document.querySelector('.ytd-subscribe-button-renderer');
    clickButton.click();

    setTimeout(function () {
        var unSubBtn = document.getElementById("confirm-button").click();
        i++;
        x--;

        console.log(i + " Unsubscribe to channel.");
        console.log(x + " Number of subscriptions available.");

        setTimeout(function () {
            clickButton = document.querySelector("ytd-channel-renderer");
            clickButton.parentNode.removeChild(clickButton);

            youtubeSubscribe();
        }, 250);
    }, 250);
}