import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { debounce } from "../utils";

function Search({ query, disabled, onChangeQuery }) {
  const [internalQuery, setInternalQuery] = useState(query);
  const [focused, setFocused] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const internalOnChangeQuery = useCallback(
    debounce((text) => {
      onChangeQuery(text.toLowerCase().trim());
    }, 300),
    []
  );

  return (
    <div
      className={classNames(
        "w-full flex items-center justify-between rounded-full px-5 border",
        {
          "bg-gray-200 border-gray-200": !focused,
          "bg-white border border-gray-400": focused,
        }
      )}
    >
      <IoSearchOutline className="mr-3" />
      <input
        data-testid="search-input"
        placeholder="Search free high-resolution photos"
        disabled={disabled ? 'disabled': ''}
        className={classNames(
          "w-full py-2 outline-none placeholder-gray-600 text-sm text-gray-700",
          {
            "bg-gray-200": !focused,
            "bg-white": focused,
            "cursor-not-allowed": disabled
          }
        )}
        value={internalQuery}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        type="text"
        onChange={(e) => {
          setInternalQuery(e.target.value);
          internalOnChangeQuery(e.target.value);
        }}
      />
      <IoCloseOutline
        className="cursor-pointer"
        onClick={() => {
          setInternalQuery("");
          internalOnChangeQuery("");
        }}
      />
    </div>
  );
}

export default Search;
