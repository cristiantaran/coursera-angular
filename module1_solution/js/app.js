(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

    $scope.lunchItems = "";
    $scope.message = "";
    $scope.fontColor = "black";
    $scope.borderColor = "";

    $scope.checkLunch = function (){

      if (!$scope.lunchItems)
      {
        $scope.message = "Please enter data first";
        $scope.fontColor = "red";
        $scope.borderColor = "red";
      }
      else
      {
        var items = $scope.lunchItems.split(',');
        var lengthFiltered = lengthNonEmpty(items);

        // console.log(items.length);
        // console.log(lengthFiltered);

        if (lengthFiltered <= 3) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }

        $scope.fontColor = "green";
        $scope.borderColor = "green";
      }
    }

    function lengthNonEmpty(stringArray) {
      var count = 0;

      for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i]) {
          count++;
        }
      }

      return count;
    }
};

})();
