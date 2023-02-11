function buttonclick(val){
    document.getElementById("screen").value+=val
}

function delClick(){
    document.getElementById("screen").value=""
}

function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function backspaceclick(){
    var text=document.getElementById("screen").value
    var editedText=text.slice(0, -1)
    document.getElementById("screen").value=editedText
}
 function signchangeClick(){
    var text=document.getElementById("screen").value
    var editedText=text*-1;
    document.getElementById("screen").value=editedText
 }

 function percentageClick(){
    var text=document.getElementById("screen").value
    var editedText=text/100;
    document.getElementById("screen").value=editedText
 }

 function dotClick(val){
    if(document.getElementById("screen").value.indexOf(val) == -1)
    {
       var text=document.getElementById("screen").value
       var editedText=text+val;
       document.getElementById("screen").value=editedText
    }
 }

 
    

 





