import { useSize } from "ahooks";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
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

const dataChart = [
  { name: "1", uv: 300, pv: 456 },
  { name: "2", uv: -145, pv: 230 },
  { name: "3", uv: -100, pv: 345 },
  { name: "4", uv: -8, pv: 450 },
  { name: "5", uv: 100, pv: 321 },
  { name: "6", uv: 9, pv: 235 },
  { name: "7", uv: 53, pv: 267 },
  { name: "8", uv: 252, pv: -378 },
  { name: "9", uv: 79, pv: -210 },
  { name: "10", uv: 294, pv: -23 },
  { name: "12", uv: 43, pv: 45 },
  { name: "13", uv: -74, pv: 90 },
  { name: "14", uv: -71, pv: 130 },
  { name: "15", uv: -117, pv: 11 },
  { name: "16", uv: -186, pv: 107 },
  { name: "17", uv: -16, pv: 926 },
  { name: "18", uv: -125, pv: 653 },
  { name: "19", uv: 222, pv: 366 },
  { name: "20", uv: 372, pv: 486 },
  { name: "21", uv: 182, pv: 512 },
  { name: "22", uv: 164, pv: 302 },
  { name: "23", uv: 316, pv: 425 },
  { name: "24", uv: 131, pv: 467 },
  { name: "25", uv: 291, pv: -190 },
  { name: "26", uv: -47, pv: 194 },
  { name: "27", uv: -415, pv: 371 },
  { name: "28", uv: -182, pv: 376 },
  { name: "29", uv: -93, pv: 295 },
  { name: "30", uv: -99, pv: 322 },
  { name: "31", uv: -52, pv: 246 },
  { name: "32", uv: 154, pv: 33 },
  { name: "33", uv: 205, pv: 354 },
  { name: "34", uv: 70, pv: 258 },
  { name: "35", uv: -25, pv: 359 },
  { name: "36", uv: -59, pv: 192 },
  { name: "37", uv: -63, pv: 464 },
  { name: "38", uv: -91, pv: -2 },
  { name: "39", uv: -66, pv: 154 },
  { name: "40", uv: -50, pv: 186 },
];

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
  } = data;
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
                    <span className="bg-red-100 text-red-700  font-bold text-xs mb-2 mr-2 px-1 rounded">{`⚰️ ${cumulativeDeaths}`}</span>,
                    // confirmed, rounded
                    <span className="bg-gray-300 text-gray-700  font-bold text-xs mb-2 mr-2 px-1 rounded">{`🤢 ${cumulativeConfirmed}`}</span>,
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
  if (!data || !data.update) return null;
  const days = data.days.reverse();
  const selectDate = days[select];
  const countryData = selectCountry
    ? data.groupByCountry[selectCountry]
    : selectCountry;
  const [
    datetime,
    country,
    legion,
    newDeaths,
    deaths,
    newCases,
    cases,
  ] = countryData
    ? countryData.find((item) => item[0] === Number(selectDate)) || []
    : [];
  return (
    <div className="p-3 space-y-3">
      <div className="py-3 w-full z-10 flex items-center sticky top-0 background">
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
            <div>Global</div>
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
      <section className="body-font">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="col-span-1 ">
              <div className="shadow background-rich p-3 rounded-lg">
                <div className="text-4xl">🤢</div>
                <p className="leading-relaxed">cases</p>
                <h2 className="title-font text-lg font-medium md:text-3xl ">
                  {Number(cases || 0).toLocaleString()}
                </h2>

                <p className="leading-relaxed text-sm">
                  🔺 {Number(newCases || 0).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="shadow background-rich p-3 rounded-lg">
                <div className="text-4xl">⚰️</div>
                <p className="leading-relaxed">deaths</p>
                <h2 className="title-font text-lg font-medium md:text-3xl ">
                  {Number(deaths || 0).toLocaleString()}
                </h2>

                <p className="leading-relaxed text-sm">
                  🔺 {Number(newDeaths || 0).toLocaleString()}
                </p>
              </div>
            </div>
            {countryData && (
              <UseHook
                hook={useSize}
                deps={[document.querySelector("#layout-content")]}
              >
                {({ width }) => {
                  return (
                    <div className="col-span-2 overflow-auto w-full shadow background-rich rounded-lg flex justify-center py-3">
                      <BarChart
                        width={width - 30}
                        height={300}
                        data={countryData
                          .map((row) => ({
                            name: new Date(Number(row[0])).toLocaleDateString(),
                            newCases: row[5],
                          }))
                          .reverse()}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={false} />
                        <YAxis width={30} mirror={true} />
                        <Tooltip />
                        <Legend
                          verticalAlign="top"
                          wrapperStyle={{
                            lineHeight: "40px",
                          }}
                        />
                        <ReferenceLine y={0} stroke="#000" />
                        <Brush dataKey="name" height={30} stroke="#8884d8" />
                        <Bar dataKey="newCases" fill="#8884d8" />
                      </BarChart>
                    </div>
                  );
                }}
              </UseHook>
            )}
          </div>
        </div>
      </section>
    </div>
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
