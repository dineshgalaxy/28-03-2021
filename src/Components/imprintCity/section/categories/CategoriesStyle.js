import { makeStyles } from '@material-ui/core/styles';
import imprintheme from '../../theme/theme';
const useStyles = makeStyles((theme) => ({
 //categories
 customCap:{
    width:'100%',
    maxWidth:'100%',
    minHeight:"auto",
    padding:'28px',
    backgroundImage: `url('images/verticle.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up('md')]: {
        minHeight:"1028px",
        maxWidth:"500px",
    
    },
},
customBag:{
    backgroundColor:imprintheme.palette.primary.main,
    padding:'28px',
},
orangeCup:{
    backgroundColor:imprintheme.palette.yellowColor.main,
    padding:'28px',
    maxWidth:'100%!important'
},
beautyGirl:{
    backgroundImage:`url('images/beautyGirl.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding:'28px',
    maxWidth:'100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth:"485px",
      minHeight:"515px",
    },
},
categories:{
    flexDirection:'column',
    [theme.breakpoints.up('md')]: {
        flexDirection:'row'
    },
},

}));

export default useStyles;