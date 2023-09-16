
import './App.css'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <div className='container mx-auto'>
        <h3 className='text-3xl font-bold text-center my-10'>Course Registration</h3>
        <div className='flex gap-6'>
          <Home></Home>
        </div>
      </div>
    </>
  )
}

export default App
