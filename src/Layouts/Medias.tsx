import React from "react";
import MediasPropsInterface from "../Interfaces/MediasPropsInterface";
import Loading from "./Loading";
import CustomeAlert from "./CustomeAlert";
import Media from "./Media";

export default function Medias(props: MediasPropsInterface) {
  const { loading, items } = props;

  if (loading) return <Loading type="media" />;

  if (!items.length)
    return <CustomeAlert message="No Item Found!" status="info" />;

  return (
    <>
      {items.map((item, index: number) => {
        return (
          <React.Fragment key={index}>
            <Media item={item} />
          </React.Fragment>
        );
      })}
    </>
  );
}
