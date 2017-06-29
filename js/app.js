define(['uiRouter','category','home','mine','shopcar','gift','css'],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','categoryModule','homeModule','giftModule','mineModule','shopcarModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
	;
});
