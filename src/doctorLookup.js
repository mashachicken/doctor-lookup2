export class DoctorLookups {
  async getDoctor(location) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("there was an error with your request:" + error.message);
      return false;
    }
  }
}
