import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  animated,
  useChain,
  useSpring,
  useTrail,
  useTransition,
} from "react-spring";
import Link from "../../modules/navigation/Link";
import "./Portfolio.css";
import { WordCloud } from "./WordCloud";
const CurrentContext = React.createContext(0);
const ChangeCurrentContext = React.createContext(() => {
  console.error("ChangeCurrentContext not been set");
});
const NavigationProvider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  return (
    <CurrentContext.Provider value={current}>
      <ChangeCurrentContext.Provider value={setCurrent}>
        {children}
      </ChangeCurrentContext.Provider>
    </CurrentContext.Provider>
  );
};
const useScroll = (element = window, handler) => {
  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [handler]);
};
const Skills = () => {
  const title = "Skills & /Experience";

  const visible = true;
  const headerRef = useRef();
  const trail = useTrail(title.length, {
    ref: headerRef,
    config,
    opacity: visible ? 1 : 0,
    xyz: visible ? [1, 1, 1] : [0, 0, 0],
    from: {
      opacity: 0,
      xyz: [0, 0, 0],
    },
  });

  useChain([headerRef], [0, 0.7, 1.3]);
  return (
    <>
      <div className="pl-8 max-w-lg z-10">
        <h1
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "3em",
            display: "block",
            maxWidth: "15ch",
          }}
          className="leading-none font-bold"
        >
          {trail.map(({ xyz, className, ...rest }, index) =>
            title[index] === "/" ? (
              <br />
            ) : (
              <animated.span
                onMouseEnter={(e) => {
                  const element = e.target;
                  element.classList.add("hoverring");

                  setTimeout(() => element.classList.remove("hoverring"), 1000);
                }}
                className="inline-block item text-blue-400"
                key={index}
                style={{
                  ...rest,
                  transform: xyz
                    .interpolate({
                      range: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
                      output: [
                        "1, 1, 1",
                        "1.25, 0.75, 1",
                        "0.75, 1.25, 1",
                        "1.15, 0.85, 1",
                        "0.95, 1.05, 1",
                        "1.05, 0.95, 1",
                        "1, 1, 1",
                      ],
                    })
                    .interpolate((x, y, z) => `scale3d(${x})`),
                }}
              >
                {title[index]}
              </animated.span>
            )
          )}
        </h1>
        <p className="whitespace-pre-line mt-4">
          The main area of my expertise is front end development (client side of
          the web).
        </p>
        <p className="whitespace-pre-line mt-4">
          HTML, CSS, JS building small , medium web and large scale web apps
          with REACTJS, custom animations, and coding interactive layouts.
        </p>
      </div>
    </>
  );
};

