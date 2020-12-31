import Layout from "layouts/Layout";
import React, { useEffect, useState } from "react";
import { styleString } from "./styles";
import { createKeycodeview, toggleTable } from "./utils";

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
    <div>
      <style>{styleString}</style>
      <div>
        <canvas width={128} height={128} hidden />
        <div className="display">
          <table className="table hide">
            <thead>
              <tr>
                <th>Key Code</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody className="table-body"></tbody>
          </table>
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
          <button onClick={toggleTable} className="table-toggle-button">
            Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default function KeycodePage() {
  return (
    <Layout
      {...{
        left: <div>left</div>,
        mid: <Keycode />,
        right: <div>right</div>,
        header: <Layout.Header />,
      }}
    />
  );
}
