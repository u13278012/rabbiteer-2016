module.exports = function ($scope, $interval) {

  $scope.date = Date.now();

  //formats
  var formats = [];
  formats.normal = 'yyyy/MM/dd HH:mm:ss a';
  formats.date = 'yyyy/MM/dd';
  formats.time = 'HH:mm:ss a';

  $scope.clocks = [
    {
      format: formats.normal
    }, {
      format: formats.date
    }, {
      format: formats.time
    }
  ];

  function tick() {
    $scope.date = Date.now();
  }

  var initClock = function () {
    $interval(tick, 1000);
  };

  function init() {
    initClock();
  }

  init();
}