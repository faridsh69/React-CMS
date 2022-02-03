import axios from "axios";
import AxiosResponseInterface from "../Interfaces/AxiosResponseInterface";

export default async function Get(
  url: string
): Promise<AxiosResponseInterface> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const AxiosResponse: AxiosResponseInterface = {
    data: [],
    message: "Something went wrong!",
    status: "error",
  };

  return axios
    .get(apiUrl + url)
    .then(function (response) {
      AxiosResponse.data = response.data.data;
      AxiosResponse.message = response.data.message;
      AxiosResponse.status = response.data.status;

      return AxiosResponse;
    })
    .catch(function (error) {
      if (error.response) {
        AxiosResponse.message = error.response.data.message;
      }

      return AxiosResponse;
    });
}
