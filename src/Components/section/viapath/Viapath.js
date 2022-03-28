import { Box, Container, Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import './viapath.scss'
import { Button } from "@material-ui/core"
import useStyles from "../../Styles"
const Viapath = () => {
    const classes = useStyles();
    return (
        <>
            <Box className="section" p={{xs:0,sm:0,md:4,xl:4}}>
                <Container>
                    <Grid container spacing={3} alignItems="center">

                        <Grid item xs={12} sm={6} md={8} lg={8}  fontSize={34}>
                            <Typography variant="h2"color="error" fontSize={34} gutterBottom>
                            Learn more about how ViaPath is transforming corrections                            </Typography>
                            <Button variant="outlined" className={classes.headerBtn} color="error">
                             CONTACT
                        </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                           <img src="Group 91.png" alt="img" width="100%" height="auto"/>
                        </Grid>
                       
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default Viapath;