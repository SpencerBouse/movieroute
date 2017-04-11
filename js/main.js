(function() {
    'use strict';

    angular
    .module('taco', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

      $urlRouterProvider.otherwise('home');

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
		        controller: 'mainController',
		        controllerAs: 'vm'
		      }
		   }
	    })
	    .state('allItems', {
	      url: '/blogs/:id',
	      views: {
		      'content': {
		        templateUrl: '../partials/allItems.html',
		        controller: 'mainController',
		        controllerAs: 'vm'
		      }
		   }
	    })
	    // .state('blogs', {
	    //   url: '/blogs',
	    //   views: {
		  //     'content': {
		  //       templateUrl: '../partials/blogs.html',
		  //       controller: 'BlogController',
		  //       controllerAs: 'vm'
		  //     }
		  //  }
	    // })
	    // .state('login', {
	    //   url: '/login',
	    //   views: {
		  //     'content': {
		  //       templateUrl: '../partials/login.html',
		  //       controller: 'LoginController',
		  //       controllerAs: 'vm'
		  //     }
		  //  }
	    // });

    });

})();
