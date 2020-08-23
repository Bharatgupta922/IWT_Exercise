var ip = [{
    name: "Avacado",
    calories: "320"
},
{
    name: "Banana",
    calories: "111"
},
{
    name: "Grapes",
    calories: "104"
},
{
    name: "Papaya",
    calories: "215"
},
{
    name: "Pineapple",
    calories: "453"
}

];
function calculate() {
    var firstIndex = Number(document.getElementsByTagName("input")[0].value);
    var secondIndex = Number(document.getElementsByTagName("input")[1].value);
    console.log(Number(ip[firstIndex - 1].calories) + "\n" + Number(ip[secondIndex - 1].calories));
    document.getElementsByClassName("op")[0].innerHTML = "Your Fruit Selection: " + ip[firstIndex - 1].name + " and " + ip[secondIndex - 1].name + " ,and their Average Calories = " + Math.floor((Number(ip[firstIndex - 1].calories) + Number(ip[secondIndex - 1].calories)) / 2) + " cal";
}