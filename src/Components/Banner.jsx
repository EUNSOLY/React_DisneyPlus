import React, { useEffect } from "react";
import axios from "../Api/axios";
import requests from "../Api/requests";
const Banner = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);
  };
  return <div>Banner</div>;
};

export default Banner;
