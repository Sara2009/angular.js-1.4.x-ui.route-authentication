'use strict';
require.config({
    paths: {
        angular: '../../node_modules/angular/angular',
        angularRoute: '../../node_modules/angular-ui-router/build/angular-ui-router',
        angularMocks: '../../node_modules/angular-mocks/angular-mocks',
        apps: './app'
    },
    shim: {
        'angular': {
            'exports': 'angular',
            init : function () {
                var _module = angular.module;
                angular.module = function () {
                    var newModule = _module.apply( angular , arguments );
                    if ( arguments.length >= 2 ) {
                        newModule.config( [
                            '$controllerProvider' ,
                            '$compileProvider' ,
                            '$filterProvider' ,
                            '$provide' ,
                            function ( $controllerProvider , $compileProvider , $filterProvider , $provide ) {
                                newModule.controller = function () {
                                    $controllerProvider.register.apply( this , arguments );
                                    return this;
                                };
                                newModule.directive = function () {
                                    $compileProvider.directive.apply( this , arguments );
                                    return this;
                                };
                                newModule.filter = function () {
                                    $filterProvider.register.apply( this , arguments );
                                    return this;
                                };
                                newModule.factory = function () {
                                    $provide.factory.apply( this , arguments );
                                    return this;
                                };
                                newModule.service = function () {
                                    $provide.service.apply( this , arguments );
                                    return this;
                                };
                                newModule.provider = function () {
                                    $provide.provider.apply( this , arguments );
                                    return this;
                                };
                                newModule.value = function () {
                                    $provide.value.apply( this , arguments );
                                    return this;
                                };
                                newModule.constant = function () {
                                    $provide.constant.apply( this , arguments );
                                    return this;
                                };
                                newModule.decorator = function () {
                                    $provide.decorator.apply( this , arguments );
                                    return this;
                                };
                            }
                        ] );
                    }
                    return newModule;
                };
            }
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'angularRoute',
    'apps'
], function(angular, angularRoute, apps) {
    console.log('start boot.js');
    angular.module('main', ['ui.router', 'starter'])
    angular.element().ready(function() {
        angular.bootstrap(document, ['main'])
    })
})


