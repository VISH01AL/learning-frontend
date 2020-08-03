console.log("hello world");
var prev=""
function conv()
{
	var cel=document.getElementById('cel');
	var kel=document.getElementById('kel');
	var far=document.getElementById('far');
 	if((cel.value=="" && kel.value!="" && far.value!="") || (kel.value=="" && cel.value!="" && far.value!="") || (far.value=="" && kel.value!="" && cel.value!=""))
 	{
		console.log("enter1");
		cel.value="";
		kel.value="";
		far.value="";
		prev="";
	}
	else if((cel.value!="" && kel.value=="" && far.value=="")||(cel.value!="" && prev=="cel"))
	{
		console.log("enter2");
		var temp=parseInt(cel.value)
		if(temp<-273.15)
		{
			kel.value="";
			far.value="";
			kel.placeholder="enter a valid temperature";
			far.placeholder="enter a valid temperature";
		}
		else{
			var k=273.15+temp;
			var f=temp*1.8+32;
			kel.value=k.toPrecision(4);
			far.value=f.toPrecision(4);
			prev="cel";
		}
	}
	else if((kel.value!="" && cel.value=="" && far.value=="")||(kel.value!="" && prev=="kel"))
	{
		console.log("enter3");
		var temp=parseInt(kel.value)
		if(temp<0){
			cel.value="";
			far.value="";
			cel.placeholder="enter a valid temperature";
			far.placeholder="enter a valid temperature";
		}
		else{
			var c=temp-273.15;
			var f=temp*1.8-459.67;
			cel.value=c.toPrecision(4);
			far.value=f.toPrecision(4);
			prev="kel";
		}
	}
	else if((far.value!="" && kel.value=="" && cel.value=="")||(far.value!="" && prev=="far")){
		console.log("enter4");
		var temp=parseInt(far.value)
		if(temp<-459.67){
			cel.value="";
			kel.value="";
			cel.placeholder="enter a valid temperature";
			kel.placeholder="enter a valid temperature";
		}
		else{
			var c=(temp-32)/1.8;
			var k=(temp+ 459.67)* (5/9);
			cel.value=c.toPrecision(4);
			kel.value=k.toPrecision(4);
			prev="far";
		}
	}
	else{
		console.log("enter5");
	}
}
setInterval(conv,100);

