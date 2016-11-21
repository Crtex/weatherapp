app.factory('weatherService', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {
  var listUrl = 'https://api.worldweatheronline.com/premium/v1/weather.ashx?format=json&key=' + appConfig.weatherApiKey + '&lang=ru&q=';
  return {
    getWeatherByCity: function (city) {
      var deferred = $q.defer();
      $http.get(listUrl + city).success(function (data) {
        deferred.resolve(data);
      }).error(function (data) {
        deferred.reject(data);
      });
      return deferred.promise;
    }
  };
}]);