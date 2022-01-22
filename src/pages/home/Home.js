import React, { useEffect } from "react";
import PhotoCard from "./PhotoCard";
import { getPhotos, selectHome } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import useInView from "react-cool-inview";

function Home() {
  const dispatch = useDispatch();
  const homeData = useSelector(selectHome);

  useEffect(() => {
    dispatch(getPhotos(1));
  }, [dispatch]);

  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: "50px 0px",
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      if (homeData.currentPage < homeData.totalPages) {
        dispatch(getPhotos(homeData.currentPage + 1));
      }
    },
  });

  if (["init"].includes(homeData?.status)) {
    return <div>main Loader</div>;
  }

  return (
    <div className="p-4 sm:p-0 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {homeData.photos.map((photo, index) => {
        return (
          <div
            key={photo.id}
            ref={index === homeData.photos.length - 1 ? observe : null}
          >
            <PhotoCard photo={photo} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
