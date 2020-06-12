import React, {
  useState,
  useEffect,
  useLayoutEffect,
  cloneElement
} from "react";

import useNamespace from "./modules/namespace/useNamespace";
import useCache, { CacheProvider, useCacheSet } from "./modules/cache/useCache";
import PullToRefresh from 'rmc-pull-to-refresh'
import useLocationSubscriber, { LocationSubscriber } from "./modules/navigation/useLocation.Subscriber";
import  useLocation from "./modules/navigation/useLocation";
import Github from "./views/Github/Github";
import Covid from "./views/Covid/Covid";
import Home from "./views/Home/Home";
const Switch = ({children})=>{
  const [location] = useLocation()
  const element =  (children.find((child)=>{
      return location&&location.includes(child.props.path)
    }))
    console.log(location,element)
    if(!element) return null
  return element
}
const app = <>
  <LocationSubscriber/>
  <Switch>
    <Covid path="/covid"/>
    <Github path="/github"/>

    {/* default */}
    <Home path="/"/>
  </Switch>
</>
export default function App(){
  return (
    <CacheProvider>
      {app}
    </CacheProvider>
  );
};
