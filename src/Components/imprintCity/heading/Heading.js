import { Typography,Container,Box } from "@mui/material";
import React from "react";
import imprintheme from "../theme/theme";
import { Divider } from "@mui/material";
import useStyles from "./HeadingStyle";
const Heading = (props)=>{
    const classes = useStyles();
    console.log(imprintheme.typography.fontFamily)
     return(
         <>
             <Container maxWidth="xl">
            <Box  className={classes.headingDivider}>
                <Divider className={classes.centerDivider}>
                    <Typography variant="h2"
                        fontFamily={imprintheme.typography.fontFamily.proximaRegular}
                        lineHeight="55px"
                        fontSize={imprintheme.typography.h3xl}
                        color={imprintheme.palette.common.neroColor}
                    >  {props.headingText}</Typography>
                      <Typography variant="h5"
                        fontFamily={imprintheme.typography.fontFamily.proximaRegular}
                        lineHeight="29px"
                        fontSize={imprintheme.typography.h5}
                        color={imprintheme.palette.common.neroColor}
                        className={classes.subHeading}
                    >  {props.subHeading}</Typography>
                </Divider>
            </Box>
            </Container>
         </>
     )
}
export default Heading;