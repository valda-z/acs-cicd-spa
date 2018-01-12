'use strict';

angular.module('myApp.home', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope', '$http', '$timeout', '$modal', function($scope, $http, $timeout, $modal) {

    $scope.data = {
        item: { comment: "", category: "" },
        itemlike: { id: "", count: 0 },
        items: null,
        comments: null,
        isedit: false
    };

    $scope.loadData = function() {
        myUtils.showPleaseWait();
        $http.get('./api/todo/ToDoList').success(function(data) {
            $scope.data.items = data;
        }).finally(function(data) {
            myUtils.hidePleaseWait();
        });
    };

    $scope.addItem = function(item) {
        $http.post('./api/todo/ToDoAdd', item).success(function(data) {}).finally(function(data) {
            $scope.loadData();
            $scope.data.item = { comment: "", category: "" };
        });
    };

    $scope.editItem = function(item) {
        $scope.data.isedit = true;
        $scope.data.item = item;
        $scope.data.itemlike.id = item.id;
        myUtils.showPleaseWait();
        $http.post('./api/like/Like', $scope.data.itemlike).success(function(data) {
            $scope.data.itemlike = data;
        }).finally(function(data) {
            myUtils.hidePleaseWait();
        });
    };

    $scope.editItemLike = function() {
        $http.post('./api/like/LikeAdd', $scope.data.itemlike).success(function(data) {
            $scope.data.itemlike = data;
        }).finally(function(data) {});
    };

    $scope.editItemSave = function(item) {
        $http.post('./api/todo/ToDo', item).success(function(data) {}).finally(function(data) {
            $scope.data.isedit = false;
            $scope.data.item = { comment: "", category: "" };
            $scope.loadData();
        });
    };

    $scope.editItemCancel = function(item) {
        $scope.data.isedit = false;
        $scope.data.item = { comment: "", category: "" };
    };

    $scope.loadData();

}]);