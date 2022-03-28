import { makeStyles } from '@material-ui/core/styles';
import  Image  from "../images/Group_99.png";

const useStyles = makeStyles((theme) => ({
  headerBtn:{
    borderTopLeftRadius:'21px',
    borderBottomRightRadius:'21px',
    transform:'skew(-9deg,0deg)',
    paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop:'12px',
    paddingBottom:'12px',
    borderColor:theme.palette.error.main,
    borderWidth:'3px',
    color:'white',
    '&':{
    [theme.breakpoints.down('md')]: {
      paddingLeft:'25px',
    paddingRight:'25px',
    paddingTop:'12px',
    paddingBottom:'12px',
    }}

  },
  btn:{
    borderTopLeftRadius:'21px',
    borderBottomRightRadius:'21px',
    transform:'skew(-9deg,0deg)',
    paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop:'12px',
    paddingBottom:'12px',
    borderColor:theme.palette.primary.main,
    borderWidth:'3px',
    marginTop:'20px',
    color:theme.palette.primary.main,
  },
    humburgur: {
        padding: theme.spacing(1),
        color:'white',
        [theme.breakpoints.up('md')]: {
          display:'none'
        },
    },
    menu:{
      [theme.breakpoints.down('sm')]:{
        display:'none',
      },
      // [theme.breakpoints.down('lg')]:{
      //   paddingRight:'20px'
      //  },
      '& div':{
        [theme.breakpoints.down('md')]:{
         paddingRight:'20px',
         fontSize:'15px'
        }
      }
    },
    h1:{
      [theme.breakpoints.down('xs')]:{
        fontSize:'50px'
      }
    },
    playBtn:{
      minHeight:430,
      backgroundImage: `url(${Image})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
  },
  inputBox:{
    marginBottom:'25px',
    borderRadius:'0px',
  },
  inputType:{
   width:'100%',
    // marginRight:'18px',
    borderColor:'#859095',
    boxShadow:'0 .5rem 1rem rgba(0,0,0,.15)',
    fontSize:'20px',
    borderRadius:'0px',

  },
  gradient:{
backgroundImage:'linear-gradient(-90deg, #29cc53, #049296, #29CC51)'
  },
  timeContact:{
    color:'white'
  },
  form:{
    paddingLeft:'120px',
    [theme.breakpoints.between('xs','sm')]:{
     paddingLeft:'0',
     marginTop:'30px'
    }
  },
  checkbox:{
    fontSize:'25px',
    paddingRight:'10px'

  },
  footerItem:{
    [theme.breakpoints.down('sm','xs')]:{
      padding:'0px'
    }
  },
  contactName:{
    marginTop:'80px',
    [theme.breakpoints.down('sm','xs')]:{
      marginTop:'30px',
    }
  },
  contactItem:{
    paddingTop:'72px',
    paddingBottom:'72px',
    [theme.breakpoints.down('sm','xs')]:{
      paddingTop:'20px',
      paddingBottom:'20px',
    }
  },
  checkText:{
    marginLeft:'40px',
    [theme.breakpoints.down('sm','xs')]:{
      marginLeft:'0px',
    }
  },
  suppItem:{
    paddingTop:'40px',
    paddingBottom:'40px',
    [theme.breakpoints.down('sm')]:{
      paddingTop:'20px',
      paddingBottom:'20px',
    }
  },
  pZero:{
    padding:'0px',
    [theme.breakpoints.down('sm')]:{
      padding:'0important',
      
      
    }
  },

}));

export default useStyles;

