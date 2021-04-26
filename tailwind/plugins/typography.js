const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
  const typography = {
    '.text-body': {
      fontSize: '16px',
      lineHeight: '19px',
      letterSpacing: '0.06em',
    },
    '.text-body-2': {
      fontSize: '18px',
      lineHeight: '22px',
      textAlign: 'center',
      letterSpacing: '0.06em',
    },
    '.text-h1': {
      fontSize: '36px',
      textTransform: 'uppercase',
      lineHeight: '43px',
      letterSpacing: '0.06em',
    },
    '.text-h2': {
      fontSize: '32px',
      textTransform: 'uppercase',
      lineHeight: '38px',
      letterSpacing: '0.06em',
    },
    '.text-h3': {
      fontSize: '24px',

      textTransform: 'uppercase',
      lineHeight: '29px',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h4': {
      fontSize: '24px',
      textTransform: 'uppercase',
      lineHeight: '29px',
      letterSpacing: '0.06em',
    },
    '.text-h5': {
      fontSize: '18px',
      textTransform: 'uppercase',

      lineHeight: '22px',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h6': {
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h7': {
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.08em',
    },
    '.text-subtitle': {
      fontFamily: 'Montserrat',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.06em',
      color: '#5E5E5E',
    },
    '.text-button': {
      fontFamily: 'Montserrat',
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 500,
      lineHeight: '17px',
      letterSpacing: '0.15em',
    },
    '.header-1': {
      fontSize: '16px',
      lineHeight: '19px',
      letterSpacing: '0.06em',
    },
    '.header-2': {
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.06em',
    },
    '.categories': {
      fontFamily: 'Montserrat',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.06em',
    },
    '.text-title-2': {
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.06em',
    },
    '.notification': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '15px',
      letterSpacing: '0.06em',
    },
  }
  addComponents(typography)
})
