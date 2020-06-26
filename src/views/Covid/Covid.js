import React, {
  useState,
  useEffect,
  useLayoutEffect,
  cloneElement,
  useRef,
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
  const selectDate = data.days[select];
  const [
    datetime,
    country,
    legion,
    newDeaths,
    deaths,
    newCases,
    cases,
  ] = selectCountry
    ? data.groupByCountry[selectCountry].find(
        (item) => item[0] === Number(selectDate)
      ) || []
    : [];
  return (
    <div className="p-3">
      <div>{selectCountry}</div>
      <select
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
        {data.days.map((value, i) => (
          <option value={i}>
            {new Date(Number(data.days[i])).toLocaleDateString()}
          </option>
        ))}
      </select>
      <input
        className="block"
        type="date"
        value={new Date(data.days[select]).toDateString()}
      ></input>
      <input
        className="w-full"
        defaultValue={select}
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
        type="range"
        min="0"
        max={data.days.length}
      ></input>
      <div className="flex">
        <div className="flex-1 text-right">{newCases}</div>
        <div className="flex-1 text-right">{cases}</div>
        <div className="flex-1 text-right">{deaths}</div>
      </div>
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
