/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter'],function  () {
	angular.module("homeModule",[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("home",{
                url:"/home",
                templateUrl:"component/home/home.html",
                controller:"homeCtrl"
            })
    })
    .controller("homeCtrl",["$scope",'$http',function ($scope,$http) {
        $scope.title="首页";
//      $http.get('json/home.json')
    }])
})
