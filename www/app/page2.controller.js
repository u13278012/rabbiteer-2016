module.exports = function ($scope, $interval) {

  $scope.date = Date.now();
  $scope.selectedTimeZone = [];

  //formats
  var formats = [];
  formats.time = 'HH:mm:ss a';

  $scope.deleteClock = function(clock){
    //filters out the deleted clock
    $scope.clocks.filter(function(c){
      return c.format === clock.format && c.timezone.offset === clock.timezone.offset
    })
  };

  $scope.addClock = function(){
    var newClock = {
      format: formats.time,
      // timezone: {
        // offset: (JSON.parse($scope.selectedTimeZone)).offset,
        // text: (JSON.parse($scope.selectedTimeZone)).text
      // }
      timezone: JSON.parse($scope.selectedTimeZone)
    };
    $scope.clocks.push(newClock);
  };

  $scope.clocks = [
    {
      format: formats.time,
      timezone: {
        offset: "+0200",
        text: "(UTC+02:00) Harare, Pretoria"
      }
    }, {
      format: formats.time,
      timezone: {
        offset: "+0200",
        text: "(UTC+02:00) Harare, Pretoria"
      }
    }, {
      format: formats.time,
      timezone: {
        offset: "-0700",
        text: "(UTC-08:00) Baja California"
      }
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

  //timezones
  $scope.timezones = [
    {
      value: "Dateline Standard Time",
      offset: "-1200",
      text: "(UTC-12:00) International Date Line West"
    },
    {
      value: "UTC-11",
      offset: "-1100",
      text: "(UTC-11:00) Coordinated Universal Time-11"
    },
    {
      value: "Hawaiian Standard Time",
      offset: "-1000",
      text: "(UTC-10:00) Hawaii"
    },
    {
      value: "Alaskan Standard Time",
      offset: "-0800",
      text: "(UTC-09:00) Alaska"
    },
    {
      value: "Pacific Standard Time (Mexico)",
      offset: "-0700",
      text: "(UTC-08:00) Baja California"
    },
    {
      value: "Pacific Standard Time",
      offset: "-0700",
      text: "(UTC-08:00) Pacific Time (US & Canada)"
    },
    {
      value: "US Mountain Standard Time",
      offset: "-0700",
      text: "(UTC-07:00) Arizona"
    },
    {
      value: "Mountain Standard Time (Mexico)",
      offset: "-0600",
      text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan"
    },
    {
      value: "Mountain Standard Time",
      offset: "-0600",
      text: "(UTC-07:00) Mountain Time (US & Canada)"
    },
    {
      value: "Central America Standard Time",
      offset: "-0600",
      text: "(UTC-06:00) Central America"
    },
    {
      value: "Central Standard Time",
      offset: "-0600",
      text: "(UTC-06:00) Central Time (US & Canada)"
    },
    {
      value: "Central Standard Time (Mexico)",
      offset: "-0600",
      text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey"
    },
    {
      value: "Canada Central Standard Time",
      offset: "-0600",
      text: "(UTC-06:00) Saskatchewan"
    },
    {
      value: "SA Pacific Standard Time",
      offset: "-0500",
      text: "(UTC-05:00) Bogota, Lima, Quito"
    },
    {
      value: "Eastern Standard Time",
      offset: "-0400",
      text: "(UTC-05:00) Eastern Time (US & Canada)"
    },
    {
      value: "US Eastern Standard Time",
      offset: "-0400",
      text: "(UTC-05:00) Indiana (East)"
    },
    {
      value: "Venezuela Standard Time",
      offset: "-0430",
      text: "(UTC-04:30) Caracas"
    },
    {
      value: "Paraguay Standard Time",
      offset: "-0400",
      text: "(UTC-04:00) Asuncion"
    },
    {
      value: "Atlantic Standard Time",
      offset: "-0400",
      text: "(UTC-04:00) Atlantic Time (Canada)"
    },
    {
      value: "Central Brazilian Standard Time",
      offset: "-0400",
      text: "(UTC-04:00) Cuiaba"
    },
    {
      value: "SA Western Standard Time",
      offset: "-0400",
      text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan"
    },
    {
      value: "Pacific SA Standard Time",
      offset: "-0400",
      text: "(UTC-04:00) Santiago"
    },
    {
      value: "Newfoundland Standard Time",
      offset: "-0330",
      text: "(UTC-03:30) Newfoundland"
    },
    {
      value: "E. South America Standard Time",
      offset: "-0300",
      text: "(UTC-03:00) Brasilia"
    },
    {
      value: "Argentina Standard Time",
      offset: "-0300",
      text: "(UTC-03:00) Buenos Aires"
    },
    {
      value: "SA Eastern Standard Time",
      offset: "-0300",
      text: "(UTC-03:00) Cayenne, Fortaleza"
    },
    {
      value: "Greenland Standard Time",
      offset: "-0200",
      text: "(UTC-03:00) Greenland"
    },
    {
      value: "Montevideo Standard Time",
      offset: "-0300",
      text: "(UTC-03:00) Montevideo"
    },
    {
      value: "Bahia Standard Time",
      offset: "-0300",
      text: "(UTC-03:00) Salvador"
    },
    {
      value: "UTC-02",
      offset: "-0200",
      text: "(UTC-02:00) Coordinated Universal Time-02"
    },
    {
      value: "Mid-Atlantic Standard Time",
      offset: "-0200",
      text: "(UTC-02:00) Mid-Atlantic - Old"
    },
    {
      value: "Azores Standard Time",
      offset: "-0100",
      text: "(UTC-01:00) Azores"
    },
    {
      value: "Cape Verde Standard Time",
      offset: "-0100",
      text: "(UTC-01:00) Cape Verde Is."
    },
    {
      value: "Morocco Standard Time",
      offset: "0000",
      text: "(UTC) Casablanca"
    },
    {
      value: "UTC",
      offset: "0000",
      text: "(UTC) Coordinated Universal Time"
    },
    {
      value: "GMT Standard Time",
      offset: "0000",
      text: "(UTC) Dublin, Edinburgh, Lisbon, London"
    },
    {
      value: "Greenwich Standard Time",
      offset: "0000",
      text: "(UTC) Monrovia, Reykjavik"
    },
    {
      value: "W. Europe Standard Time",
      offset: "+0100",
      text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    },
    {
      value: "Central Europe Standard Time",
      offset: "+0100",
      text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"
    },
    {
      value: "Romance Standard Time",
      offset: "+0100",
      text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"
    },
    {
      value: "Central European Standard Time",
      offset: "+0100",
      text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb"
    },
    {
      value: "W. Central Africa Standard Time",
      offset: "+0100",
      text: "(UTC+01:00) West Central Africa"
    },
    {
      value: "Namibia Standard Time",
      offset: "+0100",
      text: "(UTC+01:00) Windhoek"
    },
    {
      value: "GTB Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Athens, Bucharest"
    },
    {
      value: "Middle East Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Beirut"
    },
    {
      value: "Egypt Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Cairo"
    },
    {
      value: "Syria Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Damascus"
    },
    {
      value: "E. Europe Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) E. Europe"
    },
    {
      value: "South Africa Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Harare, Pretoria"
    },
    {
      value: "FLE Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"
    },
    {
      value: "Turkey Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Istanbul"
    },
    {
      value: "Israel Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Jerusalem"
    },
    {
      value: "Libya Standard Time",
      offset: "+0200",
      text: "(UTC+02:00) Tripoli"
    },
    {
      value: "Jordan Standard Time",
      offset: "+0300",
      text: "(UTC+03:00) Amman"
    },
    {
      value: "Arabic Standard Time",
      offset: "+0300",
      text: "(UTC+03:00) Baghdad"
    },
    {
      value: "Kaliningrad Standard Time",
      offset: "+0300",
      text: "(UTC+03:00) Kaliningrad, Minsk"
    },
    {
      value: "Arab Standard Time",
      offset: "+0300",
      text: "(UTC+03:00) Kuwait, Riyadh"
    },
    {
      value: "E. Africa Standard Time",
      offset: "+0300",
      text: "(UTC+03:00) Nairobi"
    },
    {
      value: "Iran Standard Time",
      offset: "+0330",
      text: "(UTC+03:30) Tehran"
    },
    {
      value: "Arabian Standard Time",
      offset: "+0400",
      text: "(UTC+04:00) Abu Dhabi, Muscat"
    },
    {
      value: "Azerbaijan Standard Time",
      offset: "+0400",
      text: "(UTC+04:00) Baku"
    },
    {
      value: "Russian Standard Time",
      offset: "+0400",
      text: "(UTC+04:00) Moscow, St. Petersburg, Volgograd"
    },
    {
      value: "Mauritius Standard Time",
      offset: "+0400",
      text: "(UTC+04:00) Port Louis"
    },
    {
      value: "Georgian Standard Time",
      offset: "+0400",
      text: "(UTC+04:00) Tbilisi"
    },
    {
      value: "Caucasus Standard Time",
      offset: "+0400",
      text: "(UTC+04:00) Yerevan"
    },
    {
      value: "Afghanistan Standard Time",
      offset: "+0430",
      text: "(UTC+04:30) Kabul"
    },
    {
      value: "West Asia Standard Time",
      offset: "+0500",
      text: "(UTC+05:00) Ashgabat, Tashkent"
    },
    {
      value: "Pakistan Standard Time",
      offset: "+0500",
      text: "(UTC+05:00) Islamabad, Karachi"
    },
    {
      value: "India Standard Time",
      offset: "+0530",
      text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
    },
    {
      value: "Sri Lanka Standard Time",
      offset: "+0530",
      text: "(UTC+05:30) Sri Jayawardenepura"
    },
    {
      value: "Nepal Standard Time",
      offset: "+0545",
      text: "(UTC+05:45) Kathmandu"
    },
    {
      value: "Central Asia Standard Time",
      offset: "+0600",
      text: "(UTC+06:00) Astana"
    },
    {
      value: "Bangladesh Standard Time",
      offset: "+0600",
      text: "(UTC+06:00) Dhaka"
    },
    {
      value: "Ekaterinburg Standard Time",
      offset: "+0600",
      text: "(UTC+06:00) Ekaterinburg"
    },
    {
      value: "Myanmar Standard Time",
      offset: "+0630",
      text: "(UTC+06:30) Yangon (Rangoon)"
    },
    {
      value: "SE Asia Standard Time",
      offset: "+0700",
      text: "(UTC+07:00) Bangkok, Hanoi, Jakarta"
    },
    {
      value: "N. Central Asia Standard Time",
      offset: "+0700",
      text: "(UTC+07:00) Novosibirsk"
    },
    {
      value: "China Standard Time",
      offset: "+0800",
      text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi"
    },
    {
      value: "North Asia Standard Time",
      offset: "+0800",
      text: "(UTC+08:00) Krasnoyarsk"
    },
    {
      value: "Singapore Standard Time",
      offset: "+0800",
      text: "(UTC+08:00) Kuala Lumpur, Singapore"
    },
    {
      value: "W. Australia Standard Time",
      offset: "+0800",
      text: "(UTC+08:00) Perth"
    },
    {
      value: "Taipei Standard Time",
      offset: "+0800",
      text: "(UTC+08:00) Taipei"
    },
    {
      value: "Ulaanbaatar Standard Time",
      offset: "+0800",
      text: "(UTC+08:00) Ulaanbaatar"
    },
    {
      value: "North Asia East Standard Time",
      offset: "+0900",
      text: "(UTC+09:00) Irkutsk"
    },
    {
      value: "Tokyo Standard Time",
      offset: "+0900",
      text: "(UTC+09:00) Osaka, Sapporo, Tokyo"
    },
    {
      value: "Korea Standard Time",
      offset: "+0900",
      text: "(UTC+09:00) Seoul"
    },
    {
      value: "Cen. Australia Standard Time",
      offset: "+0930",
      text: "(UTC+09:30) Adelaide"
    },
    {
      value: "AUS Central Standard Time",
      offset: "+0930",
      text: "(UTC+09:30) Darwin"
    },
    {
      value: "E. Australia Standard Time",
      offset: "+1000",
      text: "(UTC+10:00) Brisbane"
    },
    {
      value: "AUS Eastern Standard Time",
      offset: "+1000",
      text: "(UTC+10:00) Canberra, Melbourne, Sydney"
    },
    {
      value: "West Pacific Standard Time",
      offset: "+1000",
      text: "(UTC+10:00) Guam, Port Moresby"
    },
    {
      value: "Tasmania Standard Time",
      offset: "+1000",
      text: "(UTC+10:00) Hobart"
    },
    {
      value: "Yakutsk Standard Time",
      offset: "+1000",
      text: "(UTC+10:00) Yakutsk"
    },
    {
      value: "Central Pacific Standard Time",
      offset: "+1100",
      text: "(UTC+11:00) Solomon Is., New Caledonia"
    },
    {
      value: "Vladivostok Standard Time",
      offset: "+1100",
      text: "(UTC+11:00) Vladivostok"
    },
    {
      value: "New Zealand Standard Time",
      offset: "+1200",
      text: "(UTC+12:00) Auckland, Wellington"
    },
    {
      value: "UTC+12",
      offset: "+1200",
      text: "(UTC+12:00) Coordinated Universal Time+12"
    },
    {
      value: "Fiji Standard Time",
      offset: "+1200",
      text: "(UTC+12:00) Fiji"
    },
    {
      value: "Magadan Standard Time",
      offset: "+1200",
      text: "(UTC+12:00) Magadan"
    },
    {
      value: "Kamchatka Standard Time",
      offset: "+1200",
      text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old"
    },
    {
      value: "Tonga Standard Time",
      offset: "+1300",
      text: "(UTC+13:00) Nuku'alofa"
    },
    {
      value: "Samoa Standard Time",
      offset: "+1300",
      text: "(UTC+13:00) Samoa"
    }
  ];

}