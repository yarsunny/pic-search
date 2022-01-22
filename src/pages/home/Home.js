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
import { IoFunnelSharp } from "react-icons/io5";
import HomeLoader from "./HomeLoader";

function Home() {
  const dispatch = useDispatch();
  const homeData = useSelector(selectHome);
  const [excludedFiltters, setExcludedFilters] = useState([
    "order_by",
    "color",
  ]);
  const [isShowFilters, setIsShowFilters] = useState(false);
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

  return (
    <div className="p-4 md:p-0">
      {/* Search and Filters */}
      <section>
        <div className="flex mt-16 mb-6">
          <Search
            query=""
            onChangeQuery={(query) => {
              setExcludedFilters(query ? [] : ["order_by", "color"]);
              dispatch(setSearch(query));
              dispatch(getPhotos(1));
            }}
          />
          <button
            onClick={() => {
              setIsShowFilters(!isShowFilters);
            }}
            type="button"
            className="btn bg-gray-400 hover:bg-gray-100 hover:text-gray-500 text-gray-200 ml-4 px-10 py-1 rounded-full text-sm"
          >
            <span className="hidden md:block">Filters</span>
            <IoFunnelSharp className="block md:hidden" />
          </button>
        </div>
        {isShowFilters && (
          <Filters
            defaultValues={initialState.filters}
            hide={excludedFiltters}
            onClearFilters={() => {
              dispatch(clearFilters());
              dispatch(getPhotos(1));
            }}
            onChangeFilters={(filters) => {
              dispatch(setFilters(filters));
              dispatch(getPhotos(1));
            }}
          />
        )}
      </section>

      {/* Photos */}
      {homeData.status === "loading" && homeData.page === 1 && <HomeLoader />}
      <section className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
      </section>
    </div>
  );
}

export default Home;
