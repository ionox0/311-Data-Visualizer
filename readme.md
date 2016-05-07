## NYC 311 Complaints data for 2015 Visualizer


AMAZON LINUX POSTGRES
311 Database & webapp setup:

sudo yum remove postgresql postgresql-server
sudo rm -rf /var/lib/psql
sudo yum install postgresql postgresql-server
sudo service postgresql start

createdb 311
psql 311

create table complaints (id integer, created_date timestamp, closed_date timestamp, agency varchar(50), agency_name varchar(100), complaint_type varchar (100), descriptor varchar(200), location_type varchar(50), incident_zip varchar(50), incident_address varchar(100), street_name varchar(100), address_type varchar(50), city varchar(50), landmark varchar(50), facility_type varchar(50), status varchar(50), due_date varchar(50), resolution_description varchar(500), resolution_action_updated_date varchar(50), community_board varchar(50), borough varchar(50), x_coord_state_plane varchar(50), y_coord_state_plane varchar(50), latitude varchar(50), longitude varchar(50), location varchar(50));

scp -i <keyfile> 2015.csv ec2-user@<your instance>:~

copy complaints from '/Users/ianjohnson/Desktop/311/2015.csv' delimiter ',' csv header;

