'use strict';

define([
    'apps'
], function(angular) {
    console.info('start config constant for authentication');
    console.log(angular);
    return angular.constant('AUTH_EVENTS', {
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    }).constant('USER_ROLES', {
        admin: 'admin_role',
        public: 'public_role'
    });
});