(function(){

  var ComplaintsController = function(complaintsService){

    var ctrl = this;

    function _init(){

      complaintsService.getComplaints()
        .then(function(complaints){
          ctrl.complaintsData = complaints;
        });



      $('#submit').on('click', function(){

        var startDate = $('#start-date').val();
        var endDate = $('#end-date').val();

        console.log(startDate, endDate);

        complaintsService.getComplaints(startDate, endDate)
          .then(function(complaints){

            console.log('returned complaints: ', complaints);
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