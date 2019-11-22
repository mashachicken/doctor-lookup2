//  ui
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from './DoctorLookup.js'

  $("#userInput").submit(function(event) {
    const location = $("#location").val();
    (async () => {
   let doctorLookup = new DoctorLookups();
   const response = await doctorLookup.getDoctor(location);
   getElements(response);
 })();
  const getElements = function(response) {
    $(".result").html(response)
  }
  })
