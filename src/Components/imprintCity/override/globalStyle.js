import { createStyles, makeStyles } from '@material-ui/core';
import imprintheme from '../theme/theme';

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
                '& + div': {
                    height: '100%'
                }
            },
            img: {
                maxWidth: '100%'
            },
            a: {
                textDecoration: 'none!important'
            },
            '#root': {
                height: '100%',
                width: '100%'
            },
            '.textTransform': {
                textTransform: 'upperCase'
            },
            '.MuiDialog-paper': {
                '@media screen and (max-width:600px)': {
                    minWidth: '327px',
                    maxWidth: '327px'
                },
                '@media screen and (max-width:350px)': {
                    minWidth: '270px',
                    maxWidth: '270px'
                }
            },
            '.noPadding': {
                padding: 0
            },
            '.withoutLabel':{
                '& .MuiFilledInput-input':  {
                    padding: '5px 16px'
                },
                '& .MuiSelect-select': {
                    '&:before': {
                        top: '4px'
                    }
                }
            },
            '.whiteBtn': {
                color: imprintheme.palette.secondary.main,
                backgroundColor: imprintheme.palette.common.white,
                '&:hover': {
                    backgroundColor: imprintheme.palette.common.white,
                    boxShadow: '#056688 0px 14px 30px -10px !important',
                    transition: '0.3s !important',
                    color: imprintheme.palette.secondary.main,
                }
            },
            '.yellowBtn': {
                backgroundColor: imprintheme.palette.secondary.light,
                color: imprintheme.palette.common.black,
                '&:hover': {
                    backgroundColor: imprintheme.palette.secondary.light,
                    color: imprintheme.palette.common.black,
                }
            },
            '.blueBtn': {
                backgroundColor: imprintheme.palette.primary.main,
                color: imprintheme.palette.common.white,
                '&:hover': {
                    backgroundColor: imprintheme.palette.primary.main,
                    padding: '20px 45px!important',
                    boxShadow: '#056688 0px 14px 30px -10px !important',
                    transition: '0.3s !important',
                    color: imprintheme.palette.common.white,
                }
            },
         
        },
        input: {
            backgroundColor:imprintheme.palette.common.white,
            '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 1000px white inset'
            }
        },
        
        
    
        
    //top section
        
           


    })

);

const GlobalStyles = () => {
    useStyles();
    return null;
};

export default GlobalStyles;
