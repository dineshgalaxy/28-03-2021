import { Container, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from "@material-ui/core";
import useStyles from "../Styles";
const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            bgcolor="#313d4d"
            py={{ xs: 2, sm: 4, md: 8, xl: 8 }}
        >
            <Container>
                <Grid
                    container
                     >

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <Box pb={3}>
                            <img src="logo.png" alt="footer logo" maxWidth="270px" />
                        </Box>

                        <Box pb={3}>
                            <Typography color="error">123 Main Street San Diego, CA 00000</Typography>
                        </Box>
                        <Box pb={3}>
                            <Typography color="error">+1 123 456 7890</Typography>
                        </Box>
                        <TwitterIcon color="error" fontSize="large"/>
                        <FacebookIcon color="error" fontSize="large"/>
                        <LinkedInIcon color="error" fontSize="large"/>

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <List component="nav">
                            {
                                footerItem.map((value) => {
                                    return (
                                        <ListItem key={value.item} className={classes.footerItem}>
                                            <ListItemText primary={
                                                <Typography
                                                    color="error"
                                                    variant="h6">
                                                    {value.item}
                                                </Typography>
                                            } />
                                        </ListItem>

                                    )
                                })

                            }
                        </List>


                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <List>
                            {
                                footItem.map((value) => {
                                    return (

                                        <ListItem key={value.item} className={classes.footerItem}>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        color="error"
                                                        variant="h6"
                                                    >
                                                        {value.item}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>

                                    )
                                })

                            }
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <Box py={3} ><Typography color="error">
                            Looking to connect with
                            your loved one on Connect Network?
                        </Typography></Box>
                        <Box
                            color="error">
                            <Button
                                variant="outlined"
                                color="error"
                                className={classes.btn} >
                                Connect now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

const footerItem = [{item: 'communications'},{item: 'Rehabilitation'},{item: 'Facilities'},{item: 'Payment'}]
const footItem = [{item: 'About'},{item: 'Pressroom'},{item: 'Contact us'},{item: 'Privacy policy'}]

export default Footer;