import React from 'react';
import './BrandItem.css'
import { Card, Col } from 'react-bootstrap';

const BrandItem = ({ brand }) => {
    const { image } = brand;
    return (
        <Col className=" mt-5 ">
            <Card className="card">
                <div className="img-wrapper"><Card.Img style={{ height: '200px', width: '300px' }} className="img card img-fluid inner-img shadow " variant="top" src={image} /></div>
            </Card>
        </Col>
    );
};

export default BrandItem;