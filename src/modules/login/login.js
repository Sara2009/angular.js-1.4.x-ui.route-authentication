'use strict';

define([
    'apps'
], function(controllers, $log) {
    console.log('start login.js');
    console.log(controllers);
    return controllers.controller('LoginCtrl', ['$scope', '$log', 'data', function($scope, $log, data){
        $log.log(data)
    }]);
});