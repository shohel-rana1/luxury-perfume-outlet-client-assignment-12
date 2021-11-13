import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './CustomersReview.css'
import ReviewItems from '../ReviewItems/ReviewItems';
const CustomersReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://agile-headland-59879.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container mx-auto my-5">
            <h2 className="py-5">Customers Reviews  </h2>
            <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                {
                    reviews.map(review => <ReviewItems
                        key={review._id}
                        review={review}
                    ></ReviewItems>)
                }
            </Row>
        </div>
    );
};

export default CustomersReview;