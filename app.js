var inputDate=document.querySelector("#input");
var luckyno=document.querySelector("#luckynumber");
var button=document.querySelector("#processbtn");
var outputDiv=document.querySelector(".output");
  
var t,allsum=0,sum=0,temp,abc=[];
var islucky=false;
var success="<h1>Nice!!! Your b'day is lucky.</h1><img src='Images/happy.png'>"
var failure="<h1>Sorry!! Your b'day is not lucky.</h1><img src='Images/sad.png'>"

function process(datePart)
{
    while(datePart>0)
    {
        temp=datePart%10;
        // var temp2=temp.toString().split(".")[0];
        sum+=temp;
        datePart/=10;
        var datePart=datePart.toString().split(".")[0];
        // console.log(datePart);
    }
}
function calculate()
{
    var input=inputDate.value;    
    var date=input.split("-").join();
    console.log(date);
    for(i=0;i<date.length;i++)  
        process(date[i]);

    t=sum%luckyno.value;
    console.log(t);
    // console.log(sum);
    if(t==0)
        outputDiv.innerHTML=success;
    else
        outputDiv.innerHTML=failure;
    // console.log(sum);
    
}
button.addEventListener("click",calculate);
