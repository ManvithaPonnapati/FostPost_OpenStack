
var copywidth=0;
var dummycanvas=document.createElement('canvas')
var dummyinstnace=new Processing(dummycanvas,getWidth)
function getWidth(processing)
{
	var fontfamily=getfontfamily()
		sessionStorage.ffamily=fontfamily
		fontfamily=processing.createFont(fontfamily)
	processing.textFont(fontfamily,parseInt(sessionStorage.ch)*0.08)
	var returnval=processing.textWidth("New Line of text")
	copywidth= returnval;
}
sessionStorage.textx=20;
sessionStorage.texty=20;
sessionStorage.text2x=180;
sessionStorage.text2y=180;

sessionStorage.Textlines=0;
sessionStorage.wrapWidth=0.25*parseInt(sessionStorage.cw)
sessionStorage.wrapWidth1=0.25*parseInt(sessionStorage.cw)
sessionStorage.wrapHeight=0;
sessionStorage.wrapHeight1=0
var xim=new Image()
xim.src=sessionStorage.source;

var maincolor=[]
xim.onload=function(){
maincolor=colorThief.getColor(xim);
palatt=colorThief.getPalette(xim);
}
var textdragx=[];
var textdragy=[]
// End of zooooooooooooooooooooooooooooooom 
CanvasWidth=parseInt(0.6*w)
sessionStorage.ch=parseInt((628/1200)*CanvasWidth);
sessionStorage.cw=CanvasWidth;
sessionStorage.imageH=parseInt(sessionStorage.ch)
sessionStorage.imageW=parseInt(sessionStorage.cw)


var dummylogo=new Image()

dummylogo.onload=function()
{
	
	



}
dummylogo.src=sessionStorage.source1;
LogoH=parseInt(sessionStorage.ch)*0.25;
LogoW=LogoH	
sessionStorage.logoX=parseInt(sessionStorage.cw)-LogoW;
sessionStorage.logoY=parseInt(sessionStorage.ch)-LogoH-10;

console.log(LogoH,LogoW)
var processingInstance1=new Processing(adcanvas,sketchProc);


//Adding drop and drag capabilities for uploading image onto the canvas
var dropzone = $('#adcanvas');
 
dropzone.on('dragover', function() {
    //add hover class when drag over
    dropzone.addClass('hover');
    return false;
});
 
dropzone.on('dragleave', function() {
    //remove hover class when drag out
    dropzone.removeClass('hover');
    return false;
});
 
