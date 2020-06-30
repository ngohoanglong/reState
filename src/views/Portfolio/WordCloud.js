import React, { useMemo, useState } from "react";
const injectIdText = ({ props }, onHover) => {
  return props.children.map((e, i) => {
    const id = "text_" + i;
    return React.createElement(e.type, {
      ...e.props,
      key: id,
      id: id,
      onMouseEnter: () => onHover(id),
    });
  });
};
export const WordCloud = React.memo(function () {
  const [select, setSelect] = useState();
  const texts = useMemo(() => {
    return injectIdText(
      <>
        <text
          textAnchor="middle"
          transform="translate(228,-137)rotate(-36)"
          style={{
            fontSize: "79px",
            fontFamily: "Impact",
            fill: "rgb(132, 60, 57)",
          }}
        >
          html
        </text>
        <text
          id="s-text"
          textAnchor="middle"
          transform="translate(-196,122)rotate(-36)"
          style={{
            fontSize: "87px",
            fontFamily: "Impact",
            fill: "rgb(140, 109, 49)",
          }}
        >
          react
        </text>
        <text
          textAnchor="middle"
          transform="translate(38,-166)rotate(-36)"
          style={{
            fontSize: "70px",
            fontFamily: "Impact",
            fill: "rgb(57, 59, 121)",
          }}
        >
          javascript
        </text>
        <text
          textAnchor="middle"
          transform="translate(89,-79)rotate(-36)"
          style={{
            fontSize: "100px",
            fontFamily: "Impact",
            fill: "rgb(156, 158, 222)",
          }}
        >
          css
        </text>
        <text
          textAnchor="middle"
          transform="translate(87,64)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(231, 186, 82)",
          }}
        >
          reactspring
        </text>
        <text
          textAnchor="middle"
          transform="translate(-246,-18)rotate(-36)"
          style={{
            fontSize: "57px",
            fontFamily: "Impact",
            fill: "rgb(231, 203, 148)",
          }}
        >
          draftjs
        </text>
        <text
          textAnchor="middle"
          transform="translate(-175,20)rotate(-36)"
          style={{
            fontSize: "79px",
            fontFamily: "Impact",
            fill: "rgb(82, 84, 163)",
          }}
        >
          UI
        </text>
        <text
          textAnchor="middle"
          transform="translate(-21,-33)rotate(-36)"
          style={{
            fontSize: "79px",
            fontFamily: "Impact",
            fill: "rgb(107, 110, 207)",
          }}
        >
          UX
        </text>
        <text
          textAnchor="middle"
          transform="translate(211,-64)rotate(-36)"
          style={{
            fontSize: "57px",
            fontFamily: "Impact",
            fill: "rgb(231, 203, 148)",
          }}
        >
          webpack
        </text>
        <text
          textAnchor="middle"
          transform="translate(33,55)rotate(-36)"
          style={{
            fontSize: "70px",
            fontFamily: "Impact",
            fill: "rgb(231, 150, 156)",
          }}
        >
          PWA
        </text>
        <text
          textAnchor="middle"
          transform="translate(-221,-110)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(156, 158, 222)",
          }}
        >
          SEO
        </text>
        <text
          textAnchor="middle"
          transform="translate(-96,121)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(57, 59, 121)",
          }}
        >
          response
        </text>
        <text
          textAnchor="middle"
          transform="translate(-112,-131)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(132, 60, 57)",
          }}
        >
          nodejs
        </text>
        <text
          textAnchor="middle"
          transform="translate(-143,-155)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(189, 158, 57)",
          }}
        >
          github
        </text>
        <text
          textAnchor="middle"
          transform="translate(-55,37)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(132, 60, 57)",
          }}
        >
          android
        </text>
        <text
          textAnchor="middle"
          transform="translate(-11,-207)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(173, 73, 74)",
          }}
        >
          codova
        </text>
        <text
          textAnchor="middle"
          transform="translate(-54,136)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(107, 110, 207)",
          }}
        >
          redux
        </text>
        <text
          textAnchor="middle"
          transform="translate(-214,175)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(156, 158, 222)",
          }}
        >
          async
        </text>
        <text
          textAnchor="middle"
          transform="translate(-246,81)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(99, 121, 57)",
          }}
        >
          lodash
        </text>
        <text
          textAnchor="middle"
          transform="translate(80,-29)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(189, 158, 57)",
          }}
        >
          ant
        </text>
        <text
          textAnchor="middle"
          transform="translate(104,97)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(231, 186, 82)",
          }}
        >
          material
        </text>
        <text
          textAnchor="middle"
          transform="translate(127,134)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(214, 97, 107)",
          }}
        >
          functionalProgramming
        </text>
        <text
          textAnchor="middle"
          transform="translate(-277,58)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(123, 65, 115)",
          }}
        >
          CSSinJS
        </text>
        <text
          textAnchor="middle"
          transform="translate(-134,-74)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(189, 158, 57)",
          }}
        >
          Sass
        </text>
        <text
          textAnchor="middle"
          transform="translate(-49,175)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(82, 84, 163)",
          }}
        >
          storage
        </text>
        <text
          textAnchor="middle"
          transform="translate(198,133)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(107, 110, 207)",
          }}
        >
          webWorker
        </text>
        <text
          textAnchor="middle"
          transform="translate(-329,134)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(181, 207, 107)",
          }}
        >
          yarn
        </text>
        <text
          textAnchor="middle"
          transform="translate(273,122)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(231, 150, 156)",
          }}
        >
          prettier
        </text>
        <text
          textAnchor="middle"
          transform="translate(248,-38)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(123, 65, 115)",
          }}
        >
          typescript
        </text>
        <text
          textAnchor="middle"
          transform="translate(-375,65)rotate(-36)"
          style={{
            fontSize: "40px",
            fontFamily: "Impact",
            fill: "rgb(82, 84, 163)",
          }}
        >
          typeflow
        </text>
        <text
          textAnchor="middle"
          transform="translate(229,-7)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(99, 121, 57)",
          }}
        >
          google
        </text>
        <text
          textAnchor="middle"
          transform="translate(-126,-1)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(140, 162, 82)",
          }}
        >
          stackoverflow
        </text>
        <text
          textAnchor="middle"
          transform="translate(-116,30)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(173, 73, 74)",
          }}
        >
          cleancode
        </text>
        <text
          textAnchor="middle"
          transform="translate(-212,-101)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(214, 97, 107)",
          }}
        >
          heroku
        </text>
        <text
          textAnchor="middle"
          transform="translate(56,147)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(99, 121, 57)",
          }}
        >
          frontend
        </text>
        <text
          textAnchor="middle"
          transform="translate(-73,5)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(140, 162, 82)",
          }}
        >
          backend
        </text>
        <text
          textAnchor="middle"
          transform="translate(139,-156)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(99, 121, 57)",
          }}
        >
          layout
        </text>
        <text
          textAnchor="middle"
          transform="translate(10,-130)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(206, 219, 156)",
          }}
        >
          packagemanager
        </text>
        <text
          textAnchor="middle"
          transform="translate(-72,66)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(82, 84, 163)",
          }}
        >
          http
        </text>
        <text
          textAnchor="middle"
          transform="translate(-182,-104)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(231, 150, 156)",
          }}
        >
          https
        </text>
        <text
          textAnchor="middle"
          transform="translate(-101,-83)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(123, 65, 115)",
          }}
        >
          ssl
        </text>
        <text
          textAnchor="middle"
          transform="translate(187,25)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(140, 162, 82)",
          }}
        >
          reduxsaga
        </text>
        <text
          textAnchor="middle"
          transform="translate(31,-30)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(181, 207, 107)",
          }}
        >
          away
        </text>
        <text
          textAnchor="middle"
          transform="translate(206,39)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(206, 219, 156)",
          }}
        >
          promise
        </text>
        <text
          textAnchor="middle"
          transform="translate(50,-143)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(140, 109, 49)",
          }}
        >
          fetch
        </text>
        <text
          textAnchor="middle"
          transform="translate(-137,113)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(222, 158, 214)",
          }}
        >
          LightHouse
        </text>
        <text
          textAnchor="middle"
          transform="translate(-92,-72)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(165, 81, 148)",
          }}
        >
          SSR
        </text>
        <text
          textAnchor="middle"
          transform="translate(2,72)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(206, 109, 189)",
          }}
        >
          CSR
        </text>
        <text
          textAnchor="middle"
          transform="translate(234,5)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(57, 59, 121)",
          }}
        >
          electron
        </text>
        <text
          textAnchor="middle"
          transform="translate(129,-63)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(156, 158, 222)",
          }}
        >
          tailwindcss
        </text>
        <text
          textAnchor="middle"
          transform="translate(125,96)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(99, 121, 57)",
          }}
        >
          animation
        </text>
        <text
          textAnchor="middle"
          transform="translate(-118,155)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(140, 162, 82)",
          }}
        >
          flex
        </text>
        <text
          textAnchor="middle"
          transform="translate(-76,-9)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(181, 207, 107)",
          }}
        >
          grid
        </text>
        <text
          textAnchor="middle"
          transform="translate(-156,-42)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(165, 81, 148)",
          }}
        >
          bitbuket
        </text>
        <text
          textAnchor="middle"
          transform="translate(-161,111)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(206, 109, 189)",
          }}
        >
          bootrap
        </text>
        <text
          textAnchor="middle"
          transform="translate(8,149)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(222, 158, 214)",
          }}
        >
          tailwind
        </text>
        <text
          textAnchor="middle"
          transform="translate(-119,10)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(231, 186, 82)",
          }}
        >
          marterialize
        </text>
        <text
          textAnchor="middle"
          transform="translate(-100,84)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(231, 203, 148)",
          }}
        >
          bulma
        </text>
        <text
          textAnchor="middle"
          transform="translate(-122,174)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(132, 60, 57)",
          }}
        >
          semantic
        </text>
        <text
          textAnchor="middle"
          transform="translate(245,-74)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(173, 73, 74)",
          }}
        >
          PostCss
        </text>
        <text
          textAnchor="middle"
          transform="translate(34,148)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(214, 97, 107)",
          }}
        >
          Less
        </text>
        <text
          textAnchor="middle"
          transform="translate(-136,95)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(206, 219, 156)",
          }}
        >
          flux
        </text>
        <text
          textAnchor="middle"
          transform="translate(86,-19)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(140, 109, 49)",
          }}
        >
          nexjs
        </text>
        <text
          textAnchor="middle"
          transform="translate(-135,-16)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(189, 158, 57)",
          }}
        >
          gatsbyJS
        </text>
        <text
          textAnchor="middle"
          transform="translate(115,-84)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(140, 109, 49)",
          }}
        >
          npmnpm
        </text>
        <text
          textAnchor="middle"
          transform="translate(-80,-24)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(165, 81, 148)",
          }}
        >
          BEM
        </text>
        <text
          textAnchor="middle"
          transform="translate(165,69)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(206, 109, 189)",
          }}
        >
          OOCSS
        </text>
        <text
          textAnchor="middle"
          transform="translate(-97,-36)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(222, 158, 214)",
          }}
        >
          SMACSS
        </text>
        <text
          textAnchor="middle"
          transform="translate(102,4)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(57, 59, 121)",
          }}
        >
          linter
        </text>
        <text
          textAnchor="middle"
          transform="translate(-131,-34)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(231, 186, 82)",
          }}
        >
          formater
        </text>
        <text
          textAnchor="middle"
          transform="translate(-127,-61)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(231, 203, 148)",
          }}
        >
          jshint
        </text>
        <text
          textAnchor="middle"
          transform="translate(297,-154)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(132, 60, 57)",
          }}
        >
          jslint
        </text>
        <text
          textAnchor="middle"
          transform="translate(-160,-34)rotate(-36)"
          style={{
            fontSize: "10px",
            fontFamily: "Impact",
            fill: "rgb(82, 84, 163)",
          }}
        />
      </>,
      (id) => {
        setSelect(id);
      }
    );
  }, []);

  return (
    <svg
      onMouseLeave={() => setSelect(null)}
      xmlns="http://www.w3.org/2000/svg"
      width={960}
      height={600}
      version="1.1"
    >
      <g />
      <g transform="translate(480,300)scale(1.0191082954406738,1.0191082954406738)">
        {texts}
        {select && (
          <g>
            <use xlinkHref={`#${select}`} className="text-copy" />
            <use xlinkHref={`#${select}`} className="text-copy" />
            <use xlinkHref={`#${select}`} className="text-copy" />
            <use xlinkHref="#s-text" className="text-copy" />
            <use xlinkHref={`#${select}`} className="text-copy" />
          </g>
        )}
      </g>
    </svg>
  );
});
