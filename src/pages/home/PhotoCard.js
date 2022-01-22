import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react/cjs/react.development";

const StyledPhotoCard = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
`;

const PhotoCardLoader = styled.div`
  height: 200px;
  width: 100%;
  background-color: #c4c4c4;
`;

function PhotoCard({ photo }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <PhotoCardLoader className="rounded-xl" />}

      <StyledPhotoCard
        style={loaded ? {} : { display: "none" }}
        onLoad={() => {
          setLoaded(true);
        }}
        className="rounded-xl"
        src={photo.urls.thumb}
        alt={photo.alt_description}
      />
    </>
  );
}

export default PhotoCard;
