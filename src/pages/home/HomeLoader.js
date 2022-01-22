import React from "react";
import styled from "styled-components";

const StyledPhotoCardLoader = styled.div`
  height: 200px;
  width: 100%;
  background-color: #c4c4c4;
`;

function HomeLoader() {
  let dummy = new Array(30).fill(0);

  return (
    <section className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {dummy.map((item, index) => (
        <StyledPhotoCardLoader
          key={"home_loader_card_" + index}
          className="rounded-xl"
        />
      ))}
    </section>
  );
}

export default React.memo(HomeLoader);
