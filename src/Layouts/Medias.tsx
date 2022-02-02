import React from "react";
import MediasPropsInterface from "../Interfaces/MediasPropsInterface";
import Loading from "./Loading";
import CustomeAlert from "./CustomeAlert";
import Media from "./Media";
import LazyLoad from "react-lazyload";
import { FixedSizeList } from "react-window";

export default function Medias(props: MediasPropsInterface) {
  const { loading, items } = props;

  if (loading) return <Loading type="media" />;

  if (!items.length)
    return <CustomeAlert message="No Item Found!" status="info" />;

  const Row = ({ index, style }: { index: any; style: any }) => (
    <div style={style}>
      <Media item={items[index]} />
    </div>
  );

  const Example = () => (
    <FixedSizeList
      height={350}
      itemCount={items.length}
      itemSize={300}
      width={400}
    >
      {Row}
    </FixedSizeList>
  );

  return (
    <>
      <Example />
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
