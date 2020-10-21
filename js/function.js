function dis(val)
{
document.getElementById("show-content").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("show-content").value
let y = eval(x)
document.getElementById("result").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("result").value = ""
document.getElementById("show-content").value = ""
}

function percent()
{
    let x = document.getElementById("show-content").value
    let y = eval(x)
    document.getElementById("result").value = y*(1/100);
}

function back()
{   
    const resultValue=document.getElementById("show-content");
    const updated= (resultValue.value).slice(0, -1);
    resultValue.value = updated;
}