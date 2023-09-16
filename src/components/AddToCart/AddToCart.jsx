import PropTypes from 'prop-types';
import AddToCartCourse from '../AddToCartCouse/AddToCartCourse';

const AddToCart = ({ courses }) => (
    <div className='w-1/4 shadow-xl rounded-xl bg-white'>
        <div className='p-6'>
            <h3 className='mb-5 font-bold'>Course name</h3>
            <ol className='list-decimal space-y-2'>
                {
                    courses.map(selectedCourse => <AddToCartCourse key={courses.id} selectedCourse={selectedCourse}></AddToCartCourse>)
                }
            </ol>
        </div>
    </div>
);

AddToCart.propTypes = {
    courses: PropTypes.array.isRequired
};

export default AddToCart;