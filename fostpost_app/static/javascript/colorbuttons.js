ImageToBeDrawn.crossOrigin = "Anonymous";
var colorThief = new ColorThief();
var m=new Image();
m.src=ImageToBeDrawn.src;
console.log(m.width)
var c=colorThief.getColor(ImageToBeDrawn);
var palatt=colorThief.getPalette(ImageToBeDrawn);
console.log(palatt[0])
var r11=255;
var g11=255;
var b11=255
var clickedon=0;
		var clickedon1=0;
sessionStorage.r1=palatt[0][0];
sessionStorage.g1=palatt[0][1];
sessionStorage.b1=palatt[0][2];

	sessionStorage.rt1=255;
	sessionStorage.gt1=255;
	sessionStorage.bt1=255;
	sessionStorage.rs1=255;
	sessionStorage.gs1=255;
	sessionStorage.bs1=255;
$('#Color1Button1').css('background-color',"rgb("+palatt[0]+")");
$('#Color2Button1').css('background-color',"rgb("+palatt[0]+")");
$('#Color3Button1').css('background-color',"rgb("+palatt[0]+")");
$('#Color4Button1').css('background-color',"rgb("+palatt[0]+")");
$('#Color5Button1').css('background-color',"rgb("+palatt[0]+")");
$('#Color1Button2').css('background-color',"rgb("+palatt[1]+")");
$('#Color2Button2').css('background-color',"rgb("+palatt[1]+")");
$('#Color3Button2').css('background-color',"rgb("+palatt[1]+")");
$('#Color4Button2').css('background-color',"rgb("+palatt[1]+")");
$('#Color5Button2').css('background-color',"rgb("+palatt[1]+")");
$('#Color1Button3').css('background-color',"rgb("+palatt[2]+")");
$('#Color2Button3').css('background-color',"rgb("+palatt[2]+")");
$('#Color3Button3').css('background-color',"rgb("+palatt[2]+")");
$('#Color4Button3').css('background-color',"rgb("+palatt[2]+")");
$('#Color5Button3').css('background-color',"rgb("+palatt[2]+")");
$('#Color1Button4').css('background-color',"rgb("+palatt[3]+")");
$('#Color2Button4').css('background-color',"rgb("+palatt[3]+")");
$('#Color3Button4').css('background-color',"rgb("+palatt[3]+")");
$('#Color4Button4').css('background-color',"rgb("+palatt[3]+")");
$('#Color5Button4').css('background-color',"rgb("+palatt[3]+")");
$('#Color1Button5').css('background-color',"rgb("+palatt[4]+")");
$('#Color2Button5').css('background-color',"rgb("+palatt[4]+")");
$('#Color3Button5').css('background-color',"rgb("+palatt[4]+")");
$('#Color4Button5').css('background-color',"rgb("+palatt[4]+")");
$('#Color5Button5').css('background-color',"rgb("+palatt[4]+")");
$('#Text1Button1').css('color',"rgb("+palatt[0]+")");
$('#Text2Button1').css('color',"rgb("+palatt[0]+")");
$('#Text3Button1').css('color',"rgb("+palatt[0]+")");
$('#Text4Button1').css('color',"rgb("+palatt[0]+")");
$('#Text5Button1').css('color',"rgb("+palatt[0]+")");
$('#Text1Button2').css('color',"rgb("+palatt[1]+")");
$('#Text2Button2').css('color',"rgb("+palatt[1]+")");
$('#Text3Button2').css('color',"rgb("+palatt[1]+")");
$('#Text4Button2').css('color',"rgb("+palatt[1]+")");
$('#Text5Button2').css('color',"rgb("+palatt[1]+")");
$('#Text1Button3').css('color',"rgb("+palatt[2]+")");
$('#Text2Button3').css('color',"rgb("+palatt[2]+")");
$('#Text3Button3').css('color',"rgb("+palatt[2]+")");
$('#Text4Button3').css('color',"rgb("+palatt[2]+")");
$('#Text5Button3').css('color',"rgb("+palatt[2]+")");
$('#Text1Button4').css('color',"rgb("+palatt[3]+")");
$('#Text2Button4').css('color',"rgb("+palatt[3]+")");
$('#Text3Button4').css('color',"rgb("+palatt[3]+")");
$('#Text4Button4').css('color',"rgb("+palatt[3]+")");
$('#Text5Button4').css('color',"rgb("+palatt[3]+")");
$('#Text1Button5').css('color',"rgb("+palatt[4]+")");
$('#Text2Button5').css('color',"rgb("+palatt[4]+")");
$('#Text3Button5').css('color',"rgb("+palatt[4]+")");
$('#Text4Button5').css('color',"rgb("+palatt[4]+")");
$('#Text5Button5').css('color',"rgb("+palatt[4]+")");

