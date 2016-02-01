define(['apps'], function(){
  return ['$q', '$timeout', function($q, $timeout){
    var deferred = $q.defer();
    $timeout(function(){
      deferred.resolve('data1');
    }, 1000);
    return deferred.promise;
  }]
});