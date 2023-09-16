import { useState } from 'react';
import './App.css'
import AddToCart from './components/AddToCart/AddToCart'
import Home from './components/Home/Home'

function App() {

  const [courses, setCourses] = useState([]);

  const handleAddToCartCourses = (course) => {
    const addedNewCourses = [...courses, course];
    setCourses(addedNewCourses);
  }

  return (
    <>
      <div className='container mx-auto'>
        <h3 className='text-3xl font-bold text-center my-10'>Course Registration</h3>
        <div className='flex gap-6'>
          <Home handleAddToCartCourses={handleAddToCartCourses}></Home>
          <AddToCart courses={courses}></AddToCart>
        </div>
      </div>
    </>
  )
}

export default App
