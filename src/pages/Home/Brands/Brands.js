import React from 'react';
import './Brands.css'
import { Row } from 'react-bootstrap';
import useBrands from '../../../hooks/useBrands';
import BrandItem from '../BrandItem/BrandItem';

const Brands = () => {
    const [brands] = useBrands();
    return (
        <>
            <div className="backgrnd">
                <div className="text-enter pt-5">
                    <h1 style={{ color: '#C09E6C' }} className="fs-1">Brands Collection</h1>
                    <h3 style={{ color: '#dbd0d0' }} className=" fs-3">The branded products we provide</h3>
                </div>
                <div className="backgrnd container-fluid px-4 pb-5 p-md-5">
                    <Row xs={1} md={4} lg={5} xl={5} className="g-4">
                        {
                            brands.map(brand => <BrandItem
                                key={brand._id}
                                brand={brand}
                            ></BrandItem>)
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Brands;