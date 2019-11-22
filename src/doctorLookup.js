export default class DoctorLookup {
  async getDoctor() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=${lat}%2C${long}%2C50&user_location=${lat}%2C${long}&skip=0&limit=50&user_key=${process.env.exports.apiKey}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("there was an error with your request:" + error.message);
      return false;
    }
  }
}
