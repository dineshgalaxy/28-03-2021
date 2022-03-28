import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import useStyles from './MainProductStyle';
import {Input} from '@material-ui/core';
import imprintheme from '../../theme/theme';
export default function RecipeReviewCard() {
    const classes = useStyles();
    return (
        <Box>
            <Container maxWidth="xl">
                <Box
                    gap="20px 20px"
                >
                    <Grid container spacing="19px">
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Box
                                className={`${classes.mainProduct} ${classes.cupImg}`}
                            >
                                <Box >

                                    <Typography
                                        color="common.white"
                                        variant="h2"
                                        fontSize={imprintheme.typography.h4md.fontSize}
                                        fontFamily="Proxima-Regular"
                                        fontWeight="300"
                                        textTransform="uppercase"

                                    >12 Factors for</Typography>
                                    <Box mt={2}>
                                        <Typography
                                            variant="h2"
                                            // fontSize="78px"
                                            fontSize={{ sm: imprintheme.typography.h3.fontSize, lg: imprintheme.typography.h2.fontSize, md: imprintheme.typography.h2xl.fontSize, xs:imprintheme.typography.h4.fontSize }}
                                            color="common.white"
                                            textTransform="uppercase"
                                            fontFamily="Proxima-Bold"
                                            lineHeight="48px"
                                        >A Good
                                            <Box variant="span"

                                             fontSize={{  lg: imprintheme.typography.h2sm.fontSize, md: imprintheme.typography.h2xs.fontSize, sm: imprintheme.typography.h4.fontSize,xs: imprintheme.typography.h4sm.fontSize }} 
                                             
                                             mb={2}>Promotional</Box>
                                            item
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box gap="20px 10px" className={classes.inputBtn} noValidate autoComplete="off" display="flex"  alignItems="center" flexWrap="wrap">

                                    <Input id="my-input"  placeholder="Enter email to download" className={classes.emailInput}/>
                                    <Button variant="contained" size="small" className="yellowBtn">download</Button>
                                    
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Box
                                className={`${classes.mainProduct} ${classes.adobeStock}`}
                                minHeight="520px"
                                padding="59px 30px"
                                position="relative"
                                borderRadius='0px'

                            >
                                <Box >

                                    <Typography
                                        color="common.black"
                                        fontWeight="bold" variant="h5"
                                        fontSize={imprintheme.typography.h4xl.fontSize}
                                        fontFamily="Proxima-Bold"
                                        textTransform="uppercase"

                                    >10 keys to</Typography>
                                    <Typography
                                        variant="h2"
                                        fontSize={imprintheme.typography.h2md.fontSize}
                                        fontFamily="Proxima-Bold"
                                        textTransform="uppercase"
                                        color="common.black"
                                        fontWeight="bold"
                                        lineHeight="52px"
                                    >T-shirt
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily="Proxima-Bold"
                                        fontSize={imprintheme.typography.h4xl.fontSize}
                                        color="common.black"
                                        textTransform="uppercase"
                                        fontWeight="bold"
                                        letterSpacing="-1px"
                                    >marketing </Typography>
                                </Box>
                                <Box gap="20px 10px" className={classes.inputBtn} display="flex"  alignItems="center" flexWrap="wrap">
                                    <Button variant="contained" size="small" className="blueBtn">Get Report</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Box
                                className={`${classes.mainProduct} ${classes.orangeCap}`}
                            >
                                <Box pb={1}>

                                    <Typography
                                        variant="h3xl"
                                        maxWidth="285px"
                                        display="block"
                                        lineHeight="50px"
                                        fontSize={{ lg: imprintheme.typography.h3md.fontSize, md: imprintheme.typography.h4xl.fontSize, sm: imprintheme.typography.h4.fontSize, xs: imprintheme.typography.h4xl.fontSize }}
                                        fontFamily="Proxima-Bold"
                                        color="common.black" textTransform="uppercase" fontWeight="bold" letterSpacing="-1px">21 great
                                        ways to grow your  Sales with Custom  Built Caps!
                                    </Typography>
                                </Box>
                                <Box gap="20px 10px" className={classes.inputBtn} display="flex"     alignItems="center" flexWrap="wrap">
                                    <Button variant="contained" size="small" className="blueBtn">Get Report</Button>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>


                </Box>
            </Container>
        </Box>
    );
}