$("#Color1Button6").spectrum({
    color: "#f00"
});

$('#Color1Button6').change(function()
{
	var newcolor=$("#Color1Button6").spectrum("get").toRgb();
	rBG1=newcolor.r;
	gBG1=newcolor.g;
	bBG1=newcolor.b;
	var color='rgb('+rBG1+','+gBG1+','+bBG1+')'
	//console.log(color)
	sessionStorage.r1=rBG1;
	sessionStorage.g1=gBG1;
	sessionStorage.b1=bBG1;
	$('#Canvas1layer1').css('background-color',color)
	var Canvas1layer1=document.getElementById('Canvas1layer1');
	var Canvas1layer1ctx=Canvas1layer1.getContext('2d');
	Canvas1layer1ctx.fillStyle=color;
	Canvas1layer1ctx.rect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fill()
});
$("#Text1Button6").spectrum({
    color: "#f00"
});
$('#Text1Button6').change(function()
{

	var newcolor1=$("#Text1Button6").spectrum("get").toRgb();
	console.log(newcolor1)
	r1=newcolor1.r;
	g1=newcolor1.g;
	b1=newcolor1.b;
	
	sessionStorage.rt1=r1;
	sessionStorage.gt1=g1;
	sessionStorage.bt1=b1;
	
});


$("#Color2Button6").spectrum({
    color: "#f00"
});

$('#Color2Button6').change(function()
{
	var newcolor=$("#Color2Button6").spectrum("get").toRgb();
	rBG2=newcolor.r;
	gBG2=newcolor.g;
	bBG2=newcolor.b;
	var color='rgb('+rBG2+','+gBG2+','+bBG2+')'
	//console.log(color)
	$('#Canvas2layer1').css('background-color',color)
	var Canvas2layer1=document.getElementById('Canvas2layer1');
	var Canvas2layer1ctx=Canvas2layer1.getContext('2d');
	Canvas2layer1ctx.clearRect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fillStyle=color;
	Canvas2layer1ctx.rect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fill()
	
});
$("#Text2Button6").spectrum({
    color: "#f00"
});
$('#Text2Button6').change(function()
{

	var newcolor1=$("#Text2Button6").spectrum("get").toRgb();
	console.log(newcolor1)
	r2=newcolor1.r;
	g2=newcolor1.g;
	b2=newcolor1.b;
	
	
});



$("#Color4Button6").spectrum({
    color: "#f00"
});

$('#Color4Button6').change(function()
{
	var newcolor=$("#Color4Button6").spectrum("get").toRgb();
	rBG4=newcolor.r;
	gBG4=newcolor.g;
	bBG4=newcolor.b;
	var color='rgb('+rBG4+','+gBG4+','+bBG4+')'
	//console.log(color)
	$('#Canvas4layer1').css('background-color',color)
	var Canvas4layer1=document.getElementById('Canvas4layer1');
	var Canvas4layer1ctx=Canvas4layer1.getContext('2d');
	Canvas4layer1ctx.clearRect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fillStyle=color;
	Canvas4layer1ctx.rect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fill()
	
});
$("#Text4Button6").spectrum({
    color: "#f00"
});
$('#Text4Button6').change(function()
{

	var newcolor1=$("#Text4Button6").spectrum("get").toRgb();
	console.log(newcolor1)
	r4=newcolor1.r;
	g4=newcolor1.g;
	b4=newcolor1.b;
	
	
});


