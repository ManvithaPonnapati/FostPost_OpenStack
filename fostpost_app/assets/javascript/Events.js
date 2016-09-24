var palattText=[[]]
var copySession=sessionStorage.source;
$('#Source1').mouseup(function(){
	if(sessionStorage.option==1 && Columns_Splash!=0)
	{
		generateImages()
		}
	if(sessionStorage.option==1 && Columns_Splash==0)
	{
		stopText=0
		noImage=1;
		$.post('upload.php', {
        url: imagesources1[1]
    }, function (response) {
            // Response div goes here.
           
          objJSON = JSON.parse(response);
          console.log(objJSON)
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
	if(sessionStorage.option==2)
	{
	resetbackground()
	sessionStorage.source= imagesources[1];
	var im=new Image();
	im.src=sessionStorage.source;
	
	sessionStorage.imageH=parseInt(sessionStorage.ch)
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
$('#Source2').mouseup(function(){
	if(sessionStorage.option==3){
	maincolor[0]=parseInt(palatt[0][0])
	maincolor[1]=parseInt(palatt[0][1])
	maincolor[2]=parseInt(palatt[0][2])
	}
	if(sessionStorage.option==1)
	{
		stopText=0
		noImage=1;
		$.post('upload.php', {
        url: imagesources1[2]
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
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
 

    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(2);
		sessionStorage.layout=2;
	}
	if(sessionStorage.option==6 && Columns_Layout==1)
	{
		layout(6);
		console.log("d")
		sessionStorage.layout=6;
	}

})
$('#Source3').mouseup(function(){
	if(sessionStorage.option==3){
	maincolor[0]=parseInt(palatt[2][0])
	maincolor[1]=parseInt(palatt[2][1])
	maincolor[2]=parseInt(palatt[2][2])
	}
	if(sessionStorage.option==1)
	{noImage=1;
		
		stopText=0
		$.post('upload.php', {
        url: imagesources1[3]
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
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
   
	
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(3);
		sessionStorage.layout=3;
	}
	if(sessionStorage.option==6 && Columns_Layout==1)
	{
		layout(7);
		
		sessionStorage.layout=7;
	}

})
$('#Source4').mouseup(function(){
	if(sessionStorage.option==3){
	maincolor[0]=parseInt(palatt[3][0])
	maincolor[1]=parseInt(palatt[3][1])
	maincolor[2]=parseInt(palatt[3][2])
		}
		if(sessionStorage.option==1)
	{
		stopText=0
		noImage=1;
		$.post('upload.php', {
        url: imagesources1[4]
    }, function (response) {
            
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
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
  
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(4);
		sessionStorage.layout=4;
	}
	if(sessionStorage.option==6 && Columns_Layout==1)
	{
		layout(8);
		
		sessionStorage.layout=8;
	}

})
$('#Source5').mouseup(function(){
	if(sessionStorage.option==3){
	maincolor[0]=46
	maincolor[1]=41
	maincolor[2]=37
}
if(sessionStorage.option==1)
	{
		stopText=0
		noImage=1;
		$.post('upload.php', {
        url: imagesources1[5]
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
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
   
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6 && Columns_Layout==0)
	{
		layout(5);
		sessionStorage.layout=5
	}
	if(sessionStorage.option==6 && Columns_Layout==1)
	{
		layout(9);
		sessionStorage.layout=9
	}
})
$('#Source6').mouseup(function(){
	if(sessionStorage.option==3){
	maincolor[0]=229
	maincolor[1]=225
	maincolor[2]=230
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
	sessionStorage.imageH=parseInt(sessionStorage.ch)
    sessionStorage.imageW=parseInt((im.width/im.height)*(sessionStorage.imageH))
 
    processingInstance1.exit();
    processingInstance1=new Processing(adcanvas,sketchProc)
	}
	if(sessionStorage.option==6)
	{
		generateColumns(1);
	}
//	if(sessionStorage.option==5)
//	{
//		e = window.event;
//        e.preventDefault();
//        e.returnValue=false;
//        resetbackground()
//        downloadcanvas()
//	}
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
  var img1 = $(document.createElement('img'))
  img1.id="Layout"+i;
  var xi=parseInt(i)+4
  img1.attr('src', 'svg/layout_'+xi+'.svg');
  img1.css('width', 50);
  img1.css('height',50);
  img1.appendTo(idstring1);
}
}

function generatebuttoncolors()
{
	
	
	if(sessionStorage.option==3){
	var btncolor='rgb('+palatt[1][0]+','+palatt[1][1]+','+palatt[1][2]+')'
	$('#Source1').css('background-color',btncolor)
	var btncolor='rgb('+palatt[0][0]+','+palatt[0][1]+','+palatt[0][2]+')'
	$('#Source2').css('background-color',btncolor)
	var btncolor='rgb('+palatt[2][0]+','+palatt[2][1]+','+palatt[2][2]+')'
	$('#Source3').css('background-color',btncolor)
	var btncolor='rgb('+palatt[3][0]+','+palatt[3][1]+','+palatt[3][2]+')'
	$('#Source4').css('background-color',btncolor)
	$('#Source5').css('background-color','black')
	$('#Source6').css('background-color','white')
	}
	
	
	

	
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
