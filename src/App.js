import ServiceWorker from "components/ServiceWorker";
import LocalStringsProvider from "modules/localstrings";
import React, { useEffect } from "react";
import { CacheProvider } from "./modules/cache/useCache";
import useLocation from "./modules/navigation/useLocation";
import { LocationSubscriber } from "./modules/navigation/useLocation.Subscriber";
import Covid from "./views/Covid/Covid.lazy";
import Github from "./views/Github/Github.lazy";
import Home from "./views/Home/Home.lazy";
import PeriodicTable from "./views/PeriodicTable/PeriodicTable.lazy";
import Portfolio from "./views/Portfolio/Portfolio.lazy";

const Switch = ({ children }) => {
  const [location] = useLocation();
  console.log({ location });
  const element = children.find((child) => {
    return location && location.includes(child.props.path);
  });
  if (!element) return null;
  const icon = element.props.icon;
  return (
    <>
      <Head icon={icon} />
      {element}
    </>
  );
};
const routes = (
  <Switch>
    <Covid path="/covid" icon="🤩" />
    <Github path="/github" icon="😃" />
    <PeriodicTable path="/periodic-table" icon="😭" />
    <Portfolio path="/portfolio" icon="😈" />
    <Home path="/home" icon="❤️" />
    <Home path="/" icon="💩" />
  </Switch>
);
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
export default function App({ store }) {
  return (
    <CacheProvider initialStore={store}>
      <LocalStringsProvider>
        <LocationSubscriber>{routes}</LocationSubscriber>
      </LocalStringsProvider>
      <ServiceWorker />
    </CacheProvider>
  );
}
