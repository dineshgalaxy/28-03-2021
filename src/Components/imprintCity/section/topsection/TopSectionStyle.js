import { makeStyles } from '@material-ui/core/styles';
import imprintheme from '../../theme/theme';
const useStyles = makeStyles((theme) => ({

    topSection:{
        padding:'24px 0',
        [theme.breakpoints.up('sm')]:{
            padding:'84px 0',
        },
        '& div+div::before': {
                [theme.breakpoints.up('md')]:{
                    backgroundColor: imprintheme.palette.blackColor.bColor,
                    content: "''",
                    fontSize: imprintheme.typography.sm.fontSize,
                    width: '1px',
                    height: '48px',
                    margin:'0 30px',
                }
            }
        },

}));

export default useStyles;