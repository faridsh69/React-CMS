import axios from "axios";

export default async function Get(modelSlug: string) {
  const apiUrl = process.env.REACT_APP_API_URL;

  function toastMessage(message: string, status: string) {
    console.log(message);
  }
  return axios
    .get(apiUrl + modelSlug)
    .then(function (response) {
      toastMessage(response.data.message, "success");
      return response.data.data;
    })
    .catch(function (error) {
      toastMessage(error.response.data.message, "error");
    })
    .finally(function () {});
}
