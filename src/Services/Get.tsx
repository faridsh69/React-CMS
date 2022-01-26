import axios from "axios";
import getResponseInterface from "../Interfaces/getResponseInterface";

export default async function Get(modelSlug: string): Promise<any> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const getResponse: getResponseInterface = {
    data: [],
    message: "Something went wrong!",
    status: "error",
  };

  return axios
    .get(apiUrl + modelSlug)
    .then(function (response) {
      getResponse.data = response.data.data;
      getResponse.message = response.data.message;
      getResponse.status = "success";
      return getResponse;
    })
    .catch(function (error) {
      if (error.response) {
        getResponse.message = error.response.data.message;
      }
      return getResponse;
    })
    .finally(function () {});
}
