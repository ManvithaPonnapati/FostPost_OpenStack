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
      templateUrl: '/static/templates/fostpost_app/index.html'
    }).otherwise('/');
  }
})();