var color1='rgb('+palatt[0][0]+','+palatt[0][1]+','+palatt[0][2]+')'
	//console.log(color)
	$('#Canvas5layer1').css('background-color',color1)
	$('#Canvas4layer1').css('background-color',color1)
	$('#Canvas3layer1').css('background-color',color1)
	$('#Canvas2layer1').css('background-color',color1)
	$('#Canvas1layer1').css('background-color',color1)
	
$('#Text1Button1').click(function(){
	if(clickedon==1)
	{
	r1=palatt[0][0];
	g1=palatt[0][1];
	b1=palatt[0][2];
	sessionStorage.rt1=r1;
	sessionStorage.gt1=g1;
	sessionStorage.bt1=b1;
	}
	if(clickedon1==1)
	{
	r11=palatt[0][0];
	g11=palatt[0][1];
	b11=palatt[0][2];
	sessionStorage.rs1=r11;
	sessionStorage.gs1=g11;
	sessionStorage.bs1=b11;
	}
})
$('#Text2Button1').click(function(){
	r2=palatt[0][0];
	g2=palatt[0][1];
	b2=palatt[0][2];
	
})
$('#Text3Button1').click(function(){
	r3=palatt[0][0];
	g3=palatt[0][1];
	b3=palatt[0][2];
})
$('#Text4Button1').click(function(){
	r4=palatt[0][0];
	g4=palatt[0][1];
	b4=palatt[0][2];
})
$('#Text5Button1').click(function(){
	r5=palatt[0][0];
	g5=palatt[0][1];
	b5=palatt[0][2];
})
$('#Text1Button2').click(function(){
	if(clickedon==1)
	{
	r1=palatt[1][0];
	g1=palatt[1][1];
	b1=palatt[1][2];
	sessionStorage.rt1=r1;
	sessionStorage.gt1=g1;
	sessionStorage.bt1=b1;
	}
	if(clickedon1==1)
	{
	r11=palatt[1][0];
	g11=palatt[1][1];
	b11=palatt[1][2];
	sessionStorage.rs1=r11;
	sessionStorage.gs1=g11;
	sessionStorage.bs1=b11;
	}
})
$('#Text2Button2').click(function(){
	r2=palatt[1][0];
	g2=palatt[1][1];
	b2=palatt[1][2];
})
$('#Text3Button2').click(function(){
	r3=palatt[1][0];
	g3=palatt[1][1];
	b3=palatt[1][2];
})
$('#Text4Button2').click(function(){
	r4=palatt[1][0];
	g4=palatt[1][1];
	b4=palatt[1][2];
})
$('#Text5Button2').click(function(){
	r5=palatt[1][0];
	g5=palatt[1][1];
	b5=palatt[1][2];
})
$('#Text1Button3').click(function(){
	if(clickedon==1)
	{
	r1=palatt[2][0];
	g1=palatt[2][1];
	b1=palatt[2][2];
	sessionStorage.rt1=r1;
	sessionStorage.gt1=g1;
	sessionStorage.bt1=b1;
	}
	if(clickedon1==1)
	{
	r11=palatt[2][0];
	g11=palatt[2][1];
	b11=palatt[2][2];
	sessionStorage.rs1=r11;
	sessionStorage.gs1=g11;
	sessionStorage.bs1=b11;
	}
})
$('#Text2Button3').click(function(){
	r2=palatt[2][0];
	g2=palatt[2][1];
	b2=palatt[2][2];
})
$('#Text3Button3').click(function(){
	r3=palatt[2][0];
	g3=palatt[2][1];
	b3=palatt[2][2];
})
$('#Text4Button3').click(function(){
	r4=palatt[2][0];
	g4=palatt[2][1];
	b4=palatt[2][2];
})
$('#Text5Button3').click(function(){
	r5=palatt[2][0];
	g5=palatt[2][1];
	b5=palatt[2][2];
})
$('#Text1Button4').click(function(){
	if(clickedon==1)
	{
	r1=palatt[3][0];
	g1=palatt[3][1];
	b1=palatt[3][2];
	sessionStorage.rt1=r1;
	sessionStorage.gt1=g1;
	sessionStorage.bt1=b1;
	}
	if(clickedon1==1)
	{
	r11=palatt[3][0];
	g11=palatt[3][1];
	b11=palatt[3][2];
	sessionStorage.rs1=r11;
	sessionStorage.gs1=g11;
	sessionStorage.bs1=b11;
	}
})
$('#Text2Button4').click(function(){
	r2=palatt[3][0];
	g2=palatt[3][1];
	b2=palatt[3][2];
})
$('#Text3Button4').click(function(){
	r3=palatt[3][0];
	g3=palatt[3][1];
	b3=palatt[3][2];
})
$('#Text4Button4').click(function(){
	r4=palatt[3][0];
	g4=palatt[3][1];
	b4=palatt[3][2];
})
$('#Text5Button4').click(function(){
	r5=palatt[3][0];
	g5=palatt[3][1];
	b5=palatt[3][2];
})
$('#Text1Button5').click(function(){
	if(clickedon==1)
	{
	r1=palatt[4][0];
	g1=palatt[4][1];
	b1=palatt[4][2];
	sessionStorage.rt1=r1;
	sessionStorage.gt1=g1;
	sessionStorage.bt1=b1;
	}
	if(clickedon1==1)
	{
	r11=palatt[4][0];
	g11=palatt[4][1];
	b11=palatt[4][2];
	sessionStorage.rs1=r11;
	sessionStorage.gs1=g11;
	sessionStorage.bs1=b11;
	}
})
$('#Text2Button5').click(function(){
	r2=palatt[4][0];
	g2=palatt[4][1];
	b2=palatt[4][2];
})
$('#Text3Button5').click(function(){
	r3=palatt[4][0];
	g3=palatt[4][1];
	b3=palatt[4][2];
})
$('#Text4Button5').click(function(){
	r4=palatt[4][0];
	g4=palatt[4][1];
	b4=palatt[4][2];
})
$('#Text5Button5').click(function(){
	r5=palatt[4][0];
	g5=palatt[4][1];
	b5=palatt[4][2];
})


