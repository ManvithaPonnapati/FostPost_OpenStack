var app = angular.module('angularjs-starter', ['ngResource','ngSanitize']);
 app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
    });

app.controller('createCtrl', function($scope,$http,$sce,$window) {
  console.log("Inside create");
  //Initializations for Images and Logo
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
  $scope.background_r=230;
  $scope.background_g=221;
  $scope.background_b=236;
  $scope.background_img="{% static 'images/placeholdergoog_360.jpg' %}"
 
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
    
    
    var c=document.getElementById('adcanvas');
    var processingInstance1=new Processing(c,sketchProc);
    function sketchProc(processing) {
      var background_image=new processing.PImage;
      processing.setup=function()
      {

        processing.size($scope.canvas_width,$scope.canvas_height)
        processing.background($scope.background_r,$scope.background_g,$scope.background_b)
        background_image=processing.requestImage($scope.image_sources[0])
        console.log(background_image)


      }
      processing.draw=function()
      {
        processing.image(background_image,$scope.image_positionsX[0],$scope.image_positionsY[0],$scope.image_sizesW[0],$scope.image_sizesH[0])
      }
    }
  
});
