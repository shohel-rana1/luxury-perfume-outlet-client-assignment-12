import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import NewProduct from '../NewProduct/NewProduct';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    return (
        <div>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: '#F1F4E5' }}>
                        <h4 className="text-center bg-primary py-2 sticky-top">Luxury Perfume Outlet</h4>
                        <Nav defaultActiveKey="/home" className="flex-column text-left">
                            <Link style={{ textDecoration: 'none' }} to="/home"><i className="fas fa-home"></i> Home</Link>
                            <Link style={{ textDecoration: 'none' }} to={`${url}`}><i className="fas fa-th"></i> Dashboard</Link>
                            <Link style={{ textDecoration: 'none' }} eventKey="link-1" to={`${url}/payment`}><i className="fab fa-cc-amazon-pay"></i> Payment</Link>
                            <Link style={{ textDecoration: 'none' }} eventKey="link-1" to={`${url}/myorders`}><i className="fas fa-arrow-alt-circle-right"></i> My Orders</Link>
                            <Link style={{ textDecoration: 'none' }} eventKey="link-1" to={`${url}/review`}><i className="fas fa-star-half-alt"></i> Review</Link>
                            {admin &&
                                <>
                                    <Link style={{ textDecoration: 'none' }} eventKey="link-1" to={`${url}/manageallorders`}><i className="fas fa-tasks"></i> Manage All Orders</Link>
                                    <Link style={{ textDecoration: 'none' }} eventKey="link-1" to={`${url}/newproduct`}><i className="fas fa-plus-circle"></i> Add a product</Link>
                                    <Link style={{ textDecoration: 'none' }} eventKey="link-1" to={`${url}/makeadmin`}><i className="fas fa-user-lock"></i> Make an admin</Link>
                                </>
                            }
                            <Link style={{ textDecoration: 'none' }} eventKey="link-2" onClick={logout}><i className="fas fa-arrow-alt-circle-right"></i> Logout</Link>
                        </Nav>
                    </Col>
                    <Col xs={12} md={9} style={{ backgroundColor: '#F1F4F5' }}>
                        <h4 className="text-left bg-primary py-2 sticky-top">Dashboard</h4>
                        <Switch>
                            <Route exact path={path}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageallorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/newproduct`}>
                                <NewProduct></NewProduct>
                            </AdminRoute>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;