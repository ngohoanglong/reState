import React from "react";
const NamespaceContext = React.createContext("");
export const NamespaceProvider = NamespaceContext.Provider;
export const NamespaceConsumer = NamespaceContext.Consumer;
export default NamespaceContext;
