// import { Table } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import usePerfumes from '../../../hooks/usePerfumes';
const SingleOrer = ({ item }) => {
    const [perfumes] = usePerfumes();
    const { address, city, phone, email, name, booking_id, status } = item;
    const myOrder = perfumes.find(perfume => perfume._id === booking_id);

    return (

        <div className=" container" >
            <div className="row">
                <div className="col-md-6 text-left">
                    <img src={myOrder?.img} className=" h-50 w-25" alt="..." />
                    <h5 className="">Name: {myOrder?.name}</h5>
                </div>
                <div className="col-md-6">
                    <Table responsive className="mb-3">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >{name} </td>
                                <td >{address} </td>
                                <td >{phone} </td>
                                <td >{status} </td>
                                <td ><button>Delete</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default SingleOrer;