import { Box, Container, Typography, } from "@mui/material";
import { Button } from '@material-ui/core'
import imprintheme from "../../theme/theme";
import useStyles from "./CustomApparealStyle";
import Heading from "../../heading/Heading";
const CustomApparel = () => {
    const classes = useStyles();
    return (
        <>
            <Heading headingText="Custom your design" />
            <Box className={classes.customApparel} position="relative">
                <Container maxWidth="xl">
                    <Box
                        position='absolute'
                        right='5%'
                        pl={2}
                        className={classes.bannerText}
                    >

                        <Typography
                            variant="h2"
                            fontSize={{ lg: imprintheme.typography.h4.fontSize, md: imprintheme.typography.h4.fontSize, sm: imprintheme.typography.h4.fontSize, xs:imprintheme.typography.h4md.fontSize }}
                            color={imprintheme.palette.blackColor.extraLight}
                            fontFamily="Prefectura"
                            lineHeight="60px"
                        >
                            Best Seller
                        </Typography>

                        <Typography variant="h1"
                            fontSize={{ lg: imprintheme.typography.h2xl.fontSize, md: imprintheme.typography.h2xl.fontSize, sm: imprintheme.typography.h2xl.fontSize, xs: imprintheme.typography.h2md.fontSize }}
                            color={imprintheme.palette.blackColor.extraDark}
                            fontFamily='Proxima-SemiBold'
                            textTransform="uppercase"
                            letterSpacing="1.88px"
                            lineHeight="75px"
                        >
                            Custom Apparel
                        </Typography>
                        <Typography variant="body2" lineHeight="27px" fontFamily='Proxima-Regular' fontSize={imprintheme.typography.xlsm.fontSize} color={imprintheme.palette.blackColor.dark} maxWidth="400px">
                            Call us today and find out how you can leave a lasting impression at your next event!
                        </Typography>
                        <Box mt={4}>

                            <Button variant="contained" fontFamily='Raleway-Medium'>
                                shop now
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        className={classes.shapeBtn}
                        // bgcolor={imprintheme.palette.secondary.main}
                        textTransform="uppercase"
                        color="common.white"
                        fontFamily='Proxima-Bold'
                        fontSize={imprintheme.typography.h4lg.fontSize}
                        // padding="15px 40px"
                        maxWidth="243px"
                        position="absolute"
                        bottom="0"
                        left="0"
                        width="100%"
                        minHeight="77px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >

                        30% off
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default CustomApparel;