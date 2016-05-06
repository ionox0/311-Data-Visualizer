(function(){


  var ComplaintsService = function($q, $http, ComplaintModel){

    function getComplaints(startDate, endDate){
      deferred = $q.defer();

      var req = {
        url: '/complaints',
        params: {
          start: startDate,
          end: endDate
        }
      };

      $http(req)
        .then(function(resp){

          complaintsDat = resp.data.rows;

          var complaints = [];
          for (var i = 1; i < complaintsDat.length; i++) {
            complaints.push(new ComplaintModel(complaintsDat[i]));
          }

          deferred.resolve(complaints);
        });

      return deferred.promise;
    }


    return {
      getComplaints: getComplaints
    }


  };



  angular.module('App')
    .service('complaintsService', [
      '$q',
      '$http',
      'ComplaintModel',
      ComplaintsService
  ]);


})();