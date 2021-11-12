import React from 'react';
import './Perfumes.css'
import { Row } from 'react-bootstrap';
import Perfume from '../Perfume/Perfume';
import usePerfumes from '../../../hooks/usePerfumes';

const Perfumes = () => {
    const [perfumes] = usePerfumes();
    return (
        <>
            <div className="backgrnd">
                <div className="text-enter pt-5">
                    <h1 style={{ color: '#C09E6C' }} className="fs-1">FEATURED PRODUCTS</h1>
                    <h3 style={{ color: '#dbd0d0' }} className=" fs-3">Buy Now</h3>
                </div>
                <div className="backgrnd-img container px-4 p-md-5">
                    <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                        {
                            perfumes.slice(0, 6).map(perfume => <Perfume
                                key={perfume._id}
                                perfume={perfume}
                            ></Perfume>)
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Perfumes;