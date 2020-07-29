import useCache from "../cache/useCache";
import namespace from "./namespace";
const useLocation = () => {
  return useCache(namespace.location);
};
export default useLocation;
