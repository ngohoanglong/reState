import useLocation from "modules/navigation/useLocation";
import React from "react";
import { Head } from ".";

const Switch = ({ children }) => {
  const [location] = useLocation();
  console.log({ location });
  const element = children.find((child) => {
    return location && location.includes(child.props.path);
  });
  if (!element) return null;
  const icon = element.props.icon;
  return (
    <>
      <Head icon={icon} />
      {element}
    </>
  );
};
export default Switch;
