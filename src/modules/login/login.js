'use strict';

define([
    'apps',
    'services/AuthenticationService'
], function(controllers) {
    console.log('start login.js');
    console.log(controllers);
    return controllers.controller('LoginCtrl', ['$scope', '$log', 'AuthenticationService', '$state', function($scope, $log, AuthenticationService, $state){
        $log.log(AuthenticationService);
        $scope.login = function(){
            var user = $scope.user;
            AuthenticationService.Login(user.username, user.password, function(res){
                if( res.success) {
                    AuthenticationService.SetCredentials(user.username, user.password);
                    $state.go('home');

                } else {

                }
            })
        }

    }]);
});