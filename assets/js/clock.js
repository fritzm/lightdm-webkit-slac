function startTime() {
    var now = new Date();
    $('#clock').html(now.toLocaleTimeString('en-US', {hour:"numeric", minute:"2-digit"}));
    setTimeout('startTime()', 500)
}
window.onload=startTime;
