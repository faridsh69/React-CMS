import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Meta(props: any) {
  const description =
    "React CMS is providing structure and full features needed in most of websites";
  const image =
    "http://cms2.test/temp-laravel-cms-static-files/photos/logo.png";
  const title = props.title;
  const domain = "react-cms.com";
  const url = "react-cms.com/blog";
  const favicon =
    "http://cms2.test/temp-laravel-cms-static-files/photos/favicon.png";
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Farid Shahidi" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="keywords" content="React CMS"></meta>

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:locale:alternate" content="en" />
        <meta property="og:site_name" content={domain} />
        <meta property="og:url" content={url} />

        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:creator" content="Farid Shahidi" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:site" content={url} />

        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
    </HelmetProvider>
  );
}