$('#Color1Button1').click(function(){
	rBG1=palatt[0][0];
	gBG1=palatt[0][1];
	bBG1=palatt[0][2];
	sessionStorage.r1=rBG1;
	sessionStorage.g1=gBG1;
	sessionStorage.b1=bBG1;
	var color='rgb('+rBG1+','+gBG1+','+bBG1+')'
	//console.log(color)
	$('#Canvas1layer1').css('background-color',color)
	var Canvas1layer1=document.getElementById('Canvas1layer1');
	var Canvas1layer1ctx=Canvas1layer1.getContext('2d');
	Canvas1layer1ctx.clearRect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fillStyle=color;
	Canvas1layer1ctx.rect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fill()
})
$('#Color1Button2').click(function(){
	rBG2=palatt[1][0];
	gBG2=palatt[1][1];
	bBG2=palatt[1][2];
	sessionStorage.r1=rBG2;
	sessionStorage.g1=gBG2;
	sessionStorage.b1=bBG2;
	var color='rgb('+rBG2+','+gBG2+','+bBG2+')'
	//console.log(color)
	$('#Canvas1layer1').css('background-color',color)
	var Canvas1layer1=document.getElementById('Canvas1layer1');
	var Canvas1layer1ctx=Canvas1layer1.getContext('2d');
	Canvas1layer1ctx.clearRect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fillStyle=color;
	Canvas1layer1ctx.rect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fill()
})
$('#Color1Button3').click(function(){
	rBG3=palatt[2][0];
	gBG3=palatt[2][1];
	bBG3=palatt[2][2];
	sessionStorage.r1=rBG3;
	sessionStorage.g1=gBG3;
	sessionStorage.b1=bBG3;
	var color='rgb('+rBG3+','+gBG3+','+bBG3+')'
	//console.log(color)
	$('#Canvas1layer1').css('background-color',color)
	var Canvas1layer1=document.getElementById('Canvas1layer1');
	var Canvas1layer1ctx=Canvas1layer1.getContext('2d');
	Canvas1layer1ctx.clearRect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fillStyle=color;
	Canvas1layer1ctx.rect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fill()
})
$('#Color1Button4').click(function(){
	rBG4=palatt[3][0];
	gBG4=palatt[3][1];
	bBG4=palatt[3][2];
	sessionStorage.r1=rBG4;
	sessionStorage.g1=gBG4;
	sessionStorage.b1=bBG4;
	var color='rgb('+rBG4+','+gBG4+','+bBG4+')'
	//console.log(color)
	$('#Canvas1layer1').css('background-color',color)
	var Canvas1layer1=document.getElementById('Canvas1layer1');
	var Canvas1layer1ctx=Canvas1layer1.getContext('2d');
	Canvas1layer1ctx.clearRect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fillStyle=color;
	Canvas1layer1ctx.rect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fill()
})
$('#Color1Button5').click(function(){
	rBG5=palatt[4][0];
	gBG5=palatt[4][1];
	bBG5=palatt[4][2];
	sessionStorage.r1=rBG5;
	sessionStorage.g1=gBG5;
	sessionStorage.b1=bBG5;
	var color='rgb('+rBG5+','+gBG5+','+bBG5+')'
	//console.log(color)
	$('#Canvas1layer1').css('background-color',color)
	
	var Canvas1layer1=document.getElementById('Canvas1layer1');
	var Canvas1layer1ctx=Canvas1layer1.getContext('2d');
	Canvas1layer1ctx.clearRect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fillStyle=color;
	Canvas1layer1ctx.rect(0,0,Canvas1layer1.width,Canvas1layer1.height)
	Canvas1layer1ctx.fill()
})




