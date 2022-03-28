import React from "react";
import { Box } from "@mui/system";
import useStyles from "../Styles";
import { Container, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const CustomerSupport = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={`${classes.gradient} ${classes.suppItem}`} py={5}>
                <Container>
                    <Box mb={4}>
                        <Typography
                            variant="h2"
                            color="thirdnary.main"
                            align="center"
                        >
                            ConnectNetwork is available toll-free, 24/7 to assist with payments and customer support
                        </Typography>
                    </Box>
                    <Grid container className={classes.timeContact}>
                        <Grid lg={6} md={6} sm={6} xs={12}>
                            <List >
                                {supportItem1.map((customer) => {
                                    return (
                                        <ListItem className={classes.pZero}>
                                            <ListItemText primary={customer.item} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                        <Grid lg={6} md={6} sm={6} xs={12} container>
                            <Typography variant="body1">Visitor Customer Service: 877-650-4249</Typography>
                            <Grid lg={6} md={6} sm={6} xs={12}>
                                <List >
                                    <ListItem className={classes.pZero}>
                                        <ListItemText primary="6AM – 4PM MST "/>
                                    </ListItem>
                                    <ListItem className={classes.pZero}>
                                        <ListItemText primary="Monday – Friday"/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid lg={6} md={6} sm={6} xs={12}>
                                <List >
                                    <ListItem className={classes.pZero}>
                                        <ListItemText primary="7AM – 4PM MST "/>
                                    </ListItem>
                                    <ListItem className={classes.pZero}>
                                        <ListItemText primary=" Saturday – Sunday"/>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box mt={4} mb={2}>
                        <Typography color="error">
                            Please note: Some facilities (including those served by companies that GTL acquired, such as DSI and VAC) have dedicated phone numbers and are listed below. If your facility is not listed below, please use one of the four toll free numbers listed above for payments and customer support.
                        </Typography>
                    </Box>

                    <Grid container className={classes.timeContact}>
                        <Grid lg={4} md={4} sm={4} xs={12}>
                            <List >
                                <ListItem className={classes.pZero}>
                                    <ListItemText primary="6AM – 4PM MST "/>
                                    
                                </ListItem>
                                <ListItem className={classes.pZero}>
                                    <ListItemText primary="Monday – Friday"/>
                                    </ListItem>    
                            </List>
                        </Grid>
                        <Grid lg={4} md={4} sm={4} xs={12}>
                            <List >
                                {supportItem2.map((customer) => {
                                    return (
                                        <ListItem className={classes.pZero}>
                                            <ListItemText  primary={customer.item}/> </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                        <Grid lg={4} md={4} sm={4} xs={12}>
                            <List >
                                {supportItem3.map((customer) => {
                                    return (
                                        <ListItem className={classes.pZero}>
                                            <ListItemText primary={customer.item}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

const supportItem1 = [

    { item: 'Customer Service: 877-650-4249' },
    { item: 'AdvancePay Automated Payment System: 800-483-8314' },
    { item: 'Trust Fund Automated Payment System: 888-988-4768' },
    { item: 'PIN Debit Automated Payment System: 855-706-2445' },
]
const supportItem2 = [

    { item: 'Alameda County, CA Customers' },
    { item: 'California DOC Customers' },
    { item: 'Colorado DOC Customers' },
    { item: 'Florida DOC Customers' },
    { item: 'Michigan DOC Customers' },

]
const supportItem3 = [

    { item: 'Ohio DRC Customers' },
    { item: 'South Dakota DOC Customers' },
    { item: 'Tennessee DOC Customers' },
    { item: 'Washington DOC Customers' },

]






export default CustomerSupport;