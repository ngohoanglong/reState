import Layout from "layouts/Layout";
import React, { useEffect, useRef, useState } from "react";
import collection from "./collection";
const imageholder =
  "data:image/gif;base64,R0lGODlhyADIAPIFAP%2FyAAoKCgAAAcRiAO0cJAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2BQQJCgAFACwAAAAAyADIAAAD%2F1i63P4wykmrvTjrzbv%2FYCiOZGmeaKqubOu%2BcCzPdG3feK7vfO%2F%2FwKBwSCwaj8ikcslsOp%2FQqHRKrVqv2Kx2y%2B16v%2BCweEwum8%2FotHrNbrvf8Lh8Tq%2Fb7%2Fi8fs%2Fv%2B%2F%2BAgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq%2BwsbKztLW2t7i5uru8vb6%2FwMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t%2Fg4eLj5OXmkwLpAszq68vt7OrI7QH1AfDD9Pb4wvr1%2FMH83ZP3S6C9gemAGdxH0NfCfw17PUTozqG6gwcBkph4EP%2FSRI0jONrzeBEjxIQnRNYjmc7kyYolVAZgKcAlRRDt2gHYybPnzo6PPkbkkFOdz6MAgDoSitJD0XRIfSptxBQm0adRe05lpBMpSAtds2bduiisz68VzIo9SlaRWp5oKbxdy7NtorkA4k7AS9cumKeAA9vMiNXr0L1G6a71%2ByWw45yDGRaNqtcBX8U%2FR555zLlmZIp4Kze4jJmxl86PP4NOfFQ0A9KKTWeReRCzbcNNI8C%2BLRsLbXu3g8M9bJm1cKS9r%2Fyudzy46N22k1tZHqD57efGrdfVbEamVuDazxIvAF249NklI39nHr4n2vLBz%2FtOP3h99fbDc7%2FOjj%2Fzys3%2F9NlkX387vcdff%2FJtgVpL4PVnIFTHqQbHgp6x5%2BB48Nln04QL1kbggwI0J%2BEbFHp4oX4LZLhdZICYiJ9sZg0g4wD2MeJiezAaNyONK860yI3h5QjhTjvW%2BGODL3Knm44zGqmIi6EdmJSSELSz45UzJqgHlFLiJaQAWGKpZR5cDimemU4umU6YV46JR5kh4hYnW1Q%2BYCWbWdZpyEEE9EnAbX7%2B2SOFd4qpZyF8%2BgmoooMSumaYbt6RaJ%2BLUtqoo2xGasekgmIWqH2OPmrof44AqV2RPKEqlqZ9mGqdqgDAGhWrfLjaHKyyIneojUi2h2uTi%2B36iGq3%2FSpjX8KW%2Blmxh8AS2exYyTZCrG3G8rhqtLyqR%2B2zudJJaie2EpgmJ%2BGK65%2BPnpRrLq2HqCsuu3v2aq636IIr77zjbuIugfAiei%2B%2B54LiooA9DuxSvpoYbJKGSBIc8CcKY8SwhVMu3KPADR9ccMYWPyyKXSAf6pq%2Bh4b87X4oflzyyienOB7GLStgcr0oW%2FVEAgAh%2BQQJCgAFACwsAHwAbABMAAAD%2F1i63P4wPkGFvDjrzXO1XSiOJPSVaKpK5%2Bq%2B4RfMQQvfOCPTdu6%2Fu1nvR0QFa5WiUnSkISnL6KbJS0qvrIrTOcR6FVSh9UsuhJ%2Bg29n5PXdXa1pbuxVDcfHZnFK3p2F5AXsCfWgpHx8AiouMimxebmMkiBWNlgCPWJF3JZQUl42ZV5t%2FI54CoIyiUomXbx6VqbKrUa2Wrxi2spe0S7qMuBe%2Fu6pykLG3khzDxI7GYKfRlIVcnqDBDszNxXoL0t901Gja2A3a287d0ODS4n7kysLI6Jai7N%2Fu4%2FPA8Vmf9Lyq8MlHA6BBAOXOHaw2kGCAgwAT7oO4iCEhhw8pbpP4T%2F8jNzQYM3rcxRHVyIrPzISj9vHkolcKNdpbWailS4T9VHa8mU6QN5p9bLqEOdHlzIYsUc7gSXQnz1462TlhmjNmqny57l1cerOpSYNY5d2b2rVq0WZh%2FUktWJaTubPE0qogazSliXkD8g74KIXuSag68OrlG8XvSMA%2Fd%2Brdq9TnEsMeEa%2F7CmAx4cdsFcFz2jgrhcWg9UqG4Xcz5csRPoQOPfpF6bPaRqtevbi1i9ecNZ%2BVXYF2bbtEnBAYToAe8eKNtSKibXuFcOLGoSdX3nt187k0jkcf%2FpF6ddbAfzznjk77dO%2FMwyuBrNHyIvez1PfNfBJ%2B5cG7rudgT9G%2BfVCl%2BuHAH0T%2B4RefOmUskA89BeYVl3xeLIhOg4wd6FiCCki4DYUPIoihhs1wmB%2BEGGZIH08AkljigCj2VOIFLLYYIBYxojjjFTU%2BpeKHJ7YYyo4J5njTjfNx5WNAHr7YgF81NcZkUJ0pCcGTdXxE5RaoScnAlVzS16SLWjrQpZGYQNnTlWFKANWa6pWTZgFsJmminFG9iUGcF27ZZk52Kqgenne5NUICACH5BAUKAAUALDAAfABsAEwAAAP%2FWLrc%2FjA%2BQYW8OOvNc7VdKI4k9JVoqkrn6r7hF8xBC984I9N27r%2B7We9HRAVrlaJSdKQhKcvopslLSq%2BsitM5xHoVVKH1Sy6En6Db2fk9d1drWlu7FUNx8dmcUrenYXkBewJ9aCkfHwCKi4yKbF5uYySIFY2WAI9YkXcllBSXjZlXm38jngKgjKJSiZdvHpWpsqtRrZavGLayl7RLuoy4F7%2B7qnKQsbeSHMPEjsZgp9GUhVyeoMEOzM3FegvS33TUaNrYDdrbzt3Q4NLifuTKwsjolqLs3%2B7j88DxWZ%2F0vKrwyUcDoEEA5c4drDaQYICDABPug7iIISGHDyluk%2FhP%2FyM3NBgzetzFEdXIis%2FMhKP28eSiVwo12ltZqKVLhP1UdryZTpA3mn1suoQ50eXMhixRzuBJdCfPXjrZOWGaM2aqfLnuXVx6s6lJg1jl3ZvatWrRZmH9SS1YlpO5s8TSqiBrNKWJeQPyDvgohe5JqDrw6uUbxe9IwD936t2r1OcSwx4Rr%2FsKYDHhx2wVwXPaOCuFxaD1SobhdzPlyxE%2BhA49%2BkXps9pGq169uLWL15w1n5VdgXZtu0ScEBhOgB7x4o21IqJte4Vw4sahJ1fee3XzuTSORx%2F%2BkXp11sB%2FPOeOTvt078zDK4Gs0fIi97PU9818En7lwbuu52BP0b59UKX64cAfRP7hF586ZSyQDz0F5hWXfF4siE6DjB3oWIIKSLgNhQ8iiKGGzXCYH4QYZkgfTwCSWOKAKPZU4gUsthggFjGiOOMVNT6l4ocnthjKjgnmeNON83HlY0AevtiAXzU1xmRQnSkJwZN1fETlFqhJycCVXNLXpItaOtClkZhA2dOVYUoA1ZrqlZNmAWwmaaKcUb2JQZwXbtlmTnYqqB6ed7k1QgIAOw%3D%3D";
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
  {
    name: "stupidDarkTheme",
    content: ` const invertElement = window.document.querySelector(
      '#toggleInvert'
    )
    if (invertElement) {
      invertElement.remove()
    } else {
      document.head.innerHTML =
        document.head.innerHTML +
        "<style id='toggleInvert'>img, svg{filter:invert(1);}html{filter:invert(1);}</style>"
    }`,
  },
  {
    name: "translateENtoVN",
    content: ` var trans = window.getSelection();
    window.open("https://translate.google.com/? sl=auto&tl=vi&text="+ trans,'targetWindow',"toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=SomeSize,height=SomeSize")`,
  },
  {
    name: "pagetranslateENtoVN",
    content: `var d, b, o, v, p
    b = (d = document).body
    o = d.createElement('script')
    o.setAttribute(
      'src',
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    )
    o.setAttribute(
      'type',
      'text/javascript'
    )
    b.appendChild(o)
    v = b.insertBefore(
      d.createElement('div'),
      b.firstChild
    )
    v.id = 'google_translate_element'
    p = d.createElement('script')
    p.text =
      'function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element");}'
    p.setAttribute(
      'type',
      'text/javascript'
    )
    b.appendChild(p)`,
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
            <p className="text-gray-600 text-sm">{rest.description}</p>
          </div>
        );
      })}
    </div>
  );
};
const Lazyload = ({ children }) => {
  const [imgNode, setRef] = useState();
  const [ready, setReady] = useState();
  useEffect(() => {
    if (imgNode) {
      let io = new IntersectionObserver(
        (entries) => {
          console.log({ entries });
          let isIntersecting = !!entries.find((o) => o.isIntersecting);
          if (isIntersecting) {
            setTimeout(() => {
              setReady && setReady(true);
            }, 2000);
          }
        },
        {
          /* Using default options. Details below */
        }
      );
      io.observe(imgNode);
      return () => {
        io.unobserve(imgNode);
      };
    }
  }, [imgNode]);
  if (ready) {
    return children;
  }
  return (
    <img
      className="w-full h-full object-contain bg-center"
      ref={(node) => setRef(node)}
      loading="lazy"
      alt="lazyload"
      src={imageholder}
    />
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
        right: (
          <Lazyload>
            <Right />
          </Lazyload>
        ),
        header: <Layout.Header />,
      }}
    />
  );
}
