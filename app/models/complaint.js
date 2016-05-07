(function(){

  var ComplaintFactory = function() {

      var Complaint = (function(){

        return function(data){

          this.id = data['id'];
          this.created_date = moment(data['created_date']);
          this.closed_date = moment(data['closed_date']);
          this.response_time = moment.duration(this.closed_date.diff(this.created_date)).asHours();
          this.response_time = Math.round(this.response_time * 100) / 100; // (two decimal places)

          this.agency = data['agency'];
          this.agency_name = data['agency_name'];
          this.complaint_type = data['complaint_type'];
          this.descriptor = data['descriptor'];
          this.status = data['status'];
          this.due_date = data['due_date'];
          this.resolution_description = data['resolution_description'];

          this.address_type = data['address_type'];
          this.city = data['city'];
          this.landmark = data['landmark'];
          this.facility_type = data['facility_type'];

          // Location
          this.borough = data['borough'];
          this.x_coord = data['x_coord_state_plane'];
          this.y_coord = data['y_coord_state_plane'];
          this.lat = data['latitude'];
          this.lon = data['longitude'];


          this.location_type = data['location_type'];
          this.incident_zip = data['incident_zip'];
          this.incident_address = data['incident_address'];
          this.street_name = data['street_name'];



          this.getDisplayText = function(){
            var str = '';
            str += formatHtml('Date Created: ', this.created_date.format('MMMM Do YYYY, h:mm:ss a'));
            str += formatHtml('Date Closed: ', this.closed_date.format('MMMM Do YYYY, h:mm:ss a'));

            str += formatHtml('Response Time: ', this.response_time + ' hours');

            str += formatHtml('Reporting Agency: ', this.agency);
            str += formatHtml('Complaint Type: ', this.complaint_type);
            str += formatHtml('Address: ', this.incident_address);

            str += formatHtml('Description: ', this.descriptor);

            return str;
          };

          function formatHtml(title, str){
            return '<h3>' + title + '&nbsp;' + str + '</h3>';
          }

        }

      })();

      return Complaint

  };


  angular
    .module('App')
    .factory('ComplaintModel', [
      ComplaintFactory
    ]);


})();