function printPyramid() {
    var input = document.getElementsByTagName("input");
    var n = Number(input[0].value);

    for (var i = 1; i <= n; ++i) {
        for (var j = 1; j <= i; ++j) {
            document.getElementsByClassName("op")[0].innerHTML += "<span class = 'red'>" + "0" + "</span>";
            document.getElementsByClassName("op")[0].innerHTML += "<span class = 'blue'>" + j + "</span> ";
        }
        document.getElementsByClassName("op")[0].innerHTML += "<br>";
    }

}
function changeColor(x) {
    document.getElementsByClassName("op")[0].style.backgroundColor = x;
}