var app = angular.module('angularjs-starter', []);
 app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
    });

app.controller('createCtrl', function($scope) {
  console.log("Inside create");
  $scope.facebookSizes={"Conversions": "1200x628", "Post Page Engagement": "1200x900", "Carousel": "600x600"};
  console.log($scope.facebookSizes)
  $scope.googleSizes={"Large Rectangle": "336x280", "Medium Rectangle": "300x250", "Leaderboard": "728x90","Half Page":"300x600","Large Mobile Banner":"320x100"};
  console.log($scope.googleSizes)
  
});
