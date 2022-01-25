import axios from "axios";

export default async function Get(modelSlug: string) {
  const apiUrl = process.env.REACT_APP_API_URL;
  return axios
    .get(apiUrl + modelSlug)
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      console.log(error.response.status);
    })
    .finally(function () {});
}
