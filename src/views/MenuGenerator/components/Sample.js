const styles = (
  <style>
    {`
      .h-header{
        height:50px
      }
      .pt-header{
        padding-top:50px
      }
      .group,.group-foo {
        isolation: isolate;
      }
    `}
  </style>
);
const Sample = () => {
  return (
    <>
      {styles}
      <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 relative">
        <div className="flex w-full py-4 items-center align-center space-x-12">
          <div
            tabIndex={-1}
            className="group flex-1 lg:flex-none flex items-center z-50"
          >
            <div className="Navbar_item__tbHgv z-10 group-focus:hidden">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke-line="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </svg>
            </div>
            <a
              href="#"
              className="Navbar_item__tbHgv z-10 hidden group-focus:block"
            >
              <svg
                viewBox="0 0 24 24"
                width={24}
                height={24}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </a>
            <div className="shadow-lg box bg-accents-0 absolute left-0 top-0 pt-header h-screen pt-header pointer-events-none group-focus:pointer-events-auto  w-full opacity-0  group-focus:block group-focus:opacity-100  transition-all duration-700 ease-in-out">
              <div className="absolute inset-0 flex">
                <div className="w-full h-full flex flex-col">
                  <div className="h-header" />
                  <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 max-w-7xl flex-1  py-12 relative flex flex-col">
                    <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 max-w-7xl flex-1 flex flex-col absolute bottom-0 left-0 items-start py-12 space-y-2 text-sm">
                      <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          viewBox="0 0 384 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                        </svg>
                      </span>
                      <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                      <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 320 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </span>
                      <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </span>
                    </div>
                    <ul className="pl-24 pr-12 space-y-8  w-1/2 flex flex-col flex-1">
                      <li className="group-foo z-10 text-effect-2">
                        <a
                          className="z-20 text-2xl font-light transition ease-in-out duration-150 isolate"
                          href="search?q=Home"
                        >
                          Home
                        </a>
                        <ul className="py-12 space-y-4 isolate absolute w-1/2 right-0 top-0 pointer-events-none group-foo-hover:pointer-events-auto opacity-0  group-foo-hover:block group-foo-hover:opacity-100 transform -translate-x-6 group-foo-hover:translate-x-0 transition-all duration-300 ease-in-out">
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Home_0"
                            >
                              Home v0
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Home_1"
                            >
                              Home v1
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Home_2"
                            >
                              Home v2
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Home_3"
                            >
                              Home v3
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Home_4"
                            >
                              Home v4
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="group-foo  text-effect-2">
                        <a
                          className="z-20 text-2xl font-light transition ease-in-out duration-150 isolate"
                          href="search?q=Shop"
                        >
                          Shop
                        </a>
                        <ul
                          style={{
                            paddingLeft: "50%",
                          }}
                          className="py-12 space-y-4 isolate absolute left-0 top-0 pointer-events-none group-foo-hover:pointer-events-auto  w-full opacity-0  group-foo-hover:block group-foo-hover:opacity-100 transform -translate-x-6 group-foo-hover:translate-x-0 transition-all duration-300 ease-in-out"
                        >
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Shop_0"
                            >
                              Shop v0
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Shop_1"
                            >
                              Shop v1
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Shop_2"
                            >
                              Shop v2
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Shop_3"
                            >
                              Shop v3
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Shop_4"
                            >
                              Shop v4
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="group-foo  text-effect-2">
                        <a
                          className="z-20 text-2xl font-light transition ease-in-out duration-150 isolate"
                          href="search?q=Features"
                        >
                          Features
                        </a>
                        <ul
                          style={{
                            paddingLeft: "50%",
                          }}
                          className="py-12 space-y-4 isolate absolute left-0 top-0 pointer-events-none group-foo-hover:pointer-events-auto  w-full opacity-0  group-foo-hover:block group-foo-hover:opacity-100 transform -translate-x-6 group-foo-hover:translate-x-0 transition-all duration-300 ease-in-out"
                        >
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Features_0"
                            >
                              Features v0
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Features_1"
                            >
                              Features v1
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Features_2"
                            >
                              Features v2
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Features_3"
                            >
                              Features v3
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Features_4"
                            >
                              Features v4
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="group-foo  text-effect-2">
                        <a
                          className="z-20 text-2xl font-light transition ease-in-out duration-150 isolate"
                          href="search?q=Pages"
                        >
                          Pages
                        </a>
                        <ul
                          style={{
                            paddingLeft: "50%",
                          }}
                          className="py-12 space-y-4 isolate absolute left-0 top-0 pointer-events-none group-foo-hover:pointer-events-auto  w-full opacity-0  group-foo-hover:block group-foo-hover:opacity-100 transform -translate-x-6 group-foo-hover:translate-x-0 transition-all duration-300 ease-in-out"
                        >
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Pages_0"
                            >
                              Pages v0
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Pages_1"
                            >
                              Pages v1
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Pages_2"
                            >
                              Pages v2
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Pages_3"
                            >
                              Pages v3
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Pages_4"
                            >
                              Pages v4
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="group-foo  text-effect-2">
                        <a
                          className="z-20 text-2xl font-light transition ease-in-out duration-150 isolate"
                          href="search?q=Portfolio"
                        >
                          Portfolio
                        </a>
                        <ul
                          style={{
                            paddingLeft: "50%",
                          }}
                          className="py-12 space-y-4 isolate absolute left-0 top-0 pointer-events-none group-foo-hover:pointer-events-auto  w-full opacity-0  group-foo-hover:block group-foo-hover:opacity-100 transform -translate-x-6 group-foo-hover:translate-x-0 transition-all duration-300 ease-in-out"
                        >
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Portfolio_0"
                            >
                              Portfolio v0
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Portfolio_1"
                            >
                              Portfolio v1
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Portfolio_2"
                            >
                              Portfolio v2
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Portfolio_3"
                            >
                              Portfolio v3
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Portfolio_4"
                            >
                              Portfolio v4
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="group-foo  text-effect-2">
                        <a
                          className="z-20 text-2xl font-light transition ease-in-out duration-150 isolate"
                          href="search?q=Journal"
                        >
                          Journal
                        </a>
                        <ul
                          style={{
                            paddingLeft: "50%",
                          }}
                          className="py-12 space-y-4 isolate absolute left-0 top-0 pointer-events-none group-foo-hover:pointer-events-auto  w-full opacity-0  group-foo-hover:block group-foo-hover:opacity-100 transform -translate-x-6 group-foo-hover:translate-x-0 transition-all duration-300 ease-in-out"
                        >
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Journal_0"
                            >
                              Journal v0
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Journal_1"
                            >
                              Journal v1
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Journal_2"
                            >
                              Journal v2
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Journal_3"
                            >
                              Journal v3
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-effect-1 py-1 transition ease-in-out duration-150"
                              href="search?q=Journal_4"
                            >
                              Journal v4
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="flex space-x-6 pl-24 pr-12 justify-start isolate">
                      <div className="space-x-3 flex items-baseline">
                        <label className="text-sm text-accents-6">
                          Currency{" "}
                        </label>
                        <div className="px-3 relative group-foo flex ">
                          <div className="flex items-center py-2 border-b border-accents-3 ">
                            <div>USD</div>
                            <div className="flex ml-3">
                              <span className="text-base">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 14 14"
                                >
                                  <path d="M7 10.773L1.531 6.398l.938-1.171L7 8.851l4.531-3.624.938 1.171z" />
                                  <path fill="none" d="M0 0h14v14H0z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="w-8" />
                          <div className="flex flex-col absolute shadow-lg rounded w-full pointer-events-none group-foo-hover:pointer-events-auto opacity-0 group-foo-hover:opacity-100 transition-opacity duration-300 ease-in-out right-0 bottom-0 bg-accents-0 flex-flex-col">
                            <span className="py-2 px-3 hover:bg-accents-1">
                              EUR
                            </span>
                            <span className="py-2 px-3 hover:bg-accents-1">
                              USD
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-x-3 flex items-baseline">
                        <label className="text-sm text-accents-6">
                          Language{" "}
                        </label>
                        <div className="px-3 relative group-foo flex ">
                          <div className="flex items-center py-2 border-b border-accents-3 ">
                            <div>English</div>
                            <div className="flex ml-3">
                              <span className="text-base">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 14 14"
                                >
                                  <path d="M7 10.773L1.531 6.398l.938-1.171L7 8.851l4.531-3.624.938 1.171z" />
                                  <path fill="none" d="M0 0h14v14H0z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="w-8" />
                          <div className="flex flex-col absolute shadow-lg rounded w-full pointer-events-none group-foo-hover:pointer-events-auto opacity-0 group-foo-hover:opacity-100 transition-opacity duration-300 ease-in-out right-0 bottom-0 bg-accents-0 flex-flex-col">
                            <span className="py-2 px-3 hover:bg-accents-1">
                              Italiano
                            </span>
                            <span className="py-2 px-3 hover:bg-accents-1">
                              Français
                            </span>
                            <span className="py-2 px-3 hover:bg-accents-1">
                              English
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 justify-center lg:justify-start lg:space-x-16">
            <div className="space-x-12 h-header flex items-center">
              <div className="group flex items-center h-header hover:shadow-lg">
                <a className="hover:underline z-10 text-sm" href="/home">
                  home
                </a>
                <div className="shadow-lg bg-accents-0 absolute left-0 top-0 pt-header pt-header pointer-events-none group-hover:pointer-events-auto  w-full opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 max-w-7xl text-xs py-6  relative">
                    <div className="w-full mx-auto max-w-2xl grid grid-cols-7 space-x-8 ">
                      <div className="flex col-span-3 justify-end  space-x-6">
                        <div className="leading-extra-loose  flex-1 flex flex-col items-start space-y-3">
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v1"
                          >
                            Home v1
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v2"
                          >
                            Home v2
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v3"
                          >
                            Home v3
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v4"
                          >
                            Home v4
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v5"
                          >
                            Home v5
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v6"
                          >
                            Home v6
                          </a>
                        </div>
                        <div className="leading-extra-loose  flex-1 flex flex-col items-start space-y-3">
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v7"
                          >
                            Home v7
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v8"
                          >
                            Home v8
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v9"
                          >
                            Home v9
                          </a>
                          <a
                            className="hover:underline text-xs tinline-block"
                            href="/search?q=Home%20v10"
                          >
                            Home v10
                          </a>
                        </div>
                      </div>
                      <div className="col-span-4 flex justify-start gap-8">
                        <div className="flex-1 bg-accents-3 h-full relative">
                          <div
                            style={{
                              display: "block",
                              overflow: "hidden",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              margin: 0,
                            }}
                          >
                            <img
                              src="/_next/image?url=%2Fmega-menu-v1-1.jpg&w=3840&q=75"
                              decoding="async"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fmega-menu-v1-1.jpg&w=640&q=75 640w, /_next/image?url=%2Fmega-menu-v1-1.jpg&w=750&q=75 750w, /_next/image?url=%2Fmega-menu-v1-1.jpg&w=828&q=75 828w, /_next/image?url=%2Fmega-menu-v1-1.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fmega-menu-v1-1.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fmega-menu-v1-1.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fmega-menu-v1-1.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fmega-menu-v1-1.jpg&w=3840&q=75 3840w"
                            />
                          </div>
                        </div>
                        <div className="flex-1 bg-accents-3 h-full relative">
                          <div
                            style={{
                              display: "block",
                              overflow: "hidden",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              margin: 0,
                            }}
                          >
                            <img
                              src="/_next/image?url=%2Fmega-menu-v1-2.jpg&w=3840&q=75"
                              decoding="async"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fmega-menu-v1-2.jpg&w=640&q=75 640w, /_next/image?url=%2Fmega-menu-v1-2.jpg&w=750&q=75 750w, /_next/image?url=%2Fmega-menu-v1-2.jpg&w=828&q=75 828w, /_next/image?url=%2Fmega-menu-v1-2.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fmega-menu-v1-2.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fmega-menu-v1-2.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fmega-menu-v1-2.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fmega-menu-v1-2.jpg&w=3840&q=75 3840w"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex items-center h-header hover:shadow-lg">
                <a className="hover:underline z-10 text-sm" href="/shop">
                  shop
                </a>
                <div className="shadow-lg bg-accents-0 absolute left-0 top-0 pt-header pt-header pointer-events-none group-hover:pointer-events-auto  w-full opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <div className="w-full text-xs flex relative">
                    <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 max-w-7xl leading-extra-loose py-6 flex-1 relative flex flex-col items-start space-y-3">
                      <div
                        style={{
                          display: "block",
                          overflow: "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <img
                          src="/_next/image?url=%2Fmega-menu-v2-1.jpg&w=3840&q=75"
                          decoding="async"
                          className="absolute inset-0 "
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                          sizes="100vw"
                          srcSet="/_next/image?url=%2Fmega-menu-v2-1.jpg&w=640&q=75 640w, /_next/image?url=%2Fmega-menu-v2-1.jpg&w=750&q=75 750w, /_next/image?url=%2Fmega-menu-v2-1.jpg&w=828&q=75 828w, /_next/image?url=%2Fmega-menu-v2-1.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fmega-menu-v2-1.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fmega-menu-v2-1.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fmega-menu-v2-1.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fmega-menu-v2-1.jpg&w=3840&q=75 3840w"
                        />
                      </div>
                      <div className="uppercase font-semibold text-xs z-10">
                        SHOP PAGES
                      </div>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Standard%20Shop%20Page"
                      >
                        Standard Shop Page
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Small%20Products"
                      >
                        Small Products
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Large%20Products"
                      >
                        Large Products
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Masonry"
                      >
                        Masonry
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Carousel"
                      >
                        Carousel
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Pagination"
                      >
                        Pagination
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Shop%20Sidebar"
                      >
                        Shop Sidebar
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Shop%20Infinity"
                      >
                        Shop Infinity
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Shop%20v2"
                      >
                        Shop v2
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Shop%20v3"
                      >
                        Shop v3
                      </a>
                    </div>
                    <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 max-w-7xl leading-extra-loose py-6 flex-1 relative flex flex-col items-start space-y-3">
                      <div
                        style={{
                          display: "block",
                          overflow: "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <img
                          src="/_next/image?url=%2Fmega-menu-v2-2.jpg&w=3840&q=75"
                          decoding="async"
                          className="absolute inset-0 "
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                          sizes="100vw"
                          srcSet="/_next/image?url=%2Fmega-menu-v2-2.jpg&w=640&q=75 640w, /_next/image?url=%2Fmega-menu-v2-2.jpg&w=750&q=75 750w, /_next/image?url=%2Fmega-menu-v2-2.jpg&w=828&q=75 828w, /_next/image?url=%2Fmega-menu-v2-2.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fmega-menu-v2-2.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fmega-menu-v2-2.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fmega-menu-v2-2.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fmega-menu-v2-2.jpg&w=3840&q=75 3840w"
                        />
                      </div>
                      <div className="uppercase font-semibold text-xs z-10">
                        PRODUCT PAGES
                      </div>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Product%20v1"
                      >
                        Product v1
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Product%20v2"
                      >
                        Product v2
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Product%20V3"
                      >
                        Product V3
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Product%20v4"
                      >
                        Product v4
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Product%20v5"
                      >
                        Product v5
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Product%20V6"
                      >
                        Product V6
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Product%20v7"
                      >
                        Product v7
                      </a>
                    </div>
                    <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 max-w-7xl leading-extra-loose py-6 flex-1 relative flex flex-col items-start space-y-3">
                      <div
                        style={{
                          display: "block",
                          overflow: "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <img
                          src="/_next/image?url=%2Fmega-menu-v2-3.jpg&w=3840&q=75"
                          decoding="async"
                          className="absolute inset-0 "
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                          sizes="100vw"
                          srcSet="/_next/image?url=%2Fmega-menu-v2-3.jpg&w=640&q=75 640w, /_next/image?url=%2Fmega-menu-v2-3.jpg&w=750&q=75 750w, /_next/image?url=%2Fmega-menu-v2-3.jpg&w=828&q=75 828w, /_next/image?url=%2Fmega-menu-v2-3.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fmega-menu-v2-3.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fmega-menu-v2-3.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fmega-menu-v2-3.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fmega-menu-v2-3.jpg&w=3840&q=75 3840w"
                        />
                      </div>
                      <div className="uppercase font-semibold text-xs z-10">
                        OTHER SHOP PAGES
                      </div>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Collection"
                      >
                        Collection
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=LookBook"
                      >
                        LookBook
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Categories%20Page"
                      >
                        Categories Page
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Shopping%20Cart"
                      >
                        Shopping Cart
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Wishlist"
                      >
                        Wishlist
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Order%20Tracking"
                      >
                        Order Tracking
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Checkout"
                      >
                        Checkout
                      </a>
                      <a
                        className="hover:underline inline-block text-xs z-10"
                        href="/search?q=Checkout%20%E2%80%93%202%20Columns"
                      >
                        Checkout – 2 Columns
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex items-center h-header hover:shadow-lg">
                <a className="hover:underline z-10 text-sm" href="/features">
                  features
                </a>
                <div className="shadow-lg bg-accents-0 absolute left-0 top-0 pt-header pt-header pointer-events-none group-hover:pointer-events-auto  w-full opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 w-full text-xs grid grid-cols-7 gap-8 py-6 relative">
                    <div className="absolute bottom-0 right-0 w-96 h-96">
                      <div
                        style={{
                          display: "inline-block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              margin: 0,
                              border: "none",
                              padding: 0,
                            }}
                            alt=""
                            aria-hidden="true"
                            role="presentation"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                          />
                        </div>
                        <img
                          src="/_next/image?url=%2Fmega-menu.png&w=1920&q=75"
                          decoding="async"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                          srcSet="/_next/image?url=%2Fmega-menu.png&w=828&q=75 1x, /_next/image?url=%2Fmega-menu.png&w=1920&q=75 2x"
                        />
                      </div>
                    </div>
                    <div className="leading-extra-loose  flex flex-col items-start space-y-3">
                      <div className="uppercase font-semibold text-xs">
                        HEADER
                      </div>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v1"
                      >
                        Header v1
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v2"
                      >
                        Header v2
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v3"
                      >
                        Header v3
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v4"
                      >
                        Header v4
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v5"
                      >
                        Header v5
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v6"
                      >
                        Header v6
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v7"
                      >
                        Header v7
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v8"
                      >
                        Header v8
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v9"
                      >
                        Header v9
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Header%20v10"
                      >
                        Header v10
                      </a>
                    </div>
                    <div className="leading-extra-loose  flex flex-col items-start space-y-3">
                      <div className="uppercase font-semibold text-xs">
                        FOOTER
                      </div>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Footer%20v1"
                      >
                        Footer v1
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Footer%20v2"
                      >
                        Footer v2
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Footer%20v3"
                      >
                        Footer v3
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Footer%20v4"
                      >
                        Footer v4
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Footer%20v5"
                      >
                        Footer v5
                      </a>
                    </div>
                    <div className="leading-extra-loose  flex flex-col items-start space-y-3">
                      <div className="uppercase font-semibold text-xs">
                        PRODUCT
                      </div>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Product%20v1%20%E2%80%93%20Classic"
                      >
                        Product v1 – Classic
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Product%20v2%20%E2%80%93%20Slider"
                      >
                        Product v2 – Slider
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Product%20v3%20%E2%80%93%20Zoom"
                      >
                        Product v3 – Zoom
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Product%20v4%20%E2%80%93%20Fadein"
                      >
                        Product v4 – Fadein
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Product%20v5%20%E2%80%93%20Simple"
                      >
                        Product v5 – Simple
                      </a>
                    </div>
                    <div className="leading-extra-loose  flex flex-col items-start space-y-3">
                      <div className="uppercase font-semibold text-xs">
                        ELEMENTS
                      </div>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Accordion"
                      >
                        Accordion
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Pricing%20Table"
                      >
                        Pricing Table
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Google%20Maps"
                      >
                        Google Maps
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Message%20Box"
                      >
                        Message Box
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Progress%20Bars"
                      >
                        Progress Bars
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Charts"
                      >
                        Charts
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Icon%20Box"
                      >
                        Icon Box
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Product%20Tabs"
                      >
                        Product Tabs
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Products%20Grid"
                      >
                        Products Grid
                      </a>
                    </div>
                    <div className="leading-extra-loose  flex flex-col items-start space-y-3">
                      <div className="uppercase font-semibold text-xs">
                        ELEMENTS 2
                      </div>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Tabs"
                      >
                        Tabs
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Video%20Players"
                      >
                        Video Players
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Team"
                      >
                        Team
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Buttons"
                      >
                        Buttons
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Testimonials"
                      >
                        Testimonials
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Social%20Icons"
                      >
                        Social Icons
                      </a>
                      <a
                        className="hover:underline inline-block text-xs"
                        href="/search?q=Blog%20Posts"
                      >
                        Blog Posts
                      </a>
                    </div>
                    <div className="col-span-2 h-96" />
                  </div>
                </div>
              </div>
              <div className="group flex items-center h-header hover:shadow-lg relative">
                <a className="hover:underline z-10 text-sm" href="/pages">
                  pages
                </a>
                <div className=" absolute top-0 left-0 pt-header pt-header pointer-events-none group-hover:pointer-events-auto transform -translate-x-1/2 opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <div className="mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12 max-w-7xl text-xs shadow-lg bg-accents-0 flex flex-col py-6  relative space-y-3">
                    <div className="leading-extra-loose flex flex-col items-start space-y-3">
                      <div className="hover:underline inline-block text-xs">
                        About
                      </div>
                      <div className="hidden">
                        <a
                          className="hover:underline inline-block text-xs"
                          href="/search?q=About%20Us"
                        >
                          About Us
                        </a>
                        <a
                          className="hover:underline inline-block text-xs"
                          href="/search?q=About%20Us%20v2"
                        >
                          About Us v2
                        </a>
                        <a
                          className="hover:underline inline-block text-xs"
                          href="/search?q=About%20Me"
                        >
                          About Me
                        </a>
                      </div>
                    </div>
                    <div className="leading-extra-loose flex flex-col items-start space-y-3">
                      <div className="hover:underline inline-block text-xs">
                        Contact
                      </div>
                      <div className="hidden">
                        <a
                          className="hover:underline inline-block text-xs"
                          href="/search?q=Contact%20Us"
                        >
                          Contact Us
                        </a>
                        <a
                          className="hover:underline inline-block text-xs"
                          href="/search?q=Contact%20Us%20v2"
                        >
                          Contact Us v2
                        </a>
                        <a
                          className="hover:underline inline-block text-xs"
                          href="/search?q=Contact%20Me"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>
                    <div className="leading-extra-loose flex flex-col items-start space-y-3">
                      <div className="hover:underline inline-block text-xs">
                        Our Team
                      </div>
                      <div className="hidden" />
                    </div>
                    <div className="leading-extra-loose flex flex-col items-start space-y-3">
                      <div className="hover:underline inline-block text-xs">
                        FAQ
                      </div>
                      <div className="hidden" />
                    </div>
                    <div className="leading-extra-loose flex flex-col items-start space-y-3">
                      <div className="hover:underline inline-block text-xs">
                        404
                      </div>
                      <div className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-1 lg:flex-none space-x-8"></div>
        </div>
      </div>
    </>
  );
};
export default Sample;
