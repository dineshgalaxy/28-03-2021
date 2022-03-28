import { makeStyles } from '@material-ui/core/styles';
import imprintheme from '../theme/theme';

const useStyles = makeStyles((theme) => ({
   
    heartBtn:{
        padding: '18px 22px'
    },
    searchBtn:{
        padding: '18px 22px'
    },
    cartBtn:{
        padding: '20px 30px',
        fontFamily:'Proxima-Regular',
        fontSize:imprintheme.typography.h6.fontSize,
        textTransform:'unset'
    },
   
    
     
      product: {
        backgroundColor: imprintheme.palette.blackColor.lightGray,
        '& .overlay' :{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background:' rgba(0, 0, 0, 0)',
            transition:' 1s ease',
            
              
          },
       "&:hover .overlay":{
        display: 'block',
        zIndex:'1',
        transition:' 1s ease',
       
       },
        
      '& .productBtn': {
        opacity: 0,
        transition:' 1s ease',
       
      },
      "&:hover .productBtn":{
        opacity: 1,
        transition:' 1s ease',
        cursor:'pointer',
        zIndex:99
      }
    },



}));

export default useStyles;