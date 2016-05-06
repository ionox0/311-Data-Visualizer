!function(){

  angular.module('App.Complaints')
    .config(['$routeProvider',

      function($routeProvider) {

        $routeProvider.
        when('/complaints', {
          templateUrl: 'templates/complaints_template.html',
          controller: 'complaintsController',
          controllerAs: 'ctrl'
        }).

        otherwise({
          redirectTo: '/complaints'
        });

      }

    ]);

}();