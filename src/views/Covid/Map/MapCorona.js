import { range } from "d3-array";
import { scaleQuantile } from "d3-scale";
import React, { PureComponent } from "react";
import MapGL, { Layer, Source } from "react-map-gl";
import geodata from "./countries.geo.json";
import countryCodes from "./countryCodes.json";
import { dataLayer, highlightLayer } from "./map-style.js";
import "./styles.css";
import { updatePercentiles } from "./utils";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaGlrYXJ1dSIsImEiOiJjazZmZDF2eG0xN21nM2ttd2Y1djdlOGlyIn0.DoFgJZF76kEACucOTNU3Qw"; // Set your mapbox token here
function updateRange(featureCollection, accessor) {
  const { features } = featureCollection;
  const scale = scaleQuantile()
    // .domain(features.map(accessor))
    .domain([1, 100, 300, 5000, 5000])
    .range(range(5));
  features.forEach((f) => {
    const value = accessor(f);
    f.properties.danger = scale(value);
  });
}
export default class MapCorona extends PureComponent {
  state = {
    year: 2015,
    data: [],
    hoveredFeature: null,
    viewport: {
      latitude: 37.5776849568384,
      longitude: 112.292191181538,
      zoom: 2,
      bearing: 0,
      pitch: 0,
    },
  };

  componentDidMount() {
    setTimeout(() => {
      this._loadData();
    });
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.data !== this.props.data) {
      setTimeout(() => {
        this._loadData();
      });
    }
  };
  _loadData = () => {
    const data = {
      ...geodata,
      features: geodata.features.map((item) => {
        const mappedItem =
          (this.props.data || []).find((c) => {
            const country = countryCodes[c["country"]];
            if (!country) {
              return false;
            }
            const isMapped = countryCodes[c["country"]].ISO_3_CODE === item.id;
            return isMapped;
          }) || {};
        const newItem = {
          ...item,
          properties: {
            ...item.properties,
            ...mappedItem,
          },
        };
        return newItem;
      }),
    };
    updateRange(data, (f) => f.properties["confirmedcases"]);
    this.setState({
      data,
    });
  };

  _updateSettings = (name, value) => {
    if (name === "year") {
      this.setState({ year: value });
      const { data } = this.state;
      if (data) {
        updatePercentiles(data, (f) => f.properties.income[value]);
        // trigger update
        this.setState({
          data: { ...data },
        });
      }
    }
  };

  _onViewportChange = (viewport) => this.setState({ viewport });

  _onHover = (event) => {
    let countyName = "";
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;
    const hoveredFeature =
      features && features.find((f) => f.layer.id === "data");
    countyName =
      hoveredFeature &&
      hoveredFeature.properties &&
      hoveredFeature.properties["title"];
    this.setState({
      hoveredFeature,
      x: offsetX,
      y: offsetY,
      filter: ["in", "title", countyName],
    });
  };

  _renderTooltip() {
    const { hoveredFeature, x, y } = this.state;
    return (
      hoveredFeature && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div>State: {hoveredFeature.properties.name}</div>
          <div>
            Confirmed:{" "}
            <span className="font-bold text-red-500">
              {Number(
                hoveredFeature.properties["confirmedcases"] || 0
              ).toLocaleString()}
            </span>
          </div>
          <div>
            Deaths:{" "}
            <span className="font-bold text-White">
              {Number(
                hoveredFeature.properties["deaths"] || 0
              ).toLocaleString()}
            </span>
          </div>
        </div>
      )
    );
  }

  render() {
    const { viewport, data, filter } = this.state;
    // console.log({
    //   renderCount:
    //     window.renderCount++ ||
    //     (() => {
    //       window.renderCount = 1
    //       return window.renderCount
    //     })(),
    // })

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/hikaruu/ckcw6j9ck14t91imprnx8cojq"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onHover={this._onHover}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
          <Layer {...highlightLayer} filter={filter} />
        </Source>
        {this._renderTooltip()}
      </MapGL>
    );
  }
}
