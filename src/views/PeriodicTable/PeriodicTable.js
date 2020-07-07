import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Link from "../../modules/navigation/Link";

import {
  categoryColors,
  normalizePeriodicTableJSON,
} from "./PeriodicTableJSON";

/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === "undefined" || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split("e");
  value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);
const Detail = ({ domNode, element }) => {
  const detail = (
    <div className="w-full  overflow-hidden relative shadow-2xl ">
      <div
        style={{ height: 200 }}
        className="justify-center p-4 items-start w-full flex"
      >
        <div className="flex-1">
          <div className="font-semibold flex-1">{element.number}</div>
          <div
            className="font-bold flex-1"
            style={{
              height: "60px",
              fontSize: "60px",
            }}
          ></div>
          <div className="font-semibold flex-1">
            {Object.values(element.name).map((value, i) => (
              <span key={i} className="animated fadeInLeft faster">
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="">
          {element.shells.map((value, i) => (
            <div key={i} className="animated text-right fadeIn faster">
              {value}
            </div>
          ))}
        </div>
      </div>
      {["atomic_mass", "boil", "color", "density", "melt", "molar_heat"].map(
        (key) =>
          (element[key] && (
            <div
              className="bg-gray-100  flex px-4 py-1 text-black hover:bg-gray-200"
              key={key}
            >
              <div key={key} className=" fadeInRight animated faster">
                {key}
              </div>
              <div className="self-end flex-1 text-right">
                {Object.values("" + element[key]).map((value, i) => (
                  <span key={i} className="animated text-right fadeIn faster">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          )) ||
          null
      )}
    </div>
  );
  return ReactDOM.createPortal(detail, domNode);
};

export const useThrottle = (value, limit = 300) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());
  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);
  return throttledValue;
};
const PeriodicTable = ({ onChange = () => null }) => {
  const detailRef = useRef();
  const containerRef = useRef();
  const pinnedRef = useRef();
  useEffect(() => {
    onChange();
  });
  const [pinned, setPinned] = useState();
  useEffect(() => {
    pinnedRef.current = pinned;
  }, [pinned]);
  const [current, setCurrent] = useState([1, 1]);
  const [currentCategory, setCurrentCategory] = useState();
  const animate = useThrottle(() => {
    const poss = pinned || current;
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--top",
        `${-(300 * (poss[0] - 1))}px`
      );
      containerRef.current.style.setProperty(
        "--left",
        `${-(300 * (poss[1] - 1))}px`
      );
    }
  });
  useEffect(() => {
    animate && requestAnimationFrame(animate);
  }, [animate]);
  const rederedCachesRef = useRef({});
  const redered = useMemo(() => {
    let e = rederedCachesRef.current[currentCategory];
    if (!e)
      e = (
        <div ref={containerRef} className="w-full h-full p-4 overflow-hidden">
          <div className="w-full h-full flex items-start flex-wrap">
            <div
              style={{
                minWidth: "60%",
              }}
              className="flex-1 flex items-start flex-wrap z-10 "
            >
              {new Array(11).fill(true).map((_, x) => {
                return (
                  <React.Fragment key={x}>
                    {new Array(19).fill(true).map((_, y) => {
                      const id = `${y}_${x}`;
                      const element = normalizePeriodicTableJSON[id];
                      const poss = [x, y];
                      return (
                        <div
                          className=" relative overflow-hidden"
                          key={y}
                          style={{
                            width: `${100 / 19}%`,
                          }}
                        >
                          <div
                            style={{
                              width: `100%`,
                              paddingTop: "100%",
                            }}
                          ></div>
                          {element ? (
                            <button
                              style={{
                                outlineColor: "currentColor",
                                ...(!currentCategory ||
                                element.category === currentCategory
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0.3,
                                    }),
                              }}
                              onClick={() => {
                                if (poss === pinnedRef.current) {
                                  setPinned(undefined);
                                } else {
                                  setPinned(poss);
                                }
                              }}
                              onMouseEnter={() => setCurrent(poss)}
                              className={`cursor-pointer border border-${
                                categoryColors[element.category]
                              }-300 text-${
                                categoryColors[element.category]
                              }-700 text-center justify-center w-full  bg-${
                                categoryColors[element.category]
                              }-200 hover:bg-${
                                categoryColors[element.category]
                              }-300  flex flex-col items-center h-full absolute top-0 left-0`}
                            >
                              <div
                                style={{
                                  fontSize: "0.6vw",
                                }}
                                className="p-1 leading-none absolute top-0 left-0"
                              >
                                {element.number}
                              </div>
                              <div
                                className="font-bold "
                                style={{
                                  fontSize: "0.8vw",
                                }}
                              >
                                {element.symbol}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.6vw",
                                }}
                              >
                                {round10(element.atomic_mass, -4)}
                              </div>
                            </button>
                          ) : (
                            (!x || !y || null) && (
                              <div className="cursor-pointer   text-center justify-center w-full  flex flex-col items-center h-full absolute top-0 left-0">
                                {x + y}
                              </div>
                            )
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                );
              })}
              <div className="w-full mt-4 flex flex-wrap justify-start">
                {Object.keys(categoryColors).map((key) => (
                  <div key={key} className="pt-2 px-1">
                    <div
                      style={{
                        fontSize: "0.9vw",
                      }}
                      onMouseEnter={() => setCurrentCategory(key)}
                      onMouseLeave={() => setCurrentCategory(null)}
                      className={`font-bold  leading-relaxed cursor-pointer  text-${categoryColors[key]}-700 text-center justify-center w-full  bg-${categoryColors[key]}-300 hover:bg-${categoryColors[key]}-400 px-2  rounded-full`}
                    >
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div style={{ width: 300 }} className="relative">
                <div
                  style={{
                    width: `100%`,
                    paddingTop: "100%",
                  }}
                ></div>

                <div
                  style={{
                    transition: "all 0.25s linear 0s",
                    width: 300 * 19,
                    top: "var(--top)",
                    left: "var(--left)",
                  }}
                  className="absolute top-0 left-0 w-full  flex items-start flex-wrap"
                >
                  {new Array(11).fill(true).map((_, x) => {
                    return (
                      <React.Fragment key={x}>
                        {new Array(19).fill(true).map((_, y) => {
                          const id = `${y + 1}_${x + 1}`;
                          const element = normalizePeriodicTableJSON[id];
                          return (
                            <div
                              className=" overflow-hidden relative"
                              key={y}
                              style={{
                                width: `${100 / 19}%`,
                              }}
                            >
                              <div
                                style={{
                                  width: `100%`,
                                  paddingTop: "100%",
                                }}
                              ></div>
                              {element && (
                                <div className="justify-center p-4 items-start w-full flex  h-full absolute top-0 left-0">
                                  <div className="flex-1">
                                    {" "}
                                    <div
                                      className="font-bold flex-1"
                                      style={{
                                        fontSize: "60px",
                                      }}
                                    >
                                      {element.symbol}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </div>
                <div
                  ref={detailRef}
                  className="absolute top-0 left-0 w-full h-full flex items-start flex-wrap"
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
    rederedCachesRef.current[currentCategory] = e;
    return e;
  }, [currentCategory]);
  const poss = pinned || current;
  const id = `${poss[1]}_${poss[0]}`;
  const element = normalizePeriodicTableJSON[id];
  const throttledElement = useThrottle(element, 500);
  const detail = useMemo(
    () =>
      detailRef.current && (
        <Detail domNode={detailRef.current} element={throttledElement} />
      ),
    [throttledElement]
  );
  return (
    <div className="w-full h-screen overflow-hidden background-rich text-color-rich">
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
      {redered}
      {detail}
    </div>
  );
};

export default PeriodicTable;
