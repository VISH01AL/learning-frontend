function play0()
{
play(0)
}
function play1()
{
play(1)
}
function play2()
{
play(2)
}
function play(a)
{
	var comp=Math.floor(Math.random()*3)
	var c=document.getElementsByTagName('img');
	var pla=document.getElementById('play')
	var com=document.getElementById('comp')
	var ps=parseInt(pla.innerHTML);
	var cs=parseInt(com.innerHTML);
	if(a==comp)
	{
	c[comp].style.background='yellow';
	setTimeout(function() {c[comp].style.background='black'}, 300);
  	ps++;
  	cs++;
	}
	else
	{
		if(a==0 && comp==1)
		{
		c[a].style.background='#d72631';
		c[comp].style.background='green';
		setTimeout(function() {c[comp].style.background='black',c[a].style.background='black';}, 300);
		cs++;
		}
		else if(a==0 && comp==2)
		{
		c[comp].style.background='#d72631';
		c[a].style.background='green';
		setTimeout(function() {c[comp].style.background='black',c[a].style.background='black';}, 300);
		ps++;
		}
		else if(a==1 && comp==0)
		{
		c[comp].style.background='#d72631';
		c[a].style.background='green';
		setTimeout(function() {c[comp].style.background='black',c[a].style.background='black';}, 300);
		ps++;
		}
		else if(a==1 && comp==2)
		{
		c[a].style.background='#d72631';
		c[comp].style.background='green';
		setTimeout(function() {c[comp].style.background='black',c[a].style.background='black';}, 300);
		cs++;
		}
		else if(a==2 && comp==0)
		{
		c[a].style.background='#d72631';
		c[comp].style.background='green';
		setTimeout(function() {c[comp].style.background='black',c[a].style.background='black';}, 300);
		cs++;
		}
		else{
		c[comp].style.background='#d72631';
		c[a].style.background='green';
		setTimeout(function() {c[comp].style.background='black',c[a].style.background='black';}, 300);
		ps++;
		}

	}
	if(ps<10){
		ps="0"+ps;
	}
	if(cs<10){
		cs="0"+cs;
	}
	if(cs==100)
	{
		alert('computer won');
		cs="00";
		ps="00"
	}
	if(ps==100)
	{
		alert('you won');
		cs="00";
		ps="00";
	}
	pla.innerHTML=ps;
  	com.innerHTML=cs;

}