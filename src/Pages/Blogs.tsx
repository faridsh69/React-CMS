import axios from "axios";

export default function Blogs() {
  const apiUrl = process.env.REACT_APP_API_URL;

  async function getDataa() {
    // var blogs = await getData();
    // console.log(blogs);
    axios
      .get(apiUrl + "blog/1")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.data.message);
        console.log(error.response.status);
      })
      .finally(function () {
        // always executed
      });
  }
  return (
    <ul onClick={() => getDataa()}>
      <li> ye liste blogs miarim inja</li>
      <li> eyne instagram mikonim, </li>
      <li> on balash ham category ha be sorate reyli hastan</li>
      <li> /blogs </li>
      <li> /categories/blog </li>
      <li> /tags/blog</li>
      <li> in blogs ha ye sorting dare</li>
      <li> ye done search ham bezarim barash</li>
      <li> vase pagination 2 ta kar bayad kard </li>
      <li>aval in ke pagination ro user entekhab mikone</li>
      <li>on pain ye tabi darim be esme auto-pagination </li>
      <li>toe on tabe liste blog ha ro neshon midim,</li>
      <li>scroll mikone pain bishtar blog miad </li>
      <li> image hae blog ha hamegi lazy loading daran </li>
      <li>
        vaghti ke ziad load mikone pain o image ziad load mishe recycler mikhaim{" "}
      </li>
      <li>on pain ke tabe dge ham darim be esme table </li>
      <li> toe table datae blog ha ro neshon midim</li>
    </ul>
  );
}
