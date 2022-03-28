import './App.scss';
import { createTheme, ThemeProvider, } from '@material-ui/core';
import { Route, Routes } from 'react-router';
import About from './Components/About';
import Contact from './Components/contact/Contact';
import Home from './Components/imprintCity/Home';
import MainSlider from './Components/sliderfolder/MainSlider'
const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#3e9296',
      },
      secondary: {
        main: '#313d4d',
      },
      success: {
        main: '#0079c1',
      },
      grey: {
        main: '#f4f4f4',
      },

      error: {
        main: '#fff',
      },
      mainColor: {
        main: '#29cc53',
        dark:'#f4f4f4'
      },

    },
    typography: {
      h1: { fontFamily: 'Montserrat-Bold', fontSize: '88px' },
      h2: { fontFamily: 'Montserrat-Bold', fontSize: '36px' },
      h3: { fontFamily: 'Montserrat-Bold', fontSize: '24px' },
      body1: { lineHeight: '36px', fontSize: '18px', fontFamily: 'Montserrat-Medium' },
      body2: { lineHeight: '25px', fontFamily: 'Montserrat-Medium' },
      button: { fontFamily: 'Montserrat-Bold', textTransform: "uppercase", fontSize: "16px" }
    },

  }
)
function App() {
  return (
    <>

      <ThemeProvider theme={theme}>
        <Routes>

          <Route path="/" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/slider" element={<MainSlider />}></Route>
        </Routes>
      </ThemeProvider>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
