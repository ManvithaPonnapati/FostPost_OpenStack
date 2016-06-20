// Copyright @ CraftCloud
var select="2px solid #FA7937";
var clear="2px solid #FFF";
$('#TopContainer').hover(function(){
	 $('#family1').css("visibility","hidden")
	 $('#family2').css("visibility","hidden")
	 $('#family3').css("visibility","hidden")
	 $('#family4').css("visibility","hidden")
	 $('#family5').css("visibility","hidden") 
	 $('#family6').css("visibility","hidden")
	})
	$('#TextContainer').hover(function(){
	 $('#family1').css("visibility","hidden")
	 $('#family2').css("visibility","hidden")
	 $('#family3').css("visibility","hidden")
	 $('#family4').css("visibility","hidden")
	 $('#family5').css("visibility","hidden") 
	 $('#family6').css("visibility","hidden")
	})
$('#Guy1').hover(function(){
	 $('#Des1').css("visibility","visible");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	 $('#family1').css("visibility","visible")
	 $('#family2').css("visibility","hidden")
	 $('#family3').css("visibility","hidden")
	 $('#family4').css("visibility","hidden")
	 $('#family5').css("visibility","hidden") 
	 $('#family6').css("visibility","hidden")
	 changefont(1);
})
$('#Guy2').hover(function(){
	$('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","visible");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  $('#family1').css("visibility","hidden")
	 $('#family2').css("visibility","visible")
	 $('#family3').css("visibility","hidden")
	 $('#family4').css("visibility","hidden")
	 $('#family5').css("visibility","hidden") 
	 $('#family6').css("visibility","hidden")
	  changefont(2);
})
$('#Guy3').hover(function(){
	$('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","visible");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  $('#family1').css("visibility","hidden")
	 $('#family2').css("visibility","hidden")
	 $('#family3').css("visibility","visible")
	 $('#family4').css("visibility","hidden")
	 $('#family5').css("visibility","hidden") 
	 $('#family6').css("visibility","hidden")
	  changefont(3);
	
})
$('#Guy4').hover(function(){
	$('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","visible");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	 changefont(4);
	  $('#family1').css("visibility","hidden")
	 $('#family2').css("visibility","hidden")
	 $('#family3').css("visibility","hidden")
	 $('#family4').css("visibility","visible")
	 $('#family5').css("visibility","hidden") 
	 $('#family6').css("visibility","hidden")
})
$('#Guy5').hover(function(){
	$('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","visible");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  $('#family1').css("visibility","hidden")
	 $('#family2').css("visibility","hidden")
	 $('#family3').css("visibility","hidden")
	 $('#family4').css("visibility","hidden")
	 $('#family5').css("visibility","visible") 
	 $('#family6').css("visibility","hidden")
	 changefont(5);
})
$('#Guy6').hover(function(){
	$('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","visible");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  $('#family1').css("visibility","hidden")
	 $('#family2').css("visibility","hidden")
	 $('#family3').css("visibility","hidden")
	 $('#family4').css("visibility","hidden")
	 $('#family5').css("visibility","hidden") 
	 $('#family6').css("visibility","visible")
	 changefont(6);
})

$('#Guy1').click(function() {
	 sessionStorage.fontgroup=1;
	 $('#Guy1').css("border", select);
	 $('#Guy2').css("border", clear);
	 $('#Guy3').css("border", clear);
	 $('#Guy4').css("border", clear);
	 $('#Guy5').css("border", clear);
	 $('#Guy6').css("border", clear);
	 $('#Guy7').css("border", clear);
	 $('#Guy8').css("border", clear);
	 $('#Guy9').css("border", clear);
	 $('#Guy10').css("border", clear);
	 $('#Guy11').css("border", clear);
	 $('#Guy12').css("border", clear);
	 $('#Guy13').css("border", clear);
	 $('#Des1').css("visibility","visible");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  sessionStorage.fontgroup=1
	 changefont(1);
	 window.location.href="{% url 'create' %}"
	 
});
$('#Guy2').click(function() {
	 sessionStorage.fontgroup=2;
	 $('#Guy1').css("border", clear);
	 $('#Guy2').css("border", select);
	 $('#Guy3').css("border", clear);
	 $('#Guy4').css("border", clear);
	 $('#Guy5').css("border", clear);
	 $('#Guy6').css("border", clear);
	 $('#Guy7').css("border", clear);
	 $('#Guy8').css("border", clear);
	 $('#Guy9').css("border", clear);
	 $('#Guy10').css("border", clear);
	 $('#Guy11').css("border", clear);
	 $('#Guy12').css("border", clear);
	 $('#Guy13').css("border", clear);
	 $('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","visible");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  sessionStorage.fontgroup=2
	  changefont(2);
	  window.location.href="{% url 'create' %}"
});
$('#Guy3').click(function() {
	 sessionStorage.fontgroup=3;
	 $('#Guy1').css("border", clear);
	 $('#Guy2').css("border", clear);
	 $('#Guy3').css("border", select);
	 $('#Guy4').css("border", clear);
	 $('#Guy5').css("border", clear);
	 $('#Guy6').css("border", clear);
	 $('#Guy7').css("border", clear);
	 $('#Guy8').css("border", clear);
	 $('#Guy9').css("border", clear);
	 $('#Guy10').css("border", clear);
	 $('#Guy11').css("border", clear);
	 $('#Guy12').css("border", clear);
	 $('#Guy13').css("border", clear);
	 $('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","visible");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  sessionStorage.fontgroup=3
	  changefont(3);
	  window.location.href="{% url 'create' %}"
});

$('#Guy4').click(function() {
	
	 sessionStorage.fontgroup=4;
	 $('#Guy1').css("border", clear);
	 $('#Guy2').css("border", clear);
	 $('#Guy3').css("border", clear);
	 $('#Guy4').css("border", select);
	 $('#Guy5').css("border", clear);
	 $('#Guy6').css("border", clear);
	 $('#Guy7').css("border", clear);
	 $('#Guy8').css("border", clear);
	 $('#Guy9').css("border", clear);
	 $('#Guy10').css("border", clear);
	 $('#Guy11').css("border", clear);
	 $('#Guy12').css("border", clear);
	 $('#Guy13').css("border", clear);
	 $('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","visible");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	 sessionStorage.fontgroup=4
	  changefont(4);
	  window.location.href="{% url 'create' %}"
});

$('#Guy5').click(function() {
	 sessionStorage.fontgroup=5;
	 $('#Guy1').css("border", clear);
	 $('#Guy2').css("border", clear);
	 $('#Guy3').css("border", clear);
	 $('#Guy4').css("border", clear);
	 $('#Guy5').css("border", select);
	 $('#Guy6').css("border", clear);
	 $('#Guy7').css("border", clear);
	 $('#Guy8').css("border", clear);
	 $('#Guy9').css("border", clear);
	 $('#Guy10').css("border", clear);
	 $('#Guy11').css("border", clear);
	 $('#Guy12').css("border", clear);
	 $('#Guy13').css("border", clear);
	 $('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","visible");
	 $('#Des6').css("visibility","hidden");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  sessionStorage.fontgroup=5
	  changefont(5);
	  console.log("DXXXXXXXXX")
	  window.location.href="{% url 'create' %}"
	  
});

$('#Guy6').click(function() {
	
	 sessionStorage.fontgroup=6;
	 $('#Guy1').css("border", clear);
	 $('#Guy2').css("border", clear);
	 $('#Guy3').css("border", clear);
	 $('#Guy4').css("border", clear);
	 $('#Guy5').css("border", clear);
	 $('#Guy6').css("border", select);
	 $('#Guy7').css("border", clear);
	 $('#Guy8').css("border", clear);
	 $('#Guy9').css("border", clear);
	 $('#Guy10').css("border", clear);
	 $('#Guy11').css("border", clear);
	 $('#Guy12').css("border", clear);
	 $('#Guy13').css("border", clear);
	 $('#Des1').css("visibility","hidden");
	 $('#Des2').css("visibility","hidden");
	 $('#Des3').css("visibility","hidden");
	 $('#Des4').css("visibility","hidden");
	 $('#Des5').css("visibility","hidden");
	 $('#Des6').css("visibility","visible");
	 $('#Des7').css("visibility","hidden");
	 $('#Des8').css("visibility","hidden");
	 $('#Des9').css("visibility","hidden");
	 $('#Des10').css("visibility","hidden");
	 $('#Des11').css("visibility","hidden");
	 $('#Des12').css("visibility","hidden");
	 $('#Des13').css("visibility","hidden");
	  sessionStorage.fontgroup=6
	  changefont(6);
	 window.location.href="{% url 'create' %}"
});

function changefont(id)
{
	
	if(id==1)
	{
	document.getElementById('fontchange').style.fontFamily="Antic-Regular";
	
	}
	if(id==2)
	{
	document.getElementById('fontchange').style.fontFamily="Asar-Regular";
	
	}
	if(id==3)
	{
	document.getElementById('fontchange').style.fontFamily="Asap-Regular";
	
	}
	if(id==4)
	{
	document.getElementById('fontchange').style.fontFamily="Anaheim-Regular";
	
	}
	if(id==5)
	{
	document.getElementById('fontchange').style.fontFamily="Arvo-Regular";
	
	}
	if(id==6)
	{
	document.getElementById('fontchange').style.fontFamily="Armata-Regular";
	
	}
	
}
