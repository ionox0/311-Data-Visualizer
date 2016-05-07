(function(){

  var ComplaintsController = function(complaintsService){

    var ctrl = this;

    function _init(){


      complaintsService.getComplaintTypes()
        .then(function(types){

          ctrl.complaint_types = types;

        });


      complaintsService.getComplaints('2015-01-01', '2015-01-31')
        .then(function(complaints){
          ctrl.complaintsData = complaints;
        });


      $('#submit').on('click', function(){

        var startDate = ctrl.start_date;
        var endDate = ctrl.end_date;
        var complaint_type = ctrl.complaint_type;

        complaintsService.getComplaints(startDate, endDate, complaint_type)
          .then(function(complaints){

            ctrl.complaintsData = complaints;

          });

      });

    }

    _init();

  };


  angular.module('App')
    .controller('complaintsController', [
      'complaintsService',
      ComplaintsController
    ]);


})();