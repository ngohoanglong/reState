import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

const Home = () => (
  <div className="fixed bg-white w-full min-h-full h-64 grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-1 ">
    {[<div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-300 col-span-2 sm:col-span-1 order-first md:order-none" ></div>,
    <div className="bg-gray-300 col-span-2 sm:col-span-1 order-first md:order-none" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>,
    <div className="bg-gray-200" ></div>].map((e,i)=>React.cloneElement(e,{...e.props,children:i}))}
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
