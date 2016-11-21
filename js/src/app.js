var app = angular.module('weatherApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/index.html',
        controller: 'weatherCtrl'
    });
});

app.constant('appConfig', {
    weatherApiKey: 'b16af12ed57f4639a20180400162011',
});

app.run(['$rootScope', function($rootScope) {

}]);

