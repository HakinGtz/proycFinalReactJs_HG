import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/HakinGtz/Apiproduct/db", // THE API(cloud function) URL
  //"http://localhost:5001/clone-961f9/us-central1/api"
});

export default instance;
