import { Box, Container, Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import './sectiontop.scss'
const SectionTop = () => {
    return (
        <>
            <Box
                className="section"
                py={{ xs: 3, sm: 4, md: 8, lg: 8 }}>
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
                                gutterBottom
                                color="error">
                                Our mission is to create
                                purposeful connections
                                through technology
                            </Typography>

                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={7}
                            lg={7}>
                            <Typography
                                variant="body1"
                                color="error">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Risus commodo viverra maecenas accumsan lacus vel
                                facilisis volutpat. At tellus at urna condimentum mattis
                                pellentesque id. Suspendisse in est ante in nibh mauris.
                                Egestas fringilla phasellus faucibus scelerisque. Cursus
                                metus aliquam eleifend mi in. Dolor magna eget est lorem.
                                Arcu dui vivamus arcu felis bibendum ut tristique et egestas
                                . Pellentesque diam volutpat commodo sed egestas egestas
                                fringilla phasellus. Est ullamcorper eget nulla facilisi etiam
                                dignissim. Consectetur adipiscing elit ut aliquam purus sit
                                amet luctus.
                            </Typography>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default SectionTop;