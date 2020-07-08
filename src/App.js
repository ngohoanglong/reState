import LocalStringsProvider from "modules/localstrings";
import React from "react";
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
  const element = children.find((child) => {
    return location && location.includes(child.props.path);
  });
  console.log(location, element);
  if (!element) return null;
  return element;
};
const routes = (
  <Switch>
    <Covid path="/covid" />
    <Github path="/github" />
    <PeriodicTable path="/periodic-table" />
    <Portfolio path="/portfolio" />
    <Home path="/home" />

    {/* default */}
    <Home path="/" />
  </Switch>
);

export default function App() {
  return (
    <CacheProvider>
      <LocalStringsProvider>
        <LocationSubscriber />
        {routes}
      </LocalStringsProvider>
    </CacheProvider>
  );
}
