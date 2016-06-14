$scope.user_authenticated=1
var list_of_fonts=
[
  {
    "Font_Person": "Tuxedo",
    "Font_Family": "Helvetica",
    "Font_Person_URL": "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
  },
  {
    "Font_Person": "Business Casual",
    "Font_Family": "Helvetica",
    "Font_Person_URL": "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
  },
  {
    "Font_Person": "Dressy Casual",
    "Font_Family": "Helvetica",
    "Font_Person_URL": "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
  },
  {
    "Font_Person": "Smart Casual",
    "Font_Family": "Helvetica",
    "Font_Person_URL": "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
  },
  {
    "Font_Person": "Casual",
    "Font_Family": "Helvetica",
    "Font_Person_URL": "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
  },
  {
    "Font_Person": "Street",
    "Font_Family": "Helvetica",
    "Font_Person_URL": "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
  }
]

angular
    .module('FostPost.fostpost_app.controllers').controller('FontController', function ($scope, $http){

        

          $scope.fonts = list_of_fonts;

        

      });
