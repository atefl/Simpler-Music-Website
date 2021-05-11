var mySong = document.getElementById("mySong");
var play = document.getElementById("icon1");
var pause = document.getElementById("icon2");
play.onclick = function () {
    mySong.play ();
}
pause.onclick = function () {
    mySong.pause ();
}