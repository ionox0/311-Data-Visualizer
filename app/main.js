!function(){

  angular.module('App.Complaints', []);
  // Todo - dependency ordering...
  angular.module('App.Directives');

  var App = angular.module('App', [
    'ngRoute',
    'App.Directives',
    'App.Complaints'
  ]);

}();

