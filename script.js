let timeLastStarted = null;
let elapsed = 0;

function startStop() {
    // if timer is not currently running
    if (timeLastStarted === null) {
        // change button text to stop if time is running
        $('#start-stop').html('Stop');

        timeLastStarted = Date.now();

        setInterval(ticker, 10);

    } else {
        // change button text 
        $('#start-stop').html('Start');

        elapsed += (Date.now() - timeLastStarted) / 1000


        timeLastStarted = null;
    }
}

function ticker() {
    let fullElapsed = elapsed;

    // keep updating time
    if (timeLastStarted !== null){
        fullElapsed += (Date.now() - timeLastStarted) / 1000
    }

    $('#timer').html(fullElapsed.toFixed(2));
}

function reset() {
    timeLastStarted = null;
    elapsed = 0;
    fullElapsed = 0;
    $('#start-stop').html('Start');
}