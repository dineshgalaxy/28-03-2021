import { Box, Container } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Button } from "@material-ui/core";
import useStyles from "./MenubarStyle";
import { Link } from "@material-ui/core";
const Menubar = () => {
    const classes = useStyles()
    return (
        <Box py={1}>
            <Container>
                <Box fontFamily='Proxima-Regular' className={classes.menubar}>
                    <List className={classes.menu}>
                        {
                            menuItem.map((menu) => {
                                return (
                                    <ListItem key={menu.item} className={classes.list}>
                                        <Link  className={classes.links} href="#" key={menu.item} underline="hover">
                                            {menu.item}
                                        </Link>
                                    </ListItem>
                                )
                            })
                        }
                        <ListItem className={classes.list}>
                            <Link href="#"  className={classes.links}>
                                <Button variant="outlined"  color="primary" >
                                    Design Studio
                                </Button>
                            </Link>
                        </ListItem>

                    </List>
                </Box>
            </Container>
            
          
        </Box>
    )
}
const menuItem = [{ item: ' Apparel' }, { item: ' Hats' }, { item: ' Bags' }, { item: 'Promos' }, { item: ' Specials' },]
export default Menubar;