var app = angular.module('font_app', []);

app.controller('font_controller', function($scope,$http,$window) {
    $scope.email_field="me@exampe.com"
    $scope.clear_email = function()
    {
        $scope.email_field = ""
    }
    $scope.email_submit=function()
    {
        console.log("Submit clicked")
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
            $window.location.href = 'font/?user=me@example.com'
            console.log("Sending back")
    		return data;
    	});
    }
});