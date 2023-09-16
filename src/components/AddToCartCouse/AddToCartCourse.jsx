import PropTypes from 'prop-types';

const AddToCartCourse = ({ selectedCourse }) => {
    return (
        <li className='px-2 opacity-60 text-xs'>{selectedCourse.name}</li>
    );
};

AddToCartCourse.propTypes = {
    selectedCourse: PropTypes.object.isRequired
};

export default AddToCartCourse;