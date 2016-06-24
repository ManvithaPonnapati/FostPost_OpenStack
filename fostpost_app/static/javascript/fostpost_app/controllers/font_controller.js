var app = angular.module('font_app', []);
app.controller('font_controller', function($scope) {
    $scope.email_field="me@example.com"
    $scope.email_submit=function()
    {
    	console.log("HEREHEREHEREHERE")
    }
});