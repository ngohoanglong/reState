const { useCallback, useRef, useState } = require("react");

const emptyArray = [];
const useLocalStorage = ({ key = "", deps = emptyArray, initialValue }) => {
  const [data] = useState(() => {
      const data =localStorage.getItem(key)
    return data||initialValue;
  });
  const handleSetdata = useCallback(
    (value) => {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error(error)
      }
      
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, ...deps]
  );
  
  return [data, handleSetdata];
};

export default useLocalStorage;
