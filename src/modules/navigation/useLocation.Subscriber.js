import { useEffect } from "react";
import useCache from "../cache/useCache";
import applocation from "./location";
import namespace from "./namespace";

const useLocationSubscriber = () => {
  const [localtion, setLocation] = useCache(
    namespace.location,
    applocation.pathname
  );

  useEffect(() => {
    function handleUpdateLocation() {
      const { pathname } = applocation;
      setLocation(pathname);
    }
    handleUpdateLocation();
    window.addEventListener("popstate", handleUpdateLocation, false);
    return () => {
      window.removeEventListener("popstate", handleUpdateLocation, false);
    };
  }, [setLocation]);
  return localtion;
};
export const LocationSubscriber = ({ children }) => {
  useLocationSubscriber();
  return children;
};
export default useLocationSubscriber;
