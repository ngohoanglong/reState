import { useState, useEffect, useContext, useRef, useCallback } from "react";
import React from "react";
const CacheContext = React.createContext({});
const ListennerContext = React.createContext({});
const UpdateCachesContext = React.createContext(() => {
  console.error("not set func!");
});
export const CacheProvider = ({ initialVale = {}, children }) => {
  const uIdRef = useRef(0);
  const listennersRef = useRef({});
  const cachesRef = useRef(initialVale);
  const [update, setUpdate] = useState(initialVale);
  const handleListenner = useCallback(cb => {
    uIdRef.current = uIdRef.current + 1;
    listennersRef.current[uIdRef.current] = cb;
    cb(cachesRef.current);
    return () => delete listennersRef.current[uIdRef.current];
  }, []);
  const handleUpdate = useCallback((key, value) => {
    cachesRef.current[key] = value;
    setUpdate(Date.now());
  }, []);
  useEffect(() => {
    Object.values(listennersRef.current).map(cb => cb(cachesRef.current));
  }, [update]);
  console.log({ update, caches: cachesRef.current });
  return (
    <CacheContext.Provider value={cachesRef.current}>
      <ListennerContext.Provider value={handleListenner}>
        <UpdateCachesContext.Provider value={handleUpdate}>
          {children}
        </UpdateCachesContext.Provider>
      </ListennerContext.Provider>
    </CacheContext.Provider>
  );
};
export const CacheConsumer = CacheContext.Consumer;
// const caches = {};
const useCache = (key = "", initialValue) => {
  const caches = useContext(CacheContext);
  const [value, setValue] = useState(caches[key] || initialValue);
  const listenner = useContext(ListennerContext);
  const updateCaches = useContext(UpdateCachesContext);
  useEffect(() => {
    const cb = caches => setValue(caches[key]);
    const unLisenner = listenner(cb);
    return () => {
      unLisenner();
    };
  }, [setValue, key, listenner]);
  return [value|| initialValue, value => updateCaches(key, value)];
};
export const useCacheSet = key => {
  const handleUpdate = useContext(UpdateCachesContext);
  return React.useCallback(value => handleUpdate(key, value), [
    key,
    handleUpdate
  ]);
};
export default useCache;
