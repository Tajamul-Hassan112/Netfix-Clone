// axios.jsx
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer d37102b7b785969dd007429b3c1751c3`,
  },
});

export default instance;
