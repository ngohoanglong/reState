export const dataLayer = {
  id: "data",
  type: "fill",
  source: "counties",
  paint: {
    "fill-color": {
      property: "danger",
      stops: [
        [0, "#ffbaba"],
        [1, "#ff7b7b"],
        [2, "#ff5252"],
        [3, "#ff0000"],
        [4, "#a70000"],
      ],
    },
    "fill-opacity": 1,
    "fill-antialias": true,
  },
};
export const highlightLayer = {
  id: "counties-highlighted",
  type: "line",
  paint: {
    // "fill-color": {
    //   property: "danger",
    //   stops: [
    //     [0, "#ffbaba"],
    //     [1, "#ff7b7b"],
    //     [2, "#ff5252"],
    //     [3, "#ff0000"],
    //     [4, "#a70000"],
    //   ],
    // },
    // "fill-opacity": 1,
    // "fill-antialias": true,
    "line-color": "blue",
    "line-width": 3,
  },
};
