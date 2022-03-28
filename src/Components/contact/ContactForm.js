import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import useStyles from "../Styles";
import { Checkbox } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ContactForm = () => {
    const classes = useStyles();
    return (

        <Box
            position="relative"
        >

            <Container>
                <Box className={classes.contactName}>
                    <Typography
                        className={classes.h1}
                        variant="h1"
                        color="secondary"
                        fontWeight="fontWeight"
                        component="h2">
                        Contact us
                    </Typography >
                </Box>
                <Box className={classes.contactItem}>
                    <Grid container >
                        <Grid md={3}>
                        <Typography
                                    variant="h3"
                                    color='common.main'

                                >
                                    Friends and family
                                </Typography>
                                {
                                    supportTeam.map((item)=>{
                                        return(
                                            <Box mb={3}>
                                            <Typography variant="body1">
                                            {item.para}
                                        </Typography>
                                        <Button
                                            className={classes.btn}
                                            variant="outlined"
                                            mt={3}
                                        >{item.btnText}
                                        </Button>
                                        </Box >
                                        )
                                    })
                                }
                        </Grid>
                        <Grid item md={9} className={classes.form}>
                            <Box >
                                <Typography
                                    variant="h3"

                                >
                                    Facility staff
                                </Typography>
                                <Typography
                                    variant="body1"
                                >
                                    To learn more about ViaPath, our products, or to sign up for email updates, please fill out our contact form below.
                                    To contact technical support, please call: 800-646-6283
                                </Typography>

                            </Box>
                            <Box mt={2}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <Grid container spacing={2}>
                                        {
                                            inputBox.map((input)=>{
                                                return(
                                                    <Grid item md={6} lg={6} sm={6} xs={12} className={classes.inputBox}><TextField
                                                    label={input.label}
                                                    variant={input.variant}
                                                    type={input.type}
                                                    className={classes.inputType}
                                                /></Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} lg={12} sm={12} xs={12} className={classes.inputBox}>

                                            <FormControl className={classes.inputType}>
                                                <Select>
                                                    <MenuItem value="1">
                                                        Please select
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item md={6} lg={6} sm={6} xs={12} className={classes.inputBox}>

                                            <TextField
                                                label="COMPANY"
                                                variant="outlined"
                                                type='text'
                                                color=""
                                                className={classes.inputType}
                                            />
                                        </Grid>

                                        <Grid item md={6} lg={6} sm={6} xs={12} className={classes.inputBox}>
                                            <TextField
                                                label="TITLE"
                                                type="text"
                                                variant="outlined"
                                                className={classes.inputType}
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} lg={12} sm={12} xs={12} >
                                            <TextField
                                                className={classes.inputType}

                                                label="YOUR MESSAGE"
                                                variant="outlined"
                                                color=""
                                                fullWidth
                                                multiline
                                                rows={10}
                                            />

                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                            <Box >
                                <Box fontSize='24px' mb={1} textTransform="uppercase" lg={{ fontSize: '24px' }} mt={3} p={0}>
                                    <Checkbox
                                        className={classes.checkbox}
                                        color="primary"

                                    />
                                    <Typography variant="span">Sign up to receive viapath email updates</Typography>
                                </Box>



                                <Box className={classes.checkText}>
                                    <Typography variant="body2" >
                                        By signing up, you agree to receive email updates and you also grant your consent to our data collection practices. We encourage you to review our Privacy policy.
                                    </Typography></Box>
                                <Button
                                    className={classes.btn}
                                    variant="outlined"
                                    mt={3}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

    )
}
const inputBox = [
  { 
    label:"FIRST NAME*",
    variant : "outlined",
    type :"text"
},
{ 
    label:"LAST NAME*",
    variant : "outlined",
    type :"text"
},
{ 
    label:"EMAIL",
    variant : "outlined",
    type :"email"
},
{ 
    label:"PHONE",
    variant : "outlined",
    type :"text"
}
];

const supportTeam =[
   {
        para:'Looking to connect with your loved one on ConnectNetwork?',
        btnText:'connect now'
    },
    {
        para:'Get in touch with our 24/7 customer support team.',
        btnText:'contact now'
    }
]
export default ContactForm;