//  ui
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from './DoctorLookup.js'

  $("#userInput").submit(function(event) {
    const location = $("#location").val();
    (async () => {
   let bikeIndex = new BikeIndex();
   const response = await bikeIndex.getBike(city);
   getElements(response);
 })();
  const getElements = function(responce) {
    $(".result")
  }
  })
