module.exports = function ($scope) {
  //$scope.inputList = [];
  $scope.example2 = function () {

    $scope.inputList.push($scope.inputText);

  }
  
  $scope.debugFunction = function () {
    debugger;

    var a = 1;
    console.log(a);

    a = a + 1;

    console.log(a);
  }
}