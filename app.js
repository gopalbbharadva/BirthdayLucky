var inputDate=document.querySelector("#input");
var button=document.querySelector("#processbtn");
var outputtext=document.querySelector("#output");

button.addEventListener("click",function printDate() {
    outputtext.textContent=inputDate.value;
    
});