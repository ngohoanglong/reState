import React, {
  useState,
  useEffect,
  useLayoutEffect,
  cloneElement,
} from "react";

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

const Left = () => {
  return <RepoList />;
};
const RepoList = () => {
  const repolistname = useNamespace("repolist");
  const currentReponame = useNamespace("currentRepo");
  const setCurrentRepo = useCacheSet(currentReponame);
  const [loading, setLoading] = useCache(
    repolistname + "__async_loading",
    false
  );
  const [dataLocalstorage, setDataLocalstorage] = useLocalStorage(repolistname);
  const [data, setData] = useCache(
    repolistname,
    dataLocalstorage && dataLocalstorage !== null
      ? JSON.parse(dataLocalstorage)
      : undefined
  );
  const handleSearch = ({ keyword }) => {
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://dashboards-dev.sprinklr.com/data/9043/global-covid19-who-gis.json`
    )
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        setDataLocalstorage(JSON.stringify(data));
        setData(data);
      });
  };

  useEffect(() => {
    handleSearch({ keyword: "react" });
  }, []);
  const [
    { 0: groubByDate = [], 1: groupByCountry = [], 2: groupByLegion = [] },
    setIndexData,
  ] = useState({ "0": [], "1": [], "2": [] });
  useEffect(() => {
    if (data && data.rows) {
      setIndexData(groupBy(data.rows, [0, 1, 2]));
    }
  }, [!!(data && data.rows)]);
  console.log({ groubByDate, groupByCountry, groupByLegion });

  const days = Object.keys(groubByDate).sort((a,b)=>Number(a)-Number(b))
  const lastDay = days&&days.length&&days[days.length-1]
  console.log({ days,lastDay});
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
      {
        lastDay&&groubByDate[lastDay].sort((a,b)=>Number(b[6])-Number(a[6])).map(([date,country,legion,deaths,cumulativeDeaths,confirmed,cumulativeConfirmed])=>(
          <div
              key={country}
              className="btn cursor-pointer hover:shadow-lg m-2 ml-0 rounded p-2 flex flex-col justify-between leading-normal "
            >
              <div className="text-xs  text-color-rich flex items-center truncate">
                {legion}
              </div>
              <div className="text-color font-bold mb-2">{country}</div>
              <div className=" text-color-rich flex items-center flex-wrap">
                {[
                  // deaths,
                `⚰️ ${cumulativeDeaths}`,
                // confirmed,
                `🤢 ${cumulativeConfirmed}`].map((value,i)=>(
                  <div key={i} className="background mt-2 mr-2 px-1 rounded">
                    {value}
                  </div>
                ))}
              </div>
            </div>
        ))
      }
      {/* <div className="cursor-pointer m-2 hover:shadow rounded p-4 flex flex-col justify-between leading-normal">
        <div className="text-gray-500 text-center font-bold">
          {loading ? "LOADING" : "LOAD MORE"}
        </div>
      </div> */}
    </>
  );
};
const Repodetail = () => {
  const currentReponame = useNamespace("currentRepo");
  const allRepoesname = useNamespace("allRepoes");
  const [currentRepo] = useCache(currentReponame);
  const repoKey = `${allRepoesname}__${currentRepo && currentRepo.full_name}`;
  const [content, setContent] = useCache(repoKey);
  console.log({ currentReponame, currentRepo });
  useEffect(() => {
    if (currentRepo)
      fetch(
        `https://raw.Covidusercontent.com/${currentRepo.full_name}/master/README.md`
      )
        .then((res) => {
          return res.text();
        })
        .then((res) => {
          setContent(res);
        });
  }, [currentRepo, setContent]);
  return (
    (content && (
      <ReactMarkdown
        escapeHtml={false}
        className="markdown-body max-w-lg mx-auto"
        source={content}
      />
    )) ||
    null
  );
};
const Covid = () => {
  return (
    <Layout
      {...{
        left: <Left />,
        mid: <div className="p-4">COVID</div>,
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
export default Covid;
