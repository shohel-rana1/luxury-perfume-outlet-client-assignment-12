import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';

const ReviewItems = ({ review }) => {
    const { name, email, text, ratings } = review;
    return (
        <div>
            <Col xs={12} md={6} style={{ border: '2px solid gray', backgroundColor: '#A5C4D9' }} className="w-100 text-left p-5">
                <p>{text.slice(0, 100)}</p>
                Ratings: <Rating
                    className="ratings"
                    initialRating={ratings}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <h3>{name}</h3>
            </Col>
        </div>
    );
};

export default ReviewItems;