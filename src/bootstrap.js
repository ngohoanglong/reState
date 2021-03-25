import buildInfo from "_buildId.json";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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
  serviceWorkerRegistration.unregister();
} else {
  getLastedVersion();
  serviceWorkerRegistration.register({
    onUpdate: (registration) => {},
    onSuccess: () => {
      localStorage.setItem("currentVersion", buildInfo.lastedVersion);
      alert(`update success !(version:${buildInfo.lastedVersion})`);
    },
  });
}
