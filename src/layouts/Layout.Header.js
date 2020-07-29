import React from "react";
const Header = ({ children }) => {
  return (
    <>
      <label
        htmlFor="theme"
        className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
      >
        <style>
          {`
            #theme:checked + #root .themeDarkIcon {
              display:none
            }
            .themeIcon{

            }
          `}
        </style>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 352 512"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
        </svg>
      </label>
      <label
        htmlFor="invert"
        className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
      >
        <style>
          {`
            #invert:checked ~ #root  {
              filter: invert(1);
            }
            #invert:checked ~ #root img{
              filter: invert(1);
            }
            #invert:checked ~ #root [role=img]{
              filter: invert(1);
            }
          `}
        </style>
        <svg
          viewBox="0 0 412.16 412.16"
          svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          height="1.2em"
          width="1.2em"
        >
          <path d="M326.72,120.747L206.08,0L85.44,120.747c-66.667,66.667-66.667,174.72,0,241.387c33.28,33.28,77.013,50.027,120.64,50.027    s87.36-16.64,120.64-50.027C393.387,295.467,393.387,187.413,326.72,120.747z M206.08,369.387    c-34.24,0-66.347-13.333-90.453-37.547c-24.213-24.107-37.547-56.213-37.547-90.453s13.333-66.347,37.547-90.56l90.453-90.453    V369.387z" />
        </svg>
      </label>
      {children}
      <div className="flex-1" />
      <div className="p-3 sticky bottom-0 background-rich shadow-2xl">
        <label
          htmlFor="openRight"
          className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 rounded-full"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1.6rem"
            width="1.6rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            </g>
          </svg>
        </label>
      </div>
    </>
  );
};
export default Header;
