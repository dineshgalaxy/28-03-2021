import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../images/imprintHero.jpg'
const useStyles = makeStyles((theme) => ({

    mainBanner: {
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: '450px',

        [theme.breakpoints.up('sm')]: {
            minHeight: '690px',
        }
    },
    bannerText: {
        top: '10%',
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            top: '22%'
        },
    },
}));

export default useStyles;