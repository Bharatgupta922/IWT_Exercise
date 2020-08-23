
function printCount() {

    var input = document.getElementsByTagName("input")[0].value.toLowerCase();
    console.log(input + "\n");
    var count = 0;
    for (var i = 0; i < input.length; ++i) {
        if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u') {
            ++count;
        }
    }
    document.getElementsByClassName("op")[0].innerHTML += "Total : " + count + "<br>";
}
function printin(x) {

    var input = document.getElementsByTagName("input")[0].value.toLowerCase();
    var count = 0;
    for (var i = 0; i < input.length; ++i) {
        if (input[i] == x) {
            ++count;
        }
    }
    document.getElementsByClassName("op")[0].innerHTML += x.toUpperCase() + " : " + count + "<br>";
}