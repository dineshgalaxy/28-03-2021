import { makeStyles } from '@material-ui/core/styles';
import imprintheme from '../../theme/theme';
import font from '../../override/typography'
const useStyles = makeStyles((theme) => ({
    mainProduct: {
        padding: '20px 16px',
        minHeight: '420px',
        height: '100%',
        backgroundImage: `url('images/mugimg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: '0px',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            borderRadius: '0px',
            minHeight: '520px',
            height: '100%',
            padding: '59px 30px',
        },
    },
    adobeStock: {
        backgroundImage: `url('images/AdobeStock.jpg')`,
    },
    orangeCap: {
        backgroundImage: `url('images/capimg.jpg')`,
    },
    inputBtn: {
        padding: '0px  16px 20px 30px',
        position: 'absolute',
        bottom: 0,
        left:0,
        paddingBottom: '50px',
        width:'100%'
    },
    emailInput:{
        fontSize:font.xs.fontSize,
        fontFamily:'Proxima-Regular',
        color:imprintheme.palette.common.suvaGray,
        lineHeight:'46px',
        height:42,
        maxWidth:'252px',
        width:'100%'

    }


}));

export default useStyles;