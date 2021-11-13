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
import ManageProducts from '../ManageProducts/ManageProducts';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: '#F1F4E5' }}>
                        <h4 className="text-center bg-primary py-2 sticky-top">Luxury Perfume Outlet</h4>
                        <Nav defaultActiveKey="/home" className="flex-column text-left">
                            <Link to="/home"><i className="fas fa-home"></i> Home</Link>
                            <Link to={`${url}`}><i className="fas fa-th"></i> Dashboard</Link>
                            <Link eventKey="link-1" to={`${url}/payment`}><i className="fab fa-cc-amazon-pay"></i> Payment</Link>
                            <Link eventKey="link-1" to={`${url}/myorders`}><i className="fas fa-arrow-alt-circle-right"></i> My Orders</Link>
                            <Link eventKey="link-1" to={`${url}/review`}><i className="fas fa-star-half-alt"></i> Review</Link>
                            {admin &&
                                <>
                                    <Link eventKey="link-1" to={`${url}/manageallorders`}><i className="fas fa-tasks"></i> Manage All Orders</Link>
                                    <Link eventKey="link-1" to={`${url}/newproduct`}><i className="fas fa-plus-circle"></i> Add a product</Link>
                                    <Link eventKey="link-1" to={`${url}/makeadmin`}><i className="fas fa-user-lock"></i> Make an admin</Link>
                                    <Link eventKey="link-1" to={`${url}/manageproducts`}><i className="fas fa-tasks"></i> Manage Products</Link>
                                </>
                            }
                            <Link eventKey="link-2" to={`${url}/logout`}><i className="fas fa-arrow-alt-circle-right"></i> Logout</Link>
                        </Nav>


                    </Col>
                    <Col xs={12} md={9} style={{ backgroundColor: '#F1F4F5' }}>
                        <h4 className="text-left bg-primary py-2 sticky-top">Dashboard</h4>
                        <Switch>
                            {/* <Route exact path={path}>
                                <Dashboard></Dashboard>
                            </Route> */}

                            {/* <Route exact path={`${path}`}>
                                <Dashboard></Dashboard>
                            </Route> */}
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
                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                        </Switch>
                        {/* <Payment></Payment>
                        <MyOrders></MyOrders>
                        <Review></Review>
                        <MakeAdmin></MakeAdmin>
                        <NewProduct></NewProduct>
                        <ManageAllOrders></ManageAllOrders> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;