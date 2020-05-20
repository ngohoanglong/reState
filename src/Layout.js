import React, { useRef } from "react";
import useCache from "./modules/cache/useCache";
import useModal from "./hooks/useModal";
import "./Layout.scss";
export function Layout({ left, mid, right, header }) {
  const layoutRef = useRef();
  const leftRef = useRef();
  const midRef = useRef();
  const rightRef = useRef();

  return (
    <>
      <input hidden id="openRight" type="checkbox" />
      <input hidden id="openLeft" type="checkbox" />
      <div ref={layoutRef} className={"layout"}>
        <div ref={leftRef}>
          <label
            htmlFor="openLeft"
            className="flex items-center justify-center text-xl btn"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </label>
          <div className="w-full overflow-x-hidden overflow-y-auto h-screen scrollable">
            {left}
          </div>
        </div>
        <div ref={midRef}>
          <div className="min-h-screen">{mid}</div>
        </div>
        <div ref={rightRef}>
          <label
            htmlFor="openRight"
            className="flex items-center justify-center text-xl btn"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </label>
          {right}
        </div>
      </div>
      <header className="header scrollable small">
        <label
          htmlFor="openLeft"
          className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
        />
        {header}
      </header>
    </>
  );
}
