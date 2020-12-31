import { useEffect } from "react";

const Head = ({ icon = "🤩" }) => {
  useEffect(() => {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2212 -1 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`;
  }, [icon]);
  return null;
};
export default Head;