$('#Color2Button1').click(function(){
	rBG1=palatt[0][0];
	gBG1=palatt[0][1];
	bBG1=palatt[0][2];
	var color='rgb('+rBG1+','+gBG1+','+bBG1+')'
	//console.log(color)
	$('#Canvas2layer1').css('background-color',color)
	var Canvas2layer1=document.getElementById('Canvas2layer1');
	var Canvas2layer1ctx=Canvas2layer1.getContext('2d');
	Canvas2layer1ctx.clearRect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fillStyle=color;
	Canvas2layer1ctx.rect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fill()
})
$('#Color2Button2').click(function(){
	rBG2=palatt[1][0];
	gBG2=palatt[1][1];
	bBG2=palatt[1][2];
	var color='rgb('+rBG2+','+gBG2+','+bBG2+')'
	//console.log(color)
	$('#Canvas2layer1').css('background-color',color)
	var Canvas2layer1=document.getElementById('Canvas2layer1');
	var Canvas2layer1ctx=Canvas2layer1.getContext('2d');
	Canvas2layer1ctx.clearRect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fillStyle=color;
	Canvas2layer1ctx.rect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fill()
})
$('#Color2Button3').click(function(){
	rBG3=palatt[2][0];
	gBG3=palatt[2][1];
	bBG3=palatt[2][2];
	var color='rgb('+rBG3+','+gBG3+','+bBG3+')'
	//console.log(color)
	$('#Canvas2layer1').css('background-color',color)
	var Canvas2layer1=document.getElementById('Canvas2layer1');
	var Canvas2layer1ctx=Canvas2layer1.getContext('2d');
	Canvas2layer1ctx.clearRect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fillStyle=color;
	Canvas2layer1ctx.rect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fill()
})
$('#Color2Button4').click(function(){
	rBG4=palatt[3][0];
	gBG4=palatt[3][1];
	bBG4=palatt[3][2];
	var color='rgb('+rBG4+','+gBG4+','+bBG4+')'
	//console.log(color)
	$('#Canvas2layer1').css('background-color',color)
	var Canvas2layer1=document.getElementById('Canvas2layer1');
	var Canvas2layer1ctx=Canvas2layer1.getContext('2d');
	Canvas2layer1ctx.clearRect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fillStyle=color;
	Canvas2layer1ctx.rect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fill()
})
$('#Color2Button5').click(function(){
	rBG5=palatt[4][0];
	gBG5=palatt[4][1];
	bBG5=palatt[4][2];
	var color='rgb('+rBG5+','+gBG5+','+bBG5+')'
	//console.log(color)
	$('#Canvas2layer1').css('background-color',color)
	var Canvas2layer1=document.getElementById('Canvas2layer1');
	var Canvas2layer1ctx=Canvas2layer1.getContext('2d');
	Canvas2layer1ctx.clearRect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fillStyle=color;
	Canvas2layer1ctx.rect(0,0,Canvas2layer1.width,Canvas2layer1.height)
	Canvas2layer1ctx.fill()
})








