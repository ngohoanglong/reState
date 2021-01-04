import { Switch } from "components/ui";
import React from "react";
import Covid from "views/Covid/Covid.lazy";
import Github from "views/Github/Github.lazy";
import Home from "views/Home/Home.lazy";
import Keycode from "views/Keycode/Keycode.lazy";
import PeriodicTable from "views/PeriodicTable/PeriodicTable.lazy";
import Portfolio from "views/Portfolio/Portfolio.lazy";
import Resume from "views/Resume/Resume.lazy";

const routes = (
  <Switch>
    <Covid path="/covid" icon="🤩" />
    <Resume path="/resume" icon="🤩" />
    <Keycode path="/keycode" icon="🤩" />
    <Github path="/github" icon="😃" />
    <PeriodicTable path="/periodic-table" icon="😭" />
    <Portfolio path="/portfolio" icon="😈" />
    <Home path="/home" icon="❤️" />
    <Home path="/" icon="❤️" />
  </Switch>
);
export default routes;
