/**
 * Created by 201512070113 on 2016/2/24.
 */
'use strict';

define([
    'apps'
], function(controllers, $log) {
    return controllers.controller('Page1Ctrl', ['$scope', '$log', 'data', function($scope, $log, data){
        $log.log(data)
    }]).controller('Page2Ctrl', ['$scope', '$log', 'data', function($scope, $log, data){
        $log.log(data)
    }]);
});