import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import NewProduct from '../NewProduct/NewProduct';

const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: '#F1F4E5' }}>
                        <h4 h4 className="text-center bg-primary py-2 sticky-top">Luxury Perfume Outlet</h4>

                        <Nav defaultActiveKey="/home" className="flex-column text-left">
                            <Nav.Link href="/home"><i class="fas fa-home"></i> Home</Nav.Link>
                            <Nav.Link href="/dashboard"><i class="fas fa-th"></i> Dashboard</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i class="fab fa-cc-amazon-pay"></i> Pay</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i class="fas fa-arrow-alt-circle-right"></i> My Orders</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i class="fas fa-star-half-alt"></i> Review</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/manageallorders"><i class="fas fa-tasks"></i> Manage All Orders</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/newproduct"><i class="fas fa-plus-circle"></i> Add a product</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i class="fas fa-user-lock"></i> Make an admin</Nav.Link>
                            <Nav.Link eventKey="link-1" href="/dashboard"><i class="fas fa-tasks"></i> Manage Products</Nav.Link>
                            <Nav.Link eventKey="link-2" href="/logout"><i class="fas fa-arrow-alt-circle-right"></i> Logout</Nav.Link>
                        </Nav>

                    </Col>
                    <Col xs={12} md={9} style={{ backgroundColor: '#F1F4F5' }}>
                        <h4 className="text-left bg-primary py-2 sticky-top">Dashboard</h4>
                        <NewProduct></NewProduct>
                        <ManageAllOrders></ManageAllOrders>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;