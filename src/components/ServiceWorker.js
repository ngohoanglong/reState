import useCache from "modules/cache/useCache";
import { useEffect } from "react";
import * as serviceWorker from "serviceWorker";
import buildInfo from "_buildId.json";
const ServiceWorker = () => {
  const [app = {}, setApp] = useCache("app", {});

  useEffect(() => {
    setApp({
      currentVersion: buildInfo.lastedVersion,
    });
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      serviceWorker.unregister();

      // dev code
    } else {
      serviceWorker.register({
        onUpdate: (registration) => {},
        onSuccess: () => {
          localStorage.setItem("currentVersion", buildInfo.lastedVersion);

          setApp({
            ...app,
            currentVersion: buildInfo.lastedVersion,
          });
          alert("update success !");
        },
      });
      var myHeaders = new Headers();
      myHeaders.append("pragma", "no-cache");
      myHeaders.append("cache-control", "no-cache");

      var myInit = {
        method: "GET",
        headers: myHeaders,
      };
      fetch("/_buildId.json", myInit)
        .then((res) => res.json())
        .then(({ lastedVersion }) => {
          localStorage.setItem("lastedVersion", lastedVersion);
          setApp({
            currentVersion: buildInfo.lastedVersion,
            lastedVersion,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default ServiceWorker;
