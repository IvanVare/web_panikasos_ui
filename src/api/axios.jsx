import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/http://ec2-3-82-247-114.compute-1.amazonaws.com:333",
});
