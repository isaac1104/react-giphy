import axios from "axios";

export default {
  getData(search) {
    return axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=dc6zaTOxFJmzC`);
  }
}
