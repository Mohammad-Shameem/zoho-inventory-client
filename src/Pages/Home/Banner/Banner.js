import React from 'react';
import { Carousel } from 'react-bootstrap';
import gearImage1 from "../../../images/banner/outdoor-gears1.jpg"
import gearImage2 from "../../../images/banner/outdoor-ger2.jpg"
import gearImage3 from "../../../images/banner/oudoor-gear3.jpg"
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner mt-5'>
            <h2 className='mt-3 mb-5'>UNLIMITED STOCK</h2>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gearImage1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Zoho Inventory</h3>
                        <p>Inventory of Camping Gears And Partner of all Outdoor Camping Lover</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gearImage2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Zoho Inventory</h3>
                        <p>Zoho stores raw materials used to produce goods as well as the goods that are available for sale.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gearImage3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Zoho Inventory</h3>
                        <p>Zoho Inventory is Automated inventory management. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;