require.config({
	paths: {
		'app': 'js/app',
		'angular': 'js/libs/angular-1.6.4.min',
		'uiRouter': 'js/libs/angular-ui-router-0.4.2.min',
		'swiper': 'js/libs/swiper.min',
		'category': 'component/category/category',
		'gift': 'component/gift/gift',
		'home': 'component/home/home',
		'mine': 'component/mine/mine',
		'shopcar': 'component/shopcar/shopcar',
	},
	shim: {
		'uiRouter': {
			deps: ['angular']
		},
		'gift':['uiRouter'],
		'home':['uiRouter'],
		'mine':['uiRouter'],
		'shopcar':['uiRouter'],
		'category': {
			deps: ['uiRouter']
},
		'app': {
			deps: ['uiRouter']
		}
	}

});

require(['app'],function(){
		angular.bootstrap(document, ['myModule']);
})
