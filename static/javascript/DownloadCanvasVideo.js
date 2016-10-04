
var CanvasDown=document.createElement('canvas')
CanvasDown.id="CanvasDown"
var ContextDown=CanvasDown.getContext('2d')
var downloadnow=0;
var ProcessDown=new Processing(CanvasDown,SketchDown)
function downloadcanvas()
{
	
	downloadnow=1;
	var imag1=new Image()
    var srimage1=new Image()
    srimage1.src=sessionStorage.source
    imag1.src = jic.compress(srimage1,80,'jpg').src; 
    sessionStorage.src=imag1.src
	ProcessDown.exit();
	ProcessDown=new Processing(CanvasDown,SketchDown)
}
function SketchDown(processing)
{ 
	processing.hint(processing.ENABLE_NATIVE_FONTS)
	processing.hint(processing.ENABLE_OPENGL_4X_SMOOTH)
	var TextArray_download=JSON.parse(localStorage["TextArray"])
	var selectors_download=JSON.parse(localStorage["ArrayX"])
	var fonts_download=JSON.parse(localStorage["fonts"])
	var wraps_download=JSON.parse(localStorage["WrapW"])
	var rt=(doww/parseInt(sessionStorage.cw))
    var rt1=(dowh/parseInt(sessionStorage.ch))
    console.log(rt,rt1)
	var img1=processing.loadImage(sessionStorage.source)
	var log1=processing.loadImage(sessionStorage.source1)
	var im1x=parseInt(rt*sessionStorage.im1x)
	var im1y=parseInt(rt*sessionStorage.im1y)
	var im1w=parseInt(rt*sessionStorage.im1w)
	var im1h=parseInt(rt*sessionStorage.im1h)
	var im2x=parseInt(rt*sessionStorage.logoX)
	var im2y=parseInt(rt*sessionStorage.logoY)
	console.log(sessionStorage.im2x)
	var im2w=parseInt(rt*sessionStorage.im2w)
	var im2h=parseInt(rt*sessionStorage.im2h)
	var fs=parseInt(0.08*dowh)
	console.log(fs)
    var fontfamily=getfontfamily()
		sessionStorage.ffamily=fontfamily
		
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
			fs=50;
			processing.textFont(fontfamily,fs)
			processing.fill(text1r,text1g,text1b)
			for(i=0;i<TextArray_download.length;i++)
	    	{
	    		var x_cord=rt*selectors_download[i][0]
	    		var y_cord=rt*selectors_download[i][1]
	    		
	    		var words=TextArray_download[i].split(" ");
	            var wordlengths=[];
	            for(j=0;j<words.length;j++)
	       		{
			       	 processing.textFont(fontfamily,rt*fonts_download[i])
			       	 wordlengths[j]=processing.textWidth(words[j]);
	       		}
		       var spacelength=processing.textWidth(" ")
		       var stringholder=[]
	      	   var sum=0;
     		   var strings=[]
			   var dumbstr="";
			   var count=0;
		       var tempword=""
	           for(j=0;j<words.length;j++)
				{
				 	sum=sum+wordlengths[j]+spacelength;
				    dumbstr=tempword+dumbstr+words[j]+" "
				 	if(sum>rt*wraps_download[i])
				 	{
				 	
				 		dumbstr=(dumbstr.trim())
					    dumbstr=(dumbstr.substring(0, dumbstr.lastIndexOf(" ")))
				 		strings[count]=dumbstr;
				 		dumbstr="";
				 		count=count+1
				 		dumbstr=words[j]+" ";
					    sum=wordlengths[j]+spacelength;
				 	}	
			 	
		 		}
		 		strings[count]=dumbstr
	     		var stringlengths=[];
	    	    for(k=0;k<strings.length;k++)
	     		{
	     
		     	processing.textAlign(processing.LEFT,processing.TOP)
		     	processing.fill(text1r,text1g,text1b)
		     	processing.textFont(fontfamily,rt*fonts_download[i])
		     	
		     	processing.text(strings[k],x_cord,y_cord)
		     	stringlengths[k]=processing.textWidth(strings[k]);
		     	y_cord=y_cord+rt*fonts_download[i];
	     		}
	     
			}
			if(downloadnow==1)
			{
				var source_img=new Image();
				var target_img=new Image();
				
			    var dataURL = CanvasDown.toDataURL("image/jpg");
			    source_img.src=dataURL;
			    
			    var link = document.createElement('a');
			    if(facebook==1)
			    {
			    link.download = "Facebook1200x628.png";
			    }
			    if(google==1)
			    {
			    link.download = "Google300x250.png"; 	
			    }
			    if(instagram==1)
			    {
			    link.download="Instagram1080x1080"
			    }
			    if(facebook2==1)
			    {
			    	link.download = "Facebook1200x900.png";
			    }
			    if(facebook3==1)
			    {
			    	link.download = "Carousel600x600.png";
			    }
			    if(pinterest==1)
			    {
			    	link.download="Pinterest230x800"
			    }
			    if(twitter==1)
			    {
			    	link.download="Twitter420x220"
			    }
			    link.href =source_img.src;
			    link.click();
			    downloadnow=0;
			}
	
		
	}
}
fb1200x628()
layout(1)
sessionStorage.ch=vid.videoHeight;
sessionStorage.cw=vid.videoWidth;