import React, { useState } from "react";
import styled from "styled-components";
import classNames from "classnames";

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

function PhotoCard({ photo, disabled }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <PhotoCardLoader className="rounded-xl" />}

      <a
        rel="noreferrer"
        target="_blank"
        href={photo.urls.regular}
        onClick={(e) => {
          disabled && e.preventDefault();
        }}
      >
        <StyledPhotoCard
          style={loaded ? {} : { display: "none" }}
          onLoad={() => {
            setLoaded(true);
          }}
          className={classNames("rounded-xl", {
            "hover:border-2 hover:border-white": !disabled,
            "cursor-not-allowed": disabled,
          })}
          src={photo.urls.thumb}
          alt={photo.alt_description}
        />
      </a>
    </>
  );
}

export default PhotoCard;
