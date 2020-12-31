import useLagRadar from "hooks/useLagRadar";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../layouts/Layout";
import useCache, { useCacheSet } from "../../modules/cache/useCache";
import useNamespace from "../../modules/namespace/useNamespace";

const Left = () => {
  return <RepoList />;
};
const RepoList = () => {
  useLagRadar();

  const repolistname = useNamespace("repolist");
  const currentReponame = useNamespace("currentRepo");
  const setCurrentRepo = useCacheSet(currentReponame);
  useEffect(() => {
    setCurrentRepo({
      full_name: "beyonderVN/beyonderVN",
    });
  }, [setCurrentRepo]);
  const [loading, setLoading] = useCache(
    repolistname + "__async_loading",
    false
  );
  const [data, setData] = useCache(repolistname, {
    incomplete_results: false,
    items: [],
    total_count: 0,
  });

  useEffect(() => {
    const handleSearch = ({ keyword }) => {
      setLoading(true);
      fetch(
        `https://api.github.com/search/repositories?q=${keyword}+language:javascript&sort=stars&order=desc`
      )
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then(setData);
    };
    handleSearch({ keyword: "react" });
  }, [setData, setLoading]);

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
            const handleSearch = ({ keyword }) => {
              setLoading(true);
              fetch(
                `https://api.github.com/search/repositories?q=${keyword}+language:javascript&sort=stars&order=desc`
              )
                .then((res) => {
                  setLoading(false);
                  return res.json();
                })
                .then(setData);
            };
            handleSearch({
              keyword: event.target.value,
            });
            return false;
          }
          return true;
        }}
        className="block w-full  m-2 py-2 border-b border-transparent border-b-4 focus:border-gray-300 outline-none bg-transparent"
        placeholder="Search...(press ENTER)"
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
  console.log({
    currentReponame,
    currentRepo,
  });
  useEffect(() => {
    if (currentRepo) {
      fetch(
        `https://raw.githubusercontent.com/${currentRepo.full_name}/master/README.md`
      )
        .then((res) => {
          return res.text();
        })
        .then((res) => {
          setContent(res);
        });
    } else {
      fetch(
        `https://raw.githubusercontent.com/beyonderVN/beyonderVN/master/README.md`
      )
        .then((res) => {
          return res.text();
        })
        .then((res) => {
          setContent(res);
        });
    }
  }, [currentRepo, setContent]);
  return (
    <>
      <nav className="bg-grey-light rounded font-sans">
        <div className="list-reset pb-3 text-sm flex text-gray-500 space-x-3">
          <a href="#" className=" font-bold">
            {currentRepo ? currentRepo.full_name : "Me"}
          </a>
          <span className="text-xl btn rounded-full cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.2"
              baseProfile="tiny"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"></path>
            </svg>
          </span>
        </div>
      </nav>
      {(content && (
        <ReactMarkdown
          escapeHtml={false}
          className="markdown-body max-w-lg "
          source={content}
        />
      )) ||
        null}
    </>
  );
};
const Github = () => {
  return (
    <Layout
      {...{
        left: <Left />,
        mid: (
          <div className="p-4">
            <Repodetail />
          </div>
        ),
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
export default Github;
