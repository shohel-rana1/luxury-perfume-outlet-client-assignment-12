import React from 'react';
import './Perfume.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Perfume = ({ perfume }) => {
    const { img, name, brand, price, _id } = perfume;
    return (
        <Col className=" mt-5 ">
            <Card className="card">
                <div className="img-wrapper"><Card.Img className="img card inner-img" variant="top" src={img} /></div>
                <Card.Body>
                    <Card.Title className="name cardText">Name: {name}</Card.Title>
                    <Card.Title className="name cardText">Brand: {brand}</Card.Title>
                    <Card.Text className="name cardText">Price: ${price}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link
                        to={`/placeorder/${_id}`}
                        className="btn w-100 btn-bg mx-auto"
                    >
                        Buy Now
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Perfume;