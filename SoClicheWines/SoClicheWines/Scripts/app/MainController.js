var app = angular.module('myApp');
//var mainController = function ($scope) {
//    $scope.name = 'hello';
//};
app.controller('MainController', ['$scope', function ($scope) {
    $scope.name = 'hello';    
    $scope.mood = function (value) { return value == '0' ? 'Bad' : 'Good'; }
}]);

//app.controller('MainController', ['$scope', function ($scope) {
//    $scope.mood = function (value) { return value == '0' ? 'Bad' : 'Good'; }
//}]);
//app.controller('MainController', ['$scope', mainController]);