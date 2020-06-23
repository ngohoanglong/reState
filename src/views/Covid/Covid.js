import React, {
  useState,
  useEffect,
  useLayoutEffect,
  cloneElement,
} from "react";
import Namespace from "../../modules/namespace/Namespace";
import useNamespace from "../../modules/namespace/useNamespace";
import useCache, {
  CacheProvider,
  useCacheSet,
} from "../../modules/cache/useCache";
import { Layout } from "../../layouts/Layout";
import PullToRefresh from "rmc-pull-to-refresh";
import ReactMarkdown from "react-markdown";
import Header from "../../layouts/Layout.Header";
import useLocalStorage from "../../modules/storage/useLocalStorage";
import { groupBy } from "../../helpers/array";
import useLocation from "../../modules/navigation/useLocation";
const namespace = {
  data: "data",
  selectedCountry: "selectedCountry",
};
const Left = () => {
  return <RepoList />;
};
const RepoList = () => {
  const repolistname = useNamespace(namespace.data);
  const selectedCountryName = useNamespace(namespace.selectedCountry);
  const setSelectCountry = useCacheSet(selectedCountryName);
  const [loading, setLoading] = useCache(
    repolistname + "__async_loading",
    false
  );
  const [dataLocalstorage, setDataLocalstorage] = useLocalStorage(
    repolistname,
    [],
    {
      groubByDate: [],
      groupByCountry: [],
      groupByLegion: [],
    }
  );
  const [data, setData] = useCache(
    repolistname,
    dataLocalstorage && dataLocalstorage !== null
      ? JSON.parse(dataLocalstorage)
      : {
          groubByDate: [],
          groupByCountry: [],
          groupByLegion: [],
        }
  );
  const handleSearch = ({ keyword }) => {
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
            (a, b) => Number(a) - Number(b)
          );
          const countries = Object.keys(groupByCountry);
          const legions = Object.keys(groupByLegion);
          const lastDay = days && days.length && days[days.length - 1];
          const save = {
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
      });
  };

  useEffect(() => {
    handleSearch({ keyword: "react" });
  }, []);
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
            handleSearch({ keyword: event.target.value });
            return false;
          }
          return true;
        }}
        className="block w-full  m-2 py-2 border-b border-transparent border-b-4 focus:border-gray-300 outline-none bg-transparent"
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
                <div className="text-color font-bold">{country}</div>
                <div className=" text-color-rich flex items-center flex-wrap">
                  {[
                    // deaths,
                    <span className="text-red-600 font-bold text-xs">{`⚰️ ${cumulativeDeaths}`}</span>,
                    // confirmed,
                    <span className="text-gray-600 font-bold text-xs">{`🤢 ${cumulativeConfirmed}`}</span>,
                  ].map((value, i) => (
                    <div key={i} className="background mb-2 mr-2 px-1 rounded">
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
  const repolistname = useNamespace(namespace.data);
  const selectedCountryName = useNamespace(namespace.selectedCountry);
  const [selectCountry] = useCache(selectedCountryName);
  const [data, setData] = useCache(repolistname);
  return (
    <div>
      {(selectCountry && (
        <ReactMarkdown
          escapeHtml={false}
          className="markdown-body max-w-lg mx-auto"
          source={selectCountry}
        />
      )) ||
        null}
      <p>
        {JSON.stringify(
          data && data.groupByCountry && data.groupByCountry[selectCountry]
        )}
      </p>
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
