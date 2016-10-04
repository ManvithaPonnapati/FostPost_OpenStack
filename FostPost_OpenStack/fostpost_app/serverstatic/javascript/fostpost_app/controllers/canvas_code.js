var static_url='{{STATIC_URL}}'
console.log(static_url)

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
var tem_css_location =DJANGO_STATIC_URL

var processingInstance1=new Processing(adcanvas,sketchProc);
function sketchProc(processing) {
	var background_image=new processing.PImage;
	processing.size(parseInt(sessionStorage.cw),parseInt(sessionStorage.ch))
	processing.background(231,231,211)
	background_image=processing.loadImage(tem_css_location);
	console.log(background_image)
	processing.setup=function()
	{
		processing.size(parseInt(sessionStorage.cw),parseInt(sessionStorage.ch))
	    processing.background(231,231,211)
		background_image=processing.loadImage(tem_css_location);
		console.log(background_image)

	}
	processing.draw=function()
	{
			processing.size(parseInt(sessionStorage.cw),parseInt(sessionStorage.ch))
	    	processing.background(231,231,211)
			processing.image(background_image,0,0,100,100)
	}
}