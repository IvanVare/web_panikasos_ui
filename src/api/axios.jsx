import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:3331",
  baseURL:
    "https://panikasos-service-faf4fph3ekgybrbv.canadacentral-01.azurewebsites.net",
});
