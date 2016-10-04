module.exports = function ($scope, $interval) {


  $scope.date = Date.now();

  //formats
  var formats = [];
  formats.normal = 'yyyy/MM/dd HH:mm:ss a';
  formats.date = 'yyyy/mm/dd';
  formats.time = 'hh:mm:ss a';

  function tick() {
    $scope.date = Date.now();
  }

  var initClock = function () {
    $interval(tick, 2200);
  };

  $scope.clocks = [
    {
      format: formats.normal
    }, {
      format: formats.date
    }, {
      format: formats.time
    }
  ];

  function init() {
    initClock();
  }

  init();
}