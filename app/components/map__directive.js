angular.module('App.Directives', [])
  .directive('map', ['$window', function($window){

    return {
      restrict: 'E',

      scope: {
        complaintsData: '='
      },

      link: function($scope, $elem, ctrl){

        var map;
        var initialLocation = new google.maps.LatLng(47.6101, -122.3420);;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
          });
        }

        var mapOptions = {
          zoom: 15,
          center: initialLocation
        };


        var markers = [];

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


        $scope.$watch( function(){

          return $scope.complaintsData;

        }, function(){



          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }




          function addComplaintMarker(complaint) {
            var myLatlng = new google.maps.LatLng(complaint.lat, complaint.lon);

            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: 'Click to zoom'
            });

            markers.push(marker);

          }

          if ($scope.complaintsData){

            for (var i = 0; i < $scope.complaintsData.length; i++){
              addComplaintMarker($scope.complaintsData[i]);
            }


          }








        });



      },

      templateUrl: '/templates/map.html'
    }

  }]);

