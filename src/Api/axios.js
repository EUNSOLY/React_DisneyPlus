import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "27eae37f1865ef402b7ca7b23aeb6c3e",
    language: "ko-KR",
  },
});

export default instance;