$('#Color4Button1').click(function(){
	rBG1=palatt[0][0];
	gBG1=palatt[0][1];
	bBG1=palatt[0][2];
	var color='rgb('+rBG1+','+gBG1+','+bBG1+')'
	//console.log(color)
	$('#Canvas4layer1').css('background-color',color)
	var Canvas4layer1=document.getElementById('Canvas4layer1');
	var Canvas4layer1ctx=Canvas4layer1.getContext('2d');
	Canvas4layer1ctx.clearRect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fillStyle=color;
	Canvas4layer1ctx.rect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fill()
})
$('#Color4Button2').click(function(){
	rBG2=palatt[1][0];
	gBG2=palatt[1][1];
	bBG2=palatt[1][2];
	var color='rgb('+rBG2+','+gBG2+','+bBG2+')'
	//console.log(color)
	$('#Canvas4layer1').css('background-color',color)
	var Canvas4layer1=document.getElementById('Canvas4layer1');
	var Canvas4layer1ctx=Canvas4layer1.getContext('2d');
	Canvas4layer1ctx.clearRect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fillStyle=color;
	Canvas4layer1ctx.rect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fill()
})
$('#Color4Button3').click(function(){
	rBG3=palatt[2][0];
	gBG3=palatt[2][1];
	bBG3=palatt[2][2];
	var color='rgb('+rBG3+','+gBG3+','+bBG3+')'
	//console.log(color)
	$('#Canvas4layer1').css('background-color',color)
	var Canvas4layer1=document.getElementById('Canvas4layer1');
	var Canvas4layer1ctx=Canvas4layer1.getContext('2d');
	Canvas4layer1ctx.clearRect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fillStyle=color;
	Canvas4layer1ctx.rect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fill()
})
$('#Color4Button4').click(function(){
	rBG4=palatt[3][0];
	gBG4=palatt[3][1];
	bBG4=palatt[3][2];
	var color='rgb('+rBG4+','+gBG4+','+bBG4+')'
	//console.log(color)
	$('#Canvas4layer1').css('background-color',color)
	var Canvas4layer1=document.getElementById('Canvas4layer1');
	var Canvas4layer1ctx=Canvas4layer1.getContext('2d');
	Canvas4layer1ctx.clearRect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fillStyle=color;
	Canvas4layer1ctx.rect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fill()
})
$('#Color4Button5').click(function(){
	rBG5=palatt[4][0];
	gBG5=palatt[4][1];
	bBG5=palatt[4][2];
	var color='rgb('+rBG5+','+gBG5+','+bBG5+')'
	//console.log(color)
	$('#Canvas4layer1').css('background-color',color)
	var Canvas4layer1=document.getElementById('Canvas4layer1');
	var Canvas4layer1ctx=Canvas4layer1.getContext('2d');
	Canvas4layer1ctx.clearRect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fillStyle=color;
	Canvas4layer1ctx.rect(0,0,Canvas4layer1.width,Canvas4layer1.height)
	Canvas4layer1ctx.fill()
})





