var Layout_Gradient=0 ;
sessionStorage.textDummy="Drag your own image onto the canvas";
var GradientCanvas=document.createElement('canvas');
var GradientInstance=new Processing(GradientCanvas,sketchGradient);
var textlen=0
sessionStorage.fontsize=0
var dummycanvas=document.createElement('canvas')
var dummyinstnace=new Processing(dummycanvas,getWidth)
function getWidth(processing)
{
	
	processing.textFont("Arial",parseInt(sessionStorage.fontsize))
	var returnval=processing.textWidth(sessionStorage.textDummy)
	textlen= returnval+30;
}
function layout(id)
{
	if(id==1){
	
		sessionStorage.source=copySession
		sessionStorage.layout=1
	sessionStorage.preserve=1
			ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit()
    processingInstance1 = new Processing(adcanvas, sketchProc);
	
	}
	if(id==2){
		sessionStorage.preserve=2
			sessionStorage.source=copySession
			ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit()
    processingInstance1 = new Processing(adcanvas, sketchProc);
	sessionStorage.layout=2
	}
	if(id==3){
		
		//Control the background image -Create dummy variables for x and y for the background image as another layer.
		sessionStorage.source=copySession
			ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit()
    processingInstance1 = new Processing(adcanvas, sketchProc);
		sessionStorage.preserve=3
		sessionStorage.layout=3
		blurtheimage(copySession,180)
	}
	if(id==4)
	{
		sessionStorage.source=copySession
	sessionStorage.preserve=4
	blurtheimage(copySession,180)
	sessionStorage.layout=4
	}
	if(id==5)
	{
		sessionStorage.source=copySession
	sessionStorage.preserve=5
	grayscale()
	sessionStorage.layout=5
	}
	if(id==6)
	{
		sessionStorage.source=copySession
	    Layout_Gradient=1;
		sessionStorage.preserve=6
		GradientInstance.exit();
		GradientInstance=new Processing(GradientCanvas,sketchGradient);
		sessionStorage.layout=6
	}
	if(id==7)
	{
		sessionStorage.source=copySession;
		sessionStorage.preserve=7
    ZoomProcessing.exit()
    ZoomProcessing=new Processing(zoomCanvas,sketchZoom)
	processingInstance1.exit()
    processingInstance1 = new Processing(adcanvas, sketchProc);
	}
	if(id==8)
	{
		sessionStorage.source=copySession
	sessionStorage.preserve=8
	blurtheimage(copySession,15)
	//commenting the function for blur using web workers.
	//loadDemo(sessionStorage.source)
	sessionStorage.layout=8
	}
	if(id==9)
	{
		sessionStorage.source=copySession
	sessionStorage.preserve=9
	blurtheimage(copySession,40)
	sessionStorage.layout=9
	}
}


// Canvas for Itunes Gradient Image

function sketchGradient(processing)
{
	processing.size(parseInt(sessionStorage.cw),parseInt(sessionStorage.ch));
	var color1=new processing.color();
	color1=[palatt[0][0],palatt[0][1],palatt[0][2]];
	var color2=new processing.color();
	color2=[palatt[4][0],palatt[4][1],palatt[4][2]];
		
	processing.setup=function()
	{
		processing.setGradient(0,0,parseInt(sessionStorage.cw),parseInt(sessionStorage.ch),color1,color2)
	}
	
	processing.draw=function()
	{
		
		if(Layout_Gradient==1)
		{
			   
			     sessionStorage.source = GradientCanvas.toDataURL("image/jpg");
			   
			    processingInstance1.exit()
    			processingInstance1 = new Processing(adcanvas, sketchProc);
			    Layout_Gradient=0
		}
	}
	 processing.setGradient=function(x,y,w,h,c1,c2)
	    {
	    	console.log(c1,c2)
	    	 var deltaR = c2[0]-c1[0];
			 var deltaG = c2[1]-c1[1];
             var deltaB = c2[2]-c1[2];
             for (var i=y; i<=(y+h); i++){
             for (var j = x; j<=(x+w); j++){
        		var c = processing.color(

                (c1[0]+(j-x)*(deltaR/h)),

        		(c1[1]+(j-x)*(deltaG/h)),

        		(c1[2]+(j-x)*(deltaB/h)) 

         )
	
        processing.set(j, i, c);

      }

    }  

	    }
}
function determine_zoom(iWidth,iHeight,cWidth,cHeight)
{
	var diff=cHeight-iHeight;
	var count=1;
	while(diff>0)
	{
		iHeight=1.1*iHeight
		diff=cHeight-iHeight
		count++
	}
	return count
}
