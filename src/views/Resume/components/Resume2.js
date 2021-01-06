import React from "react";
const style = `.hexagon{
    position:relative;
    width: 280px;
    height: 400px;
  } 
  .center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .hexagon1 {
    width: 280px;
    height: 400px;
    background: #000;
    background-size: cover;
    clip-path: polygon(50% 0, 100% 22%, 100% 78%, 50% 100%, 0 78%, 0 22%);
  }
  .hexagon2 {
    width: 270px;
    height: 390px;
    background: #cecece;
    background-size: cover;
    clip-path: polygon(50% 0, 100% 22%, 100% 78%, 50% 100%, 0 78%, 0 22%);
  }
  .hexagon3 {
    width: 260px;
    height: 380px;
    background: url('https://cdn1.iconfinder.com/data/icons/cute-corgi-dog-emoticon/595/CUTE_CORGI_DOG_EMOTICON-06-512.png') center no-repeat;
    background-size: cover;
    clip-path: polygon(50% 0, 100% 22%, 100% 78%, 50% 100%, 0 78%, 0 22%);
  }
`;

export default function Resume2() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <style>{style}</style>
      <div className="hexagon">
        <div className="hexagon1 center" />
        <div className="hexagon2 center" />
        <div className="hexagon3 center" />
      </div>
    </div>
  );
}
