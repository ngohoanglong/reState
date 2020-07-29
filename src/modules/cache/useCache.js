import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
export const CacheContext = React.createContext({});

export const createStore = ({ initialValue = {} }) => {
  const state = initialValue;
  const getState = (store) => store.state;
  const addListenner = (listenner, store) => {
    const id = store.lastedId++;
    store.listenners[id] = listenner;
    return () => delete store.listenners[id];
  };
  const handleUpdate = (key, value, store) => {
    store.state.update = Date.now();
    store.state[key] = value;
    Object.values(store.listenners).map((cb) => {
      return cb(store);
    });
  };
  const store = {
    lastedId: 0,
    state,
    listenners: {},
  };
  store.getState = () => getState(store);
  store.addListenner = (listenner) => addListenner(listenner, store);
  store.handleUpdate = (key, value) => {
    handleUpdate(key, value, store);
  };

  return store;
};
const defaultStore = createStore({});
defaultStore.addListenner(() => {
  console.log("defaultStore", defaultStore);
});
window.store = defaultStore;
export const CacheProvider = ({
  initialStore,
  initialValue = {},
  Context = CacheContext,
  children,
}) => {
  const store = useRef(initialStore || defaultStore);
  return <Context.Provider value={store.current}>{children}</Context.Provider>;
};
export const CacheConsumer = CacheContext.Consumer;
const useCache = (key = "", initialValue) => {
  const store = useContext(CacheContext);
  const [value, setValue] = useState(store.state[key] || initialValue);
  useEffect(() => {
    const cb = (store) => {
      setValue(store.state[key]);
    };
    return store.addListenner(cb);
  }, [store, key, setValue]);
  const handleSetValue = useCallback(
    (value) => {
      store.handleUpdate(key, value);
    },
    [store, key]
  );
  return [value, handleSetValue];
};
export const useCacheSet = (key) => {
  const store = useContext(CacheContext);
  const { handleUpdate } = store;
  return React.useCallback((value) => handleUpdate(key, value), [
    key,
    handleUpdate,
  ]);
};
export default useCache;
