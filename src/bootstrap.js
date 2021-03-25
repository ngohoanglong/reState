import * as serviceWorker from "serviceWorker";
import buildInfo from "_buildId.json";
localStorage.setItem("currentVersion", buildInfo.lastedVersion);

const getLastedVersion = () => {
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
    });
};
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  serviceWorker.unregister();
} else {
  getLastedVersion();
  serviceWorker.register({
    onUpdate: (registration) => {},
    onSuccess: () => {
      localStorage.setItem("currentVersion", buildInfo.lastedVersion);
      alert(`update success !(version:${buildInfo.lastedVersion})`);
    },
  });
}
