import React from "react";
import { Box, Container, Typography, } from "@mui/material";
import useStyles from "./CategoriesStyle";
import imprintheme from "../../theme/theme";
import Button from '@material-ui/core/Button';
import Heading from "../../heading/Heading";
const Categories = () => {
    const classes = useStyles();
    return (
        <Box>
            <Heading headingText="Explore more" subHeading="Popular Categories"/>
            <Container maxWidth="xl">
                <Box display="flex" className={classes.categories}>

                    <Box
                       
                        className={classes.customCap}
                        textAlign="center"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Box

                        >
                            <img src="images/whiteCap.png" alt="whiteCap.png"></img>


                            <Typography variant="h1"
                                pt={6}
                                fontSize={{ lg: imprintheme.typography.h3xl.fontSize, md: imprintheme.typography.h3.fontSize, sm:imprintheme.typography.h4xl.fontSize, xs: imprintheme.typography.h4sm.fontSize}}
                                color={imprintheme.palette.common.white}
                                fontFamily='Proxima-SemiBold'
                                textTransform="uppercase"
                                letterSpacing="1.37px"
                                lineHeight="55px"
                            >
                                Custom cap
                            </Typography>
                            <Typography
                                variant="h2"
                                fontSize={{ lg: imprintheme.typography.h6xl.fontSize, md: imprintheme.typography.h6xl.fontSize, sm: imprintheme.typography.h6xl.fontSize, xs: imprintheme.typography.md.fontSize}}

                                color={imprintheme.palette.common.white}
                                lineHeight="47px"
                                letterSpacing="2.3px"
                                fontFamily='Proxima-Regular'
                                textTransform="uppercase"
                            >
                                Custom Classic Softr
                            </Typography>

                            <Box mt={3} >

                                <Button variant="contained" className="whiteBtn">
                                    explore
                                </Button>
                            </Box>
                        </Box>

                    </Box>
                    <Box maxWidth="970px" width="100%">
                        <Box
                            // minHeight="513px"
                            maxWidth="970px"
                            width="100%"
                            className={classes.customBag}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >

                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection={{lg:'row',md:'row', sm:'row',xs:'column'}}
                                gap="30px 0"
                            >
                                <Box >
                                    <Typography
                                        variant="h2"
                                        fontSize={{ lg: imprintheme.typography.h4.fontSize, md: imprintheme.typography.h4.fontSize, sm: imprintheme.typography.h4.fontSize, xs: imprintheme.typography.h4sm.fontSize}}

                                        color={imprintheme.palette.common.white}
                                        fontFamily="Prefectura"
                                        lineHeight="60px"
                                    >
                                        Best Seller
                                    </Typography>

                                    <Typography variant="h1"
                                        fontSize={{ lg: imprintheme.typography.h2xl.fontSize, md: imprintheme.typography.h2xl.fontSize, sm: imprintheme.typography.h3.fontSize, xs:imprintheme.typography.h4sm.fontSize }}
                                        color={imprintheme.palette.common.white}
                                        fontFamily='Proxima-SemiBold'
                                        textTransform="uppercase"
                                        letterSpacing="1.88px"
                                        lineHeight={{lg:"75px",md:"75px",sm:"50px",xs:"30px"}}
                                    >
                                        Custom bag
                                    </Typography>

                                    <Box mt={2}>

                                        <Button variant="contained" fontFamily='Raleway-Medium'>
                                            shop now
                                        </Button>
                                    </Box>
                                </Box>
                                <Box style={{ opacity: 0.5 }} >
                                    <img src="images/download.png" alt="download.png" ></img>

                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection={{lg:'row',md:'row', sm:'row',xs:'column'}}>
                            <Box
                                // minHeight="513px"
                                
                                width="100%"
                                className={classes.beautyGirl}
                                padding="28px"
                                paddingTop="50px"
                            >

                                <Box


                                >
                                    <Box >
                                        <Typography
                                            variant="h2"
                                            fontSize={{ lg: imprintheme.typography.h4.fontSize, md: imprintheme.typography.h4.fontSize, sm:imprintheme.typography.h4.fontSize, xs: imprintheme.typography.h4sm.fontSize }}
                                            color={imprintheme.palette.blackColor.extraLight}
                                            fontFamily="Prefectura"
                                            lineHeight="64px"
                                            textTransform="uppercase"
                                        >
                                            T-SHIRT
                                        </Typography>



                                        <Box mt={2}>

                                            <Button variant="contained" >
                                                expolre
                                            </Button>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                            <Box
                                // minHeight="513px"
                                maxWidth="485px"
                                minHeight="515px"
                                height="100%"
                                width="100%"
                                className={classes.orangeCup}
                                padding="28px"
                            >

                                <Box
                                    textAlign="center"
                                >



                                    <Typography variant="h1"

                                        fontSize={{ lg: imprintheme.typography.h3xl.fontSize, md: imprintheme.typography.h3.fontSize, sm: imprintheme.typography.h4xl.fontSize, xs: imprintheme.typography.h4sm.fontSize }}
                                        color={imprintheme.palette.blackColor.darkBlack}
                                        fontFamily='Proxima-SemiBold'
                                        textTransform="uppercase"
                                        letterSpacing="1.37px"
                                        lineHeight="55px"
                                    >
                                        Cup
                                    </Typography>
                                    <Typography
                                        variant="h2"
                                        fontSize={{ lg: imprintheme.typography.h6.fontSize, md:imprintheme.typography.h6.fontSize, sm: imprintheme.typography.h6xl.fontSize, xs: imprintheme.typography.md.fontSize }}

                                        color={imprintheme.palette.blackColor.darkBlack}
                                        lineHeight="24px"

                                        fontFamily='Proxima-Regular'

                                    >
                                        Classic styles and comfortable
                                        fits for the whole crew.
                                    </Typography>

                                    <Box mt={3} >

                                        <Button variant="contained" className="whiteBtn">
                                            explore
                                        </Button>
                                    </Box>
                                    <img src="images/orangeCup.png" alt="orangeCup.png"></img>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Categories;