var input = document.getElementsByTagName("input");
var op = document.getElementsByTagName("p");
input[0].addEventListener("keypress", check);
var letters = /[A-Za-z]+$/g;
function check(e) {
    if (input[0].value.match(letters)) {
        op[0].innerHTML = "ok";
    }
    else {
        op[0].innerHTML = "notOk";
    }
}
console.log(op[0]);
