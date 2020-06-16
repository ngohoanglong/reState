import React from "react";
import Link from "../../modules/navigation/Link";
import styles from './Home.module.scss';
const Home = () => (
  <div className={styles.Home+" fixed bg-white w-full min-h-full h-64 grid grid-cols-2 md:grid-cols-4 grid-flow-row"}>
    {[
      <Link to="/github" className="bg-gray-200"></Link>,
      <Link to="/covid" className="bg-gray-200"></Link>,
      <div className="bg-gray-200"></div>,
      <div className="bg-gray-200"></div>,
      <div className="bg-gray-200"></div>,
      <div className="bg-gray-300 col-span-2 sm:col-span-1 order-first md:order-none"></div>,
      <div className="bg-gray-300 col-span-2 sm:col-span-1 order-first md:order-none"></div>,
      <div className="bg-gray-200"></div>,
      <div className="bg-gray-200"></div>,
      <div className="bg-gray-200"></div>,
      <div className="bg-gray-200"></div>,
      <div className="bg-gray-200"></div>,
    ].map((e, i) => React.cloneElement(e, { ...e.props,className:`${styles.child} ${e.props.className}`, children: i }))}
    <div className={`${styles.pointer} hidden md:block`} />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
