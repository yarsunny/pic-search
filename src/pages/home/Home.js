import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import {
  getPhotos,
  selectHome,
  setSearch,
  setFilters,
  clearFilters,
  initialState,
} from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import useInView from "react-cool-inview";
import Search from "../../components/Search";
import Filters from "../../components/Filters";

function Home() {
  const dispatch = useDispatch();
  const homeData = useSelector(selectHome);
  const [filtesToHide, setFiltersToHide] = useState(["order_by", "color"]);
  useEffect(() => {
    dispatch(getPhotos(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: "50px 0px",
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      if (homeData.page < homeData.totalPages) {
        dispatch(getPhotos(homeData.page + 1));
      }
    },
  });

  // Renders
  if (["init"].includes(homeData?.status)) {
    return <div>main Loader</div>;
  }

  return (
    <>
      <div>
        <Search
          query=""
          onChangeQuery={(query) => {
            setFiltersToHide(query ? [] : ["order_by", "color"]);
            dispatch(setSearch(query));
            dispatch(getPhotos(1));
          }}
        />
        <Filters
          defaultValues={initialState.filters}
          hide={filtesToHide}
          onClearFilters={() => {
            dispatch(clearFilters());
            dispatch(getPhotos(1));
          }}
          onChangeFilters={(filters) => {
            dispatch(setFilters(filters));
            dispatch(getPhotos(1));
          }}
        />
      </div>
      <div className="p-4 md:p-0 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
    </>
  );
}

export default Home;
