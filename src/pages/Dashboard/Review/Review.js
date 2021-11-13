import axios from 'axios';
// import './Review.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
    };
    return (
        <div className="container mx-auto">
            <h4>Give Your valuable review here</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <input className="w-50" {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                <br />
                <input className="w-50" {...register("email", { required: true, maxLength: 20 })} value={user.email} />
                <br />
                <textarea className="w-50" {...register("text") } placeholder="Review Here" />
                <br />
                <input className="w-50" type="number" {...register("ratings")} placeholder="Ratings" />
                <br />
                <input className="w-50" type="submit" value="Confirm" />
            </form>
        </div>


    );
};

export default Review;