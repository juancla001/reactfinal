import React from 'react'
//BOOTSTRAP
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'

export default function Carousell(){
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel> 
        </>
    );
}