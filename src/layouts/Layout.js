import React, { useRef } from "react";
import "rmc-pull-to-refresh/assets/index.css";
import Header from "./Layout.Header";
import "./Layout.scss";
export function Layout({ left, mid, right, header }) {
  const layoutRef = useRef();

  return (
    <>
      <input hidden id="openRight" type="checkbox" />
      <input hidden id="openLeft" type="checkbox" />
      <div className={"layout"}>
        <div
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
        >
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
        <div id="layout-content" ref={layoutRef}>
          <div className="min-h-screen">{mid}</div>
        </div>
        <div>
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
        <a
          href="/home"
          className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="1.2em"
            height="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </a>
        <label
          htmlFor="openLeft"
          className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-align-justified"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={4} y1={6} x2={20} y2={6} />
            <line x1={4} y1={12} x2={20} y2={12} />
            <line x1={4} y1={18} x2={20} y2={18} />
          </svg>
        </label>
        {header}
      </header>
    </>
  );
}
Layout.Header = Header;
export default Layout;
