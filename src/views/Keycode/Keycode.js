import Layout from "layouts/Layout";
import React, { useEffect, useState } from "react";
import { styleString } from "./styles";
import { createKeycodeview } from "./utils";

function Keycode() {
  const [mounted, setmouted] = useState();
  useEffect(() => {
    setmouted(true);
  }, []);
  useEffect(() => {
    if (mounted) {
      const body = document.querySelector("body");
      const mobileInputDiv = document.querySelector(".mobile-input");
      const canvas = document.querySelector("canvas");
      createKeycodeview(body, mobileInputDiv, canvas);
    }
  });
  return (
    <>
      <style>{styleString}</style>
      <div className="h-full flex items-center justify-center">
        <canvas width={128} height={128} hidden />
        <div className="display">
          <div className="wrap" aria-live="polite" aria-atomic="true">
            <p className="keycode-display" />
            <p className="text-display">
              Press any key to get the JavaScript event keycode
            </p>
            <div className="cards hide">
              <div className="card item-key">
                <div className="card-header">event.key</div>
                <div className="card-main">
                  <div className="main-description">key</div>
                </div>
              </div>
              <div className="card item-location">
                <div className="card-header">
                  event.location
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location"
                    target="_blank"
                    rel="noopener"
                    className="more-info"
                  />
                </div>
                <div className="card-main">
                  <div className="main-description">location</div>
                </div>
              </div>
              <div className="card item-which">
                <div className="card-header">
                  event.which
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
                    target="_blank"
                    rel="noopener"
                    className="deprecated-link"
                  >
                    (deprecated)
                  </a>
                </div>
                <div className="card-main">
                  <div className="main-description">which</div>
                </div>
              </div>
              <div className="card item-code">
                <div className="card-header">event.code</div>
                <div className="card-main">
                  <div className="main-description">code</div>
                </div>
              </div>
            </div>
            <div className="mobile-input"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function KeycodePage() {
  return (
    <Layout
      {...{
        left: (
          <table className="table">
            <thead>
              <tr>
                <th>Key Code</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody className="table-body"></tbody>
          </table>
        ),
        mid: <Keycode />,
        right: null,
        header: <Layout.Header />,
      }}
    />
  );
}
