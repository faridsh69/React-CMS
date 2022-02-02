import React from "react";
import MediasPropsInterface from "../Interfaces/MediasPropsInterface";
import Loading from "./Loading";
import CustomeAlert from "./CustomeAlert";
import Media from "./Media";
// import LazyLoad from "react-lazyload";
import { FixedSizeList } from "react-window";

export default function Medias(props: MediasPropsInterface) {
  const loading = props.loading;
  const items = props.items;

  if (loading) return <Loading type="media" />;

  if (!items.length)
    return <CustomeAlert message="No Item Found!" status="info" />;

  return (
    <>
      <FixedSizeList
        height={350}
        itemCount={items.length}
        itemSize={330}
        width={400}
      >
        {({ index, style }: { index: number; style: React.CSSProperties }) => (
          <div style={style}>
            <Media item={items[index]} />
          </div>
        )}
      </FixedSizeList>
      {/* {items.map((item, index: number) => {
        return (
          <React.Fragment key={index}>
            <LazyLoad height={300} once={true}>
              <Media item={item} />
            </LazyLoad>
          </React.Fragment>
        );
      })} */}
    </>
  );
}
