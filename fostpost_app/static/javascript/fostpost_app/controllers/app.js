var app = angular.module('angularjs-starter', []);

app.controller('createCtrl', function($scope) {
  console.log("Inside create");
  var imgCount = 0;
  $scope.showUp = false;
  $scope.showDown = true;
  var imgarray = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg',
                'images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg','images/13.jpg','images/14.jpg','images/15.jpg','images/16.jpg',
                'images/17.jpg','images/18.jpg','images/19.jpg','images/20.jpg','images/21.jpg','images/22.jpg','images/23.jpg','images/24.jpg'];
	
 if(imgarray.length <=5){
    $scope.imgarray = imgarray;
    $scope.showDown = false;
 }else{
    $scope.imgarray = imgarray.slice(0,5);
    imageCountBottomLimit = 5;
    imgCount = 5;
    $scope.showUp = false;
}	
$scope.changeImageDown = function(){
    console.log("image down Count is here :",imgCount);
    if(imgarray.length > imgCount && imgarray.length < imgCount+5){
        $scope.showUp = true;
        console.log("Inside if");
        $scope.imgarray = imgarray.slice(imgCount,imgarray.length);
        imgCount = imgarray.length;
        $scope.showDown = false;
    }else if(imgarray.length > imgCount+5){
        $scope.imgarray = imgarray.slice(imgCount,imgCount+5);
        console.log("Inside else");
        imgCount = imgCount+5;
        $scope.showUp = true;
    }
}
$scope.changeImageUp = function(){
    console.log("image Count is here :",imgCount);
    if(imgarray.length === imgCount){
        $scope.showUp = true;
        var tempImgArrLength = $scope.imgarray.length;
        $scope.imgarray = imgarray.slice(imgCount-5,imgCount);
        $scope.showDown = true;
        imgCount = imgCount-tempImgArrLength;
    }else if(imgarray.length >= imgCount && imgCount>5){
        $scope.showUp = true;
        $scope.imgarray = imgarray.slice(imgCount-5,imgCount);
        $scope.showDown = true;
        imgCount = imgCount-5;
    }else if(imgCount <=5){
        $scope.imgarray = imgarray.slice(0,imgCount);
        console.log("Inside else");
        $scope.showUp = false;
    }
}
  
});
