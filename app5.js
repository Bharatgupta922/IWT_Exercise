var n = prompt("Enter the number ");
function solve(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return solve(n-1) + solve(n-2);

}
function fibo(){

    for(var i = 0 ; i < Number(n) ; ++i ){
        document.getElementsByClassName("op")[0].innerHTML += solve(i) + " ";
    }
    document.getElementsByClassName("op")[0].innerHTML += "<br>";
}
function odd(){
    var x = Number(n);
    for(var i = 1 ; x-- ; i+=2){
        document.getElementsByClassName("op")[2].innerHTML += i + " ";
    }
    document.getElementsByClassName("op")[2].innerHTML += "<br>";
}
function even(){
    var x = Number(n);
    for(var i = 2 ; x-- ; i+=2){
        document.getElementsByClassName("op")[1].innerHTML += i + " ";
    }
    document.getElementsByClassName("op")[1].innerHTML += "<br>";
}
