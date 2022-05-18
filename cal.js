var isans = false;
function calculate() {
 var finalvalue = document.getElementById("input").value;
 var evaluation = eval(finalvalue);
 document.getElementById("input").value = evaluation;
 isans = true;
}

function display(value) {
    if(isans){
        document.getElementById("input").value  = "";
        isans = false;
    }
    document.getElementById("input").value += value;
}

function reset(){
    document.getElementById("input").value  = "";
}