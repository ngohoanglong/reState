import useCache from "modules/cache/useCache";
import UseHook from "modules/hook";
import { Transition } from "modules/localstrings";
import React from "react";
import * as serviceWorkerRegistration from "serviceWorkerRegistration";
import Link from "../../modules/navigation/Link";
import styles from "./Home.module.scss";

const Style = () => (
  <style>
    {`
    #home2:checked + .${styles.Home}:hover {
      padding: 4px;
      gap: 8px;
    }
    #home2:checked + .${styles.Home} > .${styles.child} {
      z-index: 1;
    }
    #home2:checked + .${styles.Home}:hover .${styles.pointer} {
      filter: brightness(4.5);
    }
    `}
  </style>
);
const Home = () => (
  <>
    <Style />
    <input id="home2" type="checkbox" hidden name="home2"></input>
    <div
      className={
        styles.Home +
        " fixed overflow-auto md:overflow-hidden w-full min-h-full h-64 grid grid-cols-2 grid-rows-7 md:grid-cols-4 md:grid-rows-3 grid-flow-row"
      }
    >
      {[
        <div className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1">
          <div className="grid grid-cols-2 text-sm gap-2">
            <div className="col-span-2 text-2xl p-3">Side project</div>
            <Link
              to="/github"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              Github
            </Link>
            <Link
              to="/covid"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              covid
            </Link>
            <Link
              to="/periodic-table"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              periodic-table
            </Link>
            <Link
              to="/portfolio"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              portfolio
            </Link>
          </div>
        </div>,
        <div className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1">
          <div className="grid grid-cols-2 text-sm gap-2">
            <div className="col-span-2 text-2xl p-3">Side project 2</div>
            <a
              href="https://ngohoanglong2019.herokuapp.com/"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              covid dashboard
            </a>
            <Link
              to="/bookmarklet"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              bookmarklet (wtf it is?)
            </Link>
          </div>
        </div>,
        <div className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1">
          soon
        </div>,
        <div className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1">
          soon
        </div>,
        <div className="background-rich text-2xl font-bold text-center  col-span-2 sm:col-span-1">
          <div className="grid grid-cols-2 text-sm gap-2">
            <div className="col-span-2 text-2xl p-3">Download Resume</div>
            <a
              href="https://www.notion.so/Resume-efc8d50f641641d495a0e0f5dac237b7"
              target="_blank"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              website
            </a>
            <a
              href="/resume/html.zip"
              target="_blank"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              html
            </a>
            <a
              href="https://drive.google.com/file/d/1w1UmbJtk6J2BtiSaHpsDn4CMTLPvC08c/view?usp=sharing"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              PDF
            </a>
            <a
              href="/resume/markdown.zip"
              className=" border border-2 hover:border-gray-600  broder-gray-300 col-span-1 p-3"
            >
              markdown
            </a>
          </div>
        </div>,
        <div className="background p-6 col-span-2 sm:col-span-1 order-first md:order-none flex ">
          <div className="flex flex-col items-center">
            <img
              alt="https://i.imgflip.com/1124um.jpg"
              className="w-24 h-24 rounded-full object-cover"
              src="https://i.imgflip.com/1124um.jpg"
            />
            <h1 className="font-bold text-xl mt-3">Ngo Hoang Long</h1>
            <div className="text-gray-600 uppercase tsha">UI/UX DEVELOPER</div>
          </div>
        </div>,
        <div className="background p-6 col-span-2 sm:col-span-1 order-first md:order-none flex ">
          <div className="flex flex-col justify-center h-full text-center">
            <div className="uppercase font-bold">
              <Transition>about me</Transition>
            </div>
            <p className="mt-2 whitespace-pre-wrap overflow-auto">
              <Transition>
                My favourite is Reactjs, html, css and vanilla javascript
              </Transition>
            </p>
            <div className="flex items-center justify-center mt-2">
              {[
                <a
                  className=" background mr-2 rounded-full w-8 h-8 flex justify-center"
                  href="#"
                  alt="temp"
                >
                  <svg
                    fill="currentColor"
                    width="1em"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                  </svg>
                </a>,
                <a
                  className=" background mr-2 rounded-full w-8 h-8 flex justify-center"
                  href="#"
                  alt="temp"
                >
                  <svg
                    fill="currentColor"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                  </svg>
                </a>,
                <a
                  className=" background mr-2 rounded-full w-8 h-8 flex justify-center"
                  href="#"
                  alt="temp"
                >
                  <svg
                    fill="currentColor"
                    width="1em"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                    <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                    <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                  </svg>
                </a>,
                <a
                  className=" background mr-2 rounded-full w-8 h-8 flex justify-center"
                  href="#"
                  alt="temp"
                >
                  <svg
                    fill="currentColor"
                    width="1em"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                  </svg>
                </a>,
              ].map((e, i) =>
                React.cloneElement(e, {
                  ...e.props,
                  key: i,
                  className: `btn ${styles.cta} ${e.props.className}`,
                })
              )}
            </div>
          </div>
        </div>,
        <Link
          to="/keycode"
          className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1"
        >
          keycode
        </Link>,
        <div className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1"></div>,
        <label
          htmlFor="theme"
          className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 352 512"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
          </svg>
        </label>,
        <label
          htmlFor="home2"
          className="background-rich text-2xl font-bold text-center uppercase  col-span-2 sm:col-span-1"
        >
          home layout 2
        </label>,
        <div className="background-rich text-2xl font-bold text-center uppercase col-span-2 sm:col-span-1">
          <UseHook
            hook={useCache}
            deps={[
              "app",
              {
                lastedVersion: "xxxxxx",
                currentVersion: "xxxxxx",
              },
            ]}
          >
            {([value]) => (
              <div className="flex flex-col items-center justify-center">
                <div className="text-lg">build number:</div>
                {value.currentVersion}
                {value.lastedVersion &&
                  "" + value.currentVersion !== "" + value.lastedVersion && (
                    <div
                      onClick={() => {
                        serviceWorkerRegistration.unregister();
                        window.location.reload();
                      }}
                      className="text-lg text-blue-500 underline cursor-pointer"
                    >
                      update ({value.lastedVersion})
                    </div>
                  )}
                <a
                  href={"/result.html"}
                  className="text-lg text-blue-500 underline cursor-pointer"
                  _target="blank"
                >
                  analyze
                </a>
                <a
                  href={
                    "https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fcafejs.net%2F"
                  }
                  className="text-lg text-blue-500 underline cursor-pointer"
                  _target="blank"
                >
                  lighthouse
                </a>
                <label
                  htmlFor="pageMark"
                  className="text-lg text-blue-500 underline cursor-pointer"
                >
                  detail
                </label>
              </div>
            )}
          </UseHook>
        </div>,
      ].map((e, i) =>
        React.cloneElement(e, {
          ...e.props,
          key: i,
          style: {
            animationDelay: `${150 + i * 50}ms`,
            [`--animate-delay`]: 150 + i * 50,
          },
          className: `${styles.child} p-6 ${e.props.className} opacity-0 animate__animated animate__faster animate__fadeIn`,
          children: e.props.children || i,
        })
      )}
      <div className={`${styles.pointer} hidden md:block`} />
    </div>
    <Link to="/home" className="hidden ">
      Home
    </Link>
  </>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
