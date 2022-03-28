import React from "react"
import { Box, Typography } from '@mui/material';
import useStyles from "./TopSectionStyle";
import imprintheme from "../../theme/theme";
const TopSection = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            gap="30px 0px"
            justifyContent="center"
            className={classes.topSection}
        >
            {
                Item.map((item) => {
                    return (
                        <Box
                            display="flex"
                            color="blackColor.textBlack"
                            gap="0px 20px"
                            maxWidth='270px'
                            width="100%"
                            alignItems="center"
                            key={item.alt}>
                            <img src={item.imgsrc} alt={item.alt} />

                            <Typography
                                fontFamily='Poppins-Regular'
                                fontSize={imprintheme.typography.h6md.fontSize}
                                color={imprintheme.palette.blackColor.textBlack}
                                textTransform="uppercase"
                                lineHeight="25px"
                            >
                                {item.itemName}
                            </Typography>
                        </Box>
                    )
                })
            }

        </Box>

    )
}
const Item = [
    {
        imgsrc: 'icon/delivery-truck.png',
        alt: 'delivery-truck.png',
        itemName: 'FREE SHIPPING Select Items'
    },
    {
        imgsrc: 'icon/accounting.png',
        alt: 'accounting.png',
        itemName: 'Bulk Order Pricing'
    },
    {
        imgsrc: 'icon/Calendar.png',
        alt: 'Calendar.png',
        itemName: 'FAST DELEVERY'
    },
    {
        imgsrc: 'icon/light-bulb.png',
        alt: ' light-bulb.png',
        itemName: 'FREE Design Ideas'
    }
]

export default TopSection;