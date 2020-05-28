import React, {
  useState,
  useEffect,
  useLayoutEffect,
  cloneElement
} from "react";

import useNamespace from "../../modules/namespace/useNamespace";
import useCache, { CacheProvider, useCacheSet } from "../../modules/cache/useCache";
import { Layout } from "../../layouts/Layout";
import PullToRefresh from 'rmc-pull-to-refresh'
import ReactMarkdown from 'react-markdown'
import Header from "../../layouts/Layout.Header";

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
  const [data, setData] = useCache(repolistname, {
    incomplete_results: false,
    items: [],
    total_count: 0
  });
  const handleSearch = ({ keyword }) => {
    setLoading(true);
    fetch(
      `https://api.github.com/search/repositories?q=${keyword}+language:javascript&sort=stars&order=desc`
    )
      .then(res => {
        setLoading(false);
        return res.json();
      })
      .then(setData);
  };
  useEffect(() => {
    handleSearch({ keyword: "react" });
  }, []);

  return (
    <>
      <input
        onKeyDown={event => {
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
      {data
        ? data.items.map((item, i) => (
            <div
              onClick={() => {
                setCurrentRepo(item);
              }}
              key={item.full_name}
              className="btn cursor-pointer hover:shadow-lg m-2 ml-0 rounded p-2 flex flex-col justify-between leading-normal "
            >
              <p className="text-xs  text-color-rich flex items-center truncate">
                {item.full_name}
              </p>
              <div className="text-color font-bold mb-2">{item.name}</div>
              <p className=" text-color-rich flex items-center">
                {item.description}
              </p>
            </div>
          ))
        : null}
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
        `https://raw.Covidusercontent.com/${
          currentRepo.full_name
        }/master/README.md`
      )
        .then(res => {
          return res.text();
        })
        .then(res => {
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
        mid: (
            <div className="p-4">
              COVID
            </div>),
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
        header: (
          <Layout.Header/>
        )
      }}
    />
  );
};
export default Covid
