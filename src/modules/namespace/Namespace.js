import React from "react";
import { NamespaceProvider } from "./NamespaceContext";
import useNamespace from "./useNamespace";
const Namespace = ({ namespace: name, children }) => {
  const namespace = useNamespace(name);
  return <NamespaceProvider value={namespace}>{children}</NamespaceProvider>;
};

export default Namespace;
