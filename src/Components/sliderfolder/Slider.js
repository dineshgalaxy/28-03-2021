import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Container} from '@mui/material';
import { Box } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import imprintheme from '../imprintCity/theme/theme';
import Heading from '../imprintCity/heading/Heading';
function ImageSlider() {

  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
   
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
    <Heading headingText="Follow us on Instagram" />
    <Container maxWidth="xl">
      <Slider {...settings}>
        {
          sliderItem.map((slideValue)=>{
            return(
              <Box className="card-wrapper">
              <Box className="card">
                <Box className="card-image">
                  <img src={slideValue.imgsrc} alt="img" />
                  <Box className="details">
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color={imprintheme.palette.common.white}
                      >
                        <slideValue.likeIcon />
                        <Box component="span" pl={1}>{slideValue.likeText}</Box>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color={imprintheme.palette.common.white}
                        pl={2}
                      >
                        <slideValue.commentIcon />
                        <Box component="span" pl={1}>{slideValue.commentText}</Box>
                      </Box>
                    </Box>
                    <Box component="body" fontSize={imprintheme.typography.sm.fontSize} fontFamily="Proxima-Regular" color="common.white"
                      lineHeight="24px" textAlign="center" paddingTop="30px"
                    >{slideValue.text}
                    </Box>
                  </Box>
                </Box>
    
              </Box>
            </Box>
            )
          })
        }
      
      </Slider>
    </Container>
    </>
  )
}

const sliderItem = [
  {
    imgsrc: 'images/1.png',
    likeIcon: FavoriteBorderIcon,
    likeText: '1.7k',
    commentIcon: ModeCommentIcon,
    commentText:'31',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    imgsrc: 'images/beautyGirl.jpg',
    likeIcon: FavoriteBorderIcon,
    likeText: '1.7k',
    commentIcon: ModeCommentIcon,
    commentText:'31',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    imgsrc: 'images/3.png',
    likeIcon: FavoriteBorderIcon,
    likeText: '1.7k',
    commentIcon: ModeCommentIcon,
    commentText:'31',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    imgsrc: 'images/4.png',
    likeIcon: FavoriteBorderIcon,
    likeText: '1.7k',
    commentIcon: ModeCommentIcon,
    commentText:'31',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    imgsrc: 'images/1.png',
    likeIcon: FavoriteBorderIcon,
    likeText: '1.7k',
    commentIcon: ModeCommentIcon,
    commentText:'31',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }
  ,
  {
    imgsrc: 'images/1.png',
    likeIcon: FavoriteBorderIcon,
    likeText: '1.7k',
    commentIcon: ModeCommentIcon,
    commentText:'31',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }
  ,
  {
    imgsrc: 'images/1.png',
    likeIcon: FavoriteBorderIcon,
    likeText: '1.7k',
    commentIcon: ModeCommentIcon,
    commentText:'31',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }
  
]

export default ImageSlider;