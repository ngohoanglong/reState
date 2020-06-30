import React, {
  useState,
  useEffect,
  useLayoutEffect,
  cloneElement,
} from "react";

import useNamespace from "./modules/namespace/useNamespace";
import useCache, { CacheProvider, useCacheSet } from "./modules/cache/useCache";
import PullToRefresh from "rmc-pull-to-refresh";
import useLocationSubscriber, {
  LocationSubscriber,
} from "./modules/navigation/useLocation.Subscriber";
import useLocation from "./modules/navigation/useLocation";
import Github from "./views/Github/Github.lazy";
import Covid from "./views/Covid/Covid.lazy";
import Home from "./views/Home/Home.lazy";
import Portfolio from "./views/Portfolio/Portfolio.lazy";
import PeriodicTable from "./views/PeriodicTable/PeriodicTable.lazy";

const Switch = ({ children }) => {
  const [location] = useLocation();
  const element = children.find((child) => {
    return location && location.includes(child.props.path);
  });
  console.log(location, element);
  if (!element) return null;
  return element;
};
const app = (
  <>
    <LocationSubscriber />
    <Switch>
      <Covid path="/covid" />
      <Github path="/github" />
      <PeriodicTable path="/periodic-table" />
      <Portfolio path="/portfolio" />

      {/* default */}
      <Home path="/" />
    </Switch>
  </>
);
export default function App() {
  return <CacheProvider>{app}</CacheProvider>;
}
