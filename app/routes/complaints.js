(function(){

  var ComplaintsController = function(complaintsService){

    var ctrl = this;

    function _init(){
      // Fetch complaint types list
      complaintsService.getComplaintTypes()
        .then(function(types){
          ctrl.complaint_types = types;
        });

      // Show some initial data
      complaintsService.getComplaints('2015-01-01', '2015-01-31')
        .then(function(complaints){
          ctrl.complaintsData = complaints;
        });

      // Listen for button press
      $('#submit').on('click', function(){
        ctrl.loading = true;

        var startDate = ctrl.start_date;
        var endDate = ctrl.end_date;
        var complaint_type = ctrl.complaint_type;

        complaintsService.getComplaints(startDate, endDate, complaint_type)
          .then(function(complaints){
            ctrl.complaintsData = complaints;
            ctrl.loading = false;
          },function(err){
            console.log(err);
            ctrl.loading = false;
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