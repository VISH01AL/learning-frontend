
function update_time(){
var date=new Date();
hou=date.getHours();
min=date.getMinutes();
sec=date.getSeconds();
if(hou<10){
	hou="0"+hou;
}
if(min<10){
	min="0"+min;
}
if(sec<10){
	sec="0"+sec;
}
var h=document.getElementsByClassName("hou");
var m=document.getElementsByClassName("min");
var s=document.getElementsByClassName("sec");
for(var i=0;i<h.length;i++)
{
	console.log(i);
	h[i].innerHTML=hou+":";
	m[i].innerHTML=min+":";
	s[i].innerHTML=sec;
}
}

setInterval(update_time,1000);