import { useState } from 'react';
import './App.css'
import AddToCart from './components/AddToCart/AddToCart'
import Home from './components/Home/Home'
import swal from 'sweetalert';


function App() {

  const [courses, setCourses] = useState([]);
  const [selectedCreditHour, setSelectedCreditHour] = useState(0);

  const totalCreditHour = 20;

  const handleAddToCartCourses = (course) => {

    const doesExist = courses.find(item => item.id === course.id);

    const newSelectedCreditHour = selectedCreditHour + course.credit;
    if (newSelectedCreditHour > totalCreditHour) {
      if (doesExist) {
        return swal('You have already selected this course!!!');
      }
      return swal('Sorry!!! You can not exceed credit hour more than 20');
    }
    else {
      if (doesExist) {
        return swal('You have already selected this course!!!');
      }
      else { setSelectedCreditHour(newSelectedCreditHour); }
    }

    if (doesExist) {
      return swal('You have already selected this course!!!');
    }
    else {
      const addedNewCourses = [...courses, course];
      setCourses(addedNewCourses);
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <h3 className='text-3xl font-bold text-center my-10'>Course Registration</h3>
        <div className='flex gap-6'>
          <Home handleAddToCartCourses={handleAddToCartCourses}></Home>
          <AddToCart
            courses={courses}
            selectedCreditHour={selectedCreditHour}
          ></AddToCart>
        </div>
      </div>
    </>
  )
}

export default App
