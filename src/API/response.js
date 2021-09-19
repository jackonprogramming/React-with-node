import { BASEURL } from "./apiContants";
import axios from "axios";

export const getMessage = async (url) => {
  return await axios
    .get(BASEURL + url)
    .then((res) => {
      return res;

      // const persons = res.data;
      // this.setState({ persons });
    })
    .catch(() => {
      return "can't get data";
    });
};

export const postMessage = async (url) => {
  return await axios
    .post(BASEURL + url)
    .then((res) => {
      return res;

      // const persons = res.data;
      // this.setState({ persons });
    })
    .catch(() => {
      return "can't get data";
    });
};
