// import { createStyles, makeStyles } from '@material-ui/core';
// import { makeStyles ,createStyles} from '@mui/material';
import { makeStyles ,createStyles } from '@mui/styles';
const useStyles = makeStyles((theme) =>
    createStyles({
        '@global': {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0
            },
            html: {
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
                height: '100%',
                width: '100%'
            },
            body: {
                height: '100%',
                width: '100%',
                fontFamily: theme.typography.fontFamily.regular,
                fontSize: theme.typography.fontSize.sm,
                wordBreak: 'break-word',
                lineHeight:'1.5',
                '& + div': {
                    height: '100%'
                }
            },
            img: {
                maxWidth: '100%'
            },
            a: {
                textDecoration: 'none'
            },
           
           
           
           
        },
       
    })
);

const GlobalStyles = () => {
    useStyles();
    return null;
};

export default GlobalStyles;
