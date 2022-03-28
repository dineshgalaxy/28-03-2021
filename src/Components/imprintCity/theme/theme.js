import { createTheme } from '@material-ui/core/styles';
// import { createTheme } from '@mui/material/styles';
import typography from '../override/typography';
import InputOverRide from '../override/inputOverride';
import ButtonOverRide from '../override/ButtonOveride';
import BadgeOverride from '../override/BadgeOverride';
import TypographyOveride from '../override/TypographyOveride';
console.log(ButtonOverRide);

const imprintheme = createTheme(

  {
    palette: {
      primary: {
        main: '#0079c1',
        dark: '#2c2c2c'
      },
      secondary: {
        main: '#f2790c',
        light:'#ffde13'
      },
      yellowColor:{
        main:'#fec201'
      },
      common: {
        black: '#000',
        white: '#fff',
        greyish:'#a8a8a8',
        whiteTwo: '#fefefe',
        neroColor:'#2b2b2b',
        gray:'#acacac',
        suvaGray:'#8f8f8f',
        red:'#f93333'
      },
     
      blackColor: {
        darkBlack:'#2a2a2a',
        light: '#060606',
        extraLight:'#343434',
        main: '#2c2c2c',
        dark: '#484848',
        extraDark:'#171717',
        textBlack:'#313131',
        bColor:'#707070',
        lightGray: '#f5f5f5',
        darkBlue:'#00263d',
        darkGreen:'#056688',
        blackLight:'#707070'
      },
      redColor: {
        main: '#f93333',
        dark:'#ee3e3e'
       
      }
    },

    //breakpoints
    // breakpoints: {
    //   values: {
    //     sm: 767,
    //   },
    // },


    //typography 

    typography,



    //button overrides
    overrides: {
      ...InputOverRide,
      ...ButtonOverRide,
      // link overrides
      ...BadgeOverride,
      ...TypographyOveride,

      MuiLink: {
        root: {
          '&:hover': {
            textDecoration: 'none!important',
          },
        },

      },

    },


  }
);
export default imprintheme;
