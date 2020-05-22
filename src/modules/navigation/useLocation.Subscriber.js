import React, { useEffect } from "react";
import useCache from "../cache/useCache";
import namespace from "./namespace";
import applocation from "./location";

const useLocationSubscriber = () => {
  const [localtion, setLocation] = useCache(namespace.location,applocation.pathname);

  useEffect(() => {
    function handleUpdateLocation   (){
        const {
            pathname
          } = applocation;
          setLocation(pathname); 
    }
    handleUpdateLocation()
    window.addEventListener("popstate", handleUpdateLocation, false);
    return ()=>{
        window.removeEventListener("popstate", handleUpdateLocation, false);
    }
  }, []);
  return localtion;
};
export const LocationSubscriber = () => {
  useLocationSubscriber();
  return null;
};
export default useLocationSubscriber;
