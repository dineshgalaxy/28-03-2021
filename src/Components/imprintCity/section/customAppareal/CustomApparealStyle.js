import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    customApparel: {
        backgroundImage: `url('images/SDGSD.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 450,

        [theme.breakpoints.up('sm')]: {
            minHeight: 622,
        },
    },
    bannerText:{
        top:'6%',
        [theme.breakpoints.up('sm')]:{
            top:'30%'
        }
    },
    shapeBtn: {
        backgroundImage: `url('images/Shape 2.png')`,
        backgroundRepeat: 'no-repeat'
    },
}));

export default useStyles;