const About = () => {
  const visible = true;
  const headerRef = useRef();
  const trail = useTrail("About me".length, {
    ref: headerRef,
    config,
    opacity: visible ? 1 : 0,
    xyz: visible ? [1, 1, 1] : [0, 0, 0],
    from: {
      opacity: 0,
      xyz: [0, 0, 0],
    },
  });
  const subRef = useRef();
  const subStyles = useSpring({
    ref: subRef,
    config: {
      mass: 1,
      tension: 150,
      friction: 150,
    },
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    to: { opacity: visible ? 1 : 0 },
  });
  const formRef = useRef();
  useChain([headerRef, subRef, formRef], [0, 0.7, 1.3]);
  return (
    <>
      <div className="pl-8 max-w-lg z-10">
        <h1
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "4em",
            display: "block",
            maxWidth: "15ch",
          }}
          className="leading-none font-bold"
        >
          {trail.map(({ xyz, className, ...rest }, index) =>
            "About me"[index] === "/" ? (
              <br />
            ) : (
              <animated.span
                onMouseEnter={(e) => {
                  const element = e.target;
                  element.classList.add("hoverring");

                  setTimeout(() => element.classList.remove("hoverring"), 1000);
                }}
                className="inline-block item text-blue-400"
                key={index}
                style={{
                  ...rest,
                  transform: xyz
                    .interpolate({
                      range: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
                      output: [
                        "1, 1, 1",
                        "1.25, 0.75, 1",
                        "0.75, 1.25, 1",
                        "1.15, 0.85, 1",
                        "0.95, 1.05, 1",
                        "1.05, 0.95, 1",
                        "1, 1, 1",
                      ],
                    })
                    .interpolate((x, y, z) => `scale3d(${x})`),
                }}
              >
                {"About me"[index]}
              </animated.span>
            )
          )}
        </h1>
        <p className="whitespace-pre-line mt-4">
          Professionally connected with the web development industry and
          information technology for many years.
        </p>
        <p className="whitespace-pre-line mt-4">
          Well-organised person, problem solver, independent employee with high
          attention to detail. Fan of MMA, outdoor activities, TV series and,
          recently, English literature. A family person, father of two fractious
          boys, therefore remote employment is preferred.
        </p>
        <p className="whitespace-pre-line mt-4">
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>
      </div>
    </>
  );
};
const array = ["Home", "About", "Skills", "Contact"];
const items = Object.values(`Hi,/I'm long,/web developer.`);
const config = {
  mass: 1,
  tension: 2000,
  friction: 150,
};
const useIntersection = (ref, options) => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState(
    null
  );
  useEffect(() => {
    if (ref.current) {
      const handler = (entries) => {
        setIntersectionObserverEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.disconnect();
        }
      };
    }
    return () => {};
  }, [ref, options.threshold, options.root, options.rootMargin, options]);

  return intersectionObserverEntry;
};
const HomeContent = ({}) => {
  const visible = true;
  const headerRef = useRef();
  const trail = useTrail(items.length, {
    ref: headerRef,
    config,
    opacity: visible ? 1 : 0,
    xyz: visible ? [1, 1, 1] : [0, 0, 0],
    from: {
      opacity: 0,
      xyz: [0, 0, 0],
    },
  });
  const subRef = useRef();
  const formRef = useRef();
  const formtrail = useTrail(3, {
    ref: formRef,
    config,
    opacity: visible ? 1 : 0,
    from: {
      opacity: 0,
    },
  });
  useChain([headerRef, subRef, formRef], [0, 0.7, 1.3]);
  const buttonRef = useRef();
  const buttonStyles = useSpring({
    ref: buttonRef,
    config: {
      mass: 1,
      tension: 150,
      friction: 150,
    },
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    to: { opacity: visible ? 1 : 0 },
  });
  useChain([headerRef, buttonRef, formRef], [0, 1, 2]);
  return (
    <div className="pl-8">
      <h1
        style={{
          whiteSpace: "pre-wrap",
          fontSize: "2.6em",
          display: "block",
          maxWidth: "15ch",
        }}
        className="leading-none font-bold"
      >
        {trail.map(({ xyz, className, ...rest }, index) =>
          items[index] === "/" ? (
            <br key={index} />
          ) : (
            <animated.span
              onMouseEnter={(e) => {
                const element = e.target;
                element.classList.add("hoverring", "text-blue-400");

                setTimeout(
                  () => element.classList.remove("hoverring", "text-blue-400"),
                  1000
                );
              }}
              className="inline-block item"
              key={index}
              style={{
                ...rest,
                transform: xyz
                  .interpolate({
                    range: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
                    output: [
                      "1, 1, 1",
                      "1.25, 0.75, 1",
                      "0.75, 1.25, 1",
                      "1.15, 0.85, 1",
                      "0.95, 1.05, 1",
                      "1.05, 0.95, 1",
                      "1, 1, 1",
                    ],
                  })
                  .interpolate((x, y, z) => `scale3d(${x})`),
              }}
            >
              {items[index]}
            </animated.span>
          )
        )}
      </h1>
      <animated.h2
        style={{
          fontSize: "1em",
          letterSpacing: "0.24em",
        }}
        className="mt-4 opacity-50 text-lg whitespace-pre-line"
      >
        Front End Developer / Freelancer
      </animated.h2>
      <animated.a
        href="#Contact"
        style={{
          ...buttonStyles,
          ...formtrail[1],
          letterSpacing: "0.25em",
        }}
        className="inline-block mt-8 px-4 py-2 border text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-color"
      >
        CONTACT ME
      </animated.a>
      <div>
        <animated.div
          style={{
            ...formtrail[2],
            width: "800px",
            maxWidth: "70%",
            height: 300,
          }}
          className="absolute WordCloud bottom-0 right-0 flex justify-center items-center"
        >
          <WordCloud />
        </animated.div>
      </div>
    </div>
  );
};
const Contact = ({}) => {
  const visible = true;
  const headerRef = useRef();
  const trail = useTrail("Contact".length, {
    ref: headerRef,
    config,
    opacity: visible ? 1 : 0,
    xyz: visible ? [1, 1, 1] : [0, 0, 0],
    from: {
      opacity: 0,
      xyz: [0, 0, 0],
    },
  });
  const subRef = useRef();
  const subStyles = useSpring({
    ref: subRef,
    config: {
      mass: 1,
      tension: 150,
      friction: 150,
    },
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    to: { opacity: visible ? 1 : 0 },
  });
  const formRef = useRef();
  const formtrail = useTrail(5, {
    ref: formRef,
    config,
    opacity: visible ? 1 : 0,
    x: visible ? 0 : 100,
    from: {
      opacity: 0,
      x: 100,
    },
  });
  useChain([headerRef, subRef, formRef], [0, 0.7, 1.3]);
  const [showMap, setShowMap] = useState();
  useEffect(() => {
    if (!showMap) {
      setTimeout(() => setShowMap(true), 2000);
    }
  }, [showMap]);
  return (
    <>
      {showMap && (
        <div>
          <div
            style={{
              borderRadius: "100% 0 0 0",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              filter: "gra",
            }}
            className="absolute top-0 right-0  flex justify-center items-center"
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501540.41609239514!2d106.1252766736268!3d10.865952362601895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1576088953457!5m2!1svi!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`,
            }}
          ></div>
        </div>
      )}
      <div className="pointer-events-none">
        <div
          style={{
            borderRadius: "100% 0 0 0",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            backdropFilter: "grayscale(1)",
            background: "#0000008c",
            boxShadow: "inset 0 0 10px #000000",
          }}
          className="absolute shadow top-0 right-0  flex justify-center items-center"
        ></div>
      </div>
      <div className="pl-8 max-w-lg z-10">
        <h1
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "4em",
            display: "block",
            maxWidth: "15ch",
          }}
          className="leading-none font-bold"
        >
          {trail.map(({ xyz, className, ...rest }, index) =>
            "Contact"[index] === "/" ? (
              <br />
            ) : (
              <animated.span
                onMouseEnter={(e) => {
                  const element = e.target;
                  element.classList.add("hoverring");

                  setTimeout(() => element.classList.remove("hoverring"), 1000);
                }}
                className="inline-block item text-blue-400"
                key={index}
                style={{
                  ...rest,
                  transform: xyz
                    .interpolate({
                      range: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
                      output: [
                        "1, 1, 1",
                        "1.25, 0.75, 1",
                        "0.75, 1.25, 1",
                        "1.15, 0.85, 1",
                        "0.95, 1.05, 1",
                        "1.05, 0.95, 1",
                        "1, 1, 1",
                      ],
                    })
                    .interpolate((x, y, z) => `scale3d(${x})`),
                }}
              >
                {"Contact"[index]}
              </animated.span>
            )
          )}
        </h1>
        <animated.h2
          style={{
            fontSize: "1em",
            filter: "drop-shadow(#000 0px 1px 1px)",
            ...subStyles,
            letterSpacing: "0.24em",
          }}
          className="mt-4 opacity-100 text-white  whitespace-pre-wrap"
        >
          I am interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to contact me using below form either.
        </animated.h2>
        <form
          autoComplete="off"
          className="contact w-full text-black flex flex-wrap mt-8 -mx-2"
        >
          <div
            style={{
              border: "0.25rem solid transparent",
              width: "50%",
            }}
            className="flex-1"
          >
            <animated.input
              style={{
                ...formtrail[0],
                transform: formtrail[0].x.interpolate(
                  (x) => `translate3d(0,${x}px,0)`
                ),
              }}
              class={"p-3 w-full bg-gray-900"}
              name="name"
              placeholder="name"
            />
            <label />
          </div>
          <div
            style={{
              border: "0.25rem solid transparent",
              width: "50%",
            }}
            className="flex-1"
          >
            <animated.input
              style={{
                ...formtrail[1],
                transform: formtrail[1].x.interpolate(
                  (x) => `translate3d(0,${x}px,0)`
                ),
              }}
              class={"p-3 w-full bg-gray-900"}
              name="email"
              placeholder="email"
            />
            <label />
          </div>
          <div
            style={{
              border: "0.25rem solid transparent",
            }}
            className="w-full"
          >
            <animated.input
              style={{
                ...formtrail[2],
                transform: formtrail[2].x.interpolate(
                  (x) => `translate3d(0,${x}px,0)`
                ),
              }}
              className={"p-3 w-full bg-gray-900"}
              name="message"
              placeholder="message"
            />
            <label />
          </div>
          <div
            style={{
              border: "0.25rem solid transparent",
            }}
            className="w-full"
          >
            <animated.textarea
              style={{
                ...formtrail[3],
                transform: formtrail[3].x.interpolate(
                  (x) => `translate3d(0,${x}px,0)`
                ),
              }}
              className={"p-3 w-full h-full bg-gray-900"}
              name="subject"
              placeholder="subject"
            />
            <label />
          </div>
          <div
            style={{
              border: "0.25rem solid transparent",
            }}
            className="w-full flex justify-end"
          >
            <animated.button
              style={{
                ...formtrail[4],
                transform: formtrail[4].x.interpolate(
                  (x) => `translate3d(0,${x}px,0)`
                ),
              }}
              class="mt-2 px-6 py-1  bg-blue-400 text-color font-bold"
            >
              Send
            </animated.button>
          </div>
        </form>
      </div>
    </>
  );
};
const PageWrap = ({ title, index, children }) => {
  const intersectionRef = React.useRef(null);
  const current = useContext(CurrentContext);
  const setCurrent = useContext(ChangeCurrentContext);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  useEffect(() => {
    const visible = intersection && intersection.intersectionRatio >= 1;
    if (visible) setCurrent(index);
  }, [index, intersection, setCurrent]);
  return (
    <div
      ref={intersectionRef}
      style={{
        filter: "drop-shadow(var(--text-color-light) 0px 1px 1px)",
      }}
      className="w-full  h-full flex-col flex px-4 absolute top-0 left-0"
    >
      <div
        style={{
          paddingTop: 50,
        }}
        className="relative "
      >
        <div className="flex absolute top-0 left-0 justify-center right-0 z-50">
          {array.map((value, y) => (
            <div
              style={{
                height: 50,
                width: 80,
              }}
              className="font-bold flex justify-center items-center"
              key={value}
            >
              {y === index ? (
                <a
                  href={`#${value}`}
                  className="jsCode"
                  style={{
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    opacity: 1,
                  }}
                >
                  {value}
                  <span className="jsCode">.js</span>
                </a>
              ) : (
                <a
                  href={`#${value}`}
                  className="jsCode"
                  style={{
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                >
                  {value}
                  <span className="jsCode">.js</span>
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="jsCode ">const</div>
        <div className="pl-4">
          <span
            style={{
              opacity: 1,
              fontSize: "1em",
            }}
            className="font-bold jsCode capitalize"
          >
            {title}{" "}
          </span>
          <span className="jsCode ">( )</span>
        </div>
      </div>
      {
        <div className="flex-1 flex flex-col justify-center">
          <div className="jsCode ">{"{"}</div>
          <div className="jsCode pl-4">return</div>
          {current === index && children}
          <div className="jsCode ">{"}"}</div>
        </div>
      }
      <div className="">
        <span className="jsCode">export default </span>
        <span
          className="jsCode capitalize"
          style={{
            opacity: 1,
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
};
const Loading = ({ children }) => {
  const [open, toggle] = useState(false);
  const props = useSpring({
    width: open ? 100 : 0,
    config: { duration: 1500 },
  });
  const [index, set] = useState(0);
  useEffect(() => {
    setTimeout(() => toggle(true), 200);
    setTimeout(() => set(1), 1000);
  }, []);
  const transitions = useTransition(index, (p) => p, {
    from: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  const pages = useMemo(
    () => [
      ({ style }) => (
        <animated.div
          style={{
            ...style,
          }}
          className="w-full absolute top-0 left-0 h-screen items-center justify-center flex h-screen overflow-hidden sticky  z-50 bottom-0"
        >
          <div className="relative cursor-pointer rounded-lg  overflow-hidden">
            <animated.div
              style={{
                width: props.width.interpolate((x) => `${100 - x.toFixed(0)}%`),
                backdropFilter: `grayscale(1)`,
              }}
              class="absolute z-10 top-0 right-0 font-bold  h-full flex justify-center items-center text-color"
            ></animated.div>
            <div class="font-bold text-5xl text-blue-500">loading...</div>
          </div>
        </animated.div>
      ),
      ({ style }) => children,
    ],
    [children, props.width]
  );
  return transitions.map(({ item, props, key }) => {
    const Page = pages[item];
    return <Page key={key} style={props} />;
  });
};

function Portfolio() {
  const horizontalScrollerRef = useRef();
  useScroll(window, (e) => {
    requestAnimationFrame(() => {
      if (horizontalScrollerRef.current) {
        const percent =
          e.srcElement.scrollingElement.scrollTop /
          e.srcElement.scrollingElement.scrollHeight;
        horizontalScrollerRef.current.scrollLeft =
          percent * horizontalScrollerRef.current.scrollWidth;
      }
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [e, setE] = useState();
  useEffect(() => {
    setE(
      <div
        style={{
          background: "var(--background-rich)",
        }}
        className=" w-full h-full relative flex items-start cursor-default"
      >
        <Loading>
          <div className="flex-1 w-full relative">
            <div id="Home" />
            <div
              style={{
                scrollSnapType: " x mandatory",
              }}
              ref={horizontalScrollerRef}
              className="w-full absolute top-0 left-0 h-screen flex h-screen overflow-hidden  sticky"
            >
              {array.map((value, i) => (
                <div
                  key={i}
                  style={{
                    scrollSnapAlign: "start",
                  }}
                  className="w-full h-screen overflow-hidden  flex-shrink-0 relative"
                >
                  <PageWrap index={i} title={value}>
                    {i === 0 ? (
                      <HomeContent />
                    ) : i === 1 ? (
                      <About />
                    ) : i === 2 ? (
                      <Skills />
                    ) : i === 3 ? (
                      <Contact />
                    ) : (
                      <div className="pl-8">
                        <h1
                          style={{
                            whiteSpace: "pre-wrap",
                            fontSize: "3em",
                            display: "block",
                            maxWidth: "15ch",
                          }}
                          className="leading-none font-bold"
                        >
                          {value}
                        </h1>
                      </div>
                    )}
                  </PageWrap>
                </div>
              ))}
            </div>

            {array
              .filter((value) => value !== array[0])
              .map((v, i) => (
                <div
                  id={v}
                  key={i}
                  style={{
                    height: `100vh`,
                  }}
                />
              ))}
          </div>
        </Loading>
      </div>
    );
  }, []);
  if (!e) return null;
  return (
    <>
      <div className="p-3 fixed z-20 top-0 right-0">
        <Link
          to="/"
          className="h-12 w-12 flex justify-center items-center p-2 btn text-color"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </Link>
      </div>
      <NavigationProvider>{e}</NavigationProvider>
    </>
  );
}

export default Portfolio;
