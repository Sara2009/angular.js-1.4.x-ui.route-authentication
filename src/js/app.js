'use strict';

define([
    'angular'
], function(angular) {
	console.log('start app.js');
    return angular.module('starter', [])
		.config(['$logProvider', function($logProvider){
			$logProvider.debugEnabled(true);
			/* override the default $log behavior with a decorator to enhace the log level
			$provide.decorator('$log', function ($delegate) {
				//Original methods
				var origInfo = $delegate.info;
				var origLog = $delegate.log;

				//Override the default behavior
				$delegate.info = function () {

					if ($logProvider.debugEnabled())
						origInfo.apply(null, arguments)
				};

				//Override the default behavior
				$delegate.log = function () {

					if ($logProvider.debugEnabled())
						origLog.apply(null, arguments)
				};

				return $delegate;
			});*/
		}])
        .config(['$stateProvider', '$urlRouterProvider', '$requireProvider', function($stateProvider, $urlRouterProvider, $requireProvider) {
			/**
			 * 加载依赖，在$stateProvider的resolve中使用load: loadDeps(...)完成
			 * @param deps
			 * @returns {*[]}
			 */
			/*function loadDeps( deps ) {
				console.debug('start loadDeps');
				return [
					'$q' , function ( $q ) {
						var def = $q.defer();
						require( deps , function (controller) {
							//$controllerProvider.register('LoginCtrl', controller);
							def.resolve();
						} );
						return def.promise;
					}
				];
			}*/
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'modules/login/login.tmpl.html',
                    controller: 'LoginCtrl',
					resolve: {
						deps: $requireProvider.requireJS(['../modules/login/login']),
						data: $requireProvider.requireResolve(['../modules/login/data'])
					}
                })
				.state('home', {
					url: '/home',
					templateUrl: 'modules/home/home.tmpl.html',
					controller: 'HomeCtrl',
					resolve: {
						deps: $requireProvider.requireJS(['../modules/home/home']),
						data: $requireProvider.requireResolve(['../modules/login/data'])
					}
				})
				.state('page1', {
					url: '/page1',
					templateUrl: 'modules/page/page1.tmpl.html',
					controller: 'Page1Ctrl',
					resolve: {
						deps: $requireProvider.requireJS(['../modules/page/page']),
						data: $requireProvider.requireResolve(['../modules/login/data'])
					}
				})
				.state('page2', {
					url: '/page2',
					templateUrl: 'modules/page/page2.tmpl.html',
					controller: 'Page2Ctrl',
					resolve: {
						deps: $requireProvider.requireJS(['../modules/page/page']),
						data: $requireProvider.requireResolve(['../modules/login/data'])
					}
				});
			$urlRouterProvider.otherwise(function($injector) {
				var $state = $injector.get("$state");
				$state.go('login');
			});
        }])
		.run(['$rootScope', 'AUTH_EVENTS', 'AuthenticationService', function($rootScope, AUTH_EVENTS, AuthenticationService){
			console.log(AUTH_EVENTS);
			$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
				if(AuthenticationService.IsNeedAuth(toState.name)) {
					console.log('need auth');
					if(!AuthenticationService.IsAuthenticated()) {
						event.preventDefault();
						AuthenticationService.GoLogin();
					}
				}
				console.log(event);
				console.log(toState);
				console.log(fromState);
				/*var authorizedRoles = next.data.authorizedRoles;
				 if (!AuthService.isAuthorized(authorizedRoles)) {
				 event.preventDefault();
				 if (AuthService.isAuthenticated()) {
				 // user is not allowed
				 $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
				 } else {
				 // user is not logged in
				 $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
				 }
				 }*/
			});


		}]);

});