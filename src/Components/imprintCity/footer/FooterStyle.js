import { makeStyles } from '@material-ui/core/styles';
import imprintheme from '../theme/theme';
const useStyles = makeStyles((theme) => ({

    footerItem:{
        padding:'0px',
        maxWidth:'170px',
},
footerLink:{
    borderBottom: 'solid 1px ',
    width:'100%',
    borderBottomColor:imprintheme.palette.blackColor.darkGreen
},
emailBox:{
    paddingTop:'20px',
    [theme.breakpoints.up('sm')]:{
        paddingTop:'60px',
    },
    '& button':{
        padding:'14px 28px',
    }
},
inputFooter:{
    background:'none',
    border:'1px solid #acacac',
    borderRight:0,
    fontSize:imprintheme.typography.xlsm.fontSize,
    fontFamily:"Proxima-Regular",
    lineHeight:'24px',
    color:imprintheme.palette.common.gray,
    minHeight:'54px',
    maxWidth:'260px',
    width:'100%'
   
},
footer:{
    
    padding:'50px 0 35px 0',

    [theme.breakpoints.up('md')]:{
        padding:'115px 0 35px 0',
        marginTop:'50px',

    },
    [theme.breakpoints.between('xs','sm')]:{
        padding:'15px 0 35px 0',
        marginTop:'30px',

    },
}

}));

export default useStyles;