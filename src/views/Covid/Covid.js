import { useSize } from "ahooks";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { groupBy } from "../../helpers/array";
import { Layout } from "../../layouts/Layout";
import useCache, { useCacheSet } from "../../modules/cache/useCache";
import UseHook from "../../modules/hook";
import Namespace from "../../modules/namespace/Namespace";
import useNamespace from "../../modules/namespace/useNamespace";
import useLocation from "../../modules/navigation/useLocation";
import useLocalStorage from "../../modules/storage/useLocalStorage";
import Map from "./Map.lazy";

const namespace = {
  data: "data",
  data__async_loading: "data__async_loading",
  selectedCountry: "selectedCountry",
};
const Left = () => {
  return <RepoList />;
};
const RepoList = () => {
  const repolistname = useNamespace(namespace.data);
  const data__async_loading = useNamespace(namespace.data__async_loading);
  const selectedCountryName = useNamespace(namespace.selectedCountry);
  const setSelectCountry = useCacheSet(selectedCountryName);
  const [loading, setLoading] = useCache(data__async_loading, false);
  const [dataLocalstorage, setDataLocalstorage] = useLocalStorage(
    repolistname,
    [],
    {
      groubByDate: [],
      groupByCountry: [],
      groupByLegion: [],
    }
  );
  const [data, setData] = useCache(repolistname);
  useEffect(() => {
    if (!data && dataLocalstorage) {
      setData(JSON.parse(dataLocalstorage));
    }
  }, [data, dataLocalstorage, setData]);
  const handleSearch = useCallback(
    ({ keyword }) => {
      setLoading(true);
      fetch(
        `https://cors-anywhere.herokuapp.com/https://dashboards-dev.sprinklr.com/data/9043/global-covid19-who-gis.json`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTimeout(() => {
            const {
              0: groubByDate = [],
              1: groupByCountry = [],
              2: groupByLegion = [],
            } = groupBy(data.rows, [0, 1, 2]);
            const days = Object.keys(groubByDate).sort(
              (a, b) => -(Number(a) - Number(b))
            );

            Object.keys(groupByCountry).forEach((key) => {
              const countryData = groupByCountry[key];
              countryData.sort((a, b) => -(Number(a[0]) - Number(b[0])));
            });
            const countries = Object.keys(groupByCountry);
            const legions = Object.keys(groupByLegion);
            const lastDay = days[0];
            const save = {
              update: Date.now(),
              groubByDate,
              world: Object.keys(groubByDate)
                .map((key) =>
                  groubByDate[key].reduce(
                    (res, row) => {
                      res[3] = res[3] + row[3];
                      res[4] = res[4] + row[4];
                      res[5] = res[5] + row[5];
                      res[6] = res[6] + row[6];
                      return res;
                    },
                    [key, "WORLD", "WORLD", 0, 0, 0, 0]
                  )
                )
                .sort((a, b) => -(Number(a[0]) - Number(b[0]))),
              groupByCountry,
              groupByLegion,
              days,
              countries,
              legions,
              lastDay,
            };
            setDataLocalstorage(JSON.stringify(save));
            setData(save);
            setLoading(false);
          });
        })
        .finally(() => setLoading(false));
    },
    [setData, setDataLocalstorage, setLoading]
  );

  useEffect(() => {
    handleSearch({ keyword: "react" });
  }, [handleSearch]);

  if (!data) return null;
  const {
    groubByDate = [],
    groupByCountry = [],
    groupByLegion = [],
    lastDay,
    world = [],
  } = data;
  const lastDayWorld = world.find((row) => row[0] === lastDay) || [];
  console.log("data", data);
  return (
    <>
      <input
        onKeyDown={(event) => {
          if (
            event.which === 13 ||
            event.keyCode === 13 ||
            event.key === "Enter"
          ) {
            //code to execute here
            handleSearch({
              keyword: event.target.value,
            });
            return false;
          }
          return true;
        }}
        className="sticky background-rich top-0 z-10 block w-full px-2 py-3 border-b border-transparent border-b-4 focus:border-gray-300 outline-none"
        placeholder="Search..."
      />
      {loading && (
        <div className="text-gray-500 text-center font-bold">loading</div>
      )}
      <div
        onClick={() => {
          setTimeout(() => setSelectCountry(undefined), 300);
        }}
        className="btn cursor-pointer hover:shadow-lg m-2 ml-0 rounded p-2 flex flex-col justify-between leading-normal "
      >
        <div className="text-color font-bold flex items-center">
          <img
            className="w-6 mr-2"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/225px-Flag_of_the_United_Nations.svg.png`}
          ></img>{" "}
          World
        </div>
        <div className=" text-color-rich flex items-center flex-wrap">
          {[
            // deaths,
            <span className="bg-red-100 text-red-700  font-bold text-xs mb-2 mr-2 px-1 rounded">
              <span aria-label="death" role="img">
                ⚰️
              </span>
              {` ${lastDayWorld[4]}`}
            </span>,
            // confirmed, rounded
            <span className="bg-gray-300 text-gray-700  font-bold text-xs mb-2 mr-2 px-1 rounded">
              <span aria-label="sick" role="img">
                🤢
              </span>
              {` ${lastDayWorld[6]}`}
            </span>,
          ].map((value, i) => (
            <div key={i} className="">
              {value}
            </div>
          ))}
        </div>
      </div>
      {lastDay &&
        groubByDate[lastDay]
          .sort((a, b) => Number(b[6]) - Number(a[6]))
          .map(
            ([
              date,
              country,
              legion,
              deaths,
              cumulativeDeaths,
              confirmed,
              cumulativeConfirmed,
            ]) => (
              <div
                onClick={() => {
                  setTimeout(() => setSelectCountry(country), 300);
                }}
                key={country}
                className="btn cursor-pointer hover:shadow-lg m-2 ml-0 rounded p-2 flex flex-col justify-between leading-normal "
              >
                <div className="text-color font-bold flex items-center">
                  <img
                    className="w-6 mr-2"
                    src={`https://www.countryflags.io/${country}/flat/64.png`}
                  ></img>{" "}
                  {country}
                </div>
                <div className=" text-color-rich flex items-center flex-wrap">
                  {[
                    // deaths,
                    <span className="bg-red-100 text-red-700  font-bold text-xs mb-2 mr-2 px-1 rounded">
                      <span aria-label="death" role="img">
                        ⚰️
                      </span>
                      {` ${cumulativeDeaths}`}
                    </span>,
                    // confirmed, rounded
                    <span className="bg-gray-300 text-gray-700  font-bold text-xs mb-2 mr-2 px-1 rounded">
                      <span aria-label="sick" role="img">
                        🤢
                      </span>
                      {` ${cumulativeConfirmed}`}
                    </span>,
                  ].map((value, i) => (
                    <div key={i} className="">
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
      {/* <div className="cursor-pointer m-2 hover:shadow rounded p-4 flex flex-col justify-between leading-normal">
        <div className="text-gray-500 text-center font-bold">
          {loading ? "LOADING" : "LOAD MORE"}
        </div>
      </div> */}
    </>
  );
};
const Content = () => {
  const ref = useRef(Date.now());
  const repolistname = useNamespace(namespace.data);
  const selectedCountryName = useNamespace(namespace.selectedCountry);
  const [selectCountry] = useCache(selectedCountryName);
  const [data, setData] = useCache(repolistname);
  const [select, setSelected] = useState(0);
  const days = React.useMemo(() => {
    return [...(data || { days: [] }).days].reverse();
  }, [data]);
  if (!data || !data.update) return null;
  const selectDate = days[select];
  const countryData = selectCountry
    ? data.groupByCountry[selectCountry]
    : data.world;
  const [datetime, country, legion, newDeaths, deaths, newCases, cases] =
    countryData.find((item) => Number(item[0]) === Number(selectDate)) || [];
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col  w-full space-y-3  z-10 pointer-events-none">
        <div className="p-3 w-full z-10 flex items-center sticky top-0 background pointer-events-auto">
          {selectCountry ? (
            <div className="text-color text-3xl font-bold flex items-center flex-1">
              <img
                className="w-12 mr-2"
                src={`https://www.countryflags.io/${selectCountry}/flat/64.png`}
              ></img>{" "}
              <div>{selectCountry}</div>
            </div>
          ) : (
            <div className="text-color flex-1 font-bold text-3xl flex items-center">
              <img
                className="w-12 mr-2"
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/225px-Flag_of_the_United_Nations.svg.png`}
              ></img>{" "}
              <div>World</div>
            </div>
          )}
          <select
            class="block appearance-none background-rich  py-3 px-4 pr-8 rounded leading-tight  focus:shadow-lg"
            value={select}
            onChange={(e) => {
              const value = e.target.value;
              const now = Date.now();

              ref.current = now;
              setTimeout(() => {
                if (now === ref.current) {
                  setSelected(value);
                }
              }, 0);
            }}
          >
            {days.map((value, i) => (
              <option value={i}>
                {new Date(Number(days[i])).toDateString()}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="p-3 flex items-center">
          <div className="col-span-1 ">
            <div className="shadow background-rich p-3 rounded-lg">
              <div className="text-4xl">
                <span
                  aria-label="death"
                  role="img">
                  ⚰️
                </span>
              </div>
              <p className="leading-relaxed">
                cases
              </p>
              <h2 className="title-font text-lg font-medium md:text-3xl ">
                {Number(
                  cases || 0
                ).toLocaleString()}
              </h2>

              <div className="leading-relaxed text-sm">
                <span
                  aria-label="sick"
                  role="img">
                  🔺
                </span>{' '}
                {Number(
                  newCases || 0
                ).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="shadow background-rich p-3 rounded-lg">
              <div className="text-4xl">
                <span
                  aria-label="sick"
                  role="img">
                  🤢
                </span>
              </div>
              <p className="leading-relaxed">
                deaths
              </p>
              <h2 className="title-font text-lg font-medium md:text-3xl ">
                {Number(
                  deaths || 0
                ).toLocaleString()}
              </h2>

              <div className="leading-relaxed text-sm">
                <span
                  aria-label="sick"
                  role="img">
                  🔺
                </span>{' '}
                {Number(
                  newDeaths || 0
                ).toLocaleString()}
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex-1 relative"></div>
        <section className="body-font pointer-events-auto p-2 relative overflow-hidden">
          <div className="absolute top-0 shadow background-rich left-0 right-0 bottom-0 opacity-75"></div>
          <div className="grid grid-cols-2 gap-2 text-center">
            {countryData && (
              <UseHook
                hook={useMemo}
                deps={[
                  () => (
                    <UseHook hook={useState} deps={["new cases"]}>
                      {([currentTab, setCurrentTab]) => {
                        return (
                          <UseHook hook={useRef}>
                            {(ref) => (
                              <UseHook hook={useSize} deps={[ref.current]}>
                                {({ width }) => {
                                  return (
                                    <div
                                      ref={ref}
                                      className="col-span-2 overflow-auto w-full  rounded-lg flex flex-col item-center py-3 "
                                    >
                                      <style>
                                        {`.recharts-text.recharts-cartesian-axis-tick-value,.recharts-layer.recharts-brush-texts {font-size:0.7rem;font-weight:bold}`}
                                      </style>
                                      <div
                                        style={{
                                          padding: "12px",
                                        }}
                                        className="pt-1 pb-3 space-x-3 w-full flex justify-start"
                                      >
                                        <button
                                          onClick={() =>
                                            setCurrentTab("new cases")
                                          }
                                          className="px-3 btn bg-white text-gray-500 py-1 rounded-lg font-bold text-sm"
                                        >
                                          new cases
                                        </button>
                                        <button
                                          onClick={() =>
                                            setCurrentTab("current cases")
                                          }
                                          className="px-3 btn bg-white text-blue-500 py-1 rounded-lg font-bold text-sm"
                                        >
                                          current cases
                                        </button>
                                        <button
                                          onClick={() =>
                                            setCurrentTab("new deaths")
                                          }
                                          className="px-3 btn bg-white  text-green-500 py-1 rounded-lg font-bold text-sm"
                                        >
                                          new deaths
                                        </button>
                                        <button
                                          onClick={() =>
                                            setCurrentTab("current deaths")
                                          }
                                          className="px-3 btn bg-white  text-orange-500 py-1 rounded-lg font-bold text-sm"
                                        >
                                          current deaths
                                        </button>
                                      </div>
                                      <div
                                        className="w-full"
                                        style={{
                                          height: 300,
                                        }}
                                      >
                                        <BarChart
                                          className={((currentTab) => {
                                            switch (currentTab) {
                                              case "new cases":
                                                return "text-gray-500";
                                              case "current cases":
                                                return "text-blue-500";
                                              case "new deaths":
                                                return "text-green-500";
                                              case "current deaths":
                                                return "text-orange-500";
                                              default:
                                                break;
                                            }
                                          })(currentTab)}
                                          width={width - 24}
                                          height={300}
                                          data={[
                                            ...countryData.map((row) => ({
                                              name: new Date(
                                                Number(row[0])
                                              ).toLocaleDateString(),
                                              "new cases": row[5],
                                              "current cases": row[6],
                                              "new deaths": row[3],
                                              "current deaths": row[4],
                                            })),
                                          ].reverse()}
                                          margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                          }}
                                        >
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <XAxis
                                            dataKey="name"
                                            // tick={
                                            //   false
                                            // }
                                            tickLine={false}
                                            padding={{
                                              left: 30,
                                            }}
                                          />
                                          <YAxis
                                            orientation="right"
                                            width={30}
                                            tickLine={false}
                                          />
                                          <Tooltip />
                                          <ReferenceLine y={0} stroke="#000" />
                                          <Bar
                                            dataKey={currentTab}
                                            fill="currentColor"
                                          />
                                        </BarChart>
                                      </div>
                                    </div>
                                  );
                                }}
                              </UseHook>
                            )}
                          </UseHook>
                        );
                      }}
                    </UseHook>
                  ),
                  [countryData],
                ]}
              >
                {(e) => e}
              </UseHook>
            )}
          </div>
        </section>
      </div>
      <div className="col-span-2 hidden lg:block absolute top-0 left-0 h-screen overflow-auto w-full overflow-hidden">
        <Map
          {...{
            selectDate,
            data,
          }}
        />
      </div>
    </>
  );
};
const Covid = () => {
  return (
    <Layout
      {...{
        left: <Left />,
        mid: <Content />,
        right: (
          <div>
            <div className="w-full justify-center items-center overflow-hidden md:max-w-sm ">
              <div className="relative h-24">
                <img
                  className="absolute h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                />
              </div>
              <div className="relative shadow mx-auto h-24 w-24 -my-12 rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                />
              </div>
              <div className="mt-16">
                <h1 className="text-lg text-center font-semibold">Cassie</h1>
                <p className="text-sm text-gray-600 text-center">
                  13 connections in common
                </p>
              </div>
            </div>
          </div>
        ),
        header: <Layout.Header />,
      }}
    />
  );
};
export default () => {
  const [location] = useLocation();
  return (
    <Namespace namespace={location}>
      <Covid />
    </Namespace>
  );
};
