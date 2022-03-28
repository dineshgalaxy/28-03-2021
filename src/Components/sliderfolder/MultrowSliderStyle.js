import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    brandBox:{
        '& slick-slider slick-list':{
            border:'1px solid !important'
        }
    },

}));

export default useStyles;