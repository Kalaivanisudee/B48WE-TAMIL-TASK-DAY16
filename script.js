function displayCountdown(count, callback) {
    if (count > 0) {
        document.getElementById('countdown').textContent = count;
        setTimeout(function () {
            displayCountdown(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

function displayMessage() {
    document.getElementById('message').textContent = 'Happy Independence Day!';
}

displayCountdown(10, function () {
    displayMessage();
});
