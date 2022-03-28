import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@mui/material';
import { CardHeader, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import { Container, Box, Grid, } from '@mui/material';
import cardImg from '../../images/man.png'
import dottImg from '../../images/dott.png'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import imprintheme from './theme/theme';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '0px!important'
    },
    MuiBadge: {
        borderRadius: '0 !important',
    },
    badge: {
        borderRadius: '0 !important',
    },
    media: {
        width: "277px",
        minHeight: 385,
        backgroundSize: "contain",
        backgroundPosition: "center",
        margin: '0 auto'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        // backgroundColor: red[500],
        borderRadius: '0px',
        width: '77px',
        height: '30px',
        fontSize: '14px',
    },
    badgeProduct: {
        borderRadius: '0!important',
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();


    return (
        <Box>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={3} md={6} sm={6} xs={12}>

                        <Card className={classes.root} >
                            <Box bgcolor="#f5f5f5">
                                <CardHeader
                                    avatar={<Box
                                        width="77px"
                                        bgcolor="common.black"
                                        minHeight="30px"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems='center'
                                        fontSize="14px"
                                        color="common.white"
                                    >-86%</Box>} />

                                <CardMedia
                                    className={classes.media}
                                    image={cardImg}
                                    title="Paella dish"
                                    maxWidth="100%"
                                />
                            </Box>
                            <CardContent>

                                <Typography variant="h5" color="common.black" component="h5">
                                    Sweatshirts
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    $2.00
                                </IconButton>
                                <IconButton aria-label="share">
                                    $3.00
                                </IconButton>
                                <IconButton
                                >

                                    <img src={dottImg} alt="dott"></img>
                                </IconButton>
                            </CardActions>

                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>

                        <Card className={classes.root} >
                            <Box bgcolor="#f5f5f5">
                                <CardHeader
                                    avatar={<Box
                                        width="77px"
                                        bgcolor='#f93333'
                                        minHeight="30px"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems='center'
                                        fontSize="14px"
                                        color="common.white"
                                    >-86%</Box>} />

                                <CardMedia
                                    className={classes.media}
                                    image="cup.png"
                                    title="Paella dish"
                                    maxWidth="100%"
                                    minHeight="297px!important"

                                />
                                <Box >
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        
                                    >
                                        <FavoriteBorderIcon />
                                    </Button>
                                   <Box margin="10px 6px" component="span"> 
                                   <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<FavoriteBorderIcon />}
                                    >
                                        Add to cart
                                    </Button></Box>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                    >
                                        <FavoriteBorderIcon />
                                    </Button>
                                </Box>
                            </Box>
                            <CardContent>

                                <Typography variant="h5" color="common.black" component="h5">
                                    Sweatshirts
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    $2.00
                                </IconButton>
                                <IconButton aria-label="share">
                                    $3.00
                                </IconButton>
                                <IconButton
                                >

                                    <img src={dottImg} alt="dott"></img>
                                </IconButton>
                            </CardActions>

                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>

                        <Card className={classes.root} >
                            <Box bgcolor="#f5f5f5">
                                <CardHeader
                                    avatar={<Box
                                        width="77px"
                                        bgcolor='#f93333'
                                        minHeight="30px"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems='center'
                                        fontSize="14px"
                                        color="common.white"
                                    >-86%</Box>} />

                                <CardMedia
                                    className={classes.media}
                                    image="cardcap.png"
                                    title="Paella dish"
                                    maxWidth="100%"
                                    width="277px"

                                />
                            </Box>
                            <CardContent>

                                <Typography variant="h5" color="common.black" component="h5">
                                    Sweatshirts
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    $2.00
                                </IconButton>
                                <IconButton aria-label="share">
                                    $3.00
                                </IconButton>
                                <IconButton
                                >

                                    <img src={dottImg} alt="dott"></img>
                                </IconButton>
                            </CardActions>

                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>

                        <Card className={classes.root} >
                            <Box bgcolor="#f5f5f5">
                                <CardHeader
                                    avatar={<Box
                                        width="77px"
                                        bgcolor='#f93333'
                                        minHeight="30px"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems='center'
                                        fontSize="14px"
                                        color="common.white"
                                    >-86%</Box>} />

                                <CardMedia
                                    className={classes.media}
                                    image="Image 40.jpg"
                                    title="Paella dish"
                                    maxWidth="100%"
                                />
                            </Box>
                            <CardContent>

                                <Typography variant="h5" color="common.black" component="h5">
                                    Sweatshirts
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    $2.00
                                </IconButton>
                                <IconButton aria-label="share">
                                    $3.00
                                </IconButton>
                                <IconButton
                                >

                                    <img src={dottImg} alt="dott"></img>
                                </IconButton>
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Box >
    );
}