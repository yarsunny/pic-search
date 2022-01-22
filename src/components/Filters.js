import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Radio from "./Radio";

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
    <div className="bg-gray-200 rounded-xl px-8 pt-6 pb-4 mb-12 md:flex justify-between">
      <form className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Sort By */}
        {!hide.includes("order_by") && (
          <div>
            <h4 className="tracking-wide text-xs mb-1 text-gray-400 uppercase font-bold">
              Sort By
            </h4>
            <Radio
              register={register}
              value="relevant"
              name="order_by"
              id="order_by_relevant"
            >
              Relevance
            </Radio>
            <Radio
              register={register}
              value="latest"
              name="order_by"
              id="order_by_latest"
            >
              Newest
            </Radio>
          </div>
        )}

        {/* Color */}
        {!hide.includes("color") && (
          <div>
            <h4 className="tracking-wide text-xs mb-1 text-gray-400 uppercase font-bold">
              Color
            </h4>
            <Radio register={register} value="any" name="color" id="color_any">
              Any
            </Radio>
            <Radio
              register={register}
              value="black_and_white"
              name="color"
              id="color_black_and_white"
            >
              Black and White
            </Radio>
          </div>
        )}

        {/* Orientation */}
        <div className="mb-4">
          <h4 className="tracking-wide text-xs mb-1 text-gray-400 uppercase font-bold">
            Orientation
          </h4>
          <div className="flex">
            <div className="mr-6">
              <Radio
                register={register}
                value="any"
                name="orientation"
                id="orientation_any"
              >
                Any
              </Radio>
              <Radio
                register={register}
                value="landscape"
                name="orientation"
                id="orientation_landscape"
              >
                Landscape
              </Radio>
            </div>
            <div>
              <Radio
                register={register}
                value="portrait"
                name="orientation"
                id="orientation_portrait"
              >
                Portrait
              </Radio>
              <Radio
                register={register}
                value="squarish"
                name="orientation"
                id="orientation_squarish"
              >
                Square
              </Radio>
            </div>
          </div>
        </div>
      </form>

      <div className="md:flex md:flex-col-reverse text-right md:text-left">
        <button
          type="button"
          className="btn bg-gray-300 hover:bg-gray-100 text-gray-500 py-2 px-6 cursor-pointer uppercase text-xs rounded-full"
          onClick={() => {
            reset();
            onClearFilters();
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
