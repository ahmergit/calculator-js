var display = document.getElementById('display')
function getBtnValue(a){
    display.value +=a;
}
function calVal(){
    var a = eval(display.value);
    display.value = a;
}
function clearAll(){
    display.value = "";
}