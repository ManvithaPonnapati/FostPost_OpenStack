var objJSON="";
var Columns_Layout=0;
var Columns_Splash=0;
var noImage=0;
var imagesources1=[];
var Gradient_Image=new Image();
var layout_id=0;
var unsplashdrag=0
newimages()
$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});
function newimages(){

	for(i=0;i<7;i++)
{
	
	imagesources1[i]="https://unsplash.it/1600/900?image="+generateRange(1, 1, 400);
	
}
}
function generateRange(pCount, pMin, pMax) {
    min = pMin < pMax ? pMin : pMax;
    max = pMax > pMin ? pMax : pMin;
    var resultArr = [], randNumber;
    while ( pCount > 0) {
        randNumber = Math.round(min + Math.random() * (max - min));
        if (resultArr.indexOf(randNumber) == -1) {
            resultArr.push(randNumber);
            pCount--;
        }
    }
    return resultArr;
}
var doww=1200;
var dowh=628;
sessionStorage.option=1;
var imagesources=[];
for(i=0;i<7;i++)
{
	imagesources[i]="adsize.jpg"
}
assignchildren();
function changeoption(id)
{
	console.log(id)
	sessionStorage.option=id;
	assignchildren();
}
function resetbackground()
{
	$('#Source1').css('background-color','white')
	$('#Source2').css('background-color','white')
	$('#Source3').css('background-color','white')
	$('#Source4').css('background-color','white')
	$('#Source5').css('background-color','white')
	$('#Source6').css('background-color','white')
}

//Assign Children - Assign the sources of the divs in the second nav bar based on the option sleected on the first nav bar
function assignchildren(){
 //If Find Images is selected
 //#source6 Should have a down arrow 
  if(sessionStorage.option==1){
  	resetbackground()
  	var myNode = document.getElementById('Source6');
  	while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  	}
  	var img = $(document.createElement('img'))
  img.id="Image"+6;
  img.attr('src','svg/downarrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source6');
  for(i=1;i<6;i++){
  var idstring="#Source"+i;
  var ids='Source'+i
  var myNode = document.getElementById(ids);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var img = $(document.createElement('img'))
  var dmimg=new Image();
  img.id="Image"+i;
  dmimg.src=imagesources1[i]
  img.src=imagesources1[i]
  img.attr('src',img.src)
  img.src=dmimg.src;
   img.attr('src',dmimg.src)
  img.css('width', 50);
  img.css('height',50);
  img.appendTo(idstring);
  }
  }
  //End of populating the Find Images section
  
  
  //Begin populating Save images - Leave blank 
  if(sessionStorage.option==2){
  resetbackground()
  for(i=1;i<7;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('img'))
  img1.id="Save"+i;
  img1.attr('src', imagesources[i]);
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
  }
  if(sessionStorage.option==3){
  
  for(i=1;i<7;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('div'))
  img1.id="Bcolor"+i;
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
    console.log(palatt[1])
 	var btncolor='rgb('+palatt[1][0]+','+palatt[1][1]+','+palatt[1][2]+')'
	$('#Source1').css('background-color',btncolor)
	btncolor='rgb('+palatt[0][0]+','+palatt[0][1]+','+palatt[0][2]+')'
	$('#Source2').css('background-color',btncolor)
	btncolor='rgb('+palatt[2][0]+','+palatt[2][1]+','+palatt[2][2]+')'
	$('#Source3').css('background-color',btncolor)
	btncolor='rgb('+palatt[3][0]+','+palatt[3][1]+','+palatt[3][2]+')'
	$('#Source4').css('background-color',btncolor)
	$('#Source5').css('background-color','black')
	$('#Source6').css('background-color','white')
  }
  if(sessionStorage.option==4){
  resetbackground()
  for(i=1;i<7;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('div'))
  img1.id="Tcolor"+i;
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
    for(var m=0;m<4;m++){
    var colorx=new rgbcolor(palatt[m][0],palatt[m][1],palatt[m][2])
    temphsv=RGB2HSV(colorx);
	temphsv.hue=HueShift(temphsv.hue,180.0);
	temprgb=HSV2RGB(temphsv);
	palattText[m]=[temprgb.r,temprgb.g,temprgb.b];
	var source_index=m+1;
	var str_index='#Source'+source_index;
	$(str_index).css('background-color','rgb('+palattText[m][0]+','+palattText[m][1]+','+palattText[m][2]+')')

    }
	$('#Source5').css('background-color','black')
	palattText[4]=[0,0,0]
	$('#Source6').css('background-color','white')
	palattText[5]=[255,255,255]
  }
  
  if(sessionStorage.option==6){
  resetbackground()
  	var myNode = document.getElementById('Source6');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  	var img = $(document.createElement('img'))
  img.id="Image"+6;
  img.attr('src','svg/downarrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source6');
  for(i=1;i<6;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }

  var img1 = $(document.createElement('img'))
  img1.id="Save"+i
  var img1id="svg/layout_"+i+".svg";
  img1.attr('src', img1id);
  img1.appendTo(idstring1);
  }
  }
  }







































