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
    response.data.forEach(function(element) {
    console.log("ff")
    $(".name").append(` <tr><td>${element.profile.first_name}</td></tr>`)
  });
};
});
