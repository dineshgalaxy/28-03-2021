import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Container, Typography } from '@mui/material';
import { Box } from '@material-ui/core';
import useStyles from './MultrowSliderStyle';
import Heading from '../imprintCity/heading/Heading';

function MultrowSlider() {
  const classes = useStyles();


  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    rows: 3,
    slidesPerRow: 2,

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
                <Heading headingText=" Shop By Brand" />

      <Container maxWidth="xl">
        <Box
          className="brandBox"
        >
          <Slider {...settings}>

            {
              sliderItem.map((slideValue) => {
                return (
                  <Box className=" brand-wrapper" >
                    <Box className="brand">
                      <img src={slideValue.imgsrc} alt="img" />
                    </Box>
                  </Box>
                )
              })
            }


          </Slider>
        </Box>
      </Container>
    </>
  )
}

const sliderItem = [
  {
    imgsrc: 'brand/UnderArmour.png',
  },
  {
    imgsrc: 'brand/A4 sports.png',
  },
  {
    imgsrc: 'brand/adidas1.png',
  },
  {
    imgsrc: 'brand/Augusta Sports.png',
  },
  {
    imgsrc: 'brand/Badger Sports.png',
  }
  ,
  {
    imgsrc: 'brand/Champion1.png',
  }
  ,
  {
    imgsrc: 'brand/Flexfit Caps.png',
  }
  ,
  {
    imgsrc: 'brand/Gildan Apparel.png',
  }
  ,
  {
    imgsrc: 'brand/High Five Sports.png',
  },
  {
    imgsrc: 'brand/Holloway USA.png',
  }
  ,
  {
    imgsrc: 'brand/New Era Caps.png',
  }
  ,
  {
    imgsrc: 'brand/Nike1.png',
  },
  {
    imgsrc: 'brand/North Face.png',
  }
  ,
  {
    imgsrc: 'brand/OGIO Sport.png',
  }
  ,
  {
    imgsrc: 'brand/Pacific.png',
  }
  ,
  {
    imgsrc: 'brand/Richardson Caps.png',
  }
  , {
    imgsrc: 'brand/Sport-Tek.png'
  }
  ,
  {
    imgsrc: 'brand/Gildan Apparel.png',
  }
  ,
  {
    imgsrc: 'brand/High Five Sports.png',
  },
  {
    imgsrc: 'brand/Holloway USA.png',
  }
  ,
  {
    imgsrc: 'brand/New Era Caps.png',
  }
  ,
  {
    imgsrc: 'brand/Nike1.png',
  },
  {
    imgsrc: 'brand/North Face.png',
  }
  ,
  {
    imgsrc: 'brand/OGIO Sport.png',
  }
  ,
  {
    imgsrc: 'brand/Pacific.png',
  }
  ,
  {
    imgsrc: 'brand/Richardson Caps.png',
  }
  , {
    imgsrc: 'brand/Sport-Tek.png'
  }
  ,
  {
    imgsrc: 'brand/Gildan Apparel.png',
  }
  ,
  {
    imgsrc: 'brand/High Five Sports.png',
  },
  {
    imgsrc: 'brand/Holloway USA.png',
  }
  ,
  {
    imgsrc: 'brand/New Era Caps.png',
  }
  ,
  {
    imgsrc: 'brand/Nike1.png',
  },
  {
    imgsrc: 'brand/North Face.png',
  }
  ,
  {
    imgsrc: 'brand/OGIO Sport.png',
  }
  ,
  {
    imgsrc: 'brand/Pacific.png',
  }
  ,
  {
    imgsrc: 'brand/Richardson Caps.png',
  }


]

export default MultrowSlider;