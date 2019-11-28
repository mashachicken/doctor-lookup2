import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookups } from './doctorLookup.js'

$("#userInput").submit(function(e) {
  e.preventDefault()
  const location = $("#location").val();
  const condition = $("#condition").val();
  const name = $("#name").val();
  (async () => {
    let doctorLookup = new DoctorLookups();
    const response = await doctorLookup.getDoctor(location, condition, name);
    getElements(response);
  })();
  const getElements = function(response) {
    $(".docs").html("");
    if (response.data.length ===0) {
      alert("Sorry, no doctors match search criterias")
    }
    response.data.forEach(function(doctor) {
      $(".docs").append(`<tr><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td><td>${doctor.practices[0].visit_address.city}</td><td>${doctor.practices[0].phones[0].number}</td> <td>${doctor.practices[0].accepts_new_patients}</td></tr>`)
    });
  };
});
