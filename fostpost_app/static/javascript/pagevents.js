var palattText=[[]]
var copySession=sessionStorage.source;
$('#Source1').click(function(){
	if(sessionStorage.option==1 && Columns_Splash!=0)
	{
		generateImages()
		}
	if(sessionStorage.option==1 && Columns_Splash==0)
	{
		
		
		$.post('upload.php', {
        url: imagesources1[1]
    }, function (response) {
            // Response div goes here.
           
            sessionStorage.source= response
        
		var im=new Image();
		im.src=response;
		im.onload = function(){
   		maincolor=colorThief.getColor(im);
		palatt=colorThief.getPalette(im);
		};
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
          
        });
        
			
	}
	if(sessionStorage.option==2)
	{
	resetbackground()
	sessionStorage.source= imagesources[1];
	var im=new Image();
	im.src=sessionStorage.source;
	maincolor=colorThief.getColor(im);
	palatt=colorThief.getPalette(im);
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    
	
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==3){
	maincolor[0]=parseInt(palatt[1][0])
	maincolor[1]=parseInt(palatt[1][1])
	maincolor[2]=parseInt(palatt[1][2])
	}
	if(sessionStorage.option==4)
	{
		text1r=palattText[0][0]
		text1g=palattText[0][1]
		text1b=palattText[0][2]
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(1);
		sessionStorage.layout=1;
	}
	if(sessionStorage.option==6 && Columns_Layout!=0)
	{
		Columns_Layout=0
		assignchildren();
	}
	
})
$('#Source2').click(function(){
	if(sessionStorage.option==3){
	maincolor[0]=parseInt(palatt[0][0])
	maincolor[1]=parseInt(palatt[0][1])
	maincolor[2]=parseInt(palatt[0][2])
	}
	if(sessionStorage.option==1)
	{
		
		
		$.post('upload.php', {
        url: imagesources1[2]
    }, function (response) {
            // Response div goes here.
           
            sessionStorage.source= response
        
		var im=new Image();
		im.src=response;
		im.onload = function(){
   		maincolor=colorThief.getColor(im);
		palatt=colorThief.getPalette(im);
		};
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
          
        });
        
			
	}
	if(sessionStorage.option==4)
	{
		text1r=palattText[1][0]
		text1g=palattText[1][1]
		text1b=palattText[1][2]
	}
	if(sessionStorage.option==2)
	{
			resetbackground()
	sessionStorage.source= imagesources[2];
	var im=new Image();
	im.src=sessionStorage.source;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    maincolor=colorThief.getColor(im);
	palatt=colorThief.getPalette(im);

    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(2);
		sessionStorage.layout=2;
	}

})
$('#Source3').click(function(){
	if(sessionStorage.option==3){
	maincolor[0]=parseInt(palatt[2][0])
	maincolor[1]=parseInt(palatt[2][1])
	maincolor[2]=parseInt(palatt[2][2])
	}
	if(sessionStorage.option==1)
	{
		
		
		$.post('upload.php', {
        url: imagesources1[3]
    }, function (response) {
            // Response div goes here.
           
            sessionStorage.source= response
        
		var im=new Image();
		im.src=response;
		im.onload = function(){
   		maincolor=colorThief.getColor(im);
		palatt=colorThief.getPalette(im);
		};
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
          
        });
        
			
	}
	if(sessionStorage.option==4)
	{
		text1r=palattText[2][0]
		text1g=palattText[2][1]
		text1b=palattText[2][2]
	}
	if(sessionStorage.option==2)
	{
			resetbackground()
	sessionStorage.source=imagesources[3];
	var im=new Image();
	im.src=sessionStorage.source;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    maincolor=colorThief.getColor(im);
	palatt=colorThief.getPalette(im);
	
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(3);
		sessionStorage.layout=3;
	}

})
$('#Source4').click(function(){
	if(sessionStorage.option==3){
	maincolor[0]=parseInt(palatt[3][0])
	maincolor[1]=parseInt(palatt[3][0])
	maincolor[2]=parseInt(palatt[3][0])
		}
		if(sessionStorage.option==1)
	{
		
		
		$.post('upload.php', {
        url: imagesources1[4]
    }, function (response) {
            // Response div goes here.
           
            sessionStorage.source= response
        
		var im=new Image();
		im.src=response;
		im.onload = function(){
   		maincolor=colorThief.getColor(im);
		palatt=colorThief.getPalette(im);
		};
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
          
        });
        
			
	}
		if(sessionStorage.option==4)
	{
		text1r=palattText[3][0]
		text1g=palattText[3][1]
		text1b=palattText[3][2]
	}
	if(sessionStorage.option==2)
	{
		resetbackground()
	sessionStorage.source=imagesources[4];
	var im=new Image();
	im.src=sessionStorage.source;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    maincolor=colorThief.getColor(im);
	palatt=colorThief.getPalette(im);
	
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(4);
		sessionStorage.layout=4;
	}

})
$('#Source5').click(function(){
	if(sessionStorage.option==3){
	maincolor[0]=255
	maincolor[1]=255
	maincolor[2]=255
}
if(sessionStorage.option==1)
	{
		
		
		$.post('upload.php', {
        url: imagesources1[5]
    }, function (response) {
            // Response div goes here.
           
            sessionStorage.source= response
        
		var im=new Image();
		im.src=response;
		im.onload = function(){
   		maincolor=colorThief.getColor(im);
		palatt=colorThief.getPalette(im);
		};
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
          
        });
        
			
	}
if(sessionStorage.option==4)
	{
		text1r=palattText[4][0]
		text1g=palattText[4][1]
		text1b=palattText[4][2]
	}
	
if(sessionStorage.option==2)
	{
	resetbackground()
	sessionStorage.source= imagesources[5];
	var im=new Image();
	im.src=sessionStorage.source;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    maincolor=colorThief.getColor(im);
	palatt=colorThief.getPalette(im);
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(5);
		sessionStorage.layout=5
	}
})
$('#Source6').click(function(){
	if(sessionStorage.option==3){
	maincolor[0]=0
	maincolor[1]=0
	maincolor[2]=0
}
if(sessionStorage.option==4)
	{
		text1r=palattText[5][0]
		text1g=palattText[5][1]
		text1b=palattText[5][2]
	}
	if(sessionStorage.option==1 )
	{
		
		generateImages(1);
				
	}
if(sessionStorage.option==2)
	{
	resetbackground()
	sessionStorage.source= imagesources[6];
	var im=new Image();
	im.src=sessionStorage.source;
	sessionStorage.imageH=parseInt(sessionStorage.ch)-30
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
    maincolor=colorThief.getColor(im);
	palatt=colorThief.getPalette(im);
	
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6)
	{
		generateColumns(1);
	}
})
function generateImages(id)
{
	newimages();
	Columns_Splash=1;
	 resetbackground()
  	var myNode = document.getElementById('Source6');
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var myNode = document.getElementById('Source1');
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  	var img = $(document.createElement('img'))
  img.id="Image"+6;
  img.attr('src','svg/downarrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source6');
  var img = $(document.createElement('img'))
  img.id="Image"+1;
  img.attr('src','svg/uparrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source1');

  for(i=2;i<6;i++){
  var idstring1="#Source"+i;
  
  var ids1='Source'+i
  var myNode1 = document.getElementById(ids1);
  while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
  }
  var img1 = $(document.createElement('img'))
  img1.id="Layout"+i;
  img1.attr('src', imagesources1[i]);
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
}
}
function generateColumns(id)
{
	Columns_Layout=1;
	 resetbackground()
  	var myNode = document.getElementById('Source6');
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var myNode = document.getElementById('Source1');
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  	var img = $(document.createElement('img'))
  img.id="Image"+6;
  img.attr('src','svg/downarrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source6');
  var img = $(document.createElement('img'))
  img.id="Image"+1;
  img.attr('src','svg/uparrow.svg');
  img.css('width', 50);
  img.css('height',50);
  img.appendTo('#Source1');

  for(i=2;i<6;i++){
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
function generatebuttoncolors()
{
	
	var btncolor='rgb('+palatt[1][0]+','+palatt[1][1]+','+palatt[1][2]+')'
	if(sessionStorage.option==3){
	$('#Source1').css('background-color',btncolor)
	}
	thisrgb=new rgbcolor(palatt[1][0],palatt[1][1],palatt[1][2])
	temprgb=thisrgb;
	temphsv=RGB2HSV(temprgb);
	temphsv.hue=HueShift(temphsv.hue,180.0);
	temprgb=HSV2RGB(temphsv);
	btncolor='rgb('+temprgb.r+','+temprgb.g+','+temprgb.b+')'
	if(sessionStorage.option==4){
	$('#Source1').css('background-color',btncolor)
	}
	palattText[0]=[temprgb.r,temprgb.g,temprgb.b]
	var btncolor='rgb('+palatt[0][0]+','+palatt[0][1]+','+palatt[0][2]+')'
	if(sessionStorage.option==3){
	$('#Source2').css('background-color',btncolor)
	}
	
	thisrgb=new rgbcolor(palatt[0][0],palatt[0][1],palatt[0][2])
	temprgb=thisrgb;
	temphsv=RGB2HSV(temprgb);
	temphsv.hue=HueShift(temphsv.hue,180.0);
	temprgb=HSV2RGB(temphsv);
	btncolor='rgb('+temprgb.r+','+temprgb.g+','+temprgb.b+')'
	if(sessionStorage.option==4){
	$('#Source2').css('background-color',btncolor)
	}
	palattText[1]=[temprgb.r,temprgb.g,temprgb.b]
	var btncolor='rgb('+palatt[2][0]+','+palatt[2][1]+','+palatt[2][2]+')'
	if(sessionStorage.option==3){
	$('#Source3').css('background-color',btncolor)
	}
	thisrgb=new rgbcolor(palatt[2][0],palatt[2][1],palatt[2][2])
	temprgb=thisrgb;
	temphsv=RGB2HSV(temprgb);
	temphsv.hue=HueShift(temphsv.hue,180.0);
	temprgb=HSV2RGB(temphsv);
	btncolor='rgb('+temprgb.r+','+temprgb.g+','+temprgb.b+')'
	if(sessionStorage.option==4){
	$('#Source3').css('background-color',btncolor)
	}
	palattText[2]=[temprgb.r,temprgb.g,temprgb.b]
	var btncolor='rgb('+palatt[3][0]+','+palatt[3][1]+','+palatt[3][2]+')'
	if(sessionStorage.option==3){
	$('#Source4').css('background-color',btncolor)
	}
	thisrgb=new rgbcolor(palatt[3][0],palatt[3][1],palatt[3][2])
	temprgb=thisrgb;
	temphsv=RGB2HSV(temprgb);
	temphsv.hue=HueShift(temphsv.hue,180.0);
	temprgb=HSV2RGB(temphsv);
	btncolor='rgb('+temprgb.r+','+temprgb.g+','+temprgb.b+')'
	if(sessionStorage.option==4){
	$('#Source4').css('background-color',btncolor)
	}
	palattText[3]=[temprgb.r,temprgb.g,temprgb.b]
	if(sessionStorage.option==3){
	$('#Source5').css('background-color','black')
	}
	if(sessionStorage.option==4){
	$('#Source5').css('background-color','white')
	}
	palattText[4]=[255,255,255]
	if(sessionStorage.option==3){
	$('#Source6').css('background-color','white')
	}
	if(sessionStorage.option==4){
	$('#Source6').css('background-color','black')
	}
	palattText[5]=[0,0,0]
	
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
    h+=s; while (h>=360.0) h-=360.0; while (h<0.0) h+=360.0; return h; 
}

//min max via Hairgami_Master (see comments)
function min3(a,b,c) { 
    return (a<b)?((a<c)?a:c):((b<c)?b:c); 
} 
function max3(a,b,c) { 
    return (a>b)?((a>c)?a:c):((b>c)?b:c); 
}
$('#fbtab').click(function()
{
	Facebook();
})
$('#googtab').click(function()
{
	Google();
})
$('#instatab').click(function()
{
	Instagram();
})
$('#customtab').click(function()
{
	Facebook();
})

function layout(id)
{
	if(id==1){
	console.log(wrapWidths,textlengths)
	wrapWidths[0]=textlengths[0]+30;
	selectors[0][0]=parseInt(sessionStorage.cw)/2-parseInt(wrapWidths[0])/2
	selectors[0][1]=parseInt(sessionStorage.ch)/2-parseInt(fontArray[0])/2
	if(TextArray.length>1){
	wrapWidths[1]=textlengths[1]+30;
	selectors[1][0]=parseInt(sessionStorage.cw)/2-parseInt(wrapWidths[1])/2
	selectors[1][1]=parseInt(sessionStorage.ch)/2+parseInt(fontArray[1])/2
	}
	sessionStorage.source=copySession
	sessionStorage.im1x=0;
	sessionStorage.im1y=0;
	var dummyim=new Image();
	dummyim.src=sessionStorage.source;
	imageW=dummyim.width;
	imageH=dummyim.height;
	sessionStorage.imageW=parseInt(sessionStorage.cw)
	sessionStorage.imageH=parseInt(sessionStorage.cw)*(imageH/imageW)
	while(parseInt(sessionStorage.imageH)<parseInt(sessionStorage.ch))
	{
		sessionStorage.imageH=parseInt(sessionStorage.imageH)*2;
	}
	sessionStorage.logoX=parseInt(sessionStorage.cw)-parseInt(LogoW)-20;
	sessionStorage.logoY=parseInt(sessionStorage.ch)-parseInt(LogoH)-20;
	originalW=imageW;
	originalH=imageH;
	zoomValue=0;
	ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit()
    processingInstance1 = new Processing(adcanvas, sketchProc);
	}
	if(id==2){
	var oldw=0;
	console.log(wrapWidths,textlengths)
	wrapWidths[0]=parseInt(sessionStorage.cw)*0.25-20;
	selectors[0][0]=10
	selectors[0][1]=10
	if(TextArray.length>1){
	wrapWidths[1]=parseInt(sessionStorage.cw)*0.25-20;;
	selectors[1][0]=10
	selectors[1][1]=2*fontArray[1]+selectors[0][3]
	}
	sessionStorage.source=copySession
	sessionStorage.im1x=parseInt(sessionStorage.cw)*0.25;
	var dummyim=new Image();
	dummyim.src=sessionStorage.source;
	imageW=dummyim.width;
	imageH=dummyim.height;
	sessionStorage.im1y=0;
	sessionStorage.imageW=parseInt(sessionStorage.cw)*0.75
	oldw=sessionStorage.imageW;
	sessionStorage.imageH=parseInt(sessionStorage.imageW)*(imageH/imageW)
	
	if(sessionStorage.imageW>oldw)
	{
		sessionStorage.im1x=parseInt(sessionStorage.imageW)-oldw;
	}
	sessionStorage.logoX=10
	sessionStorage.logoY=parseInt(sessionStorage.ch)-parseInt(LogoH)-20;
	zoomValue=0;
	ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit()
    processingInstance1 = new Processing(adcanvas, sketchProc);
	}
	if(id==3){
		var oldw=0;
		sessionStorage.source=copySession
	console.log(wrapWidths,textlengths)
	wrapWidths[0]=parseInt(sessionStorage.cw)*0.25-20;
	selectors[0][0]=parseInt(sessionStorage.cw)*0.75+20
	selectors[0][1]=10
	if(TextArray.length>1){
	wrapWidths[1]=parseInt(sessionStorage.cw)*0.25-20;;
	selectors[1][0]=parseInt(sessionStorage.cw)*0.75+20
	selectors[1][1]=2*fontArray[1]+selectors[0][3]
	}
	sessionStorage.im1x=0;
	sessionStorage.im1y=0;
	sessionStorage.imageW=parseInt(sessionStorage.cw)*0.75
	oldw=sessionStorage.imageW;
	sessionStorage.imageH=parseInt(sessionStorage.imageW)*(imageH/imageW)
	if(sessionStorage.imageW>oldw)
	{
		sessionStorage.im1x=oldw-parseInt(sessionStorage.imageW);
	}
	sessionStorage.logoX=parseInt(sessionStorage.cw)*0.75+20;
	sessionStorage.logoY=parseInt(sessionStorage.ch)-parseInt(LogoH)-20;
	zoomValue=0;
	ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit()
    processingInstance1 = new Processing(adcanvas, sketchProc);
	}
	if(id==4)
	{
	var oldw=0;
	console.log(wrapWidths,textlengths)
	wrapWidths[0]=textlengths[0]+30;
	selectors[0][0]=parseInt(sessionStorage.cw)/2-parseInt(wrapWidths[0])/2
	selectors[0][1]=parseInt(sessionStorage.ch)/2-parseInt(fontArray[0])/2
	if(TextArray.length>1){
	wrapWidths[1]=textlengths[1]+30;
	selectors[1][0]=parseInt(sessionStorage.cw)/2-parseInt(wrapWidths[1])/2
	selectors[1][1]=parseInt(sessionStorage.ch)/2+parseInt(fontArray[1])/2
	}
	sessionStorage.im1x=0;
	sessionStorage.im1y=0;
	sessionStorage.imageW=parseInt(sessionStorage.cw)
	oldw=sessionStorage.imageW;
	sessionStorage.imageH=parseInt(sessionStorage.imageW)*(imageH/imageW)
	
	if(sessionStorage.imageW>oldw)
	{
		sessionStorage.im1x=oldw-parseInt(sessionStorage.imageW);
	}
	sessionStorage.logoX=parseInt(sessionStorage.cw)-parseInt(LogoW)-20;
	sessionStorage.logoY=parseInt(sessionStorage.ch)-parseInt(LogoH)-20;
	blurtheimage(copySession)
	
	}
	if(id==5)
	{
	var oldw=0;
	console.log(wrapWidths,textlengths)
	wrapWidths[0]=textlengths[0]+30;
	selectors[0][0]=parseInt(sessionStorage.cw)/2-parseInt(wrapWidths[0])/2
	selectors[0][1]=parseInt(sessionStorage.ch)/2-parseInt(fontArray[0])/2
	if(TextArray.length>1){
	wrapWidths[1]=textlengths[1]+30;
	selectors[1][0]=parseInt(sessionStorage.cw)/2-parseInt(wrapWidths[1])/2
	selectors[1][1]=parseInt(sessionStorage.ch)/2+parseInt(fontArray[1])/2
	}
	sessionStorage.im1x=0;
	sessionStorage.im1y=0;
	sessionStorage.imageW=parseInt(sessionStorage.cw)
	oldw=sessionStorage.imageW;
	sessionStorage.imageH=parseInt(sessionStorage.imageW)*(imageH/imageW)
	
	if(sessionStorage.imageW>oldw)
	{
		sessionStorage.im1x=oldw-parseInt(sessionStorage.imageW);
	}
	sessionStorage.logoX=parseInt(sessionStorage.cw)-parseInt(LogoW)-20;
	sessionStorage.logoY=parseInt(sessionStorage.ch)-parseInt(LogoH)-20;
	grayscaleimage(copySession)
	}
	
	
}
