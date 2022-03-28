import font from './typography'
const InputOverRide = {
    MuiInput:{
        root:{
            padding:'0 17px',
            height:40
        },
        underline: {
            backgroundColor:'#fff',
            '&:before, &:after': {
                border: 'none'
            },
            
            '&:hover:not($disabled):before':{
                borderBottom:0
            }
        },
    },
    MuiFilledInput: {
        root: {
            color:'#000',
            border: 0,
            borderRadius: '0px',
            backgroundColor:'#fff!important',
            height: '40px',
            
        },
        
    },
    MuiInputLabel: {
        root: {
            width: '100%',
            overflow: 'visible',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'Proxima-Regular',
            color: '#8f8f8f',
            lineHeight:'10px',
            
        },
    },
  
    small:{
        fontSize:font.xs.fontSize
    },
    MuiFormControl: {
        root: {
            padding: '1px 15px',
            backgroundColor: "#fff",            
        },
        
    }
};

export default InputOverRide;
