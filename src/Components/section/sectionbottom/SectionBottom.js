import { Box, Container, Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import useStyles from "../../Styles"
const SectionBottom = () => {
    const classes = useStyles();
    return (
        <>
            <Box
                py={6}
                bgcolor="grey.main">
                <Container>
                    <Grid
                        container
                        spacing={3}
                        alignItems="center">

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={5}
                            lg={5}
                            fontSize={34}>
                            <Typography
                                variant="h2"
                                fontSize={34}
                                gutterBottom>
                                A message from our CEO
                            </Typography>
                            <Typography variant="body1" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. At tellus at urna condimentum mattis pellentesque id. Suspendisse in est ante in nibh mauris. Egestas fringilla phasellus faucibus scelerisque. Cursus metus aliquam eleifend mi in. Dolor magna eget est lorem. Arcu dui vivamus arcu felis bibendum
                            </Typography>
                            <Button
                                className={classes.btn}
                                variant="outlined"
                                mt={3}
                                endIcon={<PlayArrowIcon />}>
                                Watch our video
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={7}
                            lg={7} >
                            <Box
                                className={classes.playBtn}
                                display="flex"
                                alignItems="center"
                                justifyContent="center">
                                <img src="Path 265.png" alt="play button" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default SectionBottom;