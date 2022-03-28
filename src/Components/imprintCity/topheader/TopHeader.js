import React from "react";
import { Container, Grid, Box, Typography, } from "@mui/material";
import useStyles from "./TopHeaderStyle";
import imprintheme from "../theme/theme";
import Divider from '@mui/material/Divider';
const TopHeader = () => {
    const classes = useStyles();
    return (
        <Box className={classes.topHeader} mb={1} pt={2}>
            <Container maxWidth="xl">
                <Grid container alignItems="center">
                    <Grid item lg={6} md={6} sm={12} xs={12} >
                        <Box
                            variant="body1"
                            fontSize={imprintheme.typography.lg}
                            fontFamily="Proxima-Regular"
                            lineHeight="25px"
                            letterSpacing="0.71px"
                            color={imprintheme.palette.blackColor.light}
                        >
                            TODAY ONLY!
                            <Box
                                color={imprintheme.palette.secondary.main}
                                display="inline-block"
                                fontSize={imprintheme.typography.lg}
                                letterSpacing="0.71px"
                                fontFamily='ProximaNova-Bold'
                                component="a"
                                href="#"
                                textTransform="uppercase">
                                &nbsp;  Free Shipping 
                            </Box>,&nbsp;
                            Free Rush, No Hidden Fees*
                        </Box>
                        <Divider variant='fullWidth' className={classes.divider}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} >
                        <Box
                            display="flex"
                            alignItems="center"
                            flexWrap="wrap"
                            gap="10px 30px"
                            padding="6px 0"
                            justifyContent="space-between"
                        >
                            <Box display="flex" gap="0px 12px" alignItems="center">
                                <img src="store.png" alt="store.png" ></img>
                                <Typography  fontFamily='ProximaNova-Bold' fontSize={imprintheme.typography.mdxl} color="common.black">COMPANY STORES</Typography>
                            </Box>
                            <Box display="flex" gap="0px 12px" alignItems="center">
                                <img src="Page-1.png" alt="Page-1.png"></img>
                                <Typography fontFamily='ProximaNova-Bold' fontSize={imprintheme.typography.mdxl} color="common.black">TEAM STORES</Typography>
                            </Box>
                            <Box display="flex"  alignItems="center"> 
                                <img src="24hour Tshirts.png" alt="24hour Tshirts.png"></img>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <img src="1608081620347.png" alt="1608081620347.png"></img>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
               
            </Container>
            <Divider variant="middle"/>
        </Box>

    )
}
export default TopHeader;