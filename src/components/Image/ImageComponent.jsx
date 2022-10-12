import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Mask from "../../assets/photo.png"
const ImageComponent = ({src,title}) => {
  return (
    <>
      <LazyLoadImage
        src={src}
        alt={title}
        height={"100%"}
        effect="blur"
        width={"100%"}
        delayMethod={"debounce"}
        placeholderSrc={Mask}
      />
    </>
  );
}

export default ImageComponent
