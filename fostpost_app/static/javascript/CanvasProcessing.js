var addLogo=0;
$('#headline-text').css('background','#00b2e2');
var copywidth=0;
var delText=0;
var delLogo=0;
var delLogoX=0;
var LogoSizeDrag=0
var bodytext=0;
var headlinetext=1
var smalltext=0
var dottedx1=0
var dottedx2=0
var dottedy1=0
var dottedy2=0
var dottedx11=0
var dottedx21=0
var dottedy11=0
var dottedy21=0
var layout3_extra=0
var HandlesArray=[];
var facebook=1;
var google=0;
var instagram=0;
var custom=0;
var google336x280=0
var google728x90=0
var google300x600=0
var google320x100=0
HandlesArray[0]=1;

sessionStorage.layout=0
var lerpFlag=0
var addMore=0
var dummycanvas=document.createElement('canvas')
var dummyinstnace=new Processing(dummycanvas,getWidth)
function getWidth(processing)
{
	var fontfamily=getfontfamily()
		sessionStorage.ffamily=fontfamily
		fontfamily=processing.createFont(fontfamily)
	processing.textFont(fontfamily,parseInt(sessionStorage.ch)*0.1)
	var returnval=processing.textWidth("Drag your own image onto the canvas")
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


var textdragx=[];
var textdragy=[]
// End of zooooooooooooooooooooooooooooooom slecto
CanvasWidth=parseInt(0.6*w)
sessionStorage.cw=CanvasWidth;
sessionStorage.imageHeight=parseInt(sessionStorage.ch)
sessionStorage.imageWidth=parseInt(sessionStorage.cw)

var dummylogo=new Image()

dummylogo.onload=function()
{
	
	



}
dummylogo.src=sessionStorage.source1;
LogoH=parseInt(sessionStorage.ch)*0.25;
LogoW=LogoH	
sessionStorage.logoX=parseInt(sessionStorage.cw)-LogoW;
sessionStorage.logoY=parseInt(sessionStorage.ch)-LogoH-10;
copySession=sessionStorage.source;

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
    var urlforimg=(e.originalEvent.dataTransfer.getData("URL"))
    console.log(urlforimg)
   if(urlforimg==''){
    //retrieve uploaded files data
    var files = e.originalEvent.dataTransfer.files;
    console.log(files)
    var f=files[0]
    var imageObj=new Image();
    var reader = new FileReader();
    var g=""
    var URL=''
      reader.onload = (function(theFile) {
        return function(event) {
        	 imageObj.onload = function(){
			        	imageW=imageObj.width;
			        	imageH=imageObj.height;
			        
			        	imageRatio=imageW/imageH;
			            noImage=1;
			         }
			        
			        
			       
			       	imageObj.src = event.target.result;
			       	URL=imageObj.src
			       	$.post('upload.php', {
        url: URL
    }, function (response) {
    
         objJSON = JSON.parse(response);
        var size=(objJSON["info"]["Content-Length"])
        console.log(size)
        if(size>1000000)
        {
        	sessionStorage.compressionRatio=60;
        }
        if(size>2000000)
        {
        	sessionStorage.compressionRatio=20;
        }
         var temp=hexToRgb(objJSON["Color1"]);
         maincolor[0]=temp.r;
         maincolor[1]=temp.g;
         maincolor[2]=temp.b;
         palatt[0]=[maincolor[0],maincolor[1],maincolor[2]]
         for(var x=2;x<7;x++)
         {
         	var colorString="Color"+x;
         	temp=hexToRgb(objJSON[colorString]);
         	palatt[x-1]=[temp.r,temp.g,temp.b];
         	 
         }
        
		imageObj.src=objJSON["url"];
		
		sessionStorage.source=imageObj.src;
		stopText=0
		var exampimag=new Image();
		exampimag.src=imageObj.src;
		exampimag.onload=function()
		{
		
		assignchildren(sessionStorage.option)
		
		}
		
		            copySession=sessionStorage.source;
			  
					generatebuttoncolors()
					imageW=imageObj.width;
			        imageH=imageObj.height;
			       
			        countofimages=countofimages+1;
			        imagesources[countofimages]=sessionStorage.source;
			        var strimage="#Image"+countofimages
			        $(strimage).attr('src',sessionStorage.source)
			        copyW=imageW;
			        copyH=imageH;
			    	sessionStorage.imageWidth=parseInt(sessionStorage.cw)
    				sessionStorage.imageHeight=(imageH/imageW)*parseInt(sessionStorage.imageWidth)
    				originalW=parseInt(sessionStorage.imageWidth)
			        originalH=parseInt(sessionStorage.imageHeight);
			        var yiq = ((parseInt(palatt[1][0])*299)+(parseInt(palatt[1][1])*587)+(parseInt(palatt[1][2])*114))/1000;
					
					if (yiq >= 128) 
					{
						
						text1r=0
						text1g=0
						text1b=0
					}
					else
					{
						
						text1r=255
						text1g=255
						text1b=255
						
					}
					
    				ZoomProcessing.exit()
   					ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
			        processingInstance1.exit()
			        processingInstance1 = new Processing(adcanvas, sketchProc);
			        layout(1)
		});
			       
				
    				
    				
             };
        
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
      files=[];
}
else
{
    $.post('upload.php', {
        url: (e.originalEvent.dataTransfer.getData("URL"))
    }, function (response) {
            // Response div goes here.
           
              
          objJSON = JSON.parse(response);
         var temp=hexToRgb(objJSON["Color1"]);
         maincolor[0]=temp.r;
         maincolor[1]=temp.g;
         maincolor[2]=temp.b;
         palatt[0]=[maincolor[0],maincolor[1],maincolor[2]]
         for(var x=2;x<6;x++)
         {
         	var colorString="Color"+x;
         	temp=hexToRgb(objJSON[colorString]);
         	palatt[x-1]=[temp.r,temp.g,temp.b];
         }
		
       
		var im=new Image();
		im.src=objJSON["url"];
		sessionStorage.source=im.src;
		 copySession=sessionStorage.source;
		im.onload = function(){
   		
		};
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
          
        });	
}			        
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
var extradragx=0;
var extradragy=0;
var logodragx=0;
var logodragy=0;

//Flags to determine if the user clicked on main image or logo
var MainImage=0;
var LogoImage=0;
sessionStorage.sessionID=1;

var TextArray=[];
TextArray[0]="Drag your own image onto the canvas"
TextArray[1]=''
TextArray[2]=''

var textlengths=[]
var inputBox = document.getElementById('taglinefield');
//inputBox.value=TextArray[0]
$('#taglinefield').keyup(function(){
	if(headlinetext==1)
	{
		$('#headline-text').css('background','#00b2e2');
		$('#small-text').css('background','#ef4223');
		$('#body-text').css('background','#ef4223');
	}
	if(smalltext==1)
	{
		$('#headline-text').css('background','#ef4223');
		$('#small-text').css('background','#00b2e2');
		$('#body-text').css('background','#ef4223');
	}
	if(bodytext==1)
	{
		$('#headline-text').css('background','#ef4223');
		$('#small-text').css('background','#ef4223');
		$('#body-text').css('background','#00b2e2');
	}
var buffertext=this.value;
console.log("IP")
for(var m=0;m<TextArray.length;m++)
{
	if(HandlesArray[m]==1)
	{
		TextArray[m]=buffertext;
	}
}

});



var selectors=[[]]

var TextHandles=[];
var fontArray=[];
var wrapWidths=[];
for(i=0;i<TextArray.length;i++)
{
	fontArray[i]=parseInt(sessionStorage.ch)*0.08;
	wrapWidths[i]=copywidth;
	////console.log(wrapWidths)
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


HandlesArray[1]=0;
selectors[1]=[];
selectors[1][0]=40
selectors[1][1]=40
wrapWidths[1]=copywidth;
textdragx[1]=0;
textdragy[1]=0;
HandlesArray[2]=0;
selectors[2]=[];
selectors[2][0]=50
selectors[2][1]=50
wrapWidths[2]=copywidth;
textdragx[2]=0;
textdragy[2]=0;
fontArray[0]=0.1*parseInt(sessionStorage.ch)
fontArray[1]=0.08*parseInt(sessionStorage.ch)
fontArray[2]=0.05*parseInt(sessionStorage.ch)
function sketchProc(processing) {
	
	
	
	    /* @pjs font="js/Arvo-Regular.ttf"; */
	    /* @pjs font="data:font/truetype,base64, {base 64 encoded data block}"; */         
    
	    var online=new processing.PImage;
	    var online1=new processing.PImage;
	    var delButton=new processing.PImage;
	    var logoResize=new processing.PImage;
	    var sizearrow=new processing.PImage;
		processing.size(parseInt(sessionStorage.cw),parseInt(sessionStorage.ch))
		$('#Canvas1layer3').css('width',parseInt(sessionStorage.cw));
	    $('#Canvas1layer3').css('height',parseInt(sessionStorage.ch));
	    adcanvas.width=parseInt(sessionStorage.cw);
	    adcanvas.height=parseInt(sessionStorage.ch);


	    
	    var imx=parseInt(sessionStorage.im1x);
		var imy=parseInt(sessionStorage.im1y);
		
		var imw=parseInt(sessionStorage.imageWidth);
		var imh=parseInt(sessionStorage.imageHeight);
		////console.log(imw,imh)
		var extrax=imx
		var extray=-imh/2
		var im1x=parseInt(sessionStorage.logoX);
		var im1y=parseInt(sessionStorage.logoY);
		var im1w=LogoW;
	
		////console.log(im1w,imw,im1x)
		var im1h=LogoH;
		var cwprev=sessionStorage.canvaswidth;
		var chprev=sessionStorage.canvasheight;
		var ratio=1;
		
		
		var dragimx=0;
		var dragimy=0;
		var dragim1x=0;
		var dragim1y=0;
		var dragged=0;
		
		var rx=parseInt(sessionStorage.textx);
		var ry=parseInt(sessionStorage.texty);
		////console.log(rx,ry)
		
		
		var fontfamily=getfontfamily()
		sessionStorage.ffamily=fontfamily
		////console.log(fontfamily)
		fontfamily=processing.createFont(sessionStorage.ffamily)
	
	
		var subrx=parseInt(sessionStorage.text2x);
		var subry=parseInt(sessionStorage.text2y);
		var Color1=0;
		var Color2=1;
		var rect_select=10;
		var TextLines=[[]];
		var myFont=processing.createFont("ContrailOne-Regular");
	    var exta=new processing.PImage;
	   	////console.log(sessionStorage.imageHeight)
	   	processing.setup=function(){
	
	    	online=processing.requestImage(sessionStorage.source);
	    	online1=processing.requestImage(sessionStorage.source1);
	    	delButton=processing.requestImage('img/deletetextbox.png')
	    	logoResize=processing.requestImage('svg/logosize.svg')
	    	sizearrow=processing.requestImage('img/sizearrow.png')
	    	extra=processing.requestImage(copySession);
	    }
		
	   
	    processing.draw=function(){
	    	
	    processing.size(sessionStorage.cw,parseInt(sessionStorage.ch))
	    processing.fill(0,14,23)
	    fontfamily=getfontfamily()
		fontfamily=processing.createFont(fontfamily)
		$('#Canvas1layer3').css('width',sessionStorage.cw);
	    $('#Canvas1layer3').css('height',parseInt(sessionStorage.ch));
	    adcanvas.width=sessionStorage.cw;
	    adcanvas.height=parseInt(sessionStorage.ch);
		processing.background(maincolor[0],maincolor[1],maincolor[2])
		sessionStorage.im1x=imx;
		sessionStorage.im1y=imy;
		sessionStorage.im1w=imw;
		sessionStorage.im1h=imh;
		sessionStorage.im2x=im1x;
		sessionStorage.im2y=im1y;
		sessionStorage.im2w=im1w;
		sessionStorage.im2h=im1h;
		sessionStorage.extraX=extrax;
		sessionStorage.extraY=extray;
		if(addLogo==1)
		{
			var getLogo=new processing.getLogoHandle()
		}
		if(zoomValue==0)
		{
			imw=originalW;
			imh=originalH;
		}
		if(zoomValue>0 )
		{
			
			var xw=originalW;
			var xh=originalH;
			var m=Math.abs(zoomValue)
			for(i=0;i<m;i++)
			{
			 xw=xw*1.1
			////console.log(im1w)
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
			////console.log(im1w)
			 xh=xh/1.1
			}
			imw=xw;
			imh=xh;
		}
		if(addMore==1)
		{
			processing.image(extra,extrax,extray,imw,imh)
			processing.image(online,imx,imy,imw,imh)
		}
		if(addMore==0){
		processing.image(online,imx,imy,imw,imh)
		}
		
	   
	    if(sessionStorage.layout==7)
	    {
	    	addMore=0
	    processing.fill(maincolor[0],maincolor[1],maincolor[2], 160)
	    processing.noStroke()
	    processing.rect(imx,imy,imw,imh)
	    }
	     processing.image(online1,im1x,im1y,im1w,im1h)
	     processing.fill(255,0)
	     if(mouseOverLogo==1){
	     processing.rect(im1x-10,im1y-10,im1w+10,im1h+10)
	     }
	   
	     if(delLogoX==1){
	     processing.image(delButton,im1x+im1w,im1y-20,20,20)
	     processing.fill(255)
	     processing.image(logoResize,im1x+im1w,im1y+im1h,20,20)
	     }
	    processing.fill(0)
	    processing.stroke(0)
	    sessionStorage.logoX=im1x;
	    sessionStorage.logoY=im1y
	    sessionStorage.textx=rx;
	    sessionStorage.texty=ry;
	    sessionStorage.text2x=subrx;
	    sessionStorage.text2y=subry;
	    
	    
	    	if(processing.mouseX>parseInt(im1x) && processing.mouseX<parseInt(im1x)+parseInt(im1w) && processing.mouseY>parseInt(im1y) && processing.mouseY<parseInt(im1y)+parseInt(im1h))
	    	{
	    		
	    		mouseOverLogo=1;
	    		
	    	}
	    	
	    	else
	    	{
	    		mouseOverLogo=0;
	    	}
	    var totalarea=0;
	  
	    for(h=0;h<TextArray.length;h++)
	    {
	    	if(wrapWidths[h]>0.95*parseInt(sessionStorage.cw))
	    	{
	    		wrapWidths[h]=0.95*parseInt(sessionStorage.cw)
	    		
	    	}
	    }
	    for(i=0;i<TextArray.length;i++)
	    {
	       var selectory=selectors[i][1];
	   	   var selectorx=selectors[i][0];
	       var words=TextArray[i].split(" ");
	       
	       var wordlengths=[];
	       processing.textFont(fontfamily,fontArray[i])
	       copywidth=processing.textWidth(TextArray[0])+30
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
	     	processing.stroke(233,72,44)
	     	processing.strokeWeight(4)
	     	processing.line(selectorx+selectorw,copyy,selectorx+selectorw,copyy+addtoy)
	     	processing.fill(233,72,44)
	     	processing.image(sizearrow,selectorx+selectorw,copyy+addtoy,20,20)
	     	processing.ellipse(selectorx+selectorw,copyy+addtoy/2,10,10)
	     	processing.image(delButton,selectorx+selectorw,copyy-20,20,20)
	     	     }
	     selectory=selectory+addtoy;
	     selectors[i]=[selectorx,copyy,selectorw,addtoy]
	     totalarea=totalarea+textlengths[i]*fontArray[i];
	    }
	  
	    var prcentarea=(totalarea/(parseInt(sessionStorage.cw)*parseInt(sessionStorage.ch)))*100;
	    prcentarea=prcentarea.toFixed(2);
	    document.getElementById("percenttext").innerHTML=prcentarea+"%"
	    if(prcentarea>20){
	    $('#percenttext').css('border-color','#ef4223')
	    }
	    else
	    {
	    	$('#percenttext').css('border-color','gray')
	    }
	    localStorage["TextArray"] = JSON.stringify(TextArray);
		localStorage["ArrayX"]=JSON.stringify(selectors);
		localStorage["fonts"]=JSON.stringify(fontArray);
		localStorage["WrapW"]=JSON.stringify(wrapWidths);
		 
        
		processing.fill(233,72,44)
		if(lerpFlag==1){
		for(var i=0; i<=50; i++) {

  			var x = processing.lerp(dottedx1, dottedx2, i/50.0);

  			var y = processing.lerp(dottedy1, dottedy2, i/50.0);
			var x1=processing.lerp(dottedx11, dottedx21, i/50.0);
			var y1=processing.lerp(dottedy11, dottedy21, i/50.0);
			processing.point(x1, y1);
			processing.point(x,y)
			processing.textFont(fontfamily,12)
			var htext="("+processing.mouseX+","+parseInt(sessionStorage.cw)+")"
			var vtext="("+processing.mouseY+","+parseInt(sessionStorage.ch)+")"
			processing.text(htext,processing.mouseX,0)
			processing.text(vtext,0,processing.mouseY)
		}
		}
		if(sessionStorage.layout==2)
		{
			    addMore=0
	            wrapWidths[0]=0.75*parseInt(sessionStorage.cw)
	            processing.textFont(fontfamily,fontArray[0])
	            
	            var textlen=processing.textWidth(TextArray[0])
	           
	            var numberlines=Math.ceil(textlen/wrapWidths[0])
				selectors[0][0]=parseInt(sessionStorage.ch)*0.025;
				selectors[0][1]=0.65*parseInt(sessionStorage.ch)+parseInt(sessionStorage.ch)*0.025;
				if(TextArray.length>1){
				for(i=1;i<TextArray.length;i++){
					
						wrapWidths[i]=0.75*parseInt(sessionStorage.cw);
						selectors[i][0]=selectors[0][0]
						selectors[i][1]=selectors[0][1]+numberlines*fontArray[0]
						}
				}
				
			imx=0
			imy=0
			imh=0.65*parseInt(sessionStorage.ch)
			imw=imh*(imageRatio);
			while(imw<parseInt(sessionStorage.cw))
			{
			   imy=imy-imh
			   imh=2*imh
			   imw=imh*(imageRatio);
			}
			LogoH=parseInt(sessionStorage.ch)*0.25;
			LogoW=(LogoRatio)*LogoH
			im1x=parseInt(sessionStorage.cw)-parseInt(sessionStorage.ch)*0.025-LogoW;
			im1y=parseInt(sessionStorage.ch)-parseInt(LogoH)-parseInt(sessionStorage.ch)*0.025;
			originalW=imw
			originalH=imh
			sessionStorage.layout=0
		}
		if(sessionStorage.layout==3)
		{
			
	            wrapWidths[0]=0.8*parseInt(sessionStorage.cw)
	            processing.textFont(fontfamily,fontArray[0])
	            var tlen=processing.textWidth(TextArray[0])
	            var textlen=processing.textWidth(TextArray[0])
	           //  //console.log(textlen,wrapWidths[0])
	            var numberlines=Math.ceil(textlen/wrapWidths[0])
	            if(textlen<wrapWidths[0]){
				selectors[0][0]=((sessionStorage.cw)-textlen)/2
				}
				if(textlen>wrapWidths[0]){
				selectors[0][0]=((sessionStorage.cw)-wrapWidths[0])/2
				}
				selectors[0][1]=parseInt(sessionStorage.ch)/2-(numberlines*fontArray[0])/2
				////console.log(selectors[0][0])
				if(TextArray.length>1){
				for(i=1;i<TextArray.length;i++){
						
						wrapWidths[i]=0.9*parseInt(sessionStorage.cw);
						selectors[i][0]=selectors[0][0]
						selectors[i][1]=selectors[i-1][1]+numberlines*fontArray[i-1];
						}
				}
				
				imx=0;
				imy=0;
				imw=parseInt(sessionStorage.cw)
				imh=parseInt(sessionStorage.cw)*(1/imageRatio)
				while(imh<parseInt(sessionStorage.ch))
			{
			   
			   imw=2*imw
			   imh=imw*(1/imageRatio);
			}
			if(imw>parseInt(sessionStorage.cw))
			{
				imx=imx-(imw-parseInt(sessionStorage.cw))/2
			}
			if(imh>parseInt(sessionStorage.ch))
			{
				imy=imy-(imh-parseInt(sessionStorage.ch))/2
			}
			imy=imy+(0.3)*imh
				LogoH=parseInt(sessionStorage.ch)*0.25;
				LogoW=(LogoRatio)*LogoH
				im1x=parseInt(sessionStorage.cw)-parseInt(LogoW)-parseInt(sessionStorage.ch)*0.025;
				im1y=parseInt(sessionStorage.ch)-parseInt(LogoH)-parseInt(sessionStorage.ch)*0.025;
				originalW=imw
				originalH=imh
				zoomValue=0;
				addMore=1;
				sessionStorage.layout=0
		}
	
		if(sessionStorage.layout==6 || sessionStorage.layout==8 || sessionStorage.layout==9 ||sessionStorage.layout==5 ||sessionStorage.layout==4 || sessionStorage.layout==1)
		{
			    addMore=0
				wrapWidths[0]=0.9*parseInt(sessionStorage.cw)
	            processing.textFont(fontfamily,fontArray[0])
	            var tlen=processing.textWidth(TextArray[0])
	            var textlen=processing.textWidth(TextArray[0])
	           //  //console.log(textlen,wrapWidths[0])
	            var numberlines=Math.ceil(textlen/wrapWidths[0])
	            if(textlen<wrapWidths[0]){
				selectors[0][0]=((sessionStorage.cw)-textlen)/2
				}
				if(textlen>wrapWidths[0]){
				selectors[0][0]=((sessionStorage.cw)-wrapWidths[0])/2
				}
				selectors[0][1]=parseInt(sessionStorage.ch)/2-(numberlines*fontArray[0])/2
				////console.log(selectors[0][0])
				if(TextArray.length>1){
				for(i=1;i<TextArray.length;i++){
						
						wrapWidths[i]=0.9*parseInt(sessionStorage.cw);
						selectors[i][0]=selectors[0][0]
						selectors[i][1]=selectors[i-1][1]+numberlines*fontArray[i-1];
						}
				}
				
				imx=0;
				imy=0;
				imw=parseInt(sessionStorage.cw)
				imh=parseInt(sessionStorage.cw)*(1/imageRatio)
				while(imh<parseInt(sessionStorage.ch))
			{
			   
			   imw=2*imw
			   imh=imw*(1/imageRatio);
			}
			if(imw>parseInt(sessionStorage.cw))
			{
				imx=imx-(imw-parseInt(sessionStorage.cw))/2
			}
			if(imh>parseInt(sessionStorage.ch))
			{
				imy=imy-(imh-parseInt(sessionStorage.ch))/2
			}
				LogoH=parseInt(sessionStorage.ch)*0.25;
				LogoW=(LogoRatio)*LogoH
				im1x=parseInt(sessionStorage.cw)-parseInt(LogoW)-parseInt(sessionStorage.ch)*0.025;
				im1y=parseInt(sessionStorage.ch)-parseInt(LogoH)-parseInt(sessionStorage.ch)*0.025;
				
				originalW=imw
				originalH=imh
				zoomValue=0;
				sessionStorage.layout=0
		}
	    }
//	    processing.keyPressed=function()
//	    {
//	    	
//	    	
//	    	if(processing.keyCode==processing.BACKSPACE){
//	    		TextArray[selectedLineofText-1].substring(0, TextArray[i].length-1);
//	    		}
//	       else if(processing.keyCode==processing.SHIFT || processing.keyCode==processing.CONTROL ||processing.keyCode==processing.ALT|| processing.keyCode==processing.TAB ||processing.keyCode==processing.ENTER)
//	    		{
//	    			TextArray[selectedLineofText-1]=TextArray[selectedLineofText-1]+''
//	    		}
//	    		else
//	    		{
//	    	TextArray[selectedLineofText-1]=TextArray[selectedLineofText-1]+String.fromCharCode(processing.key);
//	    	inputBox.value=TextArray[selectedLineofText-1]
//	    	
//	    }
//	    }
		processing.getLogoHandle=function()
		{
			    
				online1=processing.requestImage(sessionStorage.source1);
				addLogo=0;
				////console.log("here")
				im1h=0.25*parseInt(sessionStorage.ch)
				im1w=(LogoRatio)*im1h
				
				//console.log(im1w)
				im1x=50;
				im1y=50
				
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
	      		console.log(extrax,extray)
			if(addMore==1 && processing.mouseX>extrax && processing.mouseX<extrax+imw && processing.mouseY>extray &&processing.mouseY<imy)
			{
				
				layout3_extra=1;
				LogoSizeDrag=0
	    			MainImage=0;
	    			LogoImage=0;
	    			TextHandles[2]=0;
	    			TextHandles[1]=0;
	    			TextHandles[0]=0;
	    			extradragx=extrax-processing.mouseX;
	    		 	extradragy=extray-processing.mouseY;
			}	
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
	    			
	    			LogoSizeDrag=0
	    			MainImage=0;
	    			LogoImage=0;
	    		
	    			TextHandles[2]=0;
	    			TextHandles[1]=0;
	    			TextHandles[0]=1;
	    			
	    		}
	    		
	    		if(processing.mouseX>sx+sw && processing.mouseX<sx+sw+20 && processing.mouseY>sy+sh && processing.mouseY<sy+sh+20)
	    		{
	    			document.body.style.cursor="nwse-resize"
	    			HandlesArray[i]=1;
	    			MainImage=0;
	    			LogoImage=0;
	    			LogoSizeDrag=0
	    			
	    			TextHandles[2]=0;
	    			TextHandles[1]=1;
	    			TextHandles[0]=0;
	    			
	    			//console.log("Corner Text")
	    			
	    		}
	    		if(processing.mouseX>sx+sw-10 && processing.mouseX<sx+sw+10 && processing.mouseY>sy && processing.mouseY<sy+sh )
	    		{
	    			document.body.style.cursor="w-resize"
	    			HandlesArray[i]=1;
	    			MainImage=0;
	    			LogoImage=0;
	    			LogoSizeDrag=0
	    			
	    			TextHandles[2]=1;
	    			TextHandles[1]=0;
	    			TextHandles[0]=0;
	    			
	    			
	    		}
	    		
	    		if(processing.mouseX>sx+sw && processing.mouseX<sx+sw+20 && processing.mouseY>sy-20 &&processing.mouseY<sy)
	    		{
	    			MainImage=0;
	    			LogoImage=0;
	    			LogoSizeDrag=0
	    			TextHandles[2]=0;
	    			TextHandles[1]=0;
	    			TextHandles[0]=0;
	    			delText=1;
	    			//console.log("Delete")
	    			TextArray[selectedLineofText-1]="";
	    			
	    		}
	    		
	    		
	    	}
	    	
	      if(mx>imx && mx<imx+imw && my>imy && my<imy+imh &&LogoImage==0)
	    		{
	    			for(i=0;i<HandlesArray.length;i++){
	    		if(HandlesArray[i]==0){
	    			MainImage=1;
	    			LogoSizeDrag=0
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
	    			delLogoX=1;
	    			logodragx=im1x-processing.mouseX;
	    		 	logodragy=im1y-processing.mouseY;
	    		 	}
	    		 	}
	    		}
	    	//	//console.log(processing.mouseX,processing.mouseY,parseInt(im1x)+parseInt(im1w),parseInt(im1x)+parseInt(im1w)+20,parseInt(im1y)-20,parseInt(im1y),LogoImage)
	    		if(processing.mouseX>parseInt(im1x)+parseInt(im1w) && processing.mouseX<parseInt(im1x)+parseInt(im1w)+20 && processing.mouseY>parseInt(im1y)-20 && processing.mouseY<parseInt(im1y))
	    		{
	    			delLogoX=0;
	    			online1=""
	    		    sessionStorage.source1=""
	    			im1w=0;
	    			im1h=0;
	    			im1x=-100;
	    			im1y=-200
	    			
	    		}
	    		if(processing.mouseX>parseInt(im1x)+parseInt(im1w) && processing.mouseX<parseInt(im1x)+parseInt(im1w)+20 && processing.mouseY>parseInt(im1y)+parseInt(im1h) &&processing.mouseY<parseInt(im1y)+parseInt(im1h)+20)
	    		{
	    			LogoSizeDrag=1;
	    			MainImage=0
	    		}
	    		
	    }
	    processing.mouseDragged=function()
	    {
	    	   
	    	   
	    		
	    		
	    	var oldWrapWidths=wrapWidths
	    	if(TextHandles[1]==1&&layout3_extra==0)
	    	{
	    		 lerpFlag=0
	    		if(processing.mouseX>processing.pmouseX && processing.mouseY>processing.pmouseY)
	    		{
	    			if(0.08*parseInt(sessionStorage.ch)<fontArray[selectedLineofText-1]<0.25*parseInt(sessionStorage.ch))
	    		{
	    		
	    		fontArray[selectedLineofText-1]+=0.02*fontArray[selectedLineofText-1];
	    		wrapWidths[selectedLineofText-1]+=0.02*wrapWidths[selectedLineofText-1]
	    		////console.log("Increasing")
	    		}
	    		}
	    		if(processing.mouseX<processing.pmouseX && processing.mouseY<processing.pmouseY)
	    		{
	    			if(0.08*parseInt(sessionStorage.ch)<fontArray[selectedLineofText-1]<0.25*parseInt(sessionStorage.ch))
	    		{
	    		fontArray[selectedLineofText-1]-=0.02*fontArray[selectedLineofText-1];
	    		wrapWidths[selectedLineofText-1]-=0.02*wrapWidths[selectedLineofText-1]
	    		
	    		}
	    		}
	    		
	    		TextHandles[0]=0;
	    		TextHandles[2]=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		dragged=1
	    		document.body.style.cursor="nwse-resize"
	    		
	    	}
	    	if(TextHandles[2]==1&&layout3_extra==0)
	    	{ dragged=1;
	    		document.body.style.cursor="w-resize"
	    		////console.log("fgdfs")
	    		wrapWidths[selectedLineofText-1]+=processing.mouseX-processing.pmouseX;
	    		TextHandles[0]=0;
	    		TextHandles[1]=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		
	    	}
	    	if(TextHandles[0]==1&&layout3_extra==0 ){
	    		 dragged=1;
	    		selectors[selectedLineofText-1][0]=textdragx[selectedLineofText-1]+processing.mouseX;
	    		selectors[selectedLineofText-1][1]=textdragy[selectedLineofText-1]+processing.mouseY;
	    		dottedx1=selectors[selectedLineofText-1][0]
	    		dottedx2=selectors[selectedLineofText-1][0]
	    		dottedy11=selectors[selectedLineofText-1][1]
	    		dottedy21=selectors[selectedLineofText-1][1]
	    		dottedy1=0
	    		dottedy2=parseInt(sessionStorage.ch)
	    		dottedx11=0
	    		dottedx21=parseInt(sessionStorage.cw)
	    		lerpFlag=1
	    		MainImage=0;
	    		LogoImage=0;
	    		TextHandles[1]=0;
	    		TextHandles[2]=0;
	    	}
	    	if(LogoSizeDrag==1 &&layout3_extra==0)
	    	{
	    		 dragged=1;
	    	
	    		document.body.style.cursor="nwse-resize"
	    		if(processing.mouseX>processing.pmouseX && processing.mouseY>processing.pmouseY)
	    		{
	    			LogoH=1.1*LogoH
	    			LogoW=LogoRatio*LogoH
	    			im1w=LogoW
	    			im1h=LogoH
	    		}
	    		if(processing.mouseX<processing.pmouseX && processing.mouseY<processing.pmouseY)
	    		{
	    			LogoH=LogoH/1.1;
	    			LogoW=LogoRatio*LogoH
	    			im1w=LogoW
	    			im1h=LogoH
	    		}
	    	}
	    
	    	if(MainImage==1&&layout3_extra==0)
	    	{
	    		 dragged=1;
	    		imx=maindragx+processing.mouseX;
	    		imy=maindragy+processing.mouseY;
	    		dragged=1;
	    		LogoSizeDrag=0;
	    		dottedx1=imx
	    		dottedx2=imx
	    		dottedy11=imy
	    		dottedy21=imy
	    		dottedy1=0
	    		dottedy2=parseInt(sessionStorage.ch)
	    		dottedx11=0
	    		dottedx21=parseInt(sessionStorage.cw)
	    		lerpFlag=1
	    	}
	    	if(layout3_extra==1)
	    	{
	    		 dragged=1;
	    		extrax=extradragx+processing.mouseX;
	    		extray=extradragy+processing.mouseY;
	    		dragged=1;
	    		LogoSizeDrag=0;
	    		dottedx1=imx
	    		dottedx2=imx
	    		dottedy11=imy
	    		dottedy21=imy
	    		dottedy1=0
	    		dottedy2=parseInt(sessionStorage.ch)
	    		dottedx11=0
	    		dottedx21=parseInt(sessionStorage.cw)
	    		lerpFlag=1
	    	}
	    	if(LogoImage==1 && MainImage==0 && layout3_extra==0)
	    	{
	    		 dragged=1;
	    		lerpFlag=1;
	    		im1x=logodragx+processing.mouseX;
	    		im1y=logodragy+processing.mouseY;
	    		dragged=0;
	    		sessionStorage.logoX=im1x;
	    		sessionStorage.logoY=im1y;
	    		dottedx1=im1x
	    		dottedx2=im1x
	    		dottedy11=im1y
	    		dottedy21=im1y
	    		dottedy1=0
	    		dottedy2=parseInt(sessionStorage.ch)
	    		dottedx11=0
	    		dottedx21=parseInt(sessionStorage.cw)
	    		
	    	}
	    	
	    	
	    }
	    processing.mouseReleased=function()
	    {
	    	
	    	if(dragged==1)
	    	{
	    		layout3_extra=0
	    		document.body.style.cursor="default"
	    		delLogoX=0
	    		
	    		
	    		lerpFlag=0
	    		mouseOverLogo=0;
	    		MainImage=0;
	    		LogoImage=0;
	    		TextHandles[0]=0
	    		TextHandles[1]=0
	    		TextHandles[2]=0
	    		selectedLineofText=0
	    		selectedHandle=0;
	    		moverect=0;
	    		dragged=0;
	    		LogoSizeDrag=0
	    		document.body.style.cursor='default';
	    		dragx=0;
	    		dragy=0;
	    		subdragx=0;
	    		subdragy=0;
	    		ontherect=0;
	    		for(i=0;i<TextArray.length;i++)
	    		{
	    			TextHandles[i]=0
	    			HandlesArray[i]=0
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












$('#font1').click(function(){
	sessionStorage.fontgroup=1;
	
})
$('#font2').click(function(){
	sessionStorage.fontgroup=2;
	
})
$('#font3').click(function(){
	sessionStorage.fontgroup=3;
	
})
$('#font4').click(function(){
	sessionStorage.fontgroup=4;
	
})
$('#font5').click(function(){
	sessionStorage.fontgroup=5;
	
})
$('#font6').click(function(){
	sessionStorage.fontgroup=6;
	
})

//Assisting functions
function getfontfamily()
 	{
 		var fontfamilyx;
 		
 		if(sessionStorage.fontgroup==1)
	{
		 fontfamilyx="Antic-Regular";
	
	}
	if(sessionStorage.fontgroup==2)
	{
		fontfamilyx=("Asar-Regular");
	}
	if(sessionStorage.fontgroup==3)
	{
		 fontfamilyx=("Asap-Regular");
	}
	if(sessionStorage.fontgroup==4)
	{
		 fontfamilyx=("Anaheim-Regular");
	}
	
	if(sessionStorage.fontgroup==5)
	{
		 fontfamilyx=("Arvo-Regular");
	}
	if(sessionStorage.fontgroup==6)
	{
		 fontfamilyx=("Armata-Regular");
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
	////console.log(levels)
	return levels;
	}

function Facebook()
{
	

	
	
}
function Google336x280()
{
   
	CanvasWidth=parseInt(0.25*w)
	sessionStorage.ch=parseInt((280/336)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholdergoog_360.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(300/250)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
  
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
  
  
  
   
    
    doww=336;
    dowh=280;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=1
	google728x90=0
	google300x600=0
	google320x100=0

	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
    for(i=0;i<TextArray.length;i++)
    {
    	    fontArray[i]=parseInt(sessionStorage.ch)*0.08
    	
    }
    
        fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function Google728x90()
{
   
	CanvasWidth=parseInt(0.75*w)
	sessionStorage.ch=parseInt((90/728)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholdergoog_360.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(300/250)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
  
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
  
  
   
    
    doww=728;
    dowh=90;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=1
	google300x600=0
	google320x100=0

	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
    for(i=0;i<TextArray.length;i++)
    {
    	    fontArray[i]=parseInt(sessionStorage.ch)*0.08
    	
    }
    
        fontArray[0]=0.25*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.18*parseInt(sessionStorage.ch)
						fontArray[2]=0.10*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function Google300x600()
{
   
	CanvasWidth=parseInt(0.25*w)
	sessionStorage.ch=parseInt((600/300)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholdergoog_360.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(300/250)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
  
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
  
  
   
    
    doww=300;
    dowh=600;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=0
	google300x600=1
	google320x100=0

	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
    for(i=0;i<TextArray.length;i++)
    {
    	    fontArray[i]=parseInt(sessionStorage.ch)*0.08
    	
    }
    
        fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function Google320x100()
{
   
	CanvasWidth=parseInt(0.65*w)
	sessionStorage.ch=parseInt((100/320)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholdergoog_360.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(300/250)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
  
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
  
  
   
    
    doww=320;
    dowh=100;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=1

	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
    for(i=0;i<TextArray.length;i++)
    {
    	    fontArray[i]=parseInt(sessionStorage.ch)*0.08
    	
    }
    
        fontArray[0]=0.25*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.18*parseInt(sessionStorage.ch)
						fontArray[2]=0.1*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function Google300x250()
{
   
	CanvasWidth=parseInt(0.25*w)
	sessionStorage.ch=parseInt((250/300)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholdergoog_360.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(300/250)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
  
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
  
  
   
    
    doww=300;
    dowh=250;
    facebook=0;
    google=1;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0

	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
    for(i=0;i<TextArray.length;i++)
    {
    	    fontArray[i]=parseInt(sessionStorage.ch)*0.08
    	
    }
    
        fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function Twitter420x220()
{

	CanvasWidth=parseInt(0.45*w)
	sessionStorage.ch=parseInt((220/420)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholderTWITTs.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(420/220)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
 
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
   
    
    doww=420;
    dowh=220;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=1
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0
	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
        for(i=0;i<TextArray.length;i++)
    {
    	fontArray[i]=parseInt(sessionStorage.ch)*0.08
    }
        fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function Pinterest230x800()
{
	
	CanvasWidth=parseInt(0.12*w)
	sessionStorage.ch=parseInt((800/230)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholderPINs.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(230/800)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
  
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
   
    
    doww=230;
    dowh=800;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=1
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0
	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
    fontArray[0]=0.04*parseInt(sessionStorage.ch)
    fontArray[1]=0.03*parseInt(sessionStorage.ch)
    fontArray[2]=0.02*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function Instagram1080x1080()
{
	CanvasWidth=parseInt(0.32*w)
	sessionStorage.ch=parseInt(CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	imageW=copyW;
	imageH=copyH;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
    sessionStorage.imageHeight=parseInt(CanvasWidth);
    var dummy=new Image();
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholderinsta.jpg"
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(1)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
    imageRatio=originalW/originalH
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
   
    
    sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    
    
    doww=1080;
    dowh=1080;
    facebook=0;
    google=0;
    instagram=1;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0
	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
        for(i=0;i<TextArray.length;i++)
    {
    	fontArray[i]=parseInt(sessionStorage.ch)*0.08
    }
        fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
}
function Custom()
{
	var widt=document.getElementById('custom-canvas-width');
	widt=parseInt(widt.value)
	var heig= document.getElementById('custom-canvas-height');
	heig=parseInt(heig.value)
	
    doww=widt;
    dowh=heig;
	imageW=sessionStorage.OimageW
	imageH=sessionStorage.OimageH
	CanvasWidth=parseInt(0.75*widt)
	sessionStorage.ch=parseInt((heig/widt)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt((imageW/imageH)*(sessionStorage.imageH))
    LogoW=80;
    LogoH=80;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0
    custom=1;
    originalW=sessionStorage.imageW;
    originalH=sessionStorage.imageH;
    fontArray[0]=0.1*parseInt(sessionStorage.ch)
    fontArray[1]=0.08*parseInt(sessionStorage.ch)
	fontArray[2]=0.05*parseInt(sessionStorage.ch)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
    sessionStorage.layout=1
	
	
}
function fb1200x900()
{
	
	CanvasWidth=parseInt(0.45*w)
	sessionStorage.ch=parseInt((900/1200)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholderbackground.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(1200/900)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
   
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
   
    
    doww=1200;
    dowh=900;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=1
    facebook3=0
    custom=0;
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0
	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
       fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	
sessionStorage.layout=1
	
}
function fb1200x628()
{
	
	CanvasWidth=parseInt(0.45*w)
	sessionStorage.ch=parseInt((628/1200)*CanvasWidth);
	sessionStorage.cw=CanvasWidth;
	LogoH=parseInt(sessionStorage.ch)*0.25;
    LogoW=(LogoRatio)*LogoH;
   sessionStorage.imageHeight=parseInt(sessionStorage.ch)
     if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholderbackground.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    sessionStorage.imageWidth=(1200/628)*parseInt(sessionStorage.imageHeight)
    originalH=parseInt(sessionStorage.imageHeight)
    originalW=parseInt(sessionStorage.imageWidth)
   
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
    sessionStorage.source=copySession;
    copySession=dummy.src;
     sessionStorage.imageWidth=(parseInt(dummy.width)/parseInt(dummy.height))*parseInt(sessionStorage.imageHeight)
    }
   
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0
    doww=1200;
    dowh=628;
   facebook=1;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=0
    custom=0;
	originalW=parseInt(sessionStorage.imageWidth);
    originalH=parseInt(sessionStorage.imageHeight);
        for(i=0;i<TextArray.length;i++)
    {
    	fontArray[i]=parseInt(sessionStorage.ch)*0.08
    }
    imageRatio=parseInt(sessionStorage.imageWidth)/parseInt(sessionStorage.imageHeight)
        fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    layout(parseInt(sessionStorage.layout))
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
function fb600x600()
{

	sessionStorage.cw=parseInt(0.25*w)
	sessionStorage.ch=parseInt(sessionStorage.cw);
    if(noImage==0){
    var dummy=new Image();
    dummy.src="img/placeholderinsta.jpg"
    dummy.onload=function()
    {
    	
    }
    sessionStorage.source=dummy.src;
    copySession=dummy.src;
    
    }
    else
    {     var dummy=new Image();
    	  dummy.src=copySession
          sessionStorage.source=copySession;
          copySession=dummy.src;
   
    }
   
    google336x280=0
	google728x90=0
	google300x600=0
	google320x100=0
    doww=600;
    dowh=600;
    facebook=0;
    google=0;
    instagram=0;
    pinterest=0
    twitter=0
    facebook2=0
    facebook3=1
    custom=0;
        fontArray[0]=0.1*parseInt(sessionStorage.ch)
			    	fontArray[1]=0.08*parseInt(sessionStorage.ch)
						fontArray[2]=0.05*parseInt(sessionStorage.ch)
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	sessionStorage.layout=1
	
	
}
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
var canvastemp=document.createElement('canvas')
	canvastemp.setAttribute("id", "canvasT");
	$('#canvasT').css("visibility", "hidden");
function blurtheimage(srcofimage,blurradius)
{
	var tempim=new Image();
	tempim.src=srcofimage
	var imwtemp=tempim.width;
	var imhtemp=tempim.height;
	
	
	canvastemp.width=imwtemp;
	canvastemp.height=imhtemp;
	var ctxtemp=canvastemp.getContext('2d');
	ctxtemp.drawImage(tempim,0,0,imwtemp,imhtemp)
	stackBlurCanvasRGB(canvastemp, 0, 0, imwtemp, imhtemp, blurradius );
	var dataURL = canvastemp.toDataURL("image/jpg");
	
	sessionStorage.source=dataURL;
	zoomValue=0;
	ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
var imageLoader = document.getElementById('file-upload');
imageLoader.addEventListener('change', handleImage, false);
var imageObj = new Image();
function handleImage(e){
			    var reader = new FileReader();
			    reader.onload = function(event){
			    	
			        
			        imageObj.onload = function(){
			        	LogoW=imageObj.width;
			        	LogoH=imageObj.height;
			        	
			         
                        
    }
     
			        imageObj.src = event.target.result;
			       
			       
			       
			        sessionStorage.source1=imageObj.src;
					
			      
			        LogoH=parseInt(sessionStorage.ch)*0.25;
			        LogoW=parseInt(imageObj.width)/parseInt(imageObj.height)
			        LogoW=LogoW*LogoH
			        LogoRatio=(LogoW/LogoH)
			        sessionStorage.logoX=50
			        sessionStorage.logoY=50
			        	layout(sessionStorage.preserve)
			        processingInstance1.exit()
			        processingInstance1 = new Processing(adcanvas, sketchProc);
			       
			        
			        
			    }
			    reader.readAsDataURL(e.target.files[0]);        
			}

function bodtext()
{
	$('#headline-text').css('background','#ef4223');
		$('#small-text').css('background','#ef4223');
		$('#body-text').css('background','#00b2e2');
	inputBox.value=''
	bodytext=1
	headlinetext=0
	smalltext=0
	$('#headline-text').css('background','#ef4223');
	
	if(TextArray[1]==''){
		console.log("1")
	  $('#taglinefield').attr('placeholder','Type here to add a new body text line');
	}
	else
	{
		inputBox.value=TextArray[1]
	}
	HandlesArray[0]=0
	HandlesArray[1]=1
 	HandlesArray[2]=0
	
}
headlintext()
function headlintext()
{
$('#headline-text').css('background','#00b2e2');
		$('#small-text').css('background','#ef4223');
		$('#body-text').css('background','#ef4223');
	bodytext=0
	headlinetext=1
	smalltext=0
	inputBox.value=TextArray[0];
	HandlesArray[0]=1
	HandlesArray[1]=0
 	HandlesArray[2]=0
	
}
function smaltext()
{
	inputBox.value=''
	bodytext=0
	$('#headline-text').css('background','#ef4223');
		$('#small-text').css('background','#00b2e2');
		$('#body-text').css('background','#ef4223');
	headlinetext=0
	smalltext=1
	
	if(TextArray[2]==''){
		
	  $('#taglinefield').attr('placeholder','Type here to add a new small text line');
	}
	else
	{
		inputBox.value=TextArray[2]
	}
	HandlesArray[0]=0
	HandlesArray[1]=0
 	HandlesArray[2]=1
	
}
function addtextbutton()
{
	
}
function farthestColors(thisr,thisg,thisb)
{
	
}
$('#fb1200x628').css('background','00b2e2');
$('#Google336x280').css('background','00b2e2');

$('#fbtab').click(function(){
	$('#fbtab').css('background','#00b2e2');
	$('#customtab').css('background','white');
	$('#instatab').css('background','white');
	$('#pintab').css('background','white');
	$('#twittertab').css('background','white');
	$('#googleTab').css('background','white');
})
$('#googleTab').click(function(){
	$('#googleTab').css('background','#00b2e2');
	$('#customtab').css('background','white');
	$('#instatab').css('background','white');
	$('#pintab').css('background','white');
	$('#twittertab').css('background','white');
	$('#fbtab').css('background','white');
	
})
$('#twittertab').click(function(){
	$('#twittertab').css('background','#00b2e2');
	$('#customtab').css('background','white');
	$('#instatab').css('background','white');
	$('#pintab').css('background','white');
	$('#fbtab').css('background','white');
	$('#googleTab').css('background','white');
})
$('#pintab').click(function(){
$('#customtab').css('background','white');
	$('#instatab').css('background','white');
	$('#pintab').css('background','#00b2e2');
	$('#twittertab').css('background','white');
	$('#fbtab').css('background','white');
	$('#googleTab').css('background','white');})
$('#instatab').click(function(){
	$('#customtab').css('background','white');
	$('#instatab').css('background','#00b2e2');
	$('#pintab').css('background','white');
	$('#twittertab').css('background','white');
	$('#fbtab').css('background','white');
	$('#googleTab').css('background','white');
})
$('#customtab').click(function(){
	$('#customtab').css('background','#00b2e2');
	$('#instatab').css('background','white');
	$('#pintab').css('background','white');
	$('#twittertab').css('background','white');
	$('#fbtab').css('background','white');
	$('#googleTab').css('background','white');
	
	
})