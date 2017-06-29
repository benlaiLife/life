/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter'],function  () {
	angular.module("giftModule",['ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("gift",{
                url:"/gift",
                templateUrl:"component/gift/gift.html",
                controller:"giftCtrl"
            })
    })
    .controller("giftCtrl",["$scope",function ($scope) {
        $scope.title="充值赠礼"
    }])
})
