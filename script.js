function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    return document.getElementById("history-value").innerText-num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        return document.getElementById("output-value").innerText=num;
    }
    else{
        return document.getElementById("output-value").innerText=getFormattedNumber(num);

    }
}
function getFormattedNumber(num){
    if(num==""){
        return "";
}
var n=Number(num);
var value = n.toLocalesString("en");
return value;
}
 
function reverseNumberFormat(num){
    return Number(num.replace)(/,/g,'');
}
var operator=document.getElementByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
if(this.id=="clear"){
    printHistory("");
    printOutput("");
}
else if(this.id=="backspace"){
    var output=reverseNumberFormatgetOutput()).toString();
    if(output){//if output has a value
        output=output.substr(0,output.length-1);
        printOutput(output);
}
}
else{
    var output-getOutput():
    var history=getHistory():
    if(output==""&&history!=""){
        if(isNaN)history[history.length-1])){
            history=historyh.substre(0,history.length-1);

        }
    }
    if(output!="") || hustory!==""){
        ouput=output==""?output:reverseNumberFormat(ouput);
        history-history+output;
        if(this.id=="="){
            var result=eval(history);
            printOutput((result));
            printHistory("");
        }
        else{
            history-history+this.id;
            printHistory(history);
            printOutput("");

        }
    }
}
var number=document.GetElementByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        if(output:NaN){//if output is a number
            output=ouput+this id;
            printOutput(ouput);


        }
    });
}