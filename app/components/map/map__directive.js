angular.module('App.Directives', [])
  .directive('map', ['$window', function($window){

    return {
      restrict: 'E',

      scope: {
        complaintsData: '='
      },

      link: function($scope, $elem, ctrl){

        var initialLocation = new google.maps.LatLng(40.806186, -73.961727);
        var mapOptions = {
          zoom: 15,
          center: initialLocation
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var infowindow = new google.maps.InfoWindow();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
          });
        }

        var markers = [];

        $scope.$watch(function(){
          return $scope.complaintsData;
        }, function(){
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }

          if ($scope.complaintsData){
            for (var i = 0; i < $scope.complaintsData.length; i++){
              addComplaintMarker($scope.complaintsData[i]);
            }
          }
        });



        function addComplaintMarker(complaint) {
          var myLatlng = new google.maps.LatLng(complaint.lat, complaint.lon);

          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Click to zoom',
            data: complaint
          });

          // Add the popup window
          google.maps.event.addListener(marker,'click', function(){
            infowindow.setContent(complaint.getDisplayHtml());
            infowindow.open(map, marker);
          });

          markers.push(marker);
        }


      },
      templateUrl: '/templates/map.html'

    }


  }]);

