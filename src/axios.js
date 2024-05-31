import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-5079b.cloudfunctions.net/api",
  // "http://localhost:5001/clone-5079b/us-central1/api",
}); //THE API (cloud function) URL

export default instance;
