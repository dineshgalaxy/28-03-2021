import { Container, Grid, Typography, Box } from "@mui/material";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Input } from "@material-ui/core";
import useStyles from "./FooterStyle";
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import imprintheme from "../theme/theme";
import Divider from '@mui/material/Divider';
const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            bgcolor={imprintheme.palette.blackColor.darkBlue}
            className={classes.footer}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                >

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <Box pb={{ lg: 6, md: 5, sm: 4, xs: 1 }}>
                            <img src="logo2.png" alt="footer logo" maxWidth="270px" />
                        </Box>

                        <Box pb={3}>
                            <Typography fontSize={imprintheme.typography.h6xl.fontSize} fontFamily="Proxima-Regular" color="common.white">Address:</Typography>
                            <Typography variant="body2" fontSize={imprintheme.typography.mdxl.fontSize} fontFamily="Proxima-Regular" width="170px" color="common.white">imprint city, 199N. Linder
                                Rd Meridian, ID 83642</Typography>
                        </Box>
                        <Box pb={3}>
                            <Typography fontSize={imprintheme.typography.h6xl.fontSize} fontFamily="Proxima-Regular" color="common.white">Phone:</Typography>
                            <Typography variant="body2" fontSize={imprintheme.typography.mdxl.fontSize} fontFamily="Proxima-Regular" color="common.white">866-303-7827</Typography>
                        </Box>
                        <Box pb={3}>
                            <Typography fontSize={imprintheme.typography.h6xl.fontSize} fontFamily="Proxima-Regular" color="common.white">Email:</Typography>
                            <Typography variant="body2" fontSize={imprintheme.typography.mdxl.fontSize} fontFamily="Proxima-Regular" color="common.white">info@imprintcity.com</Typography>
                        </Box>


                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <Typography fontSize={imprintheme.typography.h5.fontSize} lineHeight="29px" fontFamily="Proxima-Regular" color="common.white">
                            Useful Link
                        </Typography>
                        <Box width="30px" mt={2} height="2px" bgcolor="common.white" mb={4} >

                        </Box>
                        <List>
                            {
                                footerItem.map((value) => {
                                    return (
                                        <ListItem key={value.item} className={classes.footerItem}>
                                            <Link href="#"
                                                color="common.white"
                                                fontSize={imprintheme.typography.h6md.fontSize}
                                                lineHeight="56px"
                                                letterSpacing="0.58px"
                                                fontFamily="Proxima-Regular"
                                                variant="a"
                                                className={classes.footerLink}
                                            >{value.item}</Link>

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
                        <Typography fontSize={imprintheme.typography.h5.fontSize} visibility="hidden" lineHeight="29px" fontFamily="Proxima-Regular" color="common.white">
                            Useful Link
                        </Typography>
                        <Box width="30px" mt={2} height="2px" bgcolor="common.white" mb={4}  >

                        </Box>
                        <List>
                            {
                                footItem.map((value) => {
                                    return (

                                        <ListItem key={value.item} className={classes.footerItem}>
                                            <Link href="#"
                                                color="common.white"
                                                fontSize={imprintheme.typography.h6md.fontSize}
                                                lineHeight="56px"
                                                letterSpacing="0.58px"
                                                fontFamily="Proxima-Regular"
                                                variant="a"
                                            >{value.item}</Link>
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
                        <Box ><Typography variant="body1" fontSize={imprintheme.typography.h5xl.fontSize} color="common.white"
                            fontFamily="Proxima-Regular"
                            lineHeight={{ lg: '66px', md: '66px', sm: '40px', xs: 'normal' }}
                            letterSpacing="0.37px"
                            textTransform="capitalize"
                        >
                            10% off on your first order
                        </Typography></Box>
                        <Box
                            display="flex"
                            className={classes.emailBox}

                        >

                            <Box display="flex" alignItems="center" maxWidth='336px' width="100%"
                            >
                                <Input id="my-input" placeholder="Enter Your Email Address..." className={classes.inputFooter} />

                                <Box maxWidth="77px" width="100%" minHeight='54px' bgcolor={imprintheme.palette.secondary.main}
                                    display="flex" justifyContent="center" alignItems="center" color="common.white"
                                >
                                   <SendIcon />
                                </Box>

                            </Box>

                            
                        </Box>
                        <Box margin="40px 0 20px 0" className={classes.payIcon} display="flex">
                            {
                                payIcon.map((payicons) => {
                                    return (
                                        <Box pr={'10px'}>
                                            <img src={payicons.payicon} alt={payicons.alt}></img>
                                        </Box>
                                    )
                                })
                            }

                        </Box>
                        <Box className={classes.payIcon} color="common.white" display="flex">
                            <Box pr={'10px'}>
                                <FacebookIcon fontSize="large" />
                            </Box>
                            <Box pr={'10px'}>
                                <InstagramIcon fontSize="large" />
                            </Box>
                            <Box pr={'10px'}>
                                <TwitterIcon fontSize="large" />
                            </Box>
                            <Box pr={'10px'}>
                                <YouTubeIcon fontSize="large" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box pt={{ lg: 9, md: 9, sm: 4, xs: 2 }} >
                    <Divider variant="middle" style={{ backgroundColor: '#056688' }} />

                    <Typography variant="body2" padding="20px 0 0 0" fontSize={imprintheme.typography.sm.fontSize} textAlign="center" color={imprintheme.palette.common.gray}>
                        ©2006-2021 imprintcity.com. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

const footerItem = [{ item: 'Design Templates ' }, { item: 'Screen Printing' }, { item: 'Embroidery' }, { item: '24hours T-Shirts' }, { item: 'IC Marketing Blog' }]
const footItem = [{ item: 'Terms & Conditions' }, { item: 'About Us' }, { item: 'Site Map' }]

const payIcon = [
    {
        payicon: 'icon/Group 8938.png',
        alt: 'Group8938.png'
    },
    {
        payicon: 'icon/Group 8938.png',
        alt: 'Group8938.png'
    },
    {
        payicon: 'icon/Group 8939.png',
        alt: 'Group8939.png'
    },
    {
        payicon: 'icon/Group 8940.png',
        alt: 'Group8940.png'
    },
    {
        payicon: 'icon/Group 8941.png',
        alt: 'Group8941.png'
    },
];


export default Footer;

