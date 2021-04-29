import Layout from "layouts/Layout";
import React, { useEffect, useRef, useState } from "react";
import collection from "./collection";
const { data: collectionHtml } = collection;
const createinputonchange = (fn) => (e) => fn(e.target.value);
const encodeURIbookmarklet = (name, content) =>
  "javascript:" +
  encodeURIComponent(`(function bookmarklet${name} (){${content}})()`);
const bookmarklets = [
  {
    name: "alert",
    content: `alert(123)`,
  },
  {
    name: "clearLocalStorage",
    content: `localstorage.clear()`,
  },
];
const useCommentsScript = ({
  url = "https://utteranc.es/client.js",
  repo = "ngohoanglong/reState",
  containerElement,
}) => {
  const [ready, setReady] = useState();
  useEffect(() => {
    if (ready) {
      let cE = containerElement || document.body;
      const script = document.createElement("script");
      script.src = url;
      script.setAttribute("repo", repo);
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("label", "home");
      script.setAttribute("theme", "github-light");
      script.setAttribute("crossorigin", "anonymous");
      script.async = true;
      cE.appendChild(script);
      return () => {
        cE && cE.removeChild && cE.removeChild(script);
      };
    }
    setReady(true);
  }, [containerElement, ready, repo, url]);
};

function Bookmarklet({ bookmarklet }) {
  const [content, setbookmarklet] = useState(bookmarklet.content);
  const [name, setname] = useState(bookmarklet.name);
  const [result, setResult] = useState({
    name: name,
    content: encodeURIbookmarklet(name, content),
  });
  return (
    <>
      <div className=" flex min-h-screen flex-col">
        <div className="p-6">
          <div className="font-bold text-xl w-full">Bookmarklet creator</div>
          <div className="h-6 w-full"></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setResult({
                name,
                content: encodeURIbookmarklet(name, content),
              });
            }}
            className="space-y-3 flex-1"
          >
            <div className="flex flex-col space-y-1">
              <label>Enter your javascript code here:</label>
              <textarea
                value={content}
                onChange={createinputonchange(setbookmarklet)}
                required
                className="border border-black border-opacity-50 focus:border-opacity-100 rounded-none p-3"
                name="content"
                spellcheck="false"
              ></textarea>
            </div>
            <div className="flex flex-col space-y-1">
              <label>name:</label>
              <input
                value={name}
                onChange={createinputonchange(setname)}
                className="border border-black border-opacity-50 focus:border-opacity-100 rounded-none p-3"
                name="name"
                type="text"
              />
            </div>
            <button
              className="px-6 py-2 bg-blue-600 text-white uppercase btn"
              type={"submit"}
            >
              submit
            </button>
          </form>
        </div>
        <div className="w-6 h-6"></div>
        <div className="flex-1" />
        <div className="p-6 py-32">
          <form className="space-y-3 flex-1">
            <div className="flex flex-col space-y-1">
              <label>and here is the code:</label>
              <textarea
                rows={5}
                className="border border-black border-opacity-50 focus:border-opacity-100 rounded-none p-3"
                name="result"
                spellcheck="false"
                value={result.content}
              ></textarea>
            </div>
            <p>
              {" "}
              You can run your bookmarklet by clicking: <div />
              <a
                className="px-2 py-1 bg-blue-600 text-white btn uppercase btn inline-block"
                href={result.content}
              >
                {result.name}
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
const Collections = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className=" font-bold w-full">Collections</div>
      <p className="w-full text-xs">
        Just drag &amp; Drop the blue bookmarklet(s) of your choice to your
        bookmarks bar.
      </p>
      {JSON.parse(collectionHtml).map(({ type, ...rest }, i) => {
        if (type === "group") {
          return (
            <React.Fragment key={i}>
              <a
                href={"#group_" + rest.title}
                className="p-2 mr-8 background border-b border-gray-600 mt-6 mb-3"
              >
                {rest.title}
              </a>
              <div id={"group_" + rest.title} />
            </React.Fragment>
          );
        }
        return (
          <div key={i} className="mt-3">
            <a
              className="py-2 rounded uppercase text-xs text-white inline-block bg-blue-600 px-3"
              title={rest.title}
              href={rest.href}
            >
              {rest.text}
            </a>
            <div />
            <p>{rest.description}</p>
          </div>
        );
      })}
    </div>
  );
};
const Right = () => {
  const commentsRef = useRef();
  useCommentsScript({ containerElement: commentsRef.current });
  return (
    <div
      ref={commentsRef}
      className="w-full p-3 text-sm flex flex-col items-start overflow-auto h-screen"
      width="100%"
      height="100%"
    ></div>
  );
};
export default function BookmarkletPage() {
  const [bookmarklet, setbookmarklet] = useState(bookmarklets[0]);
  return (
    <Layout
      {...{
        left: (
          <div className="p-3 space-y-6 relative">
            <h1 className="font-bold text-2xl">Bookmarklet</h1>
            <p className="leading-normal">
              <small>From Wikipedia, the free encyclopedia</small>
            </p>
            <p>
              A bookmarklet is a bookmark stored in a web browser that contains
              JavaScript commands that add new features to the browser.
            </p>
            <p className="font-bold">samples</p>
            <ul>
              {bookmarklets.map((bookmarklet) => (
                <li
                  onClick={() => setbookmarklet(bookmarklet)}
                  className="btn py-2"
                >
                  <a
                    href={
                      "javascript:" +
                      encodeURIComponent(
                        `(function bookmarklet${bookmarklet.name} (){${bookmarklet.content}})()`
                      )
                    }
                  >
                    {bookmarklet.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-2 w-full background "></div>
            <Collections />
          </div>
        ),
        mid: <Bookmarklet key={bookmarklet.name} bookmarklet={bookmarklet} />,
        right: <Right />,
        header: <Layout.Header />,
      }}
    />
  );
}
