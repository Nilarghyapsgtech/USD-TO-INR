let timeout;
let timeout2;
function DebouncedusdConvert(){
    clearTimeout(timeout);
    timeout=setTimeout(()=>{
        usdConvert()
    },100);
}
function DebouncedinrConvert(){
    clearTimeout(timeout2);
    timeout2=setTimeout(()=>{
        inrConvert()
    },1000);
}

async function usdConvert(){
var a=document.getElementById("usd_input").value;
var response=await fetch("http://localhost:3001/convertInr?usd="+a)

        var ans=await response.text()
                document.getElementById('finalvalue_usd').innerHTML="The USD value is : "+ans;

}

async function inrConvert(){
    var a=document.getElementById("inr_input").value;
    var response=await fetch("http://localhost:3001/convertUsd?inr="+a)
     var ans=await response.text()
                    document.getElementById('finalvalue_inr').innerHTML="The INR value is : "+ans;

    }