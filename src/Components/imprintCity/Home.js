import TopHeader from "./topheader/TopHeader";
import  imprinTheme from "./theme/theme";
import { ThemeProvider } from "@material-ui/styles";
import GlobalStyles from "./override/globalStyle";
import MiddleHeader from "./middleheader/MiddleHeader";
import Menubar from "./menubar/Menubar";
import MainBanner from "./mainbanner/MainBanner";
import Section from "./section/Section";
import MainSlider from "../sliderfolder/MainSlider";
import Footer from "../../../src/Components/imprintCity/footer/Footer";
const Home =() =>{
    return(
        <ThemeProvider theme={imprinTheme}>
            <GlobalStyles/>
                <TopHeader></TopHeader>
                 <MiddleHeader></MiddleHeader>
                 <Menubar></Menubar>
                 <MainBanner></MainBanner>

                 <Section/>
                 <MainSlider/>
                 <Footer></Footer>
               
        </ThemeProvider>
    )
}
export default Home;