dropzone.on('drop', function(e) {
    //prevent browser from open the file when drop off
    e.stopPropagation();
    e.preventDefault();
    dropzone.removeClass('hover');
 
    //retrieve uploaded files data
    var files = e.originalEvent.dataTransfer.files;
    var f=files[0]
    var imageObj=new Image();
     var reader = new FileReader();

      // Closure to capture the file information.
      var g=""
      reader.onload = (function(theFile) {
        return function(e) {
        	 imageObj.onload = function(){
			        	imageW=imageObj.width;
			        	imageH=imageObj.height;
			        	
			         }
			         if(mouseOverLogo==0)
			        {
			        imageObj.src = event.target.result;
			       
			        maincolor=colorThief.getColor(imageObj);
			        palatt=colorThief.getPalette(imageObj);
			        
			        var yiq = ((parseInt(maincolor[0])*299)+(parseInt(maincolor[1])*587)+(parseInt(maincolor[2])*114))/1000;
					if (yiq >= 128) 
					{
						text2r=0
						text2g=0
						text2b=0
						text1r=0
						text1g=0
						text1b=0
					}
					else
					{
						text1r=255
						text1g=255
						text1b=255
						text2r=255
						text2g=255
						text2b=255
					}
					
					generatebuttoncolors()
					imageW=imageObj.width;
			        imageH=imageObj.height;
			        originalW=imageW
			        originalH=imageH;
			       // console.log(imageW,imageH)
			        sessionStorage.source=imageObj.src;
			        copySession=sessionStorage.source;
			        countofimages=countofimages+1;
			        imagesources[countofimages]=imageObj.src;
			      //  console.log(imagesources)
			        changeoption(1)
			        var strimage="#Image"+countofimages
			        $(strimage).attr('src',imageObj.src)
			        
			        sessionStorage.OimageH=imageH;
			        sessionStorage.OimageW=imageW;
			       
			    	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    				sessionStorage.imageW=parseInt((imageW/imageH)*(sessionStorage.imageH))
    				
			        processingInstance1.exit()
			        processingInstance1 = new Processing(adcanvas, sketchProc);
			        layout(parseInt(sessionStorage.layout))
    				}
    				 if(mouseOverLogo==1)
			        {
			        mouseOverLogo=0;
			        var imObj=new Image()
			        imObj.src = event.target.result;
			        sessionStorage.source1=imObj.src;
			        LogoH=parseInt(sessionStorage.ch)*0.25;
			        LogoW=parseInt(imObj.width)/parseInt(imObj.height);
			        LogoW=LogoW*LogoH;	
			        processingInstance1.exit()
			        processingInstance1 = new Processing(adcanvas, sketchProc);
			       	layout(parseInt(sessionStorage.layout))
    				}
   
             };
        
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
      files=[];
			        
});


		
//clickedon and clickedon1 variables determine if the user clicked on text or subtext
var selectedLineofText=0;
var clickedon=0;
var clickedon1=0;
var selectedLine=0;
var selectedHandle=0;
//Drag vairbales determne where the mouse was pressed and used as an anchor for dropping
var dragx=0;
var dragy=0;
var subdragx=0;
var subdragy=0;
var maindragx=0;
var maindragy=0;
var logodragx=0;
var logodragy=0;

//Flags to determine if the user clicked on main image or logo
var MainImage=0;
var LogoImage=0;


var TextArray=[];
TextArray[0]="New Line of text"
var textlengths=[]
var inputBox = document.getElementById('taglinefield');
inputBox.value=TextArray[0]
inputBox.onkeyup = function(){
//console.log(TextArray,HandlesArray)
	for(i=0;i<HandlesArray.length;i++){
     if(HandlesArray[i]==1)
     {
	 TextArray[i] = inputBox.value;
	 }
	 }
	  
}

$('#taglinefield').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
    if(clickedon1==1)
    {
	 sessionStorage.stringtosend1 = inputBox.value;
	 }
	  if(clickedon==1)
    {
	 sessionStorage.stringtosend = inputBox.value;
	 }
		
    }
});
var addTextbuttonx=30;
var addTextbuttony=30;
var addTextbuttonw=30;
var addTextbuttonh=30;
var addText=0;
var minusTextbuttonx=180;
var minusTextbuttony=30;
var minusTextbuttonw=30;
var minusTextbuttonh=30;
var minusText=0;
var selectors=[[]]
var HandlesArray=[];
HandlesArray[0]=0;
var TextHandles=[];
var fontArray=[];
var wrapWidths=[];
for(i=0;i<TextArray.length;i++)
{
	fontArray[i]=parseInt(sessionStorage.ch)*0.08;
	wrapWidths[i]=copywidth+60;
	//console.log(wrapWidths)
	textdragx[i]=0;
	textdragy[i]=0;
}

