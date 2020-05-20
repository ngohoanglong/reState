import { useContext } from "react";
import NamespaceContext from "./NamespaceContext";

const useNamespace = (namespace = "") => {
  return useContext(NamespaceContext) + "/" + namespace;
};
export default useNamespace;
