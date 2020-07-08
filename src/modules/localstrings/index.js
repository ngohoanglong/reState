import en from "locals/en";
import React, { useContext } from "react";
const LocalStringsContext = React.createContext("");

export const LocalStringsConsumer = LocalStringsContext.Consumer;

const localStringsCollection = {};
const LocalStringsProvider = React.memo(function ({
  localstrings = en,
  children,
  debug,
}) {
  const getLocalStrings = (string, variables) => {
    const result = localstrings[string] || string;
    if (debug) {
      localStringsCollection[string] = localstrings[string];
    }
    if (variables) {
      return Object.keys(variables).reduce((re, key) => {
        re = re.replace(`{${key}}`, variables[key]);
        return re;
      }, result);
    }
    return result;
  };
  return (
    <LocalStringsContext.Provider value={getLocalStrings}>
      {children}
    </LocalStringsContext.Provider>
  );
});
const createHookFromContext = (hook) => {
  return (...args) => {
    return useContext(hook)(...args);
  };
};
const createComponentFromHook = (hook) => {
  return ({ children, ...props }) => {
    const result = hook(props);
    return children(result);
  };
};
export const useTransition = createHookFromContext(LocalStringsContext);
export const Transition = ({ children, variables }) => {
  return useTransition(children, variables);
};
export default LocalStringsProvider;
