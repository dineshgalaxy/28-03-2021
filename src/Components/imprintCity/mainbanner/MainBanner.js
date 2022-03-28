import { Box, Container, Typography, } from "@mui/material";
import useStyles from "./MainBannerStyle";
import { Button } from '@material-ui/core'
import imprintheme from "../theme/theme";
const MainBanner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box
                className={classes.mainBanner}
                position="relative"
            >
                <Container maxWidth="xl">
                    <Box
                        className={classes.bannerText}
                    >
                        <Typography
                            variant="h2"
                            fontSize={{ lg:imprintheme.typography.h1xl.fontSize, md: imprintheme.typography.h1xl.fontSize, sm: imprintheme.typography.h1xl.fontSize, xs: imprintheme.typography.h3.fontSize }}
                            color={imprintheme.palette.primary.main}
                            fontFamily="Prefectura"
                        >
                            Customize
                        </Typography>

                        <Typography
                            variant="h1"
                            fontSize={{ lg: imprintheme.typography.h1.fontSize, md: imprintheme.typography.h1.fontSize, sm:imprintheme.typography.h1.fontSize, xs: imprintheme.typography.h2md.fontSize}}
                            color="common.black"
                            fontFamily='Prefectura'
                            letterSpacing="0.67px"
                            lineHeight='0.9'
                            style={{ opacity: 0.67 }}
                        >
                            Your Design
                        </Typography>
                        <Typography
                            variant="h4"
                            fontSize={imprintheme.typography.h4md.fontSize}
                            color={imprintheme.palette.blackColor.dark}
                            lineHeight={{ lg: '70px', md: '70px', sm: '60px', xs: '40px' }}
                        >
                            Orders Shipped as Quick as Tomorrow!
                        </Typography>
                        <Box display="flex" flexWrap="wrap">
                            <Box
                                mr={2}
                                marginTop="20px"
                            >
                                <Button variant="contained" className="blueBtn">
                                    browse
                                </Button>
                            </Box>
                            <Box mr={2}
                                marginTop="20px"
                            >
                                <Button variant="contained" >
                                    shop now
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </Box>

    )
}
export default MainBanner;