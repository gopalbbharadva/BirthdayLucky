var inputDate=document.querySelector("#input");
var luckyno=document.querySelector("#luckynumber");
var button=document.querySelector("#processbtn");
var outputtext=document.querySelector("#output");
  
var sum=0,temp;

function process(datePart)
{
    while(datePart!=0)
    {
        temp=datePart%10;
        sum+=temp;
        // console.log(temp);
        datePart/=10;
    }
    console.log(sum);
    
}
function calculate()
{
    var input=inputDate.value;    
    var date=input.split("-");
    var year=date[0];
    var day=date[2];
    var month=date[1];
    for(i=0;i<date.length;i++)
        process(date[i]);
    
}
button.addEventListener("click",calculate);
