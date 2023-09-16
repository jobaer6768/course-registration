import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';

function Home({ handleAddToCartCourses }) {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCarts(data));
    }, [])

    return (

        // cart section
        <div className='md:w-3/4'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                        handleAddToCartCourses={handleAddToCartCourses}
                    ></Cart>)
                }
            </div>

        </div>
    );
}

Home.propTypes = {
    handleAddToCartCourses: PropTypes.func.isRequired
};

export default Home;