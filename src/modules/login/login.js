'use strict';

define([
    'angular'
], function(controllers, $log) {
    console.log('start login.js');
    return controllers.module('starter').controller('LoginCtrl', ['$scope', '$log', function($scope, $log){
        $log.log($scope)
    }])
});