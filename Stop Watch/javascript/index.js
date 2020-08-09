let sec=0;
let min=0;
let hr=0;

var time=document.getElementsByClassName("time");
var myvar=null;
function st()
{
sec+=1;
if(sec>=60)
{
    sec=0;
    min++;
}
if(min>=60)
{
    min=0;
    hr++;
}

var ans="";
if(hr<10){
ans+="0"+hr+":";}
else{ans+=hr+":";}

if(min<10){ans+="0"+min+":";}
else{ans+=min+":";}

if(sec<10){ans+="0"+sec;}
else{ans+=sec;}
time[0].innerHTML=ans;
}
function reset()
{
sec=0;
min=0;
hr=0;
time[0].innerHTML="00:00:00";
clearInterval(myvar);
}
function start()
{
 st();
 myvar=setInterval(st, 1000);
}