for(i=0;i<5;i++)
{
	TextHandles[i]=0;
}
for(l=0;l<HandlesArray.length;l++)
{
	selectors[l][0]=20;
	selectors[l][1]=20;
}
sessionStorage.cw=parseInt(0.6*w);
function sketchProc(processing) {
	    
		processing.size(sessionStorage.cw,parseInt(sessionStorage.ch))
		$('#Canvas1layer3').css('width',sessionStorage.cw);
	    $('#Canvas1layer3').css('height',parseInt(sessionStorage.ch));
	    adcanvas.width=sessionStorage.cw;
	    adcanvas.height=parseInt(sessionStorage.ch);
		var online=processing.loadImage(sessionStorage.source);
	    var online1=processing.loadImage(sessionStorage.source1);
	    
	    var imx=parseInt(sessionStorage.im1x);
		var imy=parseInt(sessionStorage.im1y);
		var imw=sessionStorage.imageW;
		var imh=sessionStorage.imageH;
		var im1x=parseInt(sessionStorage.logoX);
		var im1y=parseInt(sessionStorage.logoY);
		var im1w=LogoW;
	
		//console.log(im1w,imw,im1x)
		var im1h=LogoH;
		var cwprev=sessionStorage.canvaswidth;
		var chprev=sessionStorage.canvasheight;
		var ratio=1;
		imx=ratio*imx;
		imy=ratio*imy;
		imw=ratio*imw;
		imh=ratio*imh;
		
		var dragimx=0;
		var dragimy=0;
		var dragim1x=0;
		var dragim1y=0;
		var dragged=0;
		
		var rx=parseInt(sessionStorage.textx);
		var ry=parseInt(sessionStorage.texty);
		//console.log(rx,ry)
		
		
		var fontfamily=getfontfamily()
		sessionStorage.ffamily=fontfamily
		fontfamily=processing.createFont(fontfamily)
	
	
		var subrx=parseInt(sessionStorage.text2x);
		var subry=parseInt(sessionStorage.text2y);
		var Color1=0;
		var Color2=1;
		var rect_select=10;
		var TextLines=[[]];
		
	   	 online.blend(online,0,0,online.width,online.height,0,0,online.width,online.height,processing.DODGE )

	    processing.image(online,imx,imy,imw,imh)
	    processing.draw=function(){
	    	
	    processing.size(sessionStorage.cw,parseInt(sessionStorage.ch))
		$('#Canvas1layer3').css('width',sessionStorage.cw);
	    $('#Canvas1layer3').css('height',parseInt(sessionStorage.ch));
	    adcanvas.width=sessionStorage.cw;
	    adcanvas.height=parseInt(sessionStorage.ch);
	   
		processing.background(maincolor[0],maincolor[1],maincolor[2])
	     
	    if(facebook==1)
	    {
	    	sessionStorage.FacebookimX=imx;
	    	sessionStorage.FacebookimY=imy
	    	sessionStorage.FacebookimX1=im1x;
			sessionStorage.FacebookimY1=im1y
			sessionStorage.FacebooktX=rx;
			sessionStorage.FacebooktY=ry;
			sessionStorage.FacebooktX1=subrx;
			sessionStorage.FacebooktY1=subry;
	    }
	    if(google==1)
	    {
	    	sessionStorage.GoogleimX=imx;
			sessionStorage.GoogleimY=imy
			sessionStorage.GoogleimX1=im1x;
			sessionStorage.GoogleimY1=im1y
			sessionStorage.GoogletX=rx;
			sessionStorage.GoogletY=ry;
			sessionStorage.GoogletX1=subrx;
			sessionStorage.GoogletY1=subry;
	    }
	    if(instagram==1)
	    {
			sessionStorage.InstagramimX=imx;
			sessionStorage.InstagramimY=imy
			sessionStorage.InstagramimX1=im1x;
			sessionStorage.InstagramimY1=im1y
			sessionStorage.InstagramtX=rx;
			sessionStorage.InstagramtY=ry;
			sessionStorage.InstagramtX1=subrx;
			sessionStorage.InstagramtY1=subry;	    	
	    }
		sessionStorage.im1x=imx;
		sessionStorage.im1y=imy;
		sessionStorage.im1w=imw;
		sessionStorage.im1h=imh;
		sessionStorage.im2x=im1x;
		sessionStorage.im2y=im1y;
		sessionStorage.im2w=im1w;
		sessionStorage.im2h=im1h;
		
		if(zoomValue>0 )
		{
			
			var xw=originalW;
			var xh=originalH;
			var m=(zoomValue)
			for(i=0;i<m;i++)
			{
			 xw=xw*1.1
			//console.log(im1w)
			 xh=xh*1.1
			}
			imw=xw;
			imh=xh;
		}
		if(zoomValue<0)
		{
			var xw=originalW
			var xh=originalH;
			var m=Math.abs(zoomValue)
			for(i=0;i<m;i++)
			{
			 xw=xw/1.1
			//console.log(im1w)
			 xh=xh/1.1
			}
			imw=xw;
			imh=xh;
		}
		
		processing.image(online,imx,imy,imw,imh)
	    processing.image(online1,im1x,im1y,im1w,im1h)
	    processing.fill(0)
	    
	    sessionStorage.logoX=im1x;
	    sessionStorage.logoY=im1y
	    sessionStorage.textx=rx;
	    sessionStorage.texty=ry;
	    sessionStorage.text2x=subrx;
	    sessionStorage.text2y=subry;
	    copywidth=processing.textWidth("New Line of text")
	    
	    	if(processing.mouseX>parseInt(im1x) && processing.mouseX<parseInt(im1x)+parseInt(im1w) && processing.mouseY>parseInt(im1y) && processing.mouseY<parseInt(im1y)+parseInt(im1h))
	    	{
	    		console.log("Logo Here")
	    		mouseOverLogo=1;
	    		
	    	}
	    	
	    	else
	    	{
	    		mouseOverLogo=0;
	    	}
	    for(i=0;i<TextArray.length;i++)
	    {
	       var selectory=selectors[i][1];
	   	   var selectorx=selectors[i][0];
	       var words=TextArray[i].split(" ");
	       
	       var wordlengths=[];
	       processing.textFont(fontfamily,fontArray[i])
	       textlengths[i]=processing.textWidth(TextArray[i])
	       for(j=0;j<words.length;j++)
	       {
	       	 processing.textFont(fontfamily,fontArray[i])
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
			 	if(sum>wrapWidths[i])
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
	     var texttempy=selectory;
	     
	     var stringlengths=[];
	     var copyy=selectory;
	     for(k=0;k<strings.length;k++)
	     {
	     
	     	processing.textAlign(processing.LEFT,processing.TOP)
	     	processing.fill(text1r,text1g,text1b)
	     	processing.textFont(fontfamily,fontArray[i])
	     	processing.text(strings[k],selectorx,texttempy)
	     	stringlengths[k]=processing.textWidth(strings[k]);
	     	texttempy=texttempy+fontArray[i];
	     }
	     
	     var addtoy=(strings.length)*fontArray[i];
	     
	     var selectorw=Math.max.apply(Math,stringlengths);
	     
	        if(HandlesArray[i]==1)
	     {
	     	processing.fill(0,0);
	     	
	     	processing.rect(selectorx,copyy,selectorw,addtoy);
	     	processing.fill(255)
	     	processing.rect(selectorx+selectorw/2,copyy-10,10,10)
	     	processing.rect(selectorx+selectorw/2,copyy+addtoy,10,10)
	     	processing.rect(selectorx-10,copyy+addtoy/2,10,10)
	     	processing.rect(selectorx+selectorw,copyy+addtoy/2,10,10)
	     	processing.rect(selectorx+selectorw,selectory-10,10,10)
	    	processing.rect(selectorx+selectorw,selectory+addtoy,10,10)
	     	     }
	     selectory=selectory+addtoy;
	     selectors[i]=[selectorx,copyy,selectorw,addtoy]
	    }
	   
	    localStorage["TextArray"] = JSON.stringify(TextArray);
		localStorage["ArrayX"]=JSON.stringify(selectors);
		localStorage["fonts"]=JSON.stringify(fontArray);
		localStorage["WrapW"]=JSON.stringify(wrapWidths);
	    }
	   
	    processing.mouseOver=function()
	    {
	    	
	    }
	    processing.mousePressed=function()
	    {
	    	
	    	var mx=processing.mouseX;
	    	var my=processing.mouseY;
	    	subdragx=subrx-processing.mouseX;
	        subdragy=subry-processing.mouseY;
	        dragx=rx-processing.mouseX;
	        dragy=ry-processing.mouseY;
	       
	    	LogoImage=0;
	    	MainImage=0;
	        console.log(im1x,im1y,im1w,im1h)
		
			
	    	for(i=0;i<HandlesArray.length;i++)
	    	{
	    		
	    		HandlesArray[i]=0;
	    		var sx=selectors[i][0];
	    		var sy=selectors[i][1];
	    		var sw=selectors[i][2];
	    		var sh=selectors[i][3];
	    		
	        
	    		if(processing.mouseX>sx && processing.mouseX<sx+sw && processing.mouseY>sy && processing.mouseY<sy+sh)
	    		{
	    			HandlesArray[i]=1;
	    			selectedLineofText=i+1;
	    		
	    			textdragx[i]=sx-processing.mouseX;
	            	textdragy[i]=sy-processing.mouseY;
	    			inputBox.value=TextArray[selectedLineofText-1]
	    		
	    			
	    			MainImage=0;
	    			LogoImage=0;
	    			TextHandles[4]=0;
	    			TextHandles[3]=0;
	    			TextHandles[2]=0;
	    			TextHandles[1]=0;
	    			TextHandles[0]=1;
	    			
	    		}
	    		
	    		if(processing.mouseX>sx+sw/2 && processing.mouseX<sx+sw/2+10 && processing.mouseY>sy-10 && processing.mouseY<sy)
	    		{
	    			HandlesArray[i]=1;
	    			MainImage=0;
	    			LogoImage=0;
	    			TextHandles[4]=0;
	    			TextHandles[3]=0;
	    			TextHandles[2]=0;
	    			TextHandles[1]=1;
	    			TextHandles[0]=0;
	    			
	    		}
	    		if(processing.mouseX>sx+sw/2 && processing.mouseX<sx+sw/2+10 && processing.mouseY>sy+sh && processing.mouseY<sy+sh+10)
	    		{
	    			HandlesArray[i]=1;
	    			MainImage=0;
	    			LogoImage=0;
	    			TextHandles[4]=0;
	    			TextHandles[3]=0;
	    			TextHandles[2]=1;
	    			TextHandles[1]=0;
	    			TextHandles[0]=0;
	    			
	    		}
	    		if(processing.mouseX>sx-10 && processing.mouseX<sx && processing.mouseY>sy+sh/2 && processing.mouseY<sy+sh/2+10)
	    		{
	    			HandlesArray[i]=1;
	    			MainImage=0;
	    			LogoImage=0;
	    			TextHandles[4]=0;
	    			TextHandles[3]=1;
	    			TextHandles[2]=0;
	    			TextHandles[1]=0;
	    			TextHandles[0]=0;
	    			
	    		}
	    		if(processing.mouseX>sx+sw && processing.mouseX<sx+sw+10 && processing.mouseY>sy+sh/2 && processing.mouseY<sy+sh/2+10)
	    		{
	    			HandlesArray[i]=1;
	    			MainImage=0;
	    			LogoImage=0;
	    			
	    			TextHandles[4]=1;
	    			TextHandles[3]=0;
	    			TextHandles[2]=0;
	    			TextHandles[1]=0;
	    			TextHandles[0]=0;
	    			
	    		}
	    		if(processing.mouseX>sx+sw && processing.mouseX<sx+sw+10 && processing.mouseY>sy-10 && processing.mouseY<sy)
	    		{
	    			
	    		minusText=1;
	    		var numberText1=TextArray.length;
	    		TextArray.remove(i)
	    		HandlesArray.remove(i)
	    		}
	    		if(processing.mouseX>sx+sw && processing.mouseX<sx+sw+10 && processing.mouseY>sy+sh && processing.mouseY<sy+sh+10)
	    		{
	    			
	    		addText=1;
	    		var numberText=TextArray.length;
	    		TextArray[numberText]="New Line of text"
	    		HandlesArray[numberText]=0;
	    		selectors[numberText]=[];
	    	
	    		selectors[numberText][0]=40
	    		selectors[numberText][1]=40
	    		wrapWidths[numberText]=copywidth+30;
	    		fontArray[numberText]=parseInt(sessionStorage.ch)*0.08;
	    		textdragx[numberText]=0;
	    		textdragy[numberText]=0;
	    		}
	    		
	    	}
	    	
	      if(mx>imx && mx<imx+imw && my>imy && my<imy+imh &&LogoImage==0)
	    		{
	    			for(i=0;i<HandlesArray.length;i++){
	    		if(HandlesArray[i]==0){
	    			MainImage=1;
	    			LogoImage=0;
	    			maindragx=imx-processing.mouseX;
	    		 	maindragy=imy-processing.mouseY;
	    		 	}
	    		 	else
	    		 	{
	    		 		MainImage=0;
	    		 		LogoImage=0;
	    		 	}
	    		 	}
	    		}
	      if(processing.mouseX>parseInt(im1x) && processing.mouseX<parseInt(im1x)+parseInt(im1w)&& processing.mouseY>parseInt(im1y) && processing.mouseY<parseInt(im1y)+parseInt(im1h) )
	    		{
	    			
	    			for(i=0;i<HandlesArray.length;i++){
	    		if(HandlesArray[i]==0){
	    			MainImage=0;
	    			LogoImage=1;
	    			console.log("Logo")
	    			logodragx=im1x-processing.mouseX;
	    		 	logodragy=im1y-processing.mouseY;
	    		 	}
	    		 	}
	    		}
	    		
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    }
	    processing.mouseDragged=function()
	    {
	    	dragged=1;
	    	
	    	if(TextHandles[1]==1)
	    	{
	    		//console.log("fgdfs")
	    		fontArray[selectedLineofText-1]+=processing.pmouseY-processing.mouseY;
	    		TextHandles[0]=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		
	    	}
	    	if(TextHandles[2]==1)
	    	{
	    		//console.log("fgdfs")
	    		fontArray[selectedLineofText-1]+=processing.mouseY-processing.pmouseY;
	    		TextHandles[0]=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		
	    	}
	    	if(TextHandles[3]==1)
	    	{
	    		
	    		wrapWidths[selectedLineofText-1]+=processing.pmouseX-processing.mouseX;
	    		TextHandles[0]=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		
	    	}
	    	if(TextHandles[4]==1)
	    	{
	    		
	    		wrapWidths[selectedLineofText-1]+=processing.mouseX-processing.pmouseX
	    		//console.log(selectedLineofText)
	    		TextHandles[0]=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		
	    		
	    	}
	    	if(TextHandles[0]==1){
	    		selectors[selectedLineofText-1][0]=textdragx[selectedLineofText-1]+processing.mouseX;
	    		selectors[selectedLineofText-1][1]=textdragy[selectedLineofText-1]+processing.mouseY;
	    		MainImage=0;
	    		LogoImage=0;
	    	}
	    	
	    
	    	if(MainImage==1)
	    	{
	    		imx=maindragx+processing.mouseX;
	    		imy=maindragy+processing.mouseY;
	    		dragged=1;
	    	}
	    	if(LogoImage==1 && MainImage==0)
	    	{
	    		
	    		
	    		im1x=logodragx+processing.mouseX;
	    		im1y=logodragy+processing.mouseY;
	    		dragged=0;
	    		sessionStorage.logoX=im1x;
	    		sessionStorage.logoY=im1y;
	    	}
	    	
	    }
	    processing.mouseReleased=function()
	    {
	    	
	    	if(dragged==1)
	    	{
	    		TextHandles[0]=0;
	    		TextHandles[1]=0;
	    		TextHandles[2]=0;
	    		TextHandles[3]=0;
	    		TextHandles[4]=0;
	    		selectedLineofText=0;
	    		mouseOverLogo=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		
	    		for(i=0;i<HandlesArray.length;i++)
	    		{
	    			TextHandles[i]=0;
	    			HandlesArray[i]=0;
	    		
	    		}
	    		selectedHandle=0;
	    		moverect=0;
	    		dragged=0;
	    		document.body.style.cursor='default';
	    		dragx=0;
	    		dragy=0;
	    		subdragx=0;
	    		subdragy=0;
	    		ontherect=0;
	    		for(i=0;i<TextArray.length;i++)
	    		{
	    			HandlesArray[i]=0;
	    			textdragx[i]=0;
	    			textdragy[i]=0;
	    		}
	    	}
	    	
	    }
	    processing.mouseOut=function()
	    {
	    	
	    	MainImage=0;
	    		LogoImage=0;
	    		selectedLine=0;
	    		selectedHandle=0;
	    		TextHandles[0]=0;
	    		TextHandles[1]=0;
	    		TextHandles[2]=0;
	    		TextHandles[3]=0;
	    		TextHandles[4]=0;
	    		
	    		dragged=0;
	    		document.body.style.cursor='default';
	    		dragx=0;
	    		dragy=0;
	    		subdragx=0;
	    		subdragy=0;
	    }
	    
	    processing.belongs=function(mx,my,rx,ry,rw,rh)
	    {
	    	mx=parseInt(mx)
	    	my=parseInt(my);
	    	rx=parseInt(rx);
	    	ry=parseInt(ry);
	    	rw=parseInt(rw);
	    	rh=parseInt(rh);
	    	if(mx>rx && mx<rx+rw && my>ry && my <ry+rh)
	    	{
	    		return 1;
	    	}
	    	
	    	if(mx>rx+rw && mx<rx+rw+rect_select && my>ry+rh/2-rect_select/2 && my<ry+rh/2+rect_select/2)
	    	{
	    		return 2;
	    	}
	    	if(mx>rx-rect_select/2 && mx<rx-rect_select/2+rect_select && my>ry+rh/2-rect_select/2 && my<ry+rh/2-rect_select/2+rect_select)
	    	{
	    		return 3;
	    	}
	    	if(mx>rx+rw/2-rect_select/2 && mx<rx+rw/2-rect_select/2+rect_select && my>ry-rect_select/2 && my<ry-rect_select/2+rect_select/2)
	    	{
	    		return 4;
	    	}
	    	if(mx>rx+rw/2-rect_select/2 && mx<rx+rw/2-rect_select/2+rect_select && my>ry+rh&& my<ry+rh+rect_select/2)
	    	{
	    		return 5;
	    	}
	    	else
	    	{
	    		return 0
	    	}
	    }
	
}


 function getstrings(words,wordlengths,spacelength,wrap_width)
	    {
	  
		
		 
		 return strings;
	}














//Assisting functions
function getfontfamily()
 	{
 		var fontfamilyx;
 		if(sessionStorage.fontgroup==1)
	{
		 fontfamilyx=("Antic-Regular");
	}
	if(sessionStorage.fontgroup==2)
	{
		fontfamilyx=("Belleza-Regular");
	}
	if(sessionStorage.fontgroup==3)
	{
		 fontfamilyx=("Bitter-Regular");
	}
	if(sessionStorage.fontgroup==4)
	{
		 fontfamilyx=("Asar-Regular");
	}
	
	if(sessionStorage.fontgroup==5)
	{
		 fontfamilyx=("Asap-Regular");
	}
	if(sessionStorage.fontgroup==6)
	{
		 fontfamilyx=("Anaheim-Regular");
	}
	if(sessionStorage.fontgroup==7)
	{
		 fontfamilyx=("Allerta-Regular");
	}
	if(sessionStorage.fontgroup==8)
	{
		 fontfamilyx=("Arvo-Regular");
	}
	if(sessionStorage.fontgroup==9)
	{
		fontfamilyx=("Armata-Regular");
	}
	if(sessionStorage.fontgroup==10)
	{
		fontfamilyx=("Arbutus-Regular");
	}
	if(sessionStorage.fontgroup==11)
	{
		fontfamilyx=("ContrailOne-Regular");
	}
	if(sessionStorage.fontgroup==12)
	{
		fontfamilyx=("Baumans-Regular");
	}
	if(sessionStorage.fontgroup==13)
	{
		fontfamilyx=("Anton");
		
	}
	return fontfamilyx
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
	//console.log(levels)
	return levels;
	}

function Facebook()
{
	CanvasWidth=parseInt(0.6*w)
	sessionStorage.ch=parseInt((628/1200)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	imageW=copyW;
	imageH=copyH;
	sessionStorage.im1x=sessionStorage.FacebookimX;
	sessionStorage.im1y=sessionStorage.FacebookimY;
	sessionStorage.logoX=sessionStorage.FacebookimX1;
	sessionStorage.logoY=sessionStorage.FacebookimY1;
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt(sessionStorage.cw)
    LogoW=80;
    LogoH=80;
    doww=1200;
    dowh=628;
    facebook=1;
    google=0;
    instagram=0;
    custom=0;
    originalW=sessionStorage.imageW;
    originalH=sessionStorage.imageH;
    layout(parseInt(sessionStorage.layout))
    for(i=0;i<TextArray.length;i++)
    {
    	fontArray[i]=parseInt(sessionStorage.ch)*0.08
    }
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
    
	
}
function Google()
{
	
	CanvasWidth=parseInt(0.25*w)
	sessionStorage.ch=parseInt((250/300)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	imageW=sessionStorage.OimageW
	imageH=sessionStorage.OimageH
	LogoW=80;
    LogoH=80;
    facebook=0;
    google=1;
    instagram=0;
    custom=0;
    sessionStorage.im1x=sessionStorage.GoogleimX;
	sessionStorage.im1y=sessionStorage.GoogleimY;
	sessionStorage.logoX=sessionStorage.GoogleimX1;
	sessionStorage.logoY=sessionStorage.GoogleimY1;
	sessionStorage.textx=sessionStorage.GoogletX;
	sessionStorage.texty=sessionStorage.GoogletY;
	sessionStorage.text2x=sessionStorage.GoogletX1;
	sessionStorage.text2y=sessionStorage.GoogletY1;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((imageW/imageH)*(sessionStorage.imageH))
    doww=300;
    dowh=250;
    originalW=sessionStorage.imageW;
    originalH=sessionStorage.imageH;
    for(i=0;i<TextArray.length;i++)
    {
    	fontArray[i]=parseInt(sessionStorage.ch)*0.08
    }
     layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
   
	
	
}
function Instagram()
{
	CanvasWidth=parseInt(0.32*w)
	sessionStorage.ch=parseInt(1*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	imageW=sessionStorage.OimageW
	imageH=sessionStorage.OimageH
	sessionStorage.im1x=sessionStorage.InstagramimX;
	sessionStorage.im1y=sessionStorage.InstagramimY;
	sessionStorage.logoX=sessionStorage.InstagramimX1;
	sessionStorage.logoY=sessionStorage.InstagramimY1;
	sessionStorage.textx=sessionStorage.InstagramtX;
	sessionStorage.texty=sessionStorage.InstagramtY;
	sessionStorage.text2x=sessionStorage.InstagramtX1;
	sessionStorage.text2y=sessionStorage.InstagramtY1;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
	sessionStorage.imageW=parseInt((imageW/imageH)*(sessionStorage.imageH))
	LogoW=80;
    LogoH=80;
    doww=610;
    dowh=610;
    facebook=0;
    google=0;
    instagram=1;
    custom=0;
	originalW=sessionStorage.imageW;
    originalH=sessionStorage.imageH;
        for(i=0;i<TextArray.length;i++)
    {
    	fontArray[i]=parseInt(sessionStorage.ch)*0.08
    }
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
   
	
	
}
function Pinterest()
{
	var widt=document.getElementById('width');
	widt=parseInt(widt.value)
	var heig= document.getElementById('height');
	imageW=sessionStorage.OimageW
	imageH=sessionStorage.OimageH
	heig=parseInt(heig.value)
	//console.log(widt,heig)
	CanvasWidth=parseInt(0.4*w)
	sessionStorage.ch=parseInt((heig/widt)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((imageW/imageH)*(sessionStorage.imageH))
    LogoW=80;
    LogoH=80;
    facebook=0;
    google=0;
    instagram=0;
    custom=1;
    originalW=sessionStorage.imageW;
    originalH=sessionStorage.imageH;
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
    
	
	
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
var canvastemp=document.createElement('canvas')
	canvastemp.setAttribute("id", "canvasT");
	$('#canvasT').css("visibility", "hidden");
function blurtheimage(srcofimage)
{
	var tempim=new Image();
	tempim.src=srcofimage
	var imwtemp=tempim.width;
	var imhtemp=tempim.height;
	
	
	canvastemp.width=imwtemp;
	canvastemp.height=imhtemp;
	var ctxtemp=canvastemp.getContext('2d');
	ctxtemp.drawImage(tempim,0,0,imwtemp,imhtemp)
	stackBlurCanvasRGB(canvastemp, 0, 0, imwtemp, imhtemp, 180 );
	var dataURL = canvastemp.toDataURL("image/jpg");
	sessionStorage.source=dataURL;
	zoomValue=0;
	ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
}
function grayscaleimage(srcofimage)
{
	var tempim=new Image();
	tempim.src=srcofimage
	var imwtemp=tempim.width;
	var imhtemp=tempim.height;
	
	
	canvastemp.width=imwtemp;
	canvastemp.height=imhtemp;
	var ctxtemp=canvastemp.getContext('2d');
	ctxtemp.drawImage(tempim,0,0,imwtemp,imhtemp)
	var imgPixels = ctxtemp.getImageData(0, 0, imwtemp, imhtemp);


for(var y = 0; y < imgPixels.height; y++){
     for(var x = 0; x < imgPixels.width; x++){
          var i = (y * 4) * imgPixels.width + x * 4;
          var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
          imgPixels.data[i] = avg;
          imgPixels.data[i + 1] = avg;
          imgPixels.data[i + 2] = avg;
     }
}

ctxtemp.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

    var dataURL=canvastemp.toDataURL();
	sessionStorage.source=dataURL;
	zoomValue=0;
	ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
}
