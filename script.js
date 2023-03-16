let outputScreen = document.getElementById("result");

function display(num){
    result.value += num;
}
function Calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    result.value = "";

}
function del(){
    result.value = result.value.slice(0,-1)
}
