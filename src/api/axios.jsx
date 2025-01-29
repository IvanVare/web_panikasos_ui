import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-3-82-247-114.compute-1.amazonaws.com:3331",
});
