import axios from "axios";



export default axios.create({
  baseURL: "https://api.imgur.com/3/gallery",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Client-ID 3c9187c5272944b"
  }
});