import { Box, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Image from "../../images/hero-about-v1@2x.jpg";
import useStyles from "../Styles";

const Hero = () => {
    const styles = {
        paperContainer: {
            minHeight: 700,
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
    };
    const classes = useStyles();
    return (
        <Box
            style={styles.paperContainer}
            position="relative">
            <Box component="hero" >
                <Container>
                    <Grid container>
                        <Box
                            maxWidth={780}
                            width="100%"
                            pt={5}>
                            <Typography
                                variant="h6"  >
                                Facilities
                            </Typography>
                            <Typography
                                className={classes.h1}
                                variant="h1"
                                color="secondary"
                                fontWeight="fontWeight"
                                component="h2">
                                Headline about
                                the ViaPath
                                mission
                            </Typography>
                            <Typography
                                variant="body1"
                                fontFamily='Montserrat-Light'
                                gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Typography>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}
export default Hero;