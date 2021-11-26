import React from 'react';
import './Explore.css'
import { Row } from 'react-bootstrap';
// import usePerfumes from '../../../hooks/usePerfumes';
import ExploreItem from '../ExploreItem/ExploreItem';
import usePerfumes from '../../hooks/usePerfumes';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Explore = () => {
    const [perfumes] = usePerfumes();
    return (
        <>
            <Navigation></Navigation>
            <div className="backgrnd-img">
                <div className="text-enter pt-5">
                    <h1 style={{ color: '#C09E6C' }} className="fs-1">Explore  Our All Perfumes</h1>
                    <h3 style={{ color: '#dbd0d0' }} className=" fs-3">Buy Now</h3>
                </div>
                <div className="backgrnd-img container-fluid px-4 p-md-5">
                    <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                        {
                            perfumes.map(perfume => <ExploreItem
                                key={perfume._id}
                                perfume={perfume}
                            ></ExploreItem>)
                        }
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Explore;