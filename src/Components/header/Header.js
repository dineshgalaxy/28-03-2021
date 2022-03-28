import { Box, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import DehazeIcon from '@material-ui/icons/Dehaze';
import './header.scss';
import useStyles from "../Styles";
import { FormControl } from "@mui/material";
import { Input } from "@material-ui/core";
const Header = () => {
    const classes = useStyles();
    return (
        <>
          <FormControl>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="search" />
        </FormControl>
            <Box
                component="header"
                position="relative"
                py={2}
                bgcolor="#313d4d">
                <Container>
                    <Grid
                        container
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center" >
                        <Box >
                            <img src="logo.png" alt="logo"></img>
                        </Box>
                        <Box className={classes.humburgur}>
                            <DehazeIcon ></DehazeIcon>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.menu}
                        >
                            {
                                Menu.map((value) => {
                                    return (
                                        <Box
                                            key={value.item}
                                            pr={4}
                                            fontSize={16}
                                            fontWeight={500}
                                            style={{ textTransform: 'uppercase' }}
                                        >
                                            <Link href="#" color="error" key={value.item}>
                                                {value.item}
                                            </Link>
                                        </Box>
                                    )
                                })
                            }
                            <Box>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    className={classes.headerBtn}>
                                    Contact
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box>
            </Box>
        </>
    )
}

const Menu = [{ item: 'Communications' }, { item: 'Rehabilitation' }, { item: 'Facilities' }, { item: ' payments' }]
export default Header;