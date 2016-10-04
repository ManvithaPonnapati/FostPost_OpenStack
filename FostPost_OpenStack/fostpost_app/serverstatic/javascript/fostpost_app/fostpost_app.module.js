(function () {
  'use strict';

  angular
    .module('FostPost.fostpost_app', [
      'FostPost.fostpost_app.controllers',
      'FostPost.fostpost_app.services'
    ]);

  angular
    .module('FostPost.fostpost_app.controllers', []);

  angular
    .module('FostPost.fostpost_app.services', ['ngCookies']);
})();