function insert(x) {
    var input = document.getElementsByTagName("input");
    input[0].value += x;
}
function plus() {
    var input = document.getElementsByTagName("input");
    input[0].value += "+";
}

function minus() {
    var input = document.getElementsByTagName("input");
    input[0].value += "-";
}
function mult() {
    var input = document.getElementsByTagName("input");
    input[0].value += "*";
}
function divide() {
    var input = document.getElementsByTagName("input");
    input[0].value += "/";
}
function result() {
    var input = document.getElementsByTagName("input");
    input[0].value = eval(input[0].value);
}
function clean() {
    var input = document.getElementsByTagName("input");
    input[0].value = "";
}