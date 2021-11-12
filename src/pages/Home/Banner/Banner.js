import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../src/images/banner/Versace-Dylane.jpg';
import banner2 from '../../../../src/images/banner/hugo-boss.jpg';
import banner3 from '../../../../src/images/banner/DAVIDOFF_CoolWaterIntense_ForHim_21-9.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 img-fluid"

                    src={banner3}
                    alt="First slide"
                    fluid
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 img-fluid"

                    src={banner2}
                    alt="Second slide"
                    fluid
                />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"

                    src={banner1}
                    alt="Third slide"
                    fluid
                />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;