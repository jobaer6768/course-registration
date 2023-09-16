import PropTypes from 'prop-types';
import AddToCartCourse from '../AddToCartCouse/AddToCartCourse';

const AddToCart = ({ courses, selectedCreditHour }) => (
    <div className='w-1/4 shadow-xl rounded-xl bg-white'>
        <div className='p-6'>
            <h3 className='mb-4 text-[#2F80ED] font-bold'>Credit Hour Remaining {20-selectedCreditHour}hr</h3>
            <hr />
            <h3 className='my-5 font-bold'>Course name</h3>
            <ol className='list-decimal space-y-2 mb-5'>
                {
                    courses.map(selectedCourse => <AddToCartCourse
                        key={selectedCourse.id}
                        selectedCourse={selectedCourse}
                    ></AddToCartCourse>)
                }
            </ol>
            <hr />
            <h3 className='mt-4 font-bold'>Total Credit hour: {selectedCreditHour}hr</h3>
        </div>
    </div>
);

AddToCart.propTypes = {
    courses: PropTypes.array.isRequired,
    selectedCreditHour: PropTypes.number.isRequired
};

export default AddToCart;