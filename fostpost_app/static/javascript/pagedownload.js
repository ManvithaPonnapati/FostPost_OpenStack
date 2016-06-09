
var CanvasDown=document.createElement('canvas')
CanvasDown.id="CanvasDown"
var ContextDown=CanvasDown.getContext('2d')
var downloadnow=0;
var ProcessDown=new Processing(CanvasDown,SketchDown)
function downloadcanvas()
{
	console.log(JSON.parse(localStorage["stringsFirst"]))
	downloadnow=1;
	ProcessDown.exit();
	ProcessDown=new Processing(CanvasDown,SketchDown)
}
function SketchDown(processing)
{
	var stringarr1=JSON.parse(localStorage["stringsFirst"])
	var stringarr2=JSON.parse(localStorage['stringsSecond'])
	var rt=(doww/parseInt(sessionStorage.cw))
    var rt1=(dowh/parseInt(sessionStorage.ch))
    console.log(rt,rt1)
	var img1=processing.loadImage(sessionStorage.source)
	var log1=processing.loadImage(sessionStorage.source1)
	console.log(rt,sessionStorage.im1w,sessionStorage.im1h,sessionStorage.im1x,sessionStorage.im1y)
	var im1x=parseInt(rt*sessionStorage.im1x)
	var im1y=parseInt(rt*sessionStorage.im1y)
	var im1w=parseInt(rt*sessionStorage.im1w)
	var im1h=parseInt(rt*sessionStorage.im1h)
	var im2x=parseInt(rt*sessionStorage.logoX)
	var im2y=parseInt(rt*sessionStorage.logoY)
	console.log(sessionStorage.im2x)
	var im2w=parseInt(sessionStorage.im2w)
	var im2h=parseInt(sessionStorage.im2h)
	var t1x=parseInt(rt*sessionStorage.textx)
	var t1y=parseInt(rt*sessionStorage.texty)
	var t2x=parseInt(rt*sessionStorage.text2x)
	var t2y=parseInt(rt*sessionStorage.text2y)
	
	var fs=parseInt(0.08*dowh)
	console.log(fs)
    var fontfamily=sessionStorage.ffamily;
	fontfamily=processing.createFont(fontfamily)
	console.log(fs,fontfamily)
	console.log(fs)
	fs=parseInt(sessionStorage.fontsize)
	
	processing.setup=function()
	{
			CanvasDown.width=doww;
			CanvasDown.height=dowh;
			processing.size(doww,dowh)
			processing.background(sessionStorage.r1,sessionStorage.g1,sessionStorage.b1)
	
	}
	processing.draw=function()
	{		
			processing.background(maincolor[0],maincolor[1],maincolor[2])
			processing.image(img1,im1x,im1y,im1w,im1h)
			processing.image(log1,im2x,im2y,im2w,im2h)
			processing.textAlign(processing.LEFT,processing.TOP)
			processing.fill(text1r,text1g,text1b)
			var temp1y=t1y;
			fs=50;
			processing.textFont(fontfamily,fs)
			processing.fill(text1r,text1g,text1b)
		
			for(i=0;i<stringarr1.length;i++)
			{
				processing.text(stringarr1[i],t1x,temp1y)
				temp1y=temp1y+fs;
			}
			processing.textAlign(processing.LEFT,processing.TOP)
			
			processing.textFont(fontfamily,fs/2)
			var temp2y=t2y;
			
			for(i=0;i<stringarr2.length;i++)
			{
				processing.text(stringarr2[i],t2x,temp2y)
				temp2y=temp2y+fs/2;
			}
			
			if(downloadnow==1)
			{
				var source_img=new Image();
				var target_img=new Image();
				
			    var dataURL = CanvasDown.toDataURL("image/jpg");
			    source_img.src=dataURL;
			    var quality =  80;
				output_format = 'jpg';
				target_img.src = jic.compress(source_img,quality,output_format).src; 
			    var link = document.createElement('a');
			    link.download = "Facebook1200x628.png";
			    link.href =source_img.src;
			    link.click();
			    downloadnow=0;
			}
	
		
	}
}

