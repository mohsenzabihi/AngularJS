(function () {
'use strict'

angular.module('LunchCheck',[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope)
{
  $scope.items="";

$scope.checkFunction=function () {
  if ($scope.items == "")
  $scope.msg = "Please enter data first";
  else {
    var number = $scope.items.split(',').length;
  //console.log(number);


  if (number < 4)
  {
    $scope.msg = "Enjoy!"
  }
  else {
    $scope.msg="Too much!"
  }
}
};

}

})();
