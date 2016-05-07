(function(){

  var ComplaintsService = function($q, $http, ComplaintModel){

    function getComplaints(startDate, endDate, complaint_type){
      var deferred = $q.defer();

      var req = {
        url: '/complaints',
        params: {
          start: startDate,
          end: endDate
        }
      };

      if (complaint_type) req.params.complaint_type = complaint_type.complaint_type; // todo...

      $http(req)
        .then(function(resp){
          var complaintsDat = resp.data.rows;
          var complaints = [];
          for (var i = 1; i < complaintsDat.length; i++) {
            complaints.push(new ComplaintModel(complaintsDat[i]));
          }
          deferred.resolve(complaints);
        });

      return deferred.promise;
    }


    function getComplaintTypes(){
      var deferred = $q.defer();

      var req = {
        url: '/complaint_types'
      };

      $http(req)
        .then(function(resp){
          var dat = resp.data.rows;
          deferred.resolve(dat);
        });

      return deferred.promise;

    }

    return {
      getComplaints: getComplaints,
      getComplaintTypes: getComplaintTypes
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