import Get from "./../Services/Get";
import React from "react";
import Blog from "../Interfaces/Blog";
import ToastContext from "../Layouts/Contexts/ToastContext";
import getResponseInterface from "../Interfaces/getResponseInterface";

export default function Blogs() {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);

  const [, setToastState] = React.useContext(ToastContext);

  React.useEffect(() => {
    Get("blog").then((response: getResponseInterface) => {
      setBlogs(response.data);
      setToastState({
        open: true,
        message: response.message,
        status: response.status,
      });
    });
  }, []);

  return (
    <ul>
      <li> test click </li>
      {blogs.map((blog: Blog, index: number) => {
        return (
          <li key={index}>
            <a
              href={"blog/" + blog.url}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>
                {blog.id}
                <img width={50} src={blog.image} alt={blog.title} />
                {blog.title}
                <button>Show More...</button>
                <small style={{ fontSize: "14px" }}>{blog.created_at}</small>
              </h3>
              <p>{blog.description}</p>
            </a>
          </li>
        );
      })}

      <li>ye liste blogs miarim inja</li>
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
