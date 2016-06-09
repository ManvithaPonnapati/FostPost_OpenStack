var Columns_Layout=0;
var Columns_Splash=0;
var imagesources1=[];
var layout_id=0;
newimages()
function newimages(){
for(i=0;i<7;i++)
{
	
	imagesources1[i]="https://unsplash.it/500/400?image="+generateRange(1, 1, 800);
	
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


function assignchildren(){
	
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
  img.id="Image"+i;
  img.attr('src', imagesources1[i]);
  img.css('width', 50);
  img.css('height',50);
  img.appendTo(idstring);
  }
  }
  
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
  img1.attr('src', 'adsize.jpg');
  img1.css('width', 50);
  img1.css('height',50);
  
  img1.appendTo(idstring1);
  }
  generatebuttoncolors()
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
  img1.attr('src', 'adsize.jpg');
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
   generatebuttoncolors()
  }
  if(sessionStorage.option==5){
  resetbackground()
  for(i=1;i<7;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('button'))
  img1.id="Download"+i;
  img1.attr('src', 'adsize.jpg');
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
  }
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
  var img1 = $(document.createElement('button'))
  img1.id="Layout"+i;
  img1.attr('src', 'adsize.jpg');
  img1.css('width', 50);
  img1.css('height',50);
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
var Canvas=document.getElementById('adcanvas');
var Context=Canvas.getContext('2d');
Canvas.width=CanvasWidth;
Canvas.height=CanvasHeight;
$('#adcanvas').css('width',CanvasWidth);
$('#adcanvas').css('height',CanvasHeight);

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
var maincolor=[255,255,255];
var palatt=0;
var colorThief = new ColorThief();
var text1r=255;
var text1g=255;
var text1b=255;




var dummy=new Image();
dummy.src=sessionStorage.source


//variables related to image logo width and height
var imageH=sessionStorage.ch;
var imageW=sessionStorage.cw;
var originalW=imageW;
var originalH=imageH
var copyW=imageW;
var copyH=imageH;
var numberoflevels=21;
var countofimages=0;  //number of images you can store
var imagesources=[]; //array of all the image sources
// Beginning of zoom sketch











//All sessionStorage variables
sessionStorage.source="img/placeholderbackground.jpg"
sessionStorage.source1="img/draglogo.png"

sessionStorage.layout=1;
var LogoH=0
var LogoW=0
window.onload = function() {
  var LogoH=parseInt(sessionStorage.ch)*0.25;
var LogoW=(parseInt(dummylogo.width)/parseInt(dummylogo.height))*LogoH
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
var zoomValue=0;
var zoomcanvasWidth=20;
var HandleIm=new Image();
	HandleIm.src='svg/zoomhandle.svg'
var ch=parseInt(sessionStorage.ch)
var counterzoom=generatelevels(20);
var zoomCanvas=document.getElementById('zoombarcanvas')
var zoomctx=zoomCanvas.getContext('2d')
var ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
var onslider=0;
var onplus=0;
var onminus=0

function sketchZoom(processing)
{
	
	var completeLine=processing.loadImage('svg/zoombarplusminus.svg')
	var handle=processing.loadImage('svg/zoomhandle.svg')
	var mousedragY=0;
	var sliderx=0;
	var slidery=ch/2;
	var delta=ch/20;
	var cratio=(zoomCanvas.width)/(zoomCanvas.height)
	zoomCanvas.height=ch;
	zoomCanvas.width=ch*(cratio);
	zoomcanvasWidth=ch*(cratio);
	$('#zoombarcanvas').css('width',zoomcanvasWidth)
	$('#zoombarcanvas').css('height',ch)
	$('#zoombarcanvas').css('background-color','transparent')
	processing.size(zoomcanvasWidth,ch)
	processing.background(0,0)
	var sliderh=50;
	var sliderw=(parseInt(HandleIm.width)/parseInt(HandleIm.height))*50;
	sliderx=(zoomcanvasWidth-sliderw)/2
	slidery=(ch-sliderh)/2
	processing.draw=function()
	{
		processing.size(zoomcanvasWidth,ch)
	    processing.background(0,0)
		processing.image(completeLine,0,0,completeLine.width,ch)
		processing.image(handle,sliderx,slidery,sliderw,sliderh)
	}
	processing.mousePressed=function()
	{
		mousedragY=slidery-processing.mouseY;
		if(processing.mouseX>sliderx && processing.mouseX<sliderx+sliderw && processing.mouseY>slidery && processing.mouseY<slidery+sliderh)
		{
			onslider=1;
			
		}
	}
	processing.mouseDragged=function()
	{
		if(onslider==1)
		{
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
}
function generatelevels(numberoflevels)
{
	var halfx=parseInt(numberoflevels/2)
	var levels=[]
	for(i=0;i<halfx;i++)
	{
		levels[i]=halfx-i;
	}
	levels[halfx]=0;
	for(i=halfx+1;i<numberoflevels;i++)
	{
		levels[i]=halfx-i;
	}
	console.log(levels)
	return levels;
	}