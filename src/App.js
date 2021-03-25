import { CacheProvider } from "modules/cache/useCache";
import LocalStringsProvider from "modules/localstrings";
import { LocationSubscriber } from "modules/navigation/useLocation.Subscriber";
import React from "react";
import routes from "routes";
window.screen &&
  window.screen.lockOrientation &&
  window.screen.lockOrientation("landscape");
export default function App({ store }) {
  return (
    <CacheProvider initialStore={store}>
      <LocalStringsProvider>
        <LocationSubscriber>{routes}</LocationSubscriber>
      </LocalStringsProvider>
    </CacheProvider>
  );
}
