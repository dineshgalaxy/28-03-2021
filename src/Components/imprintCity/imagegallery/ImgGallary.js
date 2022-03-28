import useStyles from "../responsive";
import { Container,Box,Grid ,Typography} from "@mui/material"

const ImgGallary = () => {
    const classes = useStyles();
    return (
       <>
         <Container>
                <Box margin="70px 0">
                    <Box className={classes.tiTle} >
                        <Typography variant="h2" fontFamily="Proxima-Regular">  Shop By Brand</Typography>
                    </Box>
                   
                </Box>
            </Container>
            <Box>
                <Container>
                        <Grid container>

                        </Grid>
                </Container>
            </Box>
       </>
    )
}
export default ImgGallary;