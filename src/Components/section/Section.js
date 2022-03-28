import React from "react";
import { Box } from "@material-ui/core"

import SectionTop from "./sectiontop/SectionTop";
import MiddleSection from "./middleSection/MiddleSection";
import SectionBottom from "./sectionbottom/SectionBottom";
import Viapath from "./viapath/Viapath";

const Section = () =>{
return(
    <>
        <Box >
                <SectionTop></SectionTop>
                <MiddleSection></MiddleSection>
                <SectionBottom></SectionBottom>
                <Viapath></Viapath>
                
        </Box>
    </>
)
}
export default Section;