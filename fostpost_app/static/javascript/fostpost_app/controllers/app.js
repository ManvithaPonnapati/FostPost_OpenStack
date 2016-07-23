var app = angular.module('angularjs-starter', ['ngResource','ngSanitize']);
 app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
    });

app.controller('createCtrl', function($scope,$http,$sce,$window) {
  console.log("Inside create");
  //Initializations for Images and Logo
  var image_mouseFlag=0
  var logo_mouseFlag=0
  var text_mouseFlags=[0,0,0]
  var dragging=0
  var originalW=600
  var originalH=314
  var mouseOverLogo=0
  var delLogoX=0
  var rx=0
  var ry=0
  var subrx=0
  var subry=0
  var TextHandles=[]
  var TextArray=["Main Text","Body Text","Small Text"]
  var selectors=[[]]
  var TextHandles=[];
  var textdragx=[];
  var textdragy=[]
  var fontArray=[];
  var wrapWidths=[];
  var addLogo=0;
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
  HandlesArray[0]=1;
  var lerpFlag=0
  var addMore=0
  var textlengths=[]
  var text1r=0;
  var text1g=0;
  var text1b=0;
  for(i=0;i<TextArray.length;i++)
  {
    fontArray[i]=parseInt($scope.canvas_height)*0.08;
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
  fontArray[0]=0.1*parseInt($scope.canvas_height)
  fontArray[1]=0.08*parseInt($scope.canvas_height)
  fontArray[2]=0.05*parseInt($scope.canvas_height)
  $scope.addMore=0

  $scope.addLogo=0
  $scope.zoomValue=0
  $scope.dummy="I am dummy";
  $window.dummy = $scope.dummy; 
  $scope.image_sources=[DJANGO_STATIC_URL+"images/placeholderbackground.jpg"];
  $scope.logo_source=[];
  $scope.image_positionsX=[0];
  $scope.image_positionsY=[0];
  $scope.image_sizesW=[1200];
  $scope.image_sizesH=[628];
  $scope.logo_sizeW=10;
  $scope.logo_sizeH=10;
  $scope.logo_X=0
  $scope.logo_Y=100
  $scope.background_r=230;
  $scope.background_g=221;
  $scope.background_b=236;
  $scope.online="{% static 'images/placeholdergoog_360.jpg' %}"
  $scope.text_array=['','','']
  $scope.text_x=[20,20,20]
  $scope.text_y=[100,140,180]
  $scope.text_font=["Arial"]
  $scope.text_fontSize=[32,16,16]
  $scope.text_w=[0,0,0]
  $scope.text_padding=5
  $scope.selected_item=1
  $scope.html_test=$sce.trustAsHtml("<img  src='{% static 'svg/layout.svg' %}' style='width: 50%;height:65%' align='middle' />")
  $scope.parentWidth=(document.getElementById("canvasParent")).clientWidth;
  $scope.parentHeight=(document.getElementById("canvasParent")).clientHeight;
  console.log($scope.parentWidth)
  $scope.canvas_width=$scope.parentWidth;
  $scope.canvas_height=(628/1200)*$scope.canvas_width;
  $scope.image_sizesW[0]=$scope.canvas_width;
  $scope.image_sizesH[0]=$scope.canvas_height;
  $scope.canvas_color='#dfd333'
  $scope.selected_navbar_item=1  //Layouts nav bar item is selected by default
  $scope.facebookSizes={"Conversions": "1200x628", "Post Page Engagement": "1200x900", "Carousel": "600x600"};
  console.log($scope.facebookSizes)
  $scope.googleSizes={"Large Rectangle": "336x280", "Medium Rectangle": "300x250", "Leaderboard": "728x90","Half Page":"300x600","Large Mobile Banner":"320x100"};
  console.log($scope.googleSizes)
  $scope.changeItem=function(navbar_item)
  {

    $scope.selected_navbar_item=navbar_item
    $scope.change_subItems(navbar_item)
    console.log($scope.selected_navbar_item)
  }
  $scope.change_subItems=function(navbar_item)
  {
      if(navbar_item==1)
      {
         console.log("I am going to display layouts")
         
          
      }
      if(navbar_item==5)
      {
            console.log("I am going to go get dominant colors")
            $scope.toDataUrl('/fostpost_app/static/images/placeholdergoog_360.jpg', function(base64Img) {
                console.log(base64Img);
            });
            $http({
                method: 'GET',
                url: '/api/get_colors'
                    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
                console.log(response)
                    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
                });
      }
                                  
  }
   $scope.change_canvas_size=function(ad_type)
  {
    if(ad_type==1)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(628/1200)*$scope.canvas_width;  

    }

    if(ad_type==2)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(250/300)*$scope.canvas_width;  

    }
    if(ad_type==3)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(220/420)*$scope.canvas_width;  

    }
    if(ad_type==4)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(220/440)*$scope.canvas_width; 
        

    }
    if(ad_type==5)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(572/236)*$scope.canvas_width;  

    }
    if(ad_type==6)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(400/400)*$scope.canvas_width;  

    }
    if(ad_type==7)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(1/1)*$scope.canvas_width;  

    }
  }
  $scope.get_image_data = function(data){
    return 'data:image/jpeg;base64,' + data;
  }

    $scope.toDataUrl=function(url, callback) {
            var xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = function() {
                var reader = new FileReader();
                reader.onloadend = function() {
                  callback(reader.result);
                }
                reader.readAsDataURL(xhr.response);
              };
              xhr.open('GET', url);
              xhr.send();
        }

   
    $scope.cx=100
    $scope.cy=60
    
    var images_dragX=[0]
    var images_dragY=[0]
    var c=document.getElementById('adcanvas');
    var processingInstance1=new Processing(c,sketchProc);
    function sketchProc(processing) {
            var online=new processing.PImage;
            var online1=new processing.PImage;
            var delButton=new processing.PImage;
            var logoResize=new processing.PImage;
            var sizearrow=new processing.PImage;
            processing.size(parseInt($scope.canvas_width),parseInt($scope.canvas_height))
            $('#adcanvas').css('width',parseInt($scope.canvas_width));
            $('#adcanvas').css('height',parseInt($scope.canvas_height));
            adcanvas.width=parseInt($scope.canvas_width);
            adcanvas.height=parseInt($scope.canvas_height);
            var imx=parseInt($scope.image_positionsX[0]);
            var imy=parseInt($scope.image_positionsY[0]);
            
            var imw=parseInt($scope.image_sizesW[0]);
            var imh=parseInt($scope.image_sizesH[0]);
            ////console.log(imw,imh)
            var extrax=imx
            var extray=-imh/2
            var im1x=parseInt($scope.logo_X);
            var im1y=parseInt($scope.logo_Y);
            var im1w=$scope.logo_sizeW;
          
            ////console.log(im1w,imw,im1x)
            var im1h=$scope.logo_sizeH;
            var cwprev=$scope.canvas_width;
            var chprev=$scope.canvas_height;
            var ratio=1;
            
            
            var dragimx=0;
            var dragimy=0;
            var dragim1x=0;
            var dragim1y=0;
            var dragged=0;
       
            var exta=new processing.PImage;
      ////console.log($scope.image_sizesH[0])
      processing.setup=function()
      {

        processing.size($scope.canvas_width,$scope.canvas_height)
        processing.background($scope.background_r,$scope.background_g,$scope.background_b)
        online=processing.requestImage($scope.image_sources[0])
        delButton=processing.requestImage(DJANGO_STATIC_URL+"images/deletetextbox.png")
        logoResize=processing.requestImage(DJANGO_STATIC_URL+"svg/logosize.svg")
        sizearrow=processing.requestImage(DJANGO_STATIC_URL+"images/sizearrow.png")
        console.log(online)


      }
     
     processing.draw=function(){
        
      processing.size($scope.canvas_width,parseInt($scope.canvas_height))
      processing.fill(0,14,23)
      TextArray[0]=$scope.MainText+"Text 1"
      TextArray[1]=$scope.BodyText+"Text 2"
      TextArray[2]=$scope.SmallText+"Text 3"
      $('#adcanvas').css('width',$scope.canvas_width);
      $('#adcanvas').css('height',parseInt($scope.canvas_height));
      adcanvas.width=$scope.canvas_width;
      adcanvas.height=parseInt($scope.canvas_height);
      processing.background($scope.background_r,$scope.background_g,$scope.background_b)
      $scope.image_positionsX[0]=imx;
      $scope.image_positionsY[0]=imy;
      $scope.image_sizesW[0]=imw;
      $scope.image_sizesH[0]=imh;
      $scope.logo_X=im1x;
      $scope.logo_Y=im1y;
      $scope.logo_sizeW=im1w;
      $scope.logo_sizeH=im1h;
      $scope.extraX=extrax;
      $scope.extraY=extray;
      processing.image(online,imx,imy,imw,imh)
          if($scope.addLogo==1)
          {
            var getLogo=new processing.getLogoHandle()
          }
          if($scope.zoomValue==0)
          {
            imw=originalW;
            imh=originalH;
          }
          
          if($scope.addMore==1)
          {
            processing.image(extra,extrax,extray,imw,imh)
            processing.image(online,imx,imy,imw,imh)
          }
          if($scope.addMore==0){
          processing.image(online,imx,imy,imw,imh)
          }
    
     
      if($scope.layout==7)
      {
        $scope.addMore=0
      processing.fill($scope.background_r,$scope.background_g,$scope.background_b, 160)
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
      $scope.logoX=im1x;
      $scope.logoY=im1y
      $scope.textx=rx;
      $scope.texty=ry;
      $scope.text2x=subrx;
      $scope.text2y=subry;
      
      
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
        if(wrapWidths[h]>0.95*parseInt($scope.canvas_width))
        {
          wrapWidths[h]=0.95*parseInt($scope.canvas_width)
          
        }
      }
      for(i=0;i<TextArray.length;i++)
      {
         var selectory=selectors[i][1];
         var selectorx=selectors[i][0];
         var words=TextArray[i].split(" ");
         
         var wordlengths=[];
         
         copywidth=processing.textWidth(TextArray[0])+30
         textlengths[i]=processing.textWidth(TextArray[i])
         
         for(j=0;j<words.length;j++)
         {
          
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
        processing.text(TextArray[0],selectorx,texttempy)
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
        
    processing.fill(233,72,44)
    if(lerpFlag==1){
    for(var i=0; i<=50; i++) {

        var x = processing.lerp(dottedx1, dottedx2, i/50.0);

        var y = processing.lerp(dottedy1, dottedy2, i/50.0);
      var x1=processing.lerp(dottedx11, dottedx21, i/50.0);
      var y1=processing.lerp(dottedy11, dottedy21, i/50.0);
      processing.point(x1, y1);
      processing.point(x,y)
      
      var htext="("+processing.mouseX+","+parseInt($scope.canvas_width)+")"
      var vtext="("+processing.mouseY+","+parseInt($scope.canvas_height)+")"
      processing.text(htext,processing.mouseX,0)
      processing.text(vtext,0,processing.mouseY)
    }
    }
    if($scope.layout==2)
    {
          $scope.addMore=0
              wrapWidths[0]=0.75*parseInt($scope.canvas_width)
             
              
              var textlen=processing.textWidth(TextArray[0])
             
              var numberlines=Math.ceil(textlen/wrapWidths[0])
        selectors[0][0]=parseInt($scope.canvas_height)*0.025;
        selectors[0][1]=0.65*parseInt($scope.canvas_height)+parseInt($scope.canvas_height)*0.025;
        if(TextArray.length>1){
        for(i=1;i<TextArray.length;i++){
          
            wrapWidths[i]=0.75*parseInt($scope.canvas_width);
            selectors[i][0]=selectors[0][0]
            selectors[i][1]=selectors[0][1]+numberlines*fontArray[0]
            }
        }
        
      imx=0
      imy=0
      imh=0.65*parseInt($scope.canvas_height)
      imw=imh*(imageRatio);
      while(imw<parseInt($scope.canvas_width))
      {
         imy=imy-imh
         imh=2*imh
         imw=imh*(imageRatio);
      }
      LogoH=parseInt($scope.canvas_height)*0.25;
      LogoW=(LogoRatio)*LogoH
      im1x=parseInt($scope.canvas_width)-parseInt($scope.canvas_height)*0.025-LogoW;
      im1y=parseInt($scope.canvas_height)-parseInt(LogoH)-parseInt($scope.canvas_height)*0.025;
      originalW=imw
      originalH=imh
      $scope.layout=0
    }
    if($scope.layout==3)
    {
      
              wrapWidths[0]=0.8*parseInt($scope.canvas_width)
             
              var tlen=processing.textWidth(TextArray[0])
              var textlen=processing.textWidth(TextArray[0])
             //  //console.log(textlen,wrapWidths[0])
              var numberlines=Math.ceil(textlen/wrapWidths[0])
              if(textlen<wrapWidths[0]){
        selectors[0][0]=(($scope.canvas_width)-textlen)/2
        }
        if(textlen>wrapWidths[0]){
        selectors[0][0]=(($scope.canvas_width)-wrapWidths[0])/2
        }
        selectors[0][1]=parseInt($scope.canvas_height)/2-(numberlines*fontArray[0])/2
        ////console.log(selectors[0][0])
        if(TextArray.length>1){
        for(i=1;i<TextArray.length;i++){
            
            wrapWidths[i]=0.9*parseInt($scope.canvas_width);
            selectors[i][0]=selectors[0][0]
            selectors[i][1]=selectors[i-1][1]+numberlines*fontArray[i-1];
            }
        }
        
        imx=0;
        imy=0;
        imw=parseInt($scope.canvas_width)
        imh=parseInt($scope.canvas_width)*(1/imageRatio)
        while(imh<parseInt($scope.canvas_height))
      {
         
         imw=2*imw
         imh=imw*(1/imageRatio);
      }
      if(imw>parseInt($scope.canvas_width))
      {
        imx=imx-(imw-parseInt($scope.canvas_width))/2
      }
      if(imh>parseInt($scope.canvas_height))
      {
        imy=imy-(imh-parseInt($scope.canvas_height))/2
      }
      imy=imy+(0.3)*imh
        LogoH=parseInt($scope.canvas_height)*0.25;
        LogoW=(LogoRatio)*LogoH
        im1x=parseInt($scope.canvas_width)-parseInt(LogoW)-parseInt($scope.canvas_height)*0.025;
        im1y=parseInt($scope.canvas_height)-parseInt(LogoH)-parseInt($scope.canvas_height)*0.025;
        originalW=imw
        originalH=imh
        $scope.zoomValue=0;
        $scope.addMore=1;
        $scope.layout=0
    }
  
    if($scope.layout==6 || $scope.layout==8 || $scope.layout==9 ||$scope.layout==5 ||$scope.layout==4 || $scope.layout==1)
    {
          $scope.addMore=0
        wrapWidths[0]=0.9*parseInt($scope.canvas_width)
             
              var tlen=processing.textWidth(TextArray[0])
              var textlen=processing.textWidth(TextArray[0])
             //  //console.log(textlen,wrapWidths[0])
              var numberlines=Math.ceil(textlen/wrapWidths[0])
              if(textlen<wrapWidths[0]){
        selectors[0][0]=(($scope.canvas_width)-textlen)/2
        }
        if(textlen>wrapWidths[0]){
        selectors[0][0]=(($scope.canvas_width)-wrapWidths[0])/2
        }
        selectors[0][1]=parseInt($scope.canvas_height)/2-(numberlines*fontArray[0])/2
        ////console.log(selectors[0][0])
        if(TextArray.length>1){
        for(i=1;i<TextArray.length;i++){
            
            wrapWidths[i]=0.9*parseInt($scope.canvas_width);
            selectors[i][0]=selectors[0][0]
            selectors[i][1]=selectors[i-1][1]+numberlines*fontArray[i-1];
            }
        }
        
        imx=0;
        imy=0;
        imw=parseInt($scope.canvas_width)
        imh=parseInt($scope.canvas_width)*(1/imageRatio)
        while(imh<parseInt($scope.canvas_height))
      {
         
         imw=2*imw
         imh=imw*(1/imageRatio);
      }
      if(imw>parseInt($scope.canvas_width))
      {
        imx=imx-(imw-parseInt($scope.canvas_width))/2
      }
      if(imh>parseInt($scope.canvas_height))
      {
        imy=imy-(imh-parseInt($scope.canvas_height))/2
      }
        LogoH=parseInt($scope.canvas_height)*0.25;
        LogoW=(LogoRatio)*LogoH
        im1x=parseInt($scope.canvas_width)-parseInt(LogoW)-parseInt($scope.canvas_height)*0.025;
        im1y=parseInt($scope.canvas_height)-parseInt(LogoH)-parseInt($scope.canvas_height)*0.025;
        
        originalW=imw
        originalH=imh
        $scope.zoomValue=0;
        $scope.layout=0
    }
      }
//      processing.keyPressed=function()
//      {
//        
//        
//        if(processing.keyCode==processing.BACKSPACE){
//          TextArray[selectedLineofText-1].substring(0, TextArray[i].length-1);
//          }
//         else if(processing.keyCode==processing.SHIFT || processing.keyCode==processing.CONTROL ||processing.keyCode==processing.ALT|| processing.keyCode==processing.TAB ||processing.keyCode==processing.ENTER)
//          {
//            TextArray[selectedLineofText-1]=TextArray[selectedLineofText-1]+''
//          }
//          else
//          {
//        TextArray[selectedLineofText-1]=TextArray[selectedLineofText-1]+String.fromCharCode(processing.key);
//        inputBox.value=TextArray[selectedLineofText-1]
//        
//      }
//      }
    processing.getLogoHandle=function()
    {
          
        online1=processing.requestImage($scope.source1);
        $scope.addLogo=0;
        ////console.log("here")
        im1h=0.25*parseInt($scope.canvas_height)
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
      if($scope.addMore==1 && processing.mouseX>extrax && processing.mouseX<extrax+imw && processing.mouseY>extray &&processing.mouseY<imy)
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
        //  //console.log(processing.mouseX,processing.mouseY,parseInt(im1x)+parseInt(im1w),parseInt(im1x)+parseInt(im1w)+20,parseInt(im1y)-20,parseInt(im1y),LogoImage)
          if(processing.mouseX>parseInt(im1x)+parseInt(im1w) && processing.mouseX<parseInt(im1x)+parseInt(im1w)+20 && processing.mouseY>parseInt(im1y)-20 && processing.mouseY<parseInt(im1y))
          {
            delLogoX=0;
            online1=""
              $scope.source1=""
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
            if(0.08*parseInt($scope.canvas_height)<fontArray[selectedLineofText-1]<0.25*parseInt($scope.canvas_height))
          {
          
          fontArray[selectedLineofText-1]+=0.02*fontArray[selectedLineofText-1];
          wrapWidths[selectedLineofText-1]+=0.02*wrapWidths[selectedLineofText-1]
          ////console.log("Increasing")
          }
          }
          if(processing.mouseX<processing.pmouseX && processing.mouseY<processing.pmouseY)
          {
            if(0.08*parseInt($scope.canvas_height)<fontArray[selectedLineofText-1]<0.25*parseInt($scope.canvas_height))
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
          dottedy2=parseInt($scope.canvas_height)
          dottedx11=0
          dottedx21=parseInt($scope.canvas_width)
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
          dottedy2=parseInt($scope.canvas_height)
          dottedx11=0
          dottedx21=parseInt($scope.canvas_width)
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
          dottedy2=parseInt($scope.canvas_height)
          dottedx11=0
          dottedx21=parseInt($scope.canvas_width)
          lerpFlag=1
        }
        if(LogoImage==1 && MainImage==0 && layout3_extra==0)
        {
           dragged=1;
          lerpFlag=1;
          im1x=logodragx+processing.mouseX;
          im1y=logodragy+processing.mouseY;
          dragged=0;
          $scope.logoX=im1x;
          $scope.logoY=im1y;
          dottedx1=im1x
          dottedx2=im1x
          dottedy11=im1y
          dottedy21=im1y
          dottedy1=0
          dottedy2=parseInt($scope.canvas_height)
          dottedx11=0
          dottedx21=parseInt($scope.canvas_width)
          
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
  
});
