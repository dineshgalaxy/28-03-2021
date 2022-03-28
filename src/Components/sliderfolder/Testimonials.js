import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Container} from '@mui/material';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import Heading from '../imprintCity/heading/Heading';
import imprintheme from '../imprintCity/theme/theme';
function Testimonials() {
    const [value, setValue] = React.useState(2);

    let settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
            <Heading headingText=" Testimonials" />
            <Box>
            <Container maxWidth="lg">
            
            <Slider {...settings}>
                {
                    sliderItem.map((slideValue) => {
                        return (
                            <Box className="card-wrapper">
                                <Box className="cardx" textAlign="center">
                                    <Box component="p" fontSize={imprintheme.typography.mdxl.fontSize} fontFamily="Proxima-Regular" color="common.black"
                                        lineHeight="31px" textAlign="center" paddingTop="30px" mb={4}
                                    >{slideValue.text}
                                    </Box>
                                    <Box textAlign="center"  display="flex" justifyContent="center" alignItems="center"> 
                                    <img src={slideValue.imgsrc} alt="img" />
                                    </Box>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Box textTransform="capitalize" fontFamily="Proxima-Regular" mt={3} mb={2} fontSize={imprintheme.typography.h5xl.fontSize}
                                        
                                        >{slideValue.name}</Box>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }

            </Slider>
        </Container>
        </Box>
        </>
    )
}

const sliderItem = [
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',
        imgsrc: 'images/testimonials.jpg',
    },
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',

        imgsrc: 'images/testimonials.jpg',
    },
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',

        imgsrc: 'images/testimonials.jpg',
    },
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',

        imgsrc: 'images/testimonials.jpg',
    },
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',

        imgsrc: 'images/testimonials.jpg',
    },
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',

        imgsrc: 'images/testimonials.jpg',
    },
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',

        imgsrc: 'images/testimonials.jpg',
    },
    {
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate non provident, similique sunt in culpa qui officia',
        name:'lee martin',
        imgsrc: 'images/testimonials.jpg',
    },


]

export default Testimonials;