/**
* IndexController controller
* @namespace FostPost.fostpost_app.controllers
*/
(function () {
  'use strict';

  angular
    .module('FostPost.fostpost_app.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace IndexController
  */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    /**
    * @name register
    * @desc Register a new user
    * @memberOf FostPost.fostpost_App.controllers.IndexController
    */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }
  }
})();