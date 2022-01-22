import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function Filters({ onClearFilters, onChangeFilters, defaultValues, hide }) {
  const { register, watch, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      onChangeFilters(value)
    );
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  return (
    <>
      <form>
        {!hide.includes("order_by") && (
          <div>
            <h4>Sort By</h4>
            <input {...register("order_by")} type="radio" value="relevant" />
            Relevance
            <input {...register("order_by")} type="radio" value="latest" />{" "}
            Newest
          </div>
        )}
        {!hide.includes("color") && (
          <div>
            <h4>Color</h4>
            <input {...register("color")} type="radio" value="any" /> Any Color
            <input
              {...register("color")}
              type="radio"
              value="black_and_white"
            />
            Black and White
          </div>
        )}
        <div>
          <h4>Orientation</h4>
          <input {...register("orientation")} type="radio" value="any" /> Any
          <input {...register("orientation")} type="radio" value="landscape" />
          Landscape
          <input {...register("orientation")} type="radio" value="portrait" />
          Portrait
          <input {...register("orientation")} type="radio" value="squarish" />
          Square
        </div>
      </form>
      <button
        type="button"
        onClick={() => {
          reset();
          onClearFilters();
        }}
      >
        Clear Filters
      </button>
    </>
  );
}

export default Filters;
