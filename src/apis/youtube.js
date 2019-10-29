import axios from "axios";
const KEY = "AIzaSyBkmtDrIQRwoVNNXWnb_FKZfXeHKuYSgms";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};
