var app = angular.module('font_app', []);

app.controller('font_controller', function($scope,$http) {
    $scope.email_field="me@example.com"
    $scope.email_submit=function()
    {
    	console.log($scope.email_field)
    	//Api calls to the Django Backend
    	return $http({
    		url:'/authenticate_email/',
    		method:'POST',
    		data:"me@example.com"
    	})
    	.then(function(data)
    	{
            console.log("I am back")
            console.log(data)
    		return data;
    	});
    }
});