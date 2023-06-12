//06월 12일 html에서 js파일로 분리
function doSomething(){
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;
    document.getElementById("valueA").innerHTML = a;
    document.getElementById("valueB").innerHTML = b;
    document.getElementById("valueC").innerHTML = Number(a) + Number(b);
}