var app = angular.module('angularjs-starter', []);
 app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
    });

app.controller('createCtrl', function($scope) {
  console.log("Inside create");
  //1-Images
  //2-Layouts
  //3-fonts
  //4-Logo
  //5-Save
  //6-Colors
  $scope.selected_navbar_item=1  //Images nav bar item is selected by default
  $scope.facebookSizes={"Conversions": "1200x628", "Post Page Engagement": "1200x900", "Carousel": "600x600"};
  console.log($scope.facebookSizes)
  $scope.googleSizes={"Large Rectangle": "336x280", "Medium Rectangle": "300x250", "Leaderboard": "728x90","Half Page":"300x600","Large Mobile Banner":"320x100"};
  console.log($scope.googleSizes)
  
});
