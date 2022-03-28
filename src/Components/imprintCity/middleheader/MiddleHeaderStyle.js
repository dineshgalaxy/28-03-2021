import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    middleHeader: {
        flexWrap: 'wrap',
        [theme.breakpoints.up('md')]: {
            flexWrap: 'nowrap'
        },

    },
    topSearchBar: {
        maxWidth: '100%',
        width: '100%',
        order: '3',
        [theme.breakpoints.up('md')]: {
            order: 2,
            maxWidth: '700px',
            width: '100%',

        }
    },
    supportIcon: {
        order: '2',
        [theme.breakpoints.up('md')]: {
            order: 3,
        }
    },
    menuButton: {
        display: 'inline-block',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },

}));

export default useStyles;