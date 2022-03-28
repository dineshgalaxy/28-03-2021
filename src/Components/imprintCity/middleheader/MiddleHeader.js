import imprintheme from "../theme/theme";
import { Box, Container, Typography } from "@mui/material";
import useStyles from "./MiddleHeaderStyle";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Input } from "@material-ui/core";
const MiddleHeader = () => {
    const classes = useStyles();
    return (
        <>
            <Box bgcolor={imprintheme.palette.primary.main} py={1}>
                <IconButton margin="10px" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Container maxWidth="xl">
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="10px 10px"
                        className={classes.middleHeader}
                    >

                        <Box>
                            <img src="logo2.png" alt="logo2.png"></img>
                        </Box>
                        <Box
                            className={classes.topSearchBar}
                        >


                            <Box position="relative" display="flex" alignItems="center"
                            >
                                <Input id="my-input" placeholder="Search" className={classes.emailInput} fullWidth />

                                <Box width="36px" minHeight='40px' bgcolor="common.white" 
                                display="flex" alignItems="center"
                                >
                                    <img src="magnifying-glass.png" alt="magnifying-glass.png" />
                                </Box>

                            </Box>
                        </Box>
                        <Box

                            className={classes.supportIcon}
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                flexWrap="wrap"
                                gap="10px 30px"
                                padding="6px 0"

                            >
                                <Box display="flex" gap="0px 12px" alignItems="center" >

                                    <img src="icon/user.png" alt="user.png"></img>
                                    <Typography fontFamily='Proxima-SemiBold' fontSize={imprintheme.typography.md} color="common.white">Account</Typography>
                                </Box>
                                <Box display="flex" gap="0px 12px" alignItems="center" >
                                    <Badge badgeContent={6} color="secondary" className={classes.headerBadge}>
                                        <img src="icon/cart.png" alt="cart.png"></img>
                                    </Badge>

                                    <Typography fontFamily='Proxima-SemiBold' fontSize={imprintheme.typography.md} color="common.white">Cart</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box >
        </>
    )
}
export default MiddleHeader;