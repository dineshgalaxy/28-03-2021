import font from '../override/typography'

const BadgeOverride ={
    MuiBadge:{
            root:{
                whiteSpace:'nowrap',  
            },
            colorSecondary:{
                color:'#fff',
                fontFamily:'Poppins-Medium',
                fontSize:font.xlsm.fontSize,
            }
    }
   
}
export default BadgeOverride;