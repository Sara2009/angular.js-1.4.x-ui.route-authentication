'use strict';

define([
    'angular'
], function(angular) {
	console.log('start app.js');
    return angular.module('starter', ['ui.router'])
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
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			/**
			 * º”‘ÿ“¿¿µ
			 * @param deps
			 * @returns {*[]}
			 */
			function loadDeps( deps ) {
				console.debug('start loadDeps');
				return [
					'$q' , function ( $q ) {
						var def = $q.defer();
						require( deps , function () {
							def.resolve();
						} );
						return def.promise;
					}
				];
			}
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'modules/login/login.tmpl.html',
                    controller: 'LoginCtrl',
					resolve: {
						load: loadDeps(['../modules/login/login'])
					}
                })
        }]);
});