'use strict';

define([
    'apps',
    'services/AuthenticationService'
], function(controllers) {
    console.log('start home.js');
    console.log(controllers);
    return controllers.controller('HomeCtrl', ['$scope', '$log', 'AuthenticationService', '$state', function($scope, $log, AuthenticationService){
        $log.log('start HomeCtrl');

    }]);
});