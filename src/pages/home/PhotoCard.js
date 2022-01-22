import React, { useState } from "react";
import styled from "styled-components";

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

      <a rel="noreferrer" target="_blank" href={photo.urls.regular}>
        <StyledPhotoCard
          style={loaded ? {} : { display: "none" }}
          onLoad={() => {
            setLoaded(true);
          }}
          className="rounded-xl hover:border-2 hover: border-white"
          src={photo.urls.thumb}
          alt={photo.alt_description}
        />
      </a>
    </>
  );
}

export default PhotoCard;
