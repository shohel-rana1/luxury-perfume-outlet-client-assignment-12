import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import NewProduct from '../NewProduct/NewProduct';

const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: '#F1F4E5' }}>
                        <h4 className="text-center bg-primary py-2 sticky-top">Luxury Perfume Outlet</h4>

                        <Nav defaultActiveKey="/home" className="flex-column text-left">
                            <Nav.Link href="/home"><i className="fas fa-home"></i> Home</Nav.Link>
                            <Nav.Link href="/dashboard"><i className="fas fa-th"></i> Dashboard</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i className="fab fa-cc-amazon-pay"></i> Pay</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/myorders"><i className="fas fa-arrow-alt-circle-right"></i> My Orders</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i className="fas fa-star-half-alt"></i> Review</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/manageallorders"><i className="fas fa-tasks"></i> Manage All Orders</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/newproduct"><i className="fas fa-plus-circle"></i> Add a product</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i className="fas fa-user-lock"></i> Make an admin</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i className="fas fa-tasks"></i> Manage Products</Nav.Link>
                            <Nav.Link eventKey="link-2" href="/logout"><i className="fas fa-arrow-alt-circle-right"></i> Logout</Nav.Link>
                        </Nav>

                    </Col>
                    <Col xs={12} md={9} style={{ backgroundColor: '#F1F4F5' }}>
                        <h4 className="text-left bg-primary py-2 sticky-top">Dashboard</h4>
                        <MyOrders></MyOrders>
                        <NewProduct></NewProduct>
                        <ManageAllOrders></ManageAllOrders>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;