//Intialaization of CANVAS


var mouseOverLogo=0;
var w=$(window).width();
var h=$(window).height();
var CanvasWidth=parseInt(0.6*w)
var CanvasHeight=parseInt((628/1200)*CanvasWidth)
var Canvas=document.getElementById('can');
var adcanvas=document.getElementById('can');
var Context=Canvas.getContext('2d');
Canvas.width=CanvasWidth;
Canvas.height=CanvasHeight;
$('#can').css('width',CanvasWidth);
$('#can').css('height',CanvasHeight);

sessionStorage.ch=CanvasHeight;
sessionStorage.cw=CanvasWidth;




//Variables for download canvas width and height initial
var doww=1200;
var dowh=628;
var facebook=1;
var google=0;
var instagram=0;
var custom=0;



//Color Variables
var maincolor=[0,0,0];
var palatt=[[]];
palatt[0]=[99,101,54]
palatt[1]=[188,158,107]
palatt[2]=[114,94,69]
palatt[3]=[143,139,59]
palatt[4]=[179,117,53]
var text1r=0;
var text1g=0;
var text1b=0;


//All sessionStorage variables
sessionStorage.source="img/placeholderbackground.jpg"
sessionStorage.source1=""
var imageH=0
var imageW=0
var originalW=0;
var originalH=0;
var dummy=new Image();
dummy.src=sessionStorage.source
dummy.onload=function()
{
	
	sessionStorage.imageWidth=dummy.width
	sessionStorage.imageHeight=dummy.height
	imageH=parseInt(sessionStorage.imageHeight)
	imageW=parseInt(sessionStorage.imageWidth)
	originalW=imageW;
	originalH=imageH;
}

var imageRatio=0;
//variables related to image logo width and height

var copyW=imageW;
var copyH=imageH;
var numberoflevels=41;
var countofimages=0;  //number of images you can store
var imagesources=[]; //array of all the image sources
// Beginning of zoom sketch
imageRatio=imageW/imageH




sessionStorage.layout=1;
var LogoH=0
var LogoW=0
var LogoRatio=1
window.onload = function() {
  var LogoH=parseInt(sessionStorage.ch)*0.25;
var LogoW=(parseInt(dummylogo.width)/parseInt(dummylogo.height))*LogoH
LogoRatio=parseInt(dummylogo.width)/parseInt(dummylogo.height)
};
sessionStorage.im1x=0
sessionStorage.im1y=0

sessionStorage.FacebookimX=0;
sessionStorage.FacebookimY=0
sessionStorage.FacebookimX1=200;
sessionStorage.FacebookimY1=200
sessionStorage.FacebooktX=20;
sessionStorage.FacebooktY=20;
sessionStorage.FacebooktX1=100;
sessionStorage.FacebooktY1=100;
sessionStorage.GoogleimX=20;
sessionStorage.GoogleimY=200
sessionStorage.GoogleimX1=200;
sessionStorage.GoogleimY1=200
sessionStorage.GoogletX=20;
sessionStorage.GoogletY=20;
sessionStorage.GoogletX1=100;
sessionStorage.GoogletY1=100;
sessionStorage.InstagramimX=20;
sessionStorage.InstagramimY=200
sessionStorage.InstagramimX1=200;
sessionStorage.InstagramimY1=200
sessionStorage.InstagramtX=20;
sessionStorage.InstagramtY=20;
sessionStorage.InstagramtX1=100;
sessionStorage.InstagramtY1=100;


sessionStorage.filter=0;


console.log("Page Initalization Successful")
var dmcomplete=new Image()

dmcomplete.src='svg/zoombarplusminus.svg'

dmcomplete.onload=function() 
{
	
}
var handledm=new Image()
handledm.src='svg/zoomhandle.svg'
handledm.onload=function()
{
	
}

var zoomValue=0;
var numberoflevels=20;
var zoomcanvasWidth=14;
var onslider=0;
var onplus=0;
var onminus=0
var zoomCanvas=document.getElementById('zoombarcanvas')
var zoomctx=zoomCanvas.getContext('2d')
var ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
var ch=parseInt(sessionStorage.ch)
 sessionStorage.slidery=ch/2
