import React from "react";

export const DotButton = (props: { selected: boolean; onClick: () => any }) => (
  <button
    className={`bg-transparent cursor-pointer relative p-0 outline-none w-8 h-8 mr-2 ml-2 flex items-center after:bg-gray-900 after:w-full after:h-1 after:rounded-sm  ${
      props.selected ? "after:opacity-100 after:bg-omronblue" : ""
    }`}
    type="button"
    onClick={props.onClick}
  />
);

export const PrevButton = (props: { enabled: boolean; onClick: () => any }) => (
  <button
    className="outline-none cursor-pointer bg-white text-black absolute top-1/2 justify-center items-center p-0 disabled:opacity-30 -left-10"
    onClick={props.onClick}
    disabled={!props.enabled}
  >
    <svg className="w-7 h-7 m-1" viewBox="0 0 238.003 238.003">
      <path
        transform="rotate(180 100 120)"
        d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
      />
    </svg>
  </button>
);

export const NextButton = (props: { enabled: boolean; onClick: () => any }) => (
  <button
    className="outline-none cursor-pointer bg-white text-black absolute top-1/2 justify-center items-center p-0 disabled:opacity-30 -right-10"
    onClick={props.onClick}
    disabled={!props.enabled}
  >
    <svg className="w-7 h-7 m-1" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);
