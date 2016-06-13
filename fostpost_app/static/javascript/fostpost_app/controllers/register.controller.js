/**
* Register controller
* @namespace FostPost.fostpost_app.controllers
*/
(function () {
  'use strict';

  angular
    .module('FostPost.fostpost_app.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace RegisterController
  */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    /**
    * @name register
    * @desc Register a new user
    * @memberOf FostPost.fostpost_App.controllers.RegisterController
    */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }
  }
})();