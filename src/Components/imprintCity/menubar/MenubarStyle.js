import { makeStyles } from '@material-ui/core/styles';
import imprintheme from '../theme/theme';
const useStyles = makeStyles((theme) => ({
    menubar: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display:'block'
        },
    },
    menu: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
    },
    list: {
        width: 'auto',
        padding: '0',
        '&+li::before': {
            backgroundColor: imprintheme.palette.blackColor.blackLight,
            content: "''",
            fontSize: imprintheme.typography.sm.fontSize,
            width: '1px',
            height: '25px'
        }
    },
    links: {
        color: imprintheme.palette.blackColor.main,
        padding: '10px 38px',
        [theme.breakpoints.up('md')]: {
            padding: '10px 64px',
            color: imprintheme.palette.blackColor.main,
            fontSize: imprintheme.typography.h6md.fontSize,
        },
        [theme.breakpoints.only('md')]: {
            padding: '10px 25px',
            fontSize: imprintheme.typography.mdxl.fontSize
        },

    },

}));

export default useStyles;