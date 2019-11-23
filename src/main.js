//  ui
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookups } from './doctorLookup.js'

  $("#userInput").submit(function(e) {
    e.preventDefault()
    const location = $("#location").val();
    (async () => {
   let doctorLookup = new DoctorLookups();
   const response = await doctorLookup.getDoctor(location);
   getElements(response);
 })();
  const getElements = function(response) {
    response.data.forEach(function(doctor) {
    console.log("ff")
    $(".name").append(`<tr><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td><td>${doctor.practices[0].visit_address.city}</td><td>${doctor.practices[0].phones[0].number}</td> <td>${doctor.practices[0].accepts_new_patients}</td></tr>`)
  });
};
});
