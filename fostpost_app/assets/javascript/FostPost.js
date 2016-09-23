(function () {
  'use strict';

  angular
    .module('FostPost', [
      'FostPost.routes',
      'FostPost.fostpost_app'
    ]);

  angular
    .module('FostPost.routes', ['ngRoute']);
})();