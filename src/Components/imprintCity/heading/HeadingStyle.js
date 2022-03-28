import { makeStyles } from '@material-ui/core/styles';
import imprintheme from '../theme/theme';

const useStyles = makeStyles((theme) => ({
    headingDivider:{
        padding:'20px 0',
        [theme.breakpoints.up('sm')]:{
            padding:'60px 0',
        }
    },
    slidIcon:{
            width:'28px',
            height:'28px',
            color:imprintheme.palette.common.white
        },
    
        centerDivider:{
            '& h2':{
                fontSize:'27px',
                [theme.breakpoints.up('sm')]:{
                fontSize:'46px'
            }
    }
        },
        subHeading:{
          fontFamily:'Proxima-Regular!important' 
        }

}));

export default useStyles;