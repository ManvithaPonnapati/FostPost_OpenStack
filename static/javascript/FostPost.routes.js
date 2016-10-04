(function () {
  'use strict';

  angular
    .module('FostPost.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/fostpost_app/register.html'
    }).otherwise('/');
     $routeProvider.when('/create', {
      controller: 'CreateController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/fostpost_app/create.html'
    }).otherwise('/');
      $routeProvider.when('/login', {
      controller: 'LoginController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/fostpost_app/login.html'
    }).otherwise('/');
       $routeProvider.when('/index', {
      controller: 'IndexController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/fostpost_app/index.html'
    }).otherwise('/');
         $routeProvider.when('/font', {
      controller: 'FontController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/fostpost_app/font.html'
    }).otherwise('/');
  }
})();