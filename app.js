var inputDate=document.querySelector("#input");
var luckyno=document.querySelector("#luckynumber");
var button=document.querySelector("#processbtn");
var outputtext=document.querySelector("#output");
  
var t,allsum=0,sum=0,temp,abc=[];
var islucky=false;

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
    var date=input.split("-");
    for(i=0;i<date.length;i++)  
        process(date[i]);

    t=sum%luckyno.value;
    console.log(t);
    // console.log(sum);
    if(t==0)
        islucky=true;
    else
        islucky=false;
    // console.log(sum);
    outputtext.textContent=islucky;
}
button.addEventListener("click",calculate);
