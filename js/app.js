define(['uiRouter','category','home','mine','shopcar','gift'],function(){
	var app = angular.module('myModule',['ui.router','categoryModule','homeModule','giftModule','mineModule','shopcarModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/category');
		})
	;
});
