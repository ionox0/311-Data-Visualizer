(function(){

  var ComplaintFactory = function() {

      var Complaint = (function(){

        this.id = 1;

        return function(data){

          // Todo - get data parsing right:

          this.unique_key = data['Unique.Key'];
          this.created_date = data['Unique.Key'];
          this.closed_date = data['Closed.Date'];
          this.agency = data['Agency'];
          this.agency_name = data['Agency.Name'];
          this.complaint_type = data['Complaint.Type'];
          this.descriptor = data['Descriptor'];
          this.status = data['Status'];
          this.due_date = data['Due.Date'];
          this.resolution_description = data['Resolution.Description'];

          this.address_type = data['Address.Type'];
          this.city = data['City'];
          this.landmark = data['Landmark'];
          this.facility_type = data['Facility.Type'];

          // Location
          this.borough = data['Borough'];
          this.x_coord = data['X.Coordinate..State.plane'];
          this.y_coord = data['Y.Coordinate..State.plane'];
          this.lat = data['latitude'];
          this.lon = data['longitude'];


          this.location_type = data['Location.Type'];
          this.incident_zip = data['Incident.Zip'];
          this.incident_address = data['Incident.Address'];
          this.street_name = data['Street.Name'];

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