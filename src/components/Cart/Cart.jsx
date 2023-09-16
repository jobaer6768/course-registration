import PropTypes from 'prop-types';
import { FaBook } from 'react-icons/fa';

const Cart = ({ cart, handleAddToCartCourses }) => {

    const { name, image, course_details, price, credit } = cart;

    return (
        <div className=''>
            <div className='text-center space-y-4 shadow-lg rounded-lg p-4 bg-white'>
                <img className='w-full' src={image} alt="" />
                <h4 className='font-semibold'>{name}</h4>
                <p className='text-xs font-normal opacity-60'>{course_details}</p>
                <div className='flex justify-evenly items-center'>
                    <p className=''>
                        <span className='text-xl mr-3'>$</span>
                        <span className='opacity-60 font-medium'>Price:{price}</span>
                    </p>
                    <p><FaBook></FaBook></p>
                    <p className='opacity-60 font-medium'>Credit: {credit}hr</p>
                </div>
                <div>
                    <button onClick={()=>handleAddToCartCourses(cart)} className='bg-[#2F80ED] text-white font-semibold md:px-24 px-4 py-2 rounded-lg'>Select</button>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleAddToCartCourses: PropTypes.func.isRequired
};

export default Cart;