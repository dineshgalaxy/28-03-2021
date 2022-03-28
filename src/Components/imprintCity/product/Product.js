import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import useStyles from "./ProductStyle";
import imprintheme from "../theme/theme";
import Heading from "../heading/Heading";
import { Button } from "@material-ui/core";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
const Product = () => {
    const classes = useStyles();
    console.log(imprintheme.typography.h1md);
    return (
        <>
            <Heading headingText="Featured Products" subHeading="Our Best Selling Items" />
            <Box gap="20px 20px"
            >
                <Container maxWidth="xl">
                    <Grid container spacing="19px" gap="50px 0px" className={classes.abc}>
                        {
                            productItem.map((item) => {
                                return (
                                    <>
                                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}  >
                                            <Box className={classes.product} position="relative" padding='16px 16px 0 16px' minHeight="426px">

                                                <Box
                                                    maxWidth="74px"
                                                    color="common.white"
                                                    minHeight="27px"
                                                    bgcolor= {item.badgeColor==='red'?'#f93333':'common.black'}
                                                    textAlign="center"
                                                    lineHeight="26px"
                                                    fontFamily="Proxima-Regular"
                                                    letterSpacing="0.82px"
                                                    zIndex='99'
                                                >

                                                    {item.badgeBtn}
                                                </Box>
                                                <Box textAlign="center" maxWidth="250px" margin="0 auto" width="100%">
                                                    <img src={item.imgsrc} alt='img'></img>
                                                </Box>
                                                <Box className="overlay"></Box>
                                                <Box className="productBtn" display="flex" alignItems="center"
                                                position="absolute" left="0" gap="8px 8px" bottom="0" flexWrap="wrap "
                                                >
                                                    <Button variant="contained" className={classes.heartBtn}><FavoriteBorderIcon /></Button>
                                                    <Button variant="contained" className={classes.cartBtn} startIcon={<ShoppingBasketIcon />}>
                                                    Add to cart
                                                    </Button>
                                                    <Button variant="contained" className={classes.searchBtn}>< SearchIcon /></Button>
                                                </Box>


                                            </Box>
                                            <Box pt={3}>
                                                <Typography
                                                    variant="body1"
                                                    fontFamily="Proxima-Regular"
                                                    fontSize={imprintheme.typography.h6}
                                                    lineHeight="24px"
                                                    color={imprintheme.palette.blackColor.darkBlack}
                                                >{item.productName}</Typography>
                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                                                    <Box display="flex" gap="40px 20px" alignItems="center" flexWrap="wrap" marginTop="10px">
                                                        <Box variant="body1" fontFamily="Proxima-SemiBold" lineHeight="22px" fontSize={imprintheme.typography.h6md} color={imprintheme.palette.redColor.dark}>{item.realPrice}</Box>
                                                        <Box variant="body1" fontFamily="Proxima-SemiBold" lineHeight="22px" fontSize={imprintheme.typography.h6md} color={imprintheme.palette.common.greyish}><del>{item.delPrice}</del></Box>
                                                    </Box>
                                                    <img src="images/dott.png" alt="dott.png"></img>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </>
                                )
                            })
                        }


                    </Grid>


                </Container>
            </Box>
        </>
    )
}

const productItem = [
    {
        badgeColor:'black',
        badgeBtn: '86%',
        imgsrc: 'images/Image 38.png',
        productName: 'Sweatshirts',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'
    },
    {
        badgeColor:'red',
        badgeBtn: '86%',
        imgsrc: 'images/mugs.png',
        productName: 'Classic C-Handle 11oz Mugs',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'
    },
    {
        badgeColor:'red',
        badgeBtn: '86%',
        imgsrc: 'images/Image 42.png',
        productName: 'Custom Classic Soft Crown Caps',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeColor:'red',
        badgeBtn: '86%',
        imgsrc: 'images/Image 40.jpg',
        productName: 'Classic C-Handle 11oz Mugs',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeColor:'black',
        badgeBtn: '86%',
        imgsrc: 'images/15-oz-campfire-ceramic-mugs.png',
        productName: 'Classic C-Handle 11oz Mugs',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeColor:'black',
        badgeBtn: '86%',
        imgsrc: 'images/Image 42.png',
        productName: 'Custom Classic Soft Crown Caps',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeColor:'black',
        badgeBtn: '86%',
        imgsrc: 'images/Image 38.png',
        productName: '2 Mesh Long Sleeve Tee',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeColor:'black',
        badgeBtn: '86%',
        imgsrc: 'images/Image 44.png',
        productName: 'Fluted Stadium Cup- 16 Oz.',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'
    }

]
export default Product;