function sketchZoom(processing)
{
	var counterzoom=generatelevels(numberoflevels);
	var completeLine=processing.loadImage('svg/zoombarplusminus.svg')
	var handle=processing.loadImage('svg/newzoombar-03.svg')
	var ch=parseInt(sessionStorage.ch)
	processing.size(ch*35/400,ch)
	processing.background(0,0)
	var mousedragY=0;
	var sliderx=0;
	var slidery=parseIn(sessionStorage.slidery);
	var delta=ch/20;
	zoomCanvas.height=ch;
	zoomCanvas.width=ch*35/400;
	$('#zoombarcanvas').css('width',ch*35/400)
	$('#zoombarcanvas').css('height',ch)
	$('#zoombarcanvas').css('background-color','transparent')
	zoomcanvasWidth=ch*(35/400);
	var sliderh=40;
	var sliderw=(25/71)*40;
	var plusheight=(0.35)*ch;
	sliderx=((zoomcanvasWidth-sliderw)/2)
	slidery=((ch-sliderh)/2+20)
	console.log(sliderx,slidery,sliderw,sliderh,ch)
	processing.draw=function()
	{
		processing.size(zoomcanvasWidth,ch)
	    processing.background(0,0)
		processing.image(completeLine,0,0,zoomcanvasWidth,ch)
		sessionStorage.slidery=slidery
		processing.image(handle,sliderx,slidery,sliderw,sliderh)
	}
	processing.mousePressed=function()
	{
		mousedragY=slidery-processing.mouseY;
		if(processing.mouseX>parseInt(sliderx) && processing.mouseX<parseInt(sliderx)+parseInt(sliderw) && processing.mouseY> parseInt(slidery) && processing.mouseY<parseInt(slidery)+parseInt(sliderh))
		{
			onslider=1;
			zoomValue=0;
		}
	}
	processing.mouseDragged=function()
	{
		
		if(onslider==1)
		{
			console.log("On Slider")
			slidery=mousedragY+processing.mouseY
			for(i=0;i<numberoflevels;i++)
			{
				if(slidery>i*delta && slidery<(i+1)*delta)
				zoomValue=counterzoom[i]
				sessionStorage.zoomvar=zoomValue;
				console.log(zoomValue)
			}
		}
	}
	processing.mouseReleased=function()
	{
		onslider=0;
	}
	processing.mouseOut=function()
	{
		onslider=0
	}
}
function generatelevels(numberoflevels)
{
	var halfx=parseInt(numberoflevels/2)
	var levels=[]
	for(i=0;i<halfx-1;i++)
	{
		levels[i]=halfx-i;
	}
	levels[halfx-1]=0
	for(i=halfx;i<numberoflevels;i++)
	{
		levels[i]=halfx-i;
	}
	console.log(levels)
	return levels;
	}

function rgbcolor(r,g,b)
{
	this.r=r || 255;
	this.g=g || 34;
	this.b=b || 21;
}
function RGB2HSV(rgb) {
    hsv = new Object();
    max=max3(rgb.r,rgb.g,rgb.b);
    dif=max-min3(rgb.r,rgb.g,rgb.b);
    hsv.saturation=(max==0.0)?0:(100*dif/max);
    if (hsv.saturation==0) hsv.hue=0;
    else if (rgb.r==max) hsv.hue=60.0*(rgb.g-rgb.b)/dif;
    else if (rgb.g==max) hsv.hue=120.0+60.0*(rgb.b-rgb.r)/dif;
    else if (rgb.b==max) hsv.hue=240.0+60.0*(rgb.r-rgb.g)/dif;
    if (hsv.hue<0.0) hsv.hue+=360.0;
    hsv.value=Math.round(max*100/255);
    hsv.hue=Math.round(hsv.hue);
    hsv.saturation=Math.round(hsv.saturation);
    return hsv;
}

// RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
// which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
function HSV2RGB(hsv) {
    var rgb=new Object();
    if (hsv.saturation==0) {
        rgb.r=rgb.g=rgb.b=Math.round(hsv.value*2.55);
    } else {
        hsv.hue/=60;
        hsv.saturation/=100;
        hsv.value/=100;
        i=Math.floor(hsv.hue);
        f=hsv.hue-i;
        p=hsv.value*(1-hsv.saturation);
        q=hsv.value*(1-hsv.saturation*f);
        t=hsv.value*(1-hsv.saturation*(1-f));
        switch(i) {
        case 0: rgb.r=hsv.value; rgb.g=t; rgb.b=p; break;
        case 1: rgb.r=q; rgb.g=hsv.value; rgb.b=p; break;
        case 2: rgb.r=p; rgb.g=hsv.value; rgb.b=t; break;
        case 3: rgb.r=p; rgb.g=q; rgb.b=hsv.value; break;
        case 4: rgb.r=t; rgb.g=p; rgb.b=hsv.value; break;
        default: rgb.r=hsv.value; rgb.g=p; rgb.b=q;
        }
        rgb.r=Math.round(rgb.r*255);
        rgb.g=Math.round(rgb.g*255);
        rgb.b=Math.round(rgb.b*255);
    }
    return rgb;
}

//Adding HueShift via Jacob (see comments)
function HueShift(h,s) { 
    h+=s; while (h>=180.0) h-=180.0; while (h<0.0) h+=180.0; return h; 
}

//min max via Hairgami_Master (see comments)
function min3(a,b,c) { 
    return (a<b)?((a<c)?a:c):((b<c)?b:c); 
} 
function max3(a,b,c) { 
    return (a>b)?((a>c)?a:c):((b>c)?b:c); 
}
document.getElementById('custom-canvas-height').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      Custom()
      return false;
    }
  }
document.getElementById('downloadClick').onclick=function(event)
{
	event.preventDefault()
	event.stopPropagation()
	resetbackground()
	downloadcanvas()
	
}
function drag(ev,id) {
	unsplashdrag=1
    event.dataTransfer.setData("URL", imagesources1[id])
}