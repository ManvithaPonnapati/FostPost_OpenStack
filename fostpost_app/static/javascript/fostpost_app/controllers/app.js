var app = angular.module('angularjs-starter', ['ngResource','ngSanitize','ngFileUpload','ngMaterial','mdColorPicker','ngRoute']);
//myApp.directive('myDirective', function() {});
app.directive("scroll", function ($window) {
   return {
      scope: {
         scrollEvent: '&'
      },
      link : function(scope, element, attrs) {
        $("#"+attrs.id).scroll(function($e) { scope.scrollEvent != null ?  scope.scrollEvent()($e) : null })
      }
   }
})

app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
});

app.controller('createCtrl', function($scope,$http,$sce,Upload,$window,$routeParams,$location) {
  console.log("Inside create");
  $scope.scopeVariable={}
  $scope.scopeVariable.options = {
    label: "Color Dialog",
    icon: "",
    default: hexToRgb,
    genericPalette: false,
    history: false,
    clearButton:false,

};
  $scope.unsplash = 0
  $scope.craftcloud_item = function ()
  {
    
      $scope.unsplash = 1
    
  }
  $scope.uploaded_item = function ()
  {

    $scope.unsplash = 0
  }
  $scope.scrollevent = function($e){
   console.log("I am the super cool scroll")
   }
   $scope.$watch('scopeVariable.color',function(){
        $scope.background_r = hexToRgb($scope.scopeVariable.color).r
        $scope.background_b =hexToRgb($scope.scopeVariable.color).b
        $scope.background_g = hexToRgb($scope.scopeVariable.color).g
    });
  $scope.scopeVariable.color = "#FFFFFF"
   $scope.getParameter = function(name, url){
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
  $scope.current_user = $scope.getParameter('user')      
  $scope.fontfamily = $scope.getParameter('font')
  $scope.array_image_incrementer = 1
  $scope.image = null;
  $scope.imageFileName = '';
  $scope.x_point=[]
  $scope.y_point=[]
  $scope.aw=0
  $scope.ah=0

  var doww=1200;
  $scope.test = "SFDF"
  var dowh=628;
  var facebook=1;
  var google=0;
  var instagram=0;
  var custom=0;
  var google336x280=0
  var google728x90=0
  var google300x600=0
  var google320x100=0
  var pinterest=0
  var twitter=0
  var custom=0
  //Initializations for Images and Logo
  var image_mouseFlag=0
  var logo_mouseFlag=0
  var text_mouseFlags=[0,0,0]
  var imageRatio=0;
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
  $scope.TextArray=["Main Text","Body Text","Small Text"]
  $scope.selectors=[[]]
  var TextHandles=[];
  var textdragx=[];
  var textdragy=[]
  var selectedLineofText=1
  $scope.text_fontSize=[];
  var wrapWidths=[0,0,0];
  var addLogo=0;
  
  $scope.unsplash_query = "car"
   $scope.uploaded_images =[DJANGO_STATIC_URL+"images/placeholderbackground.jpg"]
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
  var LogoRatio=1


  HandlesArray[1]=0;
  $scope.selectors[1]=[];
  $scope.selectors[1][0]=40
  $scope.selectors[1][1]=40
  wrapWidths[1]=copywidth;
  textdragx[1]=0;
  textdragy[1]=0;
  HandlesArray[2]=0;
  $scope.selectors[2]=[];
  $scope.selectors[2][0]=50
  $scope.selectors[2][1]=50
  wrapWidths[2]=copywidth;
  textdragx[2]=0;
  textdragy[2]=0;
  $scope.text_fontSize[0]=0.1*parseInt($scope.canvas_height)
  $scope.text_fontSize[1]=0.08*parseInt($scope.canvas_height)
  $scope.text_fontSize[2]=0.05*parseInt($scope.canvas_height)
  $scope.addMore=0
  
  $scope.addLogo=0
  $scope.zoomValue=0
  $scope.dummy="I am dummy";
  $window.dummy = $scope.dummy; 
  $scope.fontArray=["Antic-Regular","Asar-Regular","Asap-Regular","Anaheim-Regular","Arvo-Regular","Armata-Regular"]
  $scope.image_selected_source = DJANGO_STATIC_URL+"images/placeholderbackground.jpg"
  $scope.facebook_selected = {"index":1}
  $scope.google_selected = {"index":1}
  
  // $scope.image_sources=[DJANGO_STATIC_URL+"images/placeholderbackground.jpg"];
  // $scope.uploaded_images=[DJANGO_STATIC_URL+"images/up1.jpg",DJANGO_STATIC_URL+"images/up2.jpg",DJANGO_STATIC_URL+"images/up3.jpg",DJANGO_STATIC_URL+"images/up4.jpg",DJANGO_STATIC_URL+"images/up5.jpg",DJANGO_STATIC_URL+"images/up6.jpg",DJANGO_STATIC_URL+"images/up7.jpg",DJANGO_STATIC_URL+"images/up8.jpg"];
  $scope.logo_source=[DJANGO_STATIC_URL+"images/logo_image.jpg"];
  $scope.image_positionsX=[0];
  $scope.image_positionsY=[0];
  $scope.image_sizesW=[1200];
  $scope.image_sizesH=[628];
  imageRatio=$scope.image_sizesW[0]/$scope.image_sizesH[0]
  $scope.logo_sizeW=50;
  $scope.logo_sizeH=50;
  $scope.logo_X=0
  $scope.logo_Y=100
  $scope.background_r=230;
  $scope.background_g=221;
  $scope.background_b=236;
  $scope.online="{% static 'images/placeholdergoog_360.jpg' %}"
  $scope.text_array=['Drag your own image onto the canvas','','']
  $scope.text_x=[20,20,20]
  $scope.text_y=[100,140,180]
  $scope.text_font=["Arial"]
  $scope.text_fontSize=[32,16,16]
  $scope.text_w=[0,0,0]
  $scope.text_padding=5
  $scope.selected_item=1
  $scope.html_test=$sce.trustAsHtml("<img  src='{% static 'svg/layout.svg' %}' style='width: 50%;height:65%' align='middle' />")
  $scope.parentWidth=0.8*(document.getElementById("canvasParent")).clientWidth;
  $scope.parentHeight=(document.getElementById("canvasParent")).clientHeight;
  $scope.colors_Array=[]
  console.log($scope.parentWidth)
  $scope.canvas_width=$scope.parentWidth;
  $scope.canvas_height=(628/1200)*$scope.canvas_width;
  $scope.image_sizesW[0]=$scope.canvas_width;
  $scope.image_sizesH[0]=$scope.canvas_height;
  $scope.MainText="Drag your own image onto the canvas"
  $scope.SmallText=" "
  $scope.BodyText=" "
  $scope.font_imageArray=["/static/svg/font1.svg","/static/svg/font2.svg","/static/svg/font3.svg","/static/svg/font4.svg","/static/svg/font5.svg","/static/svg/font6.svg"]
  $scope.canvas_color='#dfd333'
  var copywidth=$scope.canvas_width;
  $scope.selected_navbar_item=1  //Layouts nav bar item is selected by default
  $scope.facebookSizes=[{id: 1,name: 'Facebook'}, {id: 2,name: 'Post Page Engagement 1200x900'}, {id: 3,name: 'Carousel 600x600'}];
  $scope.googleSizes=[{id: 1,name: 'Google'}, {id: 2,name: 'Medium Rectangle 300x250'}, {id: 3,name: 'Leaderboard 728x90'},{id:4,name:'Half Page 300x600'},{id:5,name:'Large Mobile Banner 320x100'}];
  console.log($scope.googleSizes)
  var copySession=$scope.image_selected_source
  $scope.unsplash_width=[100]

  $scope.unsplash_height=[100]
  $scope.upload_width = [240,240,240,240,240,240,240,240,240]
  $scope.upload_height = [100]
  for(i=0;i<$scope.TextArray.length;i++)
  {
    $scope.text_fontSize[i]=parseInt($scope.canvas_height)*0.08;
    wrapWidths[i]=copywidth;
    
    textdragx[i]=0;
    textdragy[i]=0;
  }

  for(i=0;i<5;i++)
  {
    TextHandles[i]=0;
  }
  
var numberoflevels=41;
var zoomcanvasWidth=14;
var onslider=0;
var onplus=0;
var onminus=0
var counterzoom=0
$scope.zoomcanvas_width=30
$scope.zoomcanvas_height=100
var zoomCanvas=document.getElementById('zoombarcanvas')
var zoomctx=zoomCanvas.getContext('2d')
var ZoomProcessing=new Processing(zoomCanvas,sketchZoom)

function sketchZoom(processing)
{
  counterzoom = generatelevels(numberoflevels);
  var completeLine=processing.loadImage(DJANGO_STATIC_URL+"svg/zoombarplusminus.svg")
  var handle=processing.loadImage(DJANGO_STATIC_URL+"svg/zoomhandle.svg")
  $scope.zoomcanvas_height = $scope.canvas_height
  var mousedragY=0;
  var sliderx=0;
  var slidery=$scope.canvas_height/2;
  var delta=$scope.canvas_height/20;
  zoomCanvas.height=$scope.canvas_height;
  zoomCanvas.width=$scope.canvas_width
  processing.size($scope.zoomcanvas_width,$scope.zoomcanvas_height)
  processing.background(0,1)
  $('#zoombarcanvas').css('width',$scope.zoomcanvas_width)
  $('#zoombarcanvas').css('height',$scope.canvas_height)
  //$('#zoombarcanvas').css('background-color','transparent')
  zoomcanvasWidth=$scope.zoomcanvas_width
  var sliderh=40;
  var sliderw=(25/71)*40;
  var plusheight=(0.35)*$scope.canvas_height;
  sliderx=((zoomcanvasWidth-sliderw)/2)
  slidery=(($scope.canvas_height-sliderh)/2+20)
  console.log(sliderx,slidery,sliderw,sliderh,$scope.canvas_height)
  processing.draw=function()
  {
    processing.background(0,0)
    processing.image(completeLine,0,0,zoomcanvasWidth,$scope.canvas_height)
    processing.image(handle,sliderx,slidery,sliderw,sliderh)
  }
  processing.mousePressed=function()
  {
    mousedragY=slidery-processing.mouseY;
    if(processing.mouseX>parseInt(sliderx) && processing.mouseX<parseInt(sliderx)+parseInt(sliderw) && processing.mouseY> parseInt(slidery) && processing.mouseY<parseInt(slidery)+parseInt(sliderh))
    {
      onslider=1;
      $scope.zoomValue=0;
    }
  }
  processing.mouseDragged=function()
  {
    
    if(onslider==1)
    {
      console.log("On Slider")
      slidery=mousedragY+processing.mouseY
      for(i=0;i<numberoflevels;i++)
      {
        if(slidery>i*delta && slidery<(i+1)*delta)
        $scope.zoomValue=counterzoom[i]
        
      }
    }
  }
  processing.mouseReleased=function()
  {
    onslider=0;
  }
  processing.mouseOut=function()
  {
    onslider=0
  }
}
function generatelevels(numberoflevels)
{
  var halfx=parseInt(numberoflevels/2)
  var levels=[]
  for(i=0;i<halfx-1;i++)
  {
    levels[i]=halfx-i;
  }
  levels[halfx-1]=0
  for(i=halfx;i<numberoflevels;i++)
  {
    levels[i]=halfx-i;
  }
  console.log(levels)
  return levels;
  }
  for(l=0;l<HandlesArray.length;l++)
  {
    $scope.selectors[l][0]=20;
    $scope.selectors[l][1]=20;
  }
  $scope.changeLayout =function(index)
  {
    $scope.layout=index
    processingInstance1.exit();
    processingInstance1=new Processing(c,sketchProc)

  }
  $scope.changeItem=function(navbar_item)
  {

    $scope.selected_navbar_item=navbar_item
    $scope.change_subItems(navbar_item)
    console.log($scope.selected_navbar_item)
    if(navbar_item==2)
    {
      $scope.unsplash = 1
    }
  }
  $scope.inputChange = function()
  {
   
    
  }
  $scope.change_subItems=function(navbar_item)
  {
      if(navbar_item==1)
      {
         console.log("I am going to display layouts")
         
          
      }
      if(navbar_item==2)
      {
         console.log("I am going to display images")
         console.log($scope.unsplash_query)
          $scope.imageArray=[]
          $http({
                method: 'POST',
                url: '/api/unsplash_images/',
                body: $scope.unsplash_query,
                    }).then(function successCallback(response) {
                      console.log(response.data.y)
                      $scope.imageArray =  response.data.y
                      console.log("I got a response back")
                    
                    }, function errorCallback(response) {
    
                });
      
      }
      if(navbar_item==3)
      {
         console.log("I am going to display fonts")
         
          
      }
      if(navbar_item==4)
      {
         console.log("I am going to display logo")
         
          
      }
      if(navbar_item==5)
      {
         console.log("I am going to display colors")

         $http({
                method: 'POST',
                url: '/api/get_colors/',
                data: $scope.image_selected_source,
                    }).then(function successCallback(response) {
                   console.log(response)
                    $scope.colors_Array=(response.data)
                    
                    $scope.background_r=$scope.colors_Array[0][1]
                    $scope.background_g=$scope.colors_Array[0][2]
                    $scope.background_b=$scope.colors_Array[0][3]
                    
                    }, function errorCallback(response) {
    
                });
         
          
      }
      if(navbar_item==6)
      {
    
      }
                                  
  }
   $scope.change_canvas_size=function(ad_type)
  {
    if(ad_type==1)
    {
       if($scope.facebook_selected.index == 1)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(628/1200)*$scope.canvas_width;  
      }
      if($scope.facebook_selected.index == 2)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(900/1200)*$scope.canvas_width;  
      }
      if($scope.facebook_selected.index == 3)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(600/600)*$scope.canvas_width;  
      }

    }

    if(ad_type==2)
    {
      if($scope.google_selected.index == 1)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(280/336)*$scope.canvas_width;  
      }
      if($scope.google_selected.index == 2)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(250/300)*$scope.canvas_width;  
      }
      if($scope.google_selected.index == 3)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(90/728)*$scope.canvas_width;  
      }
      
      if($scope.google_selected.index == 4)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(600/300)*$scope.canvas_width;  
      }
      if($scope.google_selected.index == 5)
       {
        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(100/320)*$scope.canvas_width;  
      }

    }
    if(ad_type==3)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(220/420)*$scope.canvas_width;  

    }
    if(ad_type==4)
    {

        $scope.canvas_width=0.25*$scope.parentWidth;
        $scope.canvas_height=(572/236)*$scope.canvas_width;  
        

    }
    if(ad_type==5)
    {
        $scope.canvas_width=0.75*$scope.parentWidth;
        $scope.canvas_height=$scope.canvas_width; 
       

    }
    if(ad_type==6)
    {

        $scope.canvas_width=0.65*$scope.parentWidth;
        $scope.canvas_height=(400/400)*$scope.canvas_width;  

    }
    if(ad_type==7)
    {

        $scope.canvas_width=$scope.parentWidth;
        $scope.canvas_height=(1/1)*$scope.canvas_width;  

    }
  }
  $scope.changeColor=function(index)
  {
    console.log(hexToRgb($scope.scopeVariable.color))
    $scope.background_r = $scope.colors_Array[index][0]
    $scope.background_g = $scope.colors_Array[index][1]
    $scope.background_b = $scope.colors_Array[index][2]
  }
  
  $scope.get_image_data = function(data){
    return 'data:image/jpeg;base64,' + data;
  }
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
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
    $scope.changeImage=function(index)
  {

    if($scope.unsplash == 1)
    {
    console.log("I am here")
    $scope.image_selected_source="/static/images_uploaded/uploaded_"+index+".jpg";
    processingInstance1.exit()
    processingInstance1=new Processing(c,sketchProc)
  }
  else
  {
    console.log("I am here")
    $scope.image_selected_source="/static/images_uploaded/up"+index+".jpg";
    processingInstance1.exit()
    processingInstance1=new Processing(c,sketchProc)
  }
  }
    function sketchProc(processing) {
            var online=new processing.PImage;
            var online1=new processing.PImage;
            var delButton=new processing.PImage;
            var logoResize=new processing.PImage;
            var sizearrow=new processing.PImage;
            var extra=new processing.PImage;
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
        online=processing.requestImage($scope.image_selected_source)
        online1=processing.requestImage($scope.logo_source[0])
        delButton=processing.requestImage(DJANGO_STATIC_URL+"images/deletetextbox.png")
        logoResize=processing.requestImage(DJANGO_STATIC_URL+"svg/logosize.svg")
        sizearrow=processing.requestImage(DJANGO_STATIC_URL+"images/sizearrow.png")
        extra=processing.requestImage(copySession);
        console.log(online)


      }
     
     processing.draw=function(){
        
      processing.size($scope.canvas_width,parseInt($scope.canvas_height))
      processing.fill(0,14,23)
      $scope.TextArray[0]=$scope.MainText
      $scope.TextArray[1]=$scope.BodyText
      $scope.TextArray[2]=$scope.SmallText
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
          if($scope.zoomValue>0 )
    {
      
      var xw=originalW;
      var xh=originalH;
      var m=Math.abs($scope.zoomValue)
      for(i=0;i<m;i++)
      {
       xw=xw*1.1
      ////console.log(im1w)
       xh=xh*1.1
      }
      imw=xw;
      imh=xh;
    }
    if($scope.zoomValue<0)
    {
      var xw=originalW
      var xh=originalH;
      var m=Math.abs($scope.zoomValue)
      for(i=0;i<m;i++)
      {
       xw=xw/1.1
      ////console.log(im1w)
       xh=xh/1.1
      }
      imw=xw;
      imh=xh;
    }
          if($scope.addMore==1)
          {
            processing.image(extra,extrax,extray,imw,imh)
            processing.image(online,imx,imy,imw,imh)
          }
          if($scope.addMore==0){
          processing.image(online,imx,imy,imw,imh)
          }
    
      for(i=0;i<($scope.x_point.length);i++)
      {
        processing.stroke(123,0,222)
        processing.point($scope.x_point[i],$scope.y_point[i])
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
      
      for(h=0;h<$scope.TextArray.length;h++)
      {

        if(wrapWidths[h]>0.95*parseInt($scope.canvas_width))
        {
          wrapWidths[h]=0.95*parseInt($scope.canvas_width)
          
        }
      }
     
      for(i=0;i<$scope.TextArray.length;i++)
      {
        var selectory=$scope.selectors[i][1];
        var selectorx=$scope.selectors[i][0];
        var words=$scope.TextArray[i].split(" ");
        var wordlengths=[];
        for(j=0;j<words.length;j++)
        {
          $scope.create_font=processing.createFont($scope.fontfamily)
          processing.textFont($scope.create_font,$scope.text_fontSize[i])
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
        $scope.create_font=processing.createFont($scope.fontfamily)
        processing.textFont($scope.create_font,$scope.text_fontSize[i])
        processing.text(strings[k],selectorx,texttempy)
        stringlengths[k]=processing.textWidth(strings[k]);
        texttempy=texttempy+$scope.text_fontSize[i];
       }
        var addtoy=(strings.length)*$scope.text_fontSize[i];
       
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
       $scope.selectors[i]=[selectorx,copyy,selectorw,addtoy]
       
      }
        
    processing.fill(233,72,44)
    if(lerpFlag==1){
    for(var i=0; i<=20; i++) {

        var x = processing.lerp(dottedx1, dottedx2, i/20.0);

        var y = processing.lerp(dottedy1, dottedy2, i/20.0);
          var x1=processing.lerp(dottedx11, dottedx21, i/20.0);
      var y1=processing.lerp(dottedy11, dottedy21, i/20.0);
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
             
              
              var textlen=processing.textWidth($scope.TextArray[0])
             
              var numberlines=Math.ceil(textlen/wrapWidths[0])
        $scope.selectors[0][0]=parseInt($scope.canvas_height)*0.025;
        $scope.selectors[0][1]=0.65*parseInt($scope.canvas_height)+parseInt($scope.canvas_height)*0.025;
        if($scope.TextArray.length>1){
        for(i=1;i<$scope.TextArray.length;i++){
          
            wrapWidths[i]=0.75*parseInt($scope.canvas_width);
            $scope.selectors[i][0]=$scope.selectors[0][0]
            $scope.selectors[i][1]=$scope.selectors[0][1]+numberlines*$scope.text_fontSize[0]
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
             
              var tlen=processing.textWidth($scope.TextArray[0])
              var textlen=processing.textWidth($scope.TextArray[0])
             //  //console.log(textlen,wrapWidths[0])
              var numberlines=Math.ceil(textlen/wrapWidths[0])
              if(textlen<wrapWidths[0]){
        $scope.selectors[0][0]=(($scope.canvas_width)-textlen)/2
        }
        if(textlen>wrapWidths[0]){
        $scope.selectors[0][0]=(($scope.canvas_width)-wrapWidths[0])/2
        }
        $scope.selectors[0][1]=parseInt($scope.canvas_height)/2-(numberlines*$scope.text_fontSize[0])/2
        ////console.log($scope.selectors[0][0])
        if($scope.TextArray.length>1){
        for(i=1;i<$scope.TextArray.length;i++){
            
            wrapWidths[i]=0.9*parseInt($scope.canvas_width);
            $scope.selectors[i][0]=$scope.selectors[0][0]
            $scope.selectors[i][1]=$scope.selectors[i-1][1]+numberlines*$scope.text_fontSize[i-1];
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
             
              var tlen=processing.textWidth($scope.TextArray[0])
              var textlen=processing.textWidth($scope.TextArray[0])
             //  //console.log(textlen,wrapWidths[0])
              var numberlines=Math.ceil(textlen/wrapWidths[0])
              if(textlen<wrapWidths[0]){
        $scope.selectors[0][0]=(($scope.canvas_width)-textlen)/2
        }
        if(textlen>wrapWidths[0]){
        $scope.selectors[0][0]=(($scope.canvas_width)-wrapWidths[0])/2
        }
        $scope.selectors[0][1]=parseInt($scope.canvas_height)/2-(numberlines*$scope.text_fontSize[0])/2
        ////console.log($scope.selectors[0][0])
        if($scope.TextArray.length>1){
        for(i=1;i<$scope.TextArray.length;i++){
            
            wrapWidths[i]=0.9*parseInt($scope.canvas_width);
            $scope.selectors[i][0]=$scope.selectors[0][0]
            $scope.selectors[i][1]=$scope.selectors[i-1][1]+numberlines*$scope.text_fontSize[i-1];
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
//          $scope.TextArray[selectedLineofText-1].substring(0, $scope.TextArray[i].length-1);
//          }
//         else if(processing.keyCode==processing.SHIFT || processing.keyCode==processing.CONTROL ||processing.keyCode==processing.ALT|| processing.keyCode==processing.TAB ||processing.keyCode==processing.ENTER)
//          {
//            $scope.TextArray[selectedLineofText-1]=$scope.TextArray[selectedLineofText-1]+''
//          }
//          else
//          {
//        $scope.TextArray[selectedLineofText-1]=$scope.TextArray[selectedLineofText-1]+String.fromCharCode(processing.key);
//        inputBox.value=$scope.TextArray[selectedLineofText-1]
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
          var sx=$scope.selectors[i][0];
          var sy=$scope.selectors[i][1];
          var sw=$scope.selectors[i][2];
          var sh=$scope.selectors[i][3];
          
          
          if(processing.mouseX>sx && processing.mouseX<sx+sw && processing.mouseY>sy && processing.mouseY<sy+sh)
          {
            HandlesArray[i]=1;
            selectedLineofText=i+1;
          
            textdragx[i]=sx-processing.mouseX;
                textdragy[i]=sy-processing.mouseY;
          
            
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
            $scope.TextArray[selectedLineofText-1]="";
            
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
            if(0.08*parseInt($scope.canvas_height)<$scope.text_fontSize[selectedLineofText-1]<0.25*parseInt($scope.canvas_height))
          {
          
          $scope.text_fontSize[selectedLineofText-1]+=0.02*$scope.text_fontSize[selectedLineofText-1];
          wrapWidths[selectedLineofText-1]+=0.02*wrapWidths[selectedLineofText-1]
          ////console.log("Increasing")
          }
          }
          if(processing.mouseX<processing.pmouseX && processing.mouseY<processing.pmouseY)
          {
            if(0.08*parseInt($scope.canvas_height)<$scope.text_fontSize[selectedLineofText-1]<0.25*parseInt($scope.canvas_height))
          {
          $scope.text_fontSize[selectedLineofText-1]-=0.02*$scope.text_fontSize[selectedLineofText-1];
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
  
          wrapWidths[selectedLineofText-1]+=processing.mouseX-processing.pmouseX;
          TextHandles[0]=0;
          TextHandles[1]=0;
          MainImage=0;
          LogoImage=0;
         

          
        }
        if(TextHandles[0]==1&&layout3_extra==0 ){
           dragged=1;
          $scope.selectors[selectedLineofText-1][0]=textdragx[selectedLineofText-1]+processing.mouseX;
          $scope.selectors[selectedLineofText-1][1]=textdragy[selectedLineofText-1]+processing.mouseY;
          dottedx1=$scope.selectors[selectedLineofText-1][0]
          dottedx2=$scope.selectors[selectedLineofText-1][0]
          dottedy11=$scope.selectors[selectedLineofText-1][1]
          dottedy21=$scope.selectors[selectedLineofText-1][1]
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
          for(i=0;i<$scope.TextArray.length;i++)
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
var CanvasDown=document.createElement('canvas')
CanvasDown.id="CanvasDown"
var ContextDown=CanvasDown.getContext('2d')
var downloadnow=0;
var ProcessDown=new Processing(CanvasDown,SketchDown)
$scope.download_canvas=function()
{
  downloadnow=1
  ProcessDown.exit();
    ProcessDown=new Processing(CanvasDown,SketchDown)
}

function SketchDown(processing)
{ 
  console.log($scope.image_selected_source)
  processing.hint(processing.ENABLE_NATIVE_FONTS)
  processing.hint(processing.ENABLE_OPENGL_4X_SMOOTH)
  var TextArray_download=$scope.TextArray
  var selectors_download=$scope.selectors
  var wraps_download=wrapWidths
  console.log(selectors_download,TextArray_download)
  var rt=(doww/parseInt($scope.canvas_width))
  var rt1=(dowh/parseInt($scope.canvas_height))
    console.log(rt,rt1)
  var img1=processing.requestImage($scope.image_selected_source)
  var log1=processing.requestImage($scope.logo_source[0])
  var im1x=parseInt(rt*$scope.image_positionsX[0])
  var im1y=parseInt(rt*$scope.image_positionsY[0])
  var im1w=parseInt(rt*$scope.image_sizesW[0])
  var im1h=parseInt(rt*$scope.image_sizesH[0])
  var im2x=parseInt(rt*$scope.logo_X)
  var im2y=parseInt(rt*$scope.logo_Y)
  var extrax=parseInt(rt*$scope.extraX)
  var extray=parseInt(rt*$scope.extraY)
  var im2w=parseInt(rt*$scope.logo_sizeW)
  var im2h=parseInt(rt*$scope.logo_sizeH)
  var fs=parseInt(0.08*dowh)
  
  
  processing.setup=function()
  {
      CanvasDown.width=doww;
      CanvasDown.height=dowh;
      processing.size(doww,dowh)
      processing.background($scope.background_r,$scope.background_g,$scope.background_b)
  
  }
  processing.draw=function()
  {   
      processing.background($scope.background_r,$scope.background_g,$scope.background_b)
      
    
      if(addMore==1)
        {
          processing.image(extra,extrax,extray,im1w,im1h)
          processing.image(img1,im1x,im1y,im1w,im1h)
        }
      else
        {
          processing.image(img1,im1x,im1y,im1w,im1h)
        }
          processing.image(log1,im2x,im2y,im2w,im2h)
          processing.textAlign(processing.LEFT,processing.TOP)
          processing.fill(text1r,text1g,text1b)
          fs=50;
          $scope.create_font=processing.createFont($scope.fontfamily)
          processing.textFont($scope.create_font,32)
          processing.fill(text1r,text1g,text1b)
          for(i=0;i<3;i++)
              {
                var x_cord=rt*selectors_download[i][0]
                var y_cord=rt*selectors_download[i][1]
                var words=TextArray_download[i].split(" ");
                    var wordlengths=[];
                    for(j=0;j<words.length;j++)
                  {
                    $scope.create_font=processing.createFont($scope.fontfamily)
                     processing.textFont($scope.create_font,rt*$scope.text_fontSize[i])
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
          $scope.create_font=processing.createFont($scope.fontfamily)
          processing.textFont($scope.create_font,rt*$scope.text_fontSize[i])
          
          processing.text(strings[k],x_cord,y_cord)
          stringlengths[k]=processing.textWidth(strings[k]);
          y_cord=y_cord+rt*$scope.text_fontSize[i];
          }
       
      }
      if(downloadnow==1)
      {
        var source_img=new Image();
        var target_img=new Image();
        var output_format='png'
          var dataURL = CanvasDown.toDataURL("image/png");
          source_img.src=dataURL;
         var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+''+dd+''+yyyy;
          var link = document.createElement('a');
          if(facebook==1)
          {
          link.download = "FB_"+today+"_1200x628.png";
          }
          if(google==1)
          {
              target_img.src = jic.compress(source_img,parseInt(sessionStorage.compressionRatio),output_format).src;  
          link.download = "Google_"+today+"_300x250.png";   
          }
           if(google336x280==1)
          {
              target_img.src = jic.compress(source_img,parseInt(sessionStorage.compressionRatio),output_format).src;  
          link.download = "Google_"+today+"_336x280.png";   
          }
           if(google300x600==1)
          {
              target_img.src = jic.compress(source_img,80,output_format).src;  
          link.download = "Google_"+today+"_300x600.png";   
          
          }
           if(google728x90==1)
          {
              target_img.src = jic.compress(source_img,80,output_format).src;  
          link.download = "Google_"+today+"_728x90.png";  
          }
           if(google320x100==1)
          {
              target_img.src = jic.compress(source_img,80,output_format).src;  
          link.download = "Google_"+today+"_320x100.png";   
          }
          if(instagram==1)
          {
          link.download="Instagram_"+today+"_1080x1080"
          }
          
          if(pinterest==1)
          {
            link.download="Pinterest_"+today+"_230x800"
          }
          if(twitter==1)
          {
            link.download="Twitter_"+today+"_420x220"
          }
          if(custom==1)
          {
            link.download="CustomCanvas_"+today+"_"+sessionStorage.cw+"x"+sessionStorage.ch
          }
          link.href =source_img.src;
          link.click();
          downloadnow=0;
      }
  
    
  }
}
$scope.redirect = function(url){
  $location.path('/#/');
}

$scope.changeLayout(1)

$scope.changeFont = function(index)
{
  
    console.log("Changing font")
    if(index==1)
  {
     $scope.fontfamily="Allerta-Regular";
  
  }
  if(index==2)
  {
    $scope.fontfamily=("Asar-Regular");
  }
  if(index==3)
  {
     $scope.fontfamily=("Asap-Regular");
  }
  if(index==4)
  {
     $scope.fontfamily=("Anaheim-Regular");
  }
  
  if(index==5)
  {
     $scope.fontfamily=("Arvo-Regular");
  }
  if(index==6)
  {
     $scope.fontfamily=("Armata-Regular");
  }
  console.log($scope.fontfamily)

}
$scope.upload_logo = function (file) {
  Upload.base64DataUrl(file).then(function(urls){
            $http({
                method: 'POST',
                url: '/api/upload_logo/',
                data: urls,
                    }).then(function successCallback(response) {

                   
                    $scope.logo_source[0]="/assets/images_uploaded/logo_image.png"
                    processingInstance1.exit()
                    processingInstance1=new Processing(c,sketchProc)
                    $scope.unsplash = 1
                   
                    }, function errorCallback(response) {
    
                });
       });
  }

  $scope.get_more_images = function()
  {
    console.log("SCROLL EVENT DETECTED")
  }
 $scope.uploaded_aspects = []
 // at the bottom of your controller
$scope.init = function () {
  $http({
                method: 'POST',
                url: '/api/get_all_uploaded_images/',
                data: {"user":$scope.getParameter('user')},
                    }).then(function successCallback(response) {
                      console.log("Getting response back")
                      $scope.uploaded_images = []
                      $scope.uploaded_objects = []
                      for(i=0;i<(response.data).length;i++)
                      {
                        image_string=(response.data[i].file.replace("/CraftCloud/FostPost/fostpost_app",""))
                        $scope.uploaded_images.push(image_string)
                        $scope.getImageMeta(image_string)

                
                    
                      }

                   
                    }, function errorCallback(response) {
    
                });
   // check if there is query in url
   // and fire search in case its value is not empty
};
// and fire it after definition
  $scope.getImageMeta = function(url)
  {

    var img = new Image();
    img.addEventListener("load", function(){
      console.log(this.naturalHeight/this.naturalWidth)
      $scope.uploaded_aspects.push((this.naturalHeight/this.naturalWidth)*100+'px')
  
       return this.naturalHeight/this.naturalWidth; 
        
    });
    img.src = url;

  }
    $scope.selected_upload_image = function(index)
    {
      
      $scope.image_selected_source = index;
      processingInstance1.exit()
      processingInstance1=new Processing(c,sketchProc)

    }
    $scope.selected_unsplash_image = function(index)
    {
      console.log("Unsplash Image")
       $http({
                method: 'POST',
                url: '/api/save_unsplash/',
                data: {"url_string":index, "user":$scope.current_user},
                
                    }).then(function successCallback(response) {
                    console.log("Successfully Saved to the database")
                    console.log(response.data)
                    $scope.image_selected_source = response.data;
                    processingInstance1.exit()
                    processingInstance1=new Processing(c,sketchProc)
                    }, function errorCallback(response) {
    
                }); 

      console.log(index)
    }
  $scope.save_creative = function()
  {
        $http({
                method: 'POST',
                url: '/api/save_creative/',
                data: {"email":$scope.current_user, "image_url":$scope.image_selected_source,"logo_url":$scope.logo_source,"image_x":$scope.image_positionsX,"image_y":$scope.image_positionsY,"logo_x":0,"logo_y":10,"strings":$scope.text_array,"strings_x":$scope.text_x,"strings_y":$scope.text_y},
                    }).then(function successCallback(response) {
                    console.log("Successfully Saved to the database")
                    
                    }, function errorCallback(response) {
    
                }); 

                 }
  //Adding drop and drag capabilities for uploading image onto the canvas
  $scope.upload = function (file) {
       Upload.base64DataUrl(file).then(function(urls){
            $http({
                method: 'POST',
                url: '/api/drag_upload/',
                data: {"urls":urls, "increment":$scope.array_image_incrementer,"user":$scope.current_user},
                    }).then(function successCallback(response) {
                    console.log("I am trying to upload the images dropped")
                    console.log(response.data.file_string)
                    
                    $scope.image_selected_source = response.data.file_string
                    processingInstance1.exit()
                    processingInstance1=new Processing(c,sketchProc)
                    $scope.init()
                    }, function errorCallback(response) {
    
                });
       });
    };
    $scope.